/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * Proves that every URL of the old (Jekyll) activemq.apache.org website still works on
 * the Docusaurus website, either directly or through a redirect that ends on a real page.
 *
 * The URL lists are produced by `scripts/crawl-legacy-urls.py` and live in
 * `tests/legacy-urls/`. Old-site files dropped on purpose (Jekyll and theme leftovers)
 * are listed in `removed-urls.txt` and skipped.
 *
 * By default the built site in `build/` is served locally with the `.htaccess` rules
 * applied, as on the ASF httpd servers. Environment variables:
 *
 * - `WEBSITE_BASE_URL`: check a running site instead (e.g. http://localhost:3000)
 * - `WEBSITE_HTACCESS`: with `WEBSITE_BASE_URL`, apply this .htaccess's redirects on the
 *   client side, for hosts that ignore it (e.g. static/.htaccess for Netlify)
 * - `WEBSITE_DIR`: directory of the built site (default build)
 * - `WEBSITE_CHECK_EXTERNAL=true`: also require redirects to other hosts
 *   (artemis.apache.org, camel.apache.org, ...) to answer 200
 * - `WEBSITE_REPORT`: where to write the TSV report (default tests/reports/legacy-url-report.tsv)
 */

import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {after, before, test} from 'node:test';
import {fileURLToPath} from 'node:url';
import {HtaccessRules} from './lib/htaccess-rules.ts';
import {describe as describeResult, isOk, LegacyUrlChecker, loadUrls} from './lib/legacy-url-checker.ts';
import type {LegacyUrl, Result} from './lib/legacy-url-checker.ts';
import {StaticSiteServer} from './lib/static-site-server.ts';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const URL_DIR = path.join(ROOT, 'tests', 'legacy-urls');
const URL_LISTS: [file: string, source: string][] = [
  ['crawled-urls.tsv', 'crawled'],
  ['htaccess-urls.tsv', 'old-htaccess'],
];
/** Legacy paths intentionally not served by the new website, one per line with the reason. */
const REMOVED_URLS = 'removed-urls.txt';

const env = (name: string): string => (process.env[name] ?? '').trim();
const baseUrlOption = env('WEBSITE_BASE_URL');
const remote = baseUrlOption !== '';
const siteDir = path.resolve(ROOT, env('WEBSITE_DIR') || 'build');
const reportFile = path.resolve(ROOT, env('WEBSITE_REPORT') || 'tests/reports/legacy-url-report.tsv');

let server: StaticSiteServer | null = null;
const results: Result[] = [];

before(async () => {
  let base: string;
  if (remote) {
    base = baseUrlOption;
  } else {
    assert.ok(fs.existsSync(path.join(siteDir, 'index.html')),
      `No built website in ${siteDir}, run 'pnpm build' first`);
    // Production relies on these rewrite rules; without them the check would be meaningless.
    assert.ok(fs.existsSync(path.join(siteDir, '.htaccess')), `The built website in ${siteDir} has no .htaccess`);
    server = await StaticSiteServer.start(siteDir, 'activemq.apache.org');
    base = server.baseUrl();
  }

  const removed = new Set(loadUrls(path.join(URL_DIR, REMOVED_URLS), 'removed').map((url) => url.path));
  const urls = URL_LISTS
    .flatMap(([file, source]) => loadUrls(path.join(URL_DIR, file), source))
    .filter((url) => !removed.has(url.path));
  assert.ok(urls.length > 0, 'No legacy URL lists found, run scripts/crawl-legacy-urls.py');

  // A remote preview such as Netlify ignores .htaccess; its redirect rules can be applied here instead.
  // The document root does not exist, so only the plain redirects fire, not the -f/-d file checks.
  const htaccess = env('WEBSITE_HTACCESS');
  const clientSideRules = remote && htaccess !== ''
    ? HtaccessRules.load(path.resolve(ROOT, htaccess), '/nonexistent-document-root', 'activemq.apache.org')
    : null;
  const checker = new LegacyUrlChecker(base, env('WEBSITE_CHECK_EXTERNAL') === 'true', clientSideRules);
  results.push(...await mapConcurrently(urls, remote ? 4 : 16, (url) => checker.check(url)));
  writeReport(reportFile);
});

after(async () => {
  await server?.close();
});

for (const [, source] of URL_LISTS) {
  test(`legacy ${source} URLs still work`, () => {
    const broken = results.filter((r) => r.url.source === source && !isOk(r));
    assert.ok(results.length > 0, 'No URLs were checked');
    assert.equal(broken.length, 0,
      `${broken.length} broken legacy URLs (report: ${reportFile}):\n`
      + broken.map((r) => `  ${r.url.path} is broken. ${describeResult(r)}`).join('\n'));
  });
}

async function mapConcurrently<T, R>(items: T[], concurrency: number, fn: (item: T) => Promise<R>): Promise<R[]> {
  const out = new Array<R>(items.length);
  let next = 0;
  const worker = async () => {
    while (next < items.length) {
      const i = next++;
      out[i] = await fn(items[i]);
    }
  };
  await Promise.all(Array.from({length: Math.min(concurrency, items.length)}, worker));
  return out;
}

function writeReport(file: string): void {
  fs.mkdirSync(path.dirname(file), {recursive: true});
  const lines = ['source\tpath\toutcome\tchain\told_title\tnew_title\ttitle_match'];
  for (const r of results) {
    lines.push([r.url.source, r.url.path, r.outcome, r.chain.join(' -> '), r.url.oldTitle,
      r.finalTitle ?? '', titleMatch(r.url, r.finalTitle)].join('\t'));
  }
  fs.writeFileSync(file, lines.join('\n') + '\n');
  const summary: Record<string, number> = {};
  for (const r of results) {
    summary[r.outcome] = (summary[r.outcome] ?? 0) + 1;
  }
  console.log(`Legacy URL check: ${results.length} URLs ${JSON.stringify(summary)}, report: ${file}`);
}

/**
 * Informational only: whether the old and new page titles share their leading words
 * (both sites suffix the title with the site name, in different formats).
 */
function titleMatch(url: LegacyUrl, newTitle: string | null): string {
  const oldTitle = url.oldTitle;
  if (oldTitle === '' || oldTitle.startsWith('(') || newTitle === null || newTitle === '') {
    return '';
  }
  const a = normalizeTitle(oldTitle);
  const b = normalizeTitle(newTitle);
  return a === '' || b === '' ? '' : String(a.includes(b) || b.includes(a));
}

function normalizeTitle(title: string): string {
  return title.toLowerCase()
    .replace(/\|.*$/, '')
    .replace(/apache activemq|activemq classic|activemq/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}
