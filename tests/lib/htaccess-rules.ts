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
 * A small emulation of the Apache httpd mod_rewrite subset used by the website's
 * root `.htaccess` (per-directory context, document root = site root).
 *
 * The production site is served by Apache httpd, so legacy URLs depend on the
 * rewrite rules in `static/.htaccess`. Emulating them lets the tests run with
 * nothing but Node. Supported:
 *
 * - `RewriteRule pattern substitution [flags]` with flags R, R=code, L, NC
 * - `RewriteCond` with `-f`, `-d`, `=x`, `!=x` or a regex, optionally negated
 * - `%{DOCUMENT_ROOT}`, `%{REQUEST_FILENAME}`, `%{REQUEST_URI}`, `%{SERVER_NAME}`,
 *   `%{HTTPS}` (always "on") and `$N` back-references
 *
 * Anything else (DirectorySlash, Options, ...) is ignored.
 */

import fs from 'node:fs';
import path from 'node:path';

/** Result of applying the rules to a request path. */
export interface RewriteOutcome {
  /** HTTP redirect status, 0 when not a redirect. */
  redirectStatus: number;
  /** Redirect target, or the rewritten site path. */
  location: string;
}

export function isRedirect(outcome: RewriteOutcome): boolean {
  return outcome.redirectStatus !== 0;
}

interface Cond {
  testString: string;
  pattern: string;
  noCase: boolean;
}

interface Rule {
  pattern: RegExp;
  negated: boolean;
  substitution: string;
  redirect: number;
  last: boolean;
  conds: Cond[];
}

const TOKENS = /"([^"]*)"|(\S+)/g;
const BACKREF = /\$(\d)/g;
const VARIABLE = /%\{([A-Z_]+)\}/g;
const MAX_INTERNAL_REWRITES = 10;

export class HtaccessRules {
  private readonly rules: Rule[];
  private readonly documentRoot: string;
  private readonly serverName: string;

  private constructor(rules: Rule[], documentRoot: string, serverName: string) {
    this.rules = rules;
    this.documentRoot = documentRoot;
    this.serverName = serverName;
  }

  static load(htaccess: string, documentRoot: string, serverName: string): HtaccessRules {
    return HtaccessRules.parse(fs.readFileSync(htaccess, 'utf8'), documentRoot, serverName);
  }

  static parse(text: string, documentRoot: string, serverName: string): HtaccessRules {
    const rules: Rule[] = [];
    let conds: Cond[] = [];
    let engineOn = false;
    for (const raw of text.split(/\r?\n/)) {
      const line = raw.trim();
      if (line === '' || line.startsWith('#')) {
        continue;
      }
      const t = tokenize(line);
      const directive = t[0].toLowerCase();
      const flags = t.length > 3 ? t[3] : '';
      if (directive === 'rewriteengine') {
        engineOn = t.length > 1 && t[1].toLowerCase() === 'on';
      } else if (directive === 'rewritecond' && t.length >= 3) {
        conds.push({testString: t[1], pattern: t[2], noCase: hasFlag(flags, 'NC')});
      } else if (directive === 'rewriterule' && t.length >= 3) {
        let regex = t[1];
        const negated = regex.startsWith('!');
        if (negated) {
          regex = regex.substring(1);
        }
        rules.push({
          pattern: new RegExp(regex, hasFlag(flags, 'NC') ? 'i' : ''),
          negated,
          substitution: t[2],
          redirect: redirectCode(flags),
          last: hasFlag(flags, 'L'),
          conds,
        });
        conds = [];
      }
    }
    return new HtaccessRules(engineOn ? rules : [], path.resolve(documentRoot), serverName);
  }

  /**
   * Applies the rules to a site path ("/foo/bar", already URL-decoded).
   * Internal rewrites are re-run, like mod_rewrite does in per-directory context.
   */
  apply(sitePath: string): RewriteOutcome {
    let current = sitePath;
    for (let round = 0; round < MAX_INTERNAL_REWRITES; round++) {
      const outcome = this.applyOnce(current);
      if (outcome === null) {
        return {redirectStatus: 0, location: current};
      }
      if (isRedirect(outcome) || outcome.location === current) {
        return outcome;
      }
      current = outcome.location;
    }
    return {redirectStatus: 0, location: current};
  }

  private applyOnce(sitePath: string): RewriteOutcome | null {
    // In per-directory context the leading "/" (the directory prefix) is stripped before matching.
    let uri = sitePath.startsWith('/') ? sitePath.substring(1) : sitePath;
    let rewritten = false;
    for (const rule of this.rules) {
      const m = rule.pattern.exec(uri);
      if ((m !== null) === rule.negated) {
        continue;
      }
      const ruleMatch = rule.negated ? null : m;
      if (!this.conditionsHold(rule.conds, ruleMatch, sitePath)) {
        continue;
      }
      if (rule.substitution === '-') {
        if (rule.last) {
          break;
        }
        continue;
      }
      let target = this.expand(rule.substitution, ruleMatch, sitePath);
      const absolute = target.startsWith('http://') || target.startsWith('https://');
      if (rule.redirect !== 0 || absolute) {
        if (!absolute) {
          target = `https://${this.serverName}${target.startsWith('/') ? '' : '/'}${target}`;
        }
        return {redirectStatus: rule.redirect !== 0 ? rule.redirect : 302, location: target};
      }
      uri = target.startsWith('/') ? target.substring(1) : target;
      rewritten = true;
      if (rule.last) {
        break;
      }
    }
    return rewritten ? {redirectStatus: 0, location: '/' + uri} : null;
  }

  private conditionsHold(conds: Cond[], ruleMatch: RegExpExecArray | null, sitePath: string): boolean {
    for (const cond of conds) {
      const value = this.expand(cond.testString, ruleMatch, sitePath);
      let pattern = cond.pattern;
      const negate = pattern.startsWith('!');
      if (negate) {
        pattern = pattern.substring(1);
      }
      let result: boolean;
      if (pattern === '-f') {
        result = stat(value)?.isFile() ?? false;
      } else if (pattern === '-d') {
        result = stat(value)?.isDirectory() ?? false;
      } else if (pattern.startsWith('=')) {
        const expected = pattern.substring(1);
        result = cond.noCase ? value.toLowerCase() === expected.toLowerCase() : value === expected;
      } else {
        result = new RegExp(pattern, cond.noCase ? 'i' : '').test(value);
      }
      if (result === negate) {
        return false;
      }
    }
    return true;
  }

  private expand(template: string, ruleMatch: RegExpExecArray | null, sitePath: string): string {
    const withVars = template.replace(VARIABLE, (_, name: string) => this.variable(name, sitePath));
    return withVars.replace(BACKREF, (_, group: string) => ruleMatch?.[Number(group)] ?? '');
  }

  private variable(name: string, sitePath: string): string {
    switch (name) {
      case 'DOCUMENT_ROOT':
        return this.documentRoot;
      case 'REQUEST_FILENAME':
        return path.join(this.documentRoot, sitePath.replace(/^\/+/, ''));
      case 'REQUEST_URI':
        return sitePath;
      case 'SERVER_NAME':
        return this.serverName;
      case 'HTTPS':
        return 'on'; // the production site is HTTPS-only
      default:
        return '';
    }
  }
}

function stat(file: string): fs.Stats | undefined {
  try {
    return fs.statSync(file, {throwIfNoEntry: false});
  } catch {
    return undefined; // e.g. a path with a NUL byte
  }
}

function tokenize(line: string): string[] {
  return [...line.matchAll(TOKENS)].map((m) => m[1] ?? m[2]);
}

function flagList(flags: string): string[] {
  return flags.startsWith('[') ? flags.substring(1, flags.length - 1).split(',') : [];
}

function hasFlag(flags: string, flag: string): boolean {
  return flagList(flags).some((f) => f.trim().split('=')[0].toLowerCase() === flag.toLowerCase());
}

function redirectCode(flags: string): number {
  for (const f of flagList(flags)) {
    const [name, value] = f.trim().split(/=(.*)/s);
    if (name.toLowerCase() === 'r' || name.toLowerCase() === 'redirect') {
      return value !== undefined ? Number.parseInt(value.trim(), 10) : 302;
    }
  }
  return 0;
}
