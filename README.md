Apache ActiveMQ Website
=======================

This is the source of the Apache ActiveMQ website, hosted at [activemq.apache.org](https://activemq.apache.org/).

It is a static website built with [Docusaurus](https://docusaurus.io/). Client-side search is provided by
[Pagefind](https://pagefind.app/) through [docusaurus-plugin-pagefind](https://github.com/toasty-kj/docusaurus-plugin-pagefind).
The project was built on top of [apache-website-template](https://github.com/apache/apache-website-template/tree/docusaurus),
and its content was migrated from the previous Jekyll website (still available in this repository's git history).

## Prerequisites

- [Node.js](https://nodejs.org/) 22.6 or newer (the scripts and tests are TypeScript, run with Node's type stripping)
- [pnpm](https://pnpm.io/) 11. The version is pinned in `package.json`; with [Corepack](https://nodejs.org/api/corepack.html)
  enabled (`corepack enable`) the right version is used automatically.

Install the dependencies once (and after `package.json` changes):

```bash
pnpm install
```

## Usage

| Command                     | What it does                                                                                  |
|-----------------------------|-----------------------------------------------------------------------------------------------|
| `pnpm start`                | Dev server with hot reload at `http://localhost:3000`                                         |
| `pnpm run start:search`     | Full build, copies the search index to `.pagefind`, then starts the dev server (see below)   |
| `pnpm run build`            | Production build of the static site into `build/`                                             |
| `pnpm run serve`            | Serves the production build from `build/`                                                     |
| `pnpm test`                 | Unit tests                                                                                    |
| `pnpm run test:legacy-urls` | Checks that every URL of the old website still works on `build/` (run `pnpm run build` first) |
| `pnpm run verify`           | Type check, unit tests, build and legacy URL test: run this before pushing                    |
| `pnpm run typecheck`        | TypeScript type check                                                                         |
| `pnpm run clear`            | Removes the Docusaurus caches and the copied search index                                     |

Search only works with the dev server after `pnpm run start:search`, see [Search](#search).

## Repository layout

| Path                                   | Content                                                                          |
|----------------------------------------|----------------------------------------------------------------------------------|
| `docs/classic`, `docs/nms`, `docs/cms` | Documentation of ActiveMQ, NMS and CMS, each with its own `sidebars.ts`          |
| `src/data/releases/classic`            | One `.mdx` page per ActiveMQ release (see below)                                 |
| `src/pages`                            | Standalone pages (download, contact, team, security, ...)                        |
| `src/components`, `src/theme`          | React components and swizzled Docusaurus theme components                        |
| `static`                               | Files copied as-is to the site: API docs, XML schemas, images, security advisories, `.htaccess` |
| `blog`                                 | News posts                                                                       |
| `scripts`                              | Release news generator, legacy URL crawler and committer helper scripts          |
| `tests`                                | Tests and the legacy URL lists                                                   |

## Adding new ActiveMQ releases

Each ActiveMQ release is documented in `src/data/releases/classic/classic-MM-mm-pp.mdx` (e.g. `classic-06-04-00.mdx`
for 6.4.0). A release shows up in several places: the card in the main page, the download page, the news, the RSS
feed, etc. To make it convenient, `scripts/generate-release-news.ts` generates all of them from the release pages; it
runs as part of `pnpm start` and `pnpm run build`.

To add a release:

1. Add a new `.mdx` file under `src/data/releases/classic/`, copying the front matter and layout of a previous release.
2. When the release starts a new series (e.g. 6.5.x), add it to `src/data/currentReleases.ts` and to the
   "Schedule & Status" table in `src/pages/components/classic/download/index.tsx`.
3. Add a redirect for the old website's release URL in `static/.htaccess`, next to the existing
   `activemq-XXXYYYZZZ-release` rules.

## Updating documentation

All documentation lives under `docs/`. Just update the `.md` files. The documentation is based on
[Docusaurus's Docs plugin](https://docusaurus.io/docs/docs-introduction). For details on how the documentation sidebar
is configured, refer to https://docusaurus.io/docs/sidebar.

## Search

Client-side search uses [Pagefind](https://pagefind.app/) and [docusaurus-plugin-pagefind](https://github.com/toasty-kj/docusaurus-plugin-pagefind),
configured in `docusaurus.config.ts`.

`pnpm run build` builds the Pagefind index. For development, run `pnpm run start:search` at least once to build the index. Then `pnpm start`
will reuse the existing index.

## Contributing to the site

If you would like to make a change to the ActiveMQ site:

1. Fork the [Apache ActiveMQ site repository](https://github.com/apache/activemq-website) to your GitHub account.
2. Create a new branch from `main`.
3. Test your changes locally with `pnpm start`, and run `pnpm run verify`.
4. Add commit(s) to your branch.
5. Open a pull request on the GitHub mirror.
6. An ActiveMQ committer will review and merge your changes.

Committers can use the helper scripts in `scripts/` (`checkout-PR.sh`, `merge-PR.sh`, `merge-branch.sh`) to check out
and merge pull requests, pushing to `https://gitbox.apache.org/repos/asf/activemq-website.git`.
