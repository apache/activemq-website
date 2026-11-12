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
import http from 'node:http';
import type {AddressInfo} from 'node:net';
import path from 'node:path';
import {HtaccessRules, isRedirect} from './htaccess-rules.ts';

const CONTENT_TYPES: Record<string, string> = {
  html: 'text/html; charset=utf-8',
  css: 'text/css',
  js: 'application/javascript',
  json: 'application/json',
  xml: 'application/xml',
  xsd: 'application/xml',
  dtd: 'application/xml-dtd',
  txt: 'text/plain',
  svg: 'image/svg+xml',
  png: 'image/png',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  gif: 'image/gif',
  ico: 'image/x-icon',
  pdf: 'application/pdf',
};

/**
 * Serves the built website from a directory, the way the ASF Apache httpd does:
 * the root `.htaccess` rewrite rules apply, `index.html` is the directory index
 * (with an automatic listing when there is none, as mod_autoindex does for the
 * old site's `/schema/` directories) and `404.html` is the error page.
 * Bound to the loopback interface only.
 */
export class StaticSiteServer {
  private readonly root: string;
  private readonly rules: HtaccessRules | null;
  private readonly server: http.Server;

  private constructor(root: string, serverName: string) {
    this.root = path.resolve(root);
    const htaccess = path.join(this.root, '.htaccess');
    this.rules = fs.existsSync(htaccess) ? HtaccessRules.load(htaccess, this.root, serverName) : null;
    this.server = http.createServer((req, res) => {
      try {
        this.handle(req, res);
      } catch (e) {
        res.writeHead(500).end(String(e));
      }
    });
  }

  static async start(root: string, serverName: string): Promise<StaticSiteServer> {
    const site = new StaticSiteServer(root, serverName);
    await new Promise<void>((resolve, reject) => {
      site.server.once('error', reject);
      site.server.listen(0, '127.0.0.1', () => resolve());
    });
    return site;
  }

  baseUrl(): string {
    const {port} = this.server.address() as AddressInfo;
    return `http://127.0.0.1:${port}`;
  }

  close(): Promise<void> {
    this.server.closeAllConnections();
    return new Promise((resolve) => this.server.close(() => resolve()));
  }

  private handle(req: http.IncomingMessage, res: http.ServerResponse): void {
    const head = req.method === 'HEAD';
    let sitePath: string;
    try {
      sitePath = decodeURIComponent(new URL(req.url ?? '/', 'http://localhost').pathname) || '/';
    } catch {
      res.writeHead(400).end();
      return;
    }
    if (this.rules !== null) {
      const outcome = this.rules.apply(sitePath);
      if (isRedirect(outcome)) {
        res.writeHead(outcome.redirectStatus, {Location: outcome.location}).end();
        return;
      }
      sitePath = outcome.location;
    }

    let file = path.resolve(this.root, sitePath.replace(/^\/+/, ''));
    if (file !== this.root && !file.startsWith(this.root + path.sep)) {
      res.writeHead(403).end();
      return;
    }
    if (isDirectory(file)) {
      const index = path.join(file, 'index.html');
      if (!isFile(index)) {
        sendDirectoryListing(res, sitePath, file, head);
        return;
      }
      file = index;
    }
    if (isFile(file) && !path.basename(file).startsWith('.')) {
      sendFile(res, 200, file, head);
    } else {
      const notFound = path.join(this.root, '404.html');
      if (isFile(notFound)) {
        sendFile(res, 404, notFound, head);
      } else {
        res.writeHead(404).end();
      }
    }
  }
}

function isFile(file: string): boolean {
  return fs.statSync(file, {throwIfNoEntry: false})?.isFile() ?? false;
}

function isDirectory(file: string): boolean {
  return fs.statSync(file, {throwIfNoEntry: false})?.isDirectory() ?? false;
}

function sendFile(res: http.ServerResponse, status: number, file: string, head: boolean): void {
  const extension = path.extname(file).substring(1).toLowerCase();
  const body = fs.readFileSync(file);
  res.writeHead(status, {
    'Content-Type': CONTENT_TYPES[extension] ?? 'application/octet-stream',
    'Content-Length': body.length,
  });
  res.end(head ? undefined : body);
}

function sendDirectoryListing(res: http.ServerResponse, sitePath: string, dir: string, head: boolean): void {
  const entries = fs.readdirSync(dir, {withFileTypes: true})
    .map((entry) => entry.name + (entry.isDirectory() ? '/' : ''))
    .filter((name) => !name.startsWith('.'))
    .sort()
    .map((name) => `<li><a href="${name}">${name}</a></li>`)
    .join('\n');
  const body = Buffer.from(`<!DOCTYPE html><html><head><title>Index of ${sitePath}</title></head>`
    + `<body><h1>Index of ${sitePath}</h1><ul>\n${entries}\n</ul></body></html>`);
  res.writeHead(200, {'Content-Type': CONTENT_TYPES.html, 'Content-Length': body.length});
  res.end(head ? undefined : body);
}
