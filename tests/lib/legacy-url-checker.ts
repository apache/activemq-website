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

import fs from 'node:fs';
import {setTimeout as sleep} from 'node:timers/promises';
import {HtaccessRules, isRedirect} from './htaccess-rules.ts';

/** A legacy URL to check, as recorded by scripts/crawl-legacy-urls.py. */
export interface LegacyUrl {
  source: string;
  path: string;
  oldTitle: string;
}

export type Outcome = 'PAGE' | 'EXTERNAL_REDIRECT' | 'NOT_FOUND' | 'ERROR' | 'REDIRECT_LOOP';

/** The result of checking one legacy URL. */
export interface Result {
  url: LegacyUrl;
  outcome: Outcome;
  chain: string[];
  finalTitle: string | null;
}

export function isOk(result: Result): boolean {
  return result.outcome === 'PAGE' || result.outcome === 'EXTERNAL_REDIRECT';
}

export function describe(result: Result): string {
  return `${result.outcome}: ${result.chain.join(' -> ')}`;
}

export const PRODUCTION_HOSTS = new Set(['activemq.apache.org', 'www.activemq.apache.org']);
const MAX_REDIRECTS = 10;
const MAX_ATTEMPTS = 6;
const USER_AGENT = 'activemq-website-legacy-url-test';
const TITLE = /<title[^>]*>([\s\S]*?)<\/title>/i;
const META_REFRESH = /<meta[^>]+http-equiv=["']?refresh["']?[^>]+content=["'][^"']*url=([^"'>]+)/i;
/** Docusaurus' NotFound page; it is also what a SPA fallback (e.g. Netlify) serves with a 200. */
const NOT_FOUND_PAGE = /<title[^>]*>\s*Page Not Found/i;

/**
 * Resolves a legacy URL path against a website, following its redirect chain, and
 * decides whether it ends on a real page.
 *
 * Redirects to the production host (activemq.apache.org) are mapped back to the
 * site under test, so absolute redirects in `.htaccess` are checked locally.
 */
export class LegacyUrlChecker {
  private readonly base: URL;
  private readonly baseString: string;
  private readonly checkExternal: boolean;
  private readonly clientSideRules: HtaccessRules | null;

  /**
   * @param clientSideRules redirect rules to apply before each request, for sites that
   *                        do not honour .htaccess (e.g. a Netlify preview); null for none
   */
  constructor(base: string, checkExternal: boolean, clientSideRules: HtaccessRules | null = null) {
    this.baseString = base.replace(/\/$/, '');
    this.base = new URL(this.baseString);
    this.checkExternal = checkExternal;
    this.clientSideRules = clientSideRules;
  }

  async check(url: LegacyUrl): Promise<Result> {
    const chain: string[] = [];
    const result = (outcome: Outcome, last?: string, finalTitle: string | null = null): Result =>
      ({url, outcome, chain: last === undefined ? chain : [...chain, last], finalTitle});
    let current = this.siteUrl(url.path, '');
    try {
      for (let hop = 0; hop <= MAX_REDIRECTS; hop++) {
        chain.push(this.display(current));
        if (this.clientSideRules !== null) {
          const rewrite = this.clientSideRules.apply(decodeURIComponent(current.pathname));
          if (isRedirect(rewrite)) {
            const next = new URL(encode(rewrite.location));
            const mapped = this.mapToSite(next);
            if (mapped === null) {
              chain.push(next.href);
              return await this.external(url, chain, next);
            }
            current = mapped;
            continue;
          }
        }
        const response = await get(current, 'manual');
        const status = response.status;
        if (status >= 300 && status < 400) {
          await response.body?.cancel();
          const location = response.headers.get('Location');
          if (location === null) {
            return result('ERROR', `${status} without Location`);
          }
          const next = new URL(encode(location), current);
          const mapped = this.mapToSite(next);
          if (mapped === null) {
            chain.push(next.href);
            return await this.external(url, chain, next);
          }
          current = mapped;
          continue;
        }
        if (status !== 200) {
          await response.body?.cancel();
          return result('NOT_FOUND', `HTTP ${status}`);
        }
        const contentType = response.headers.get('Content-Type') ?? '';
        if (!contentType.toLowerCase().includes('html')) {
          await response.body?.cancel();
          return result('PAGE');
        }
        const body = await response.text();
        if (NOT_FOUND_PAGE.test(body)) {
          return result('NOT_FOUND', "Docusaurus 'Page Not Found'");
        }
        const refresh = META_REFRESH.exec(body);
        if (refresh !== null) { // client-side redirect page (e.g. jekyll-redirect-from)
          const next = new URL(encode(refresh[1].trim()), current);
          const mapped = this.mapToSite(next);
          if (mapped === null) {
            chain.push(next.href);
            return await this.external(url, chain, next);
          }
          current = mapped;
          continue;
        }
        return result('PAGE', undefined, title(body));
      }
      return result('REDIRECT_LOOP');
    } catch (e) {
      return result('ERROR', String(e));
    }
  }

  private async external(url: LegacyUrl, chain: string[], target: URL): Promise<Result> {
    if (!this.checkExternal) {
      return {url, outcome: 'EXTERNAL_REDIRECT', chain, finalTitle: null};
    }
    try {
      const response = await get(target, 'follow');
      await response.body?.cancel();
      return response.status === 200
        ? {url, outcome: 'EXTERNAL_REDIRECT', chain, finalTitle: null}
        : {url, outcome: 'NOT_FOUND', chain: [...chain, `HTTP ${response.status}`], finalTitle: null};
    } catch (e) {
      return {url, outcome: 'ERROR', chain: [...chain, String(e)], finalTitle: null};
    }
  }

  /** Maps a URL on the production host or the site under test to the site under test; null if external. */
  private mapToSite(url: URL): URL | null {
    if (url.hostname === '') {
      return null;
    }
    const sameSite = url.hostname.toLowerCase() === this.base.hostname.toLowerCase() && url.port === this.base.port;
    if (!sameSite && !PRODUCTION_HOSTS.has(url.hostname.toLowerCase())) {
      return null;
    }
    return this.siteUrl(url.pathname || '/', url.search);
  }

  private siteUrl(rawPath: string, search: string): URL {
    return new URL(this.baseString + encode(rawPath) + search);
  }

  private display(url: URL): string {
    return url.href.startsWith(this.baseString) ? url.href.substring(this.baseString.length) : url.href;
  }
}

/** GET with retries: hosted previews (e.g. Netlify) rate-limit; back off instead of reporting a broken URL. */
async function get(url: URL, redirect: RequestRedirect): Promise<Response> {
  let lastError: unknown;
  let response: Response | null = null;
  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
    let waitSeconds = 2 ** attempt;
    try {
      response = await fetch(url, {
        redirect,
        headers: {'User-Agent': USER_AGENT},
        signal: AbortSignal.timeout(30_000),
      });
      if (response.status !== 429 && response.status !== 503) {
        return response;
      }
      const retryAfter = response.headers.get('Retry-After');
      if (retryAfter !== null && /^\d+$/.test(retryAfter)) {
        waitSeconds = Number(retryAfter);
      }
      await response.body?.cancel();
    } catch (e) { // e.g. a CDN refusing TLS handshakes under load
      lastError = e;
      response = null;
    }
    if (attempt < MAX_ATTEMPTS - 1) {
      await sleep(Math.min(waitSeconds, 60) * 1000);
    }
  }
  if (response === null) {
    throw lastError;
  }
  return response;
}

function title(body: string): string {
  const m = TITLE.exec(body);
  return m !== null ? m[1].replace(/\s+/g, ' ').trim() : '';
}

/** Percent-encodes characters that are not legal in a URL, leaving existing %XX escapes alone. */
export function encode(s: string): string {
  let out = '';
  for (const c of Buffer.from(s, 'utf8')) {
    if (c > 0x20 && c < 0x7f && !'"<>\\^`{|}'.includes(String.fromCharCode(c))) {
      out += String.fromCharCode(c);
    } else {
      out += '%' + c.toString(16).toUpperCase().padStart(2, '0');
    }
  }
  return out;
}

/** Loads a TSV list (path, title) produced by scripts/crawl-legacy-urls.py; empty if the file is missing. */
export function loadUrls(file: string, source: string): LegacyUrl[] {
  if (!fs.existsSync(file)) {
    return [];
  }
  return fs.readFileSync(file, 'utf8')
    .split(/\r?\n/)
    .filter((line) => line.trim() !== '' && !line.startsWith('#'))
    .map((line) => {
      const tab = line.indexOf('\t');
      return tab < 0
        ? {source, path: line.trim(), oldTitle: ''}
        : {source, path: line.substring(0, tab).trim(), oldTitle: line.substring(tab + 1).trim()};
    });
}
