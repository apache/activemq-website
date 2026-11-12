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

import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {after, before, describe, test} from 'node:test';
import {fileURLToPath} from 'node:url';
import {HtaccessRules, isRedirect} from './lib/htaccess-rules.ts';

const SITE_HTACCESS = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'static', '.htaccess');

describe('HtaccessRules', () => {
  let root: string;
  let rules: HtaccessRules;

  before(() => {
    root = fs.mkdtempSync(path.join(os.tmpdir(), 'htaccess-rules-'));
    // Same constructs as static/.htaccess.
    fs.writeFileSync(path.join(root, '.htaccess'), [
      'RewriteEngine On',
      'RewriteCond %{HTTPS} !=on [NC]',
      'RewriteRule ^ https://%{SERVER_NAME}%{REQUEST_URI} [R,L]',
      'RewriteRule ^artemis/docs/(.*) https://artemis.apache.org/components/artemis/documentation/$1 [R=301,L]',
      'RewriteRule ^ajax(.*) https://activemq.apache.org/components/classic/documentation/ajax [R=301,L]',
      'RewriteRule ^activemq-6000101-release(\\.html)?$ https://activemq.apache.org/components/classic/download/classic-06-01-01 [R=301,L]',
      'RewriteCond %{REQUEST_FILENAME} !-f',
      'RewriteRule ^(.+)/index(\\.html)?$ https://activemq.apache.org/$1 [R=301,L]',
      'DirectorySlash Off',
      'RewriteCond %{DOCUMENT_ROOT}/$1.html -f',
      'RewriteRule ^(.+)/$ https://activemq.apache.org/$1 [R=301,L]',
      'RewriteCond %{DOCUMENT_ROOT}/$1.html -f',
      'RewriteRule ^(.+)$ $1.html [L]',
      'RewriteCond %{REQUEST_FILENAME} -d',
      'RewriteRule ^(.*[^/])$ https://activemq.apache.org/$1/ [R=301,L]',
      '',
    ].join('\n'));
    fs.mkdirSync(path.join(root, 'components/classic/documentation'), {recursive: true});
    fs.writeFileSync(path.join(root, 'components/classic/documentation.html'), '<html></html>');
    fs.mkdirSync(path.join(root, 'apidocs'));
    fs.writeFileSync(path.join(root, 'apidocs/index.html'), '<html></html>');
    rules = HtaccessRules.load(path.join(root, '.htaccess'), root, 'activemq.apache.org');
  });

  after(() => fs.rmSync(root, {recursive: true, force: true}));

  test('prefix redirect', () => {
    const o = rules.apply('/ajax.html');
    assert.equal(o.redirectStatus, 301);
    assert.equal(o.location, 'https://activemq.apache.org/components/classic/documentation/ajax');
  });

  test('back-reference to other host', () => {
    assert.equal(rules.apply('/artemis/docs/latest/index.html').location,
      'https://artemis.apache.org/components/artemis/documentation/latest/index.html');
  });

  test('optional .html suffix', () => {
    assert.ok(isRedirect(rules.apply('/activemq-6000101-release')));
    assert.ok(isRedirect(rules.apply('/activemq-6000101-release.html')));
    assert.ok(!isRedirect(rules.apply('/activemq-6000101-release.htm')));
  });

  test('extensionless page is served from .html file', () => {
    const o = rules.apply('/components/classic/documentation');
    assert.ok(!isRedirect(o));
    assert.equal(o.location, '/components/classic/documentation.html');
  });

  test('trailing slash is removed when page exists', () => {
    assert.equal(rules.apply('/components/classic/documentation/').location,
      'https://activemq.apache.org/components/classic/documentation');
  });

  test('directory without page gets trailing slash', () => {
    assert.equal(rules.apply('/apidocs').location, 'https://activemq.apache.org/apidocs/');
    assert.ok(!isRedirect(rules.apply('/apidocs/')));
  });

  test('Jekyll index alias redirects to page', () => {
    assert.equal(rules.apply('/components/classic/documentation/index.html').location,
      'https://activemq.apache.org/components/classic/documentation');
    assert.equal(rules.apply('/components/classic/documentation/index').location,
      'https://activemq.apache.org/components/classic/documentation');
  });

  test('real index file is served', () => {
    const o = rules.apply('/apidocs/index.html');
    assert.ok(!isRedirect(o));
    assert.equal(o.location, '/apidocs/index.html');
  });

  test('unknown path is left alone', () => {
    const o = rules.apply('/nothing-here');
    assert.ok(!isRedirect(o));
    assert.equal(o.location, '/nothing-here');
  });

  test("the website's .htaccess parses and redirects a legacy page", () => {
    // Throws if a pattern written for Apache (PCRE) is not a valid JavaScript RegExp.
    const site = HtaccessRules.load(SITE_HTACCESS, root, 'activemq.apache.org');
    assert.ok(isRedirect(site.apply('/activemq-6004000-release.html')));
  });
});
