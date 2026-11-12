#!/usr/bin/env python3
#
# Licensed to the Apache Software Foundation (ASF) under one or more
# contributor license agreements.  See the NOTICE file distributed with
# this work for additional information regarding copyright ownership.
# The ASF licenses this file to You under the Apache License, Version 2.0
# (the "License"); you may not use this file except in compliance with
# the License.  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
"""
Crawl the current (Jekyll based) https://activemq.apache.org/ website and
record every same-host URL that resolves successfully. The output is the list
of legacy URLs that the Docusaurus website must keep serving; it is consumed
by tests/legacy-urls.test.ts (pnpm run test:legacy-urls).

Only the Python standard library is used.

Output files (tab separated, one URL per line, sorted):
  crawled-urls.tsv   <path>\t<page title>      pages/resources reachable by crawling
  htaccess-urls.tsv  <path>\t<rewrite target>  legacy paths only reachable through
                                               redirects in the old site's .htaccess

Usage:
  scripts/crawl-legacy-urls.py \
      --site-dir <old Jekyll site checkout>/_site \
      --htaccess <old Jekyll site checkout>/src/.htaccess \
      --out tests/legacy-urls

The old Jekyll sources are in the git history of this repository, before the
Docusaurus migration (e.g. `git worktree add ../jekyll-site <last Jekyll commit>`).
"""

import argparse
import concurrent.futures
import html
import html.parser
import os
import re
import sys
import threading
import time
import urllib.error
import urllib.parse
import urllib.request

HOSTS = {"activemq.apache.org", "www.activemq.apache.org"}
USER_AGENT = "activemq-website-legacy-url-crawler/1.0 (+https://github.com/apache/activemq-website)"
# Resources fetched with HEAD; they are recorded but never parsed for links.
NON_HTML_EXT = re.compile(
    r"\.(png|jpe?g|gif|svg|ico|webp|bmp|css|js|map|json|xml|xsd|dtd|txt|pdf|zip|gz|tgz|jar|"
    r"woff2?|ttf|eot|otf|mp4|webm|asc|sha512|md5|properties)$",
    re.IGNORECASE,
)


class LinkParser(html.parser.HTMLParser):
    """Collects href/src values and meta refresh targets, plus the <title>."""

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.links = []
        self.title = ""
        self._in_title = False

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        for name in ("href", "src"):
            if attrs.get(name):
                self.links.append(attrs[name])
        if tag == "meta" and (attrs.get("http-equiv") or "").lower() == "refresh":
            match = re.search(r"url\s*=\s*['\"]?([^'\";]+)", attrs.get("content") or "", re.IGNORECASE)
            if match:
                self.links.append(match.group(1).strip())
        if tag == "title":
            self._in_title = True

    def handle_endtag(self, tag):
        if tag == "title":
            self._in_title = False

    def handle_data(self, data):
        if self._in_title:
            self.title += data


def normalize(url, base):
    """Returns the site-relative path of url (resolved against base) or None if off-site."""
    url = html.unescape(url.strip())
    if not url or url.startswith(("mailto:", "javascript:", "tel:", "data:", "#")):
        return None
    absolute = urllib.parse.urljoin(base, url)
    parts = urllib.parse.urlsplit(absolute)
    if parts.scheme not in ("http", "https") or parts.hostname not in HOSTS:
        return None
    path = parts.path or "/"
    path = re.sub(r"/{2,}", "/", path)
    return path


class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        return None


class Crawler:
    def __init__(self, root, workers, delay, max_urls, excludes, timeout):
        self.root = root.rstrip("/")
        self.workers = workers
        self.delay = delay
        self.max_urls = max_urls
        self.excludes = excludes
        self.timeout = timeout
        self.opener = urllib.request.build_opener(NoRedirect)
        self.lock = threading.Lock()
        self.seen = set()
        self.ok = {}       # path -> title
        self.failed = {}   # path -> reason

    def excluded(self, path):
        return any(path.startswith(prefix) for prefix in self.excludes)

    def fetch(self, path, method):
        request = urllib.request.Request(self.root + urllib.parse.quote(path, safe="/%:@!$&'()*+,;=-._~"),
                                         method=method, headers={"User-Agent": USER_AGENT})
        try:
            with self.opener.open(request, timeout=self.timeout) as response:
                body = response.read() if method == "GET" else b""
                return response.status, response.headers, body
        except urllib.error.HTTPError as error:
            return error.code, error.headers, b""

    def visit(self, path):
        """Fetches path. Returns (title_or_None, discovered_paths)."""
        if self.delay:
            time.sleep(self.delay)
        method = "HEAD" if NON_HTML_EXT.search(path) else "GET"
        status, headers, body = self.fetch(path, method)
        if status == 405 and method == "HEAD":
            method = "GET"
            status, headers, body = self.fetch(path, method)

        if status in (301, 302, 303, 307, 308):
            target = normalize(headers.get("Location", ""), self.root + path)
            # A redirect is a working legacy URL as long as its target works; the
            # target is crawled too, and the legacy URL test checks the whole chain.
            return ("(redirect)", [target] if target else [])
        if status != 200:
            raise RuntimeError(f"HTTP {status}")

        content_type = headers.get("Content-Type", "")
        if method == "HEAD" or "html" not in content_type:
            return ("", [])
        charset = headers.get_content_charset() or "utf-8"
        parser = LinkParser()
        parser.feed(body.decode(charset, errors="replace"))
        found = [normalize(link, self.root + path) for link in parser.links]
        return (" ".join(parser.title.split()), [p for p in found if p])

    def crawl(self, seeds):
        pending = set()

        def schedule(executor, path):
            if path is None or self.excluded(path):
                return
            with self.lock:
                if path in self.seen or len(self.seen) >= self.max_urls:
                    return
                self.seen.add(path)
            pending.add(executor.submit(self.safe_visit, path))

        with concurrent.futures.ThreadPoolExecutor(max_workers=self.workers) as executor:
            for seed in seeds:
                schedule(executor, seed)
            while pending:
                done, _ = concurrent.futures.wait(pending, return_when=concurrent.futures.FIRST_COMPLETED)
                for future in done:
                    pending.discard(future)
                    path, title, links, error = future.result()
                    if error:
                        self.failed[path] = error
                        continue
                    self.ok[path] = title
                    for link in links:
                        schedule(executor, link)
                total = len(self.ok) + len(self.failed)
                if total and total % 250 == 0:
                    print(f"  {total} visited, {len(pending)} in flight", file=sys.stderr)

    def safe_visit(self, path):
        try:
            title, links = self.visit(path)
            return path, title, links, None
        except Exception as error:  # noqa: BLE001 - recorded in crawl-failures.tsv
            return path, None, [], str(error)


def site_dir_seeds(site_dir):
    """Every page Jekyll generated, so orphan pages (not linked from anywhere) are crawled too."""
    seeds = []
    for directory, _, files in os.walk(site_dir):
        for name in files:
            relative = os.path.relpath(os.path.join(directory, name), site_dir).replace(os.sep, "/")
            if relative.startswith(".") or "/." in relative:
                continue
            seeds.append("/" + relative)
            if relative.endswith(".html"):
                # Jekyll pages are linked without the extension (/contact, not /contact.html).
                stem = relative[: -len(".html")]
                if stem == "index":
                    seeds.append("/")
                elif stem.endswith("/index"):
                    seeds.append("/" + stem[: -len("index")])
                else:
                    seeds.append("/" + stem)
    return seeds


def htaccess_paths(htaccess):
    """Literal legacy paths that only exist as rewrite sources in the old .htaccess.

    Handles the patterns used there: ^name(.*) ^name(\\.html)?$ ^name.*$ ^name$
    """
    results = {}
    rule = re.compile(r"^RewriteRule\s+(\S+)\s+(\S+)")
    with open(htaccess, encoding="utf-8") as handle:
        for line in handle:
            match = rule.match(line.strip())
            if not match:
                continue
            pattern, target = match.groups()
            literal = re.fullmatch(r"\^([A-Za-z0-9_./-]+?)(\(\.\*\)|\(\\\.html\)\?\$|\.\*\$|\$|\(/\?\.\*\)\$)?", pattern)
            if not literal:
                continue
            name = literal.group(1).replace("\\.", ".")
            if not name or name.endswith("/"):
                continue
            results["/" + name] = target
            if not name.endswith(".html"):
                results["/" + name + ".html"] = target
    return results


def write_tsv(path, rows):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as handle:
        handle.write("# Generated by scripts/crawl-legacy-urls.py on "
                     + time.strftime("%Y-%m-%d", time.gmtime()) + ". Do not edit by hand.\n")
        for key in sorted(rows):
            value = (rows[key] or "").replace("\t", " ").replace("\n", " ")
            handle.write(f"{key}\t{value}\n")


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--root", default="https://activemq.apache.org")
    parser.add_argument("--site-dir", help="local Jekyll _site directory, used as extra crawl seeds")
    parser.add_argument("--htaccess", help="old site .htaccess, used to list redirect-only legacy paths")
    parser.add_argument("--out", default="tests/legacy-urls")
    parser.add_argument("--workers", type=int, default=4)
    parser.add_argument("--delay", type=float, default=0.05, help="seconds each worker waits per request")
    parser.add_argument("--timeout", type=float, default=30)
    parser.add_argument("--max-urls", type=int, default=100000)
    parser.add_argument("--exclude", action="append", default=[], help="path prefix to skip (repeatable)")
    args = parser.parse_args()

    seeds = ["/"]
    if args.site_dir:
        seeds += site_dir_seeds(args.site_dir)

    crawler = Crawler(args.root, args.workers, args.delay, args.max_urls, args.exclude, args.timeout)
    print(f"Crawling {args.root} from {len(seeds)} seeds ...", file=sys.stderr)
    crawler.crawl(seeds)

    write_tsv(os.path.join(args.out, "crawled-urls.tsv"), crawler.ok)
    write_tsv(os.path.join(args.out, "crawl-failures.tsv"), crawler.failed)
    print(f"{len(crawler.ok)} working URLs, {len(crawler.failed)} failing URLs (dead links on the old site)",
          file=sys.stderr)

    if args.htaccess:
        legacy = {p: t for p, t in htaccess_paths(args.htaccess).items() if p not in crawler.ok}
        write_tsv(os.path.join(args.out, "htaccess-urls.tsv"), legacy)
        print(f"{len(legacy)} redirect-only legacy URLs from {args.htaccess}", file=sys.stderr)


if __name__ == "__main__":
    main()
