# AGENTS.md — Hugo Migration Guide

This document describes the approach and conventions used when migrating the Apache ActiveMQ website from Jekyll (`src/`) to Hugo (`hugo/`).

## Repository layout

```
activemq-website/
├── src/          # Original Jekyll source (do not modify)
├── hugo/         # Hugo site (migration target)
│   ├── hugo.toml
│   ├── assets/css/main.css
│   ├── content/
│   ├── data/
│   ├── layouts/
│   ├── static/assets/
│   └── scripts/
└── AGENTS.md     # This file
```

## Hugo conventions

### Layout lookup
Hugo resolves layouts by content type (directory name under `content/`):
- `content/foo/_index.md` → `layouts/foo/list.html`
- `content/foo/bar.md`    → `layouts/foo/single.html`
- Falls back to `layouts/_default/single.html` or `list.html`

### Two-block page structure
Every layout uses two blocks defined in `layouts/_default/baseof.html`:
- `above-main` — full-width content (hero banners, page title banners) rendered **outside** the padded `<main>` container
- `main` — normal page content inside the max-width container

### Raw HTML in Markdown
`hugo.toml` sets `[markup.goldmark.renderer] unsafe = true` to allow inline HTML in `.md` files. This is intentional — several pages use HTML tables and `<div>` blocks ported from Jekyll.

## Theme

Single self-contained stylesheet at `hugo/assets/css/main.css`. Key variables:

```css
--red:     #c0392b   /* primary accent */
--surface: #f7f7f8   /* card/banner backgrounds */
--border:  #e5e5e7
--text:    #1a1a1a
--muted:   #6b7280
--max-w:   1100px
```

Rules of thumb:
- Nav is white with a bottom border; links turn red on hover
- Page title banners (News, Download, etc.) use `background: var(--red)` with white `h1`
- Component hero banners (ActiveMQ component page) also use red with white text and the vertical logo
- Homepage hero uses `var(--surface)` (light grey) — no red background

## Pages migrated so far

| URL | Content file | Layout |
|-----|-------------|--------|
| `/` | `content/_index.md` | `layouts/index.html` |
| `/news/` | `content/news/_index.md` | `layouts/news/list.html` |
| `/news/<slug>` | `content/news/*.md` | `layouts/news/single.html` |
| `/components/classic/` | `content/components/classic/_index.md` | `layouts/components/list.html` |
| `/download/` | `content/download/index.md` | `layouts/download/list.html` |

## Migrating a new page

1. Find the source in `src/` (usually `src/<path>/index.md` or `src/<path>.md`).
2. Create `hugo/content/<path>/index.md` (or `<slug>.md` for a leaf page).
3. Copy the front matter fields `title` and `date`; drop Jekyll-specific fields (`layout`, `type`, `title-class`).
4. Strip Liquid tags (`{% %}`, `{{ }}`). Replace with static content or Hugo template syntax.
5. If the page needs a banner + breadcrumb, create a layout in `layouts/<section>/` using the `above-main` / `main` block pattern (copy `layouts/news/list.html` as a starting point).
6. If the page is purely content with no special chrome, the `_default/single.html` layout is sufficient.

## Importing news / release content in bulk

Run the import script to convert all Jekyll release collections into Hugo news items:

```bash
cd hugo
python3 scripts/import_news.py
```

The script reads `src/_classic_releases/`, `src/_nms_*_releases/`, and `src/_news/`, extracts `title`, `release_date`, and `shortDescription` front matter, strips Liquid tags from the body, and writes Hugo `.md` files to `content/news/`. Existing files are not overwritten.

## Static assets

All images from `src/assets/img/` are copied to `hugo/static/assets/img/` and served verbatim. Reference them as `/assets/img/<filename>` in templates and content.

## Global CSS resets to watch out for

The global `ul`, `ol`, and `li` rules add `padding-left` and `margin-bottom`. Any nav or UI component that contains a `<ul>` must explicitly reset these:

```css
.my-component ul { padding-left: 0; margin-bottom: 0; }
.my-component li { margin: 0; padding: 0; }
```
