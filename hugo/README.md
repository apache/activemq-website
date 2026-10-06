# Apache ActiveMQ Website — Hugo

This directory contains the Hugo-based rewrite of the [activemq.apache.org](https://activemq.apache.org/) website.
The original Jekyll source lives in `../src/`.

## Prerequisites

Install Hugo (extended edition recommended for SCSS support):

```bash
# macOS
brew install hugo

# Linux (snap)
snap install hugo

# Or download a binary from https://github.com/gohugoio/hugo/releases
```

Verify the installation:

```bash
hugo version
```

## Local development

From this directory (`hugo/`):

```bash
# Serve with live reload
hugo server

# Open http://localhost:1313 in your browser
```

Useful flags:

| Flag | Purpose |
|------|---------|
| `--buildDrafts` / `-D` | Include draft content |
| `--port 1314` | Use a different port |
| `--disableFastRender` | Full re-render on every change |

## Build

```bash
hugo
```

Output is written to `hugo/public/`. To change the output directory:

```bash
hugo --destination ../output
```

## Clean

```bash
rm -rf public resources
```

## Project layout

```
hugo/
├── hugo.toml            # Site configuration
├── content/             # Markdown/HTML page sources
│   └── _index.md        # Homepage
├── layouts/
│   ├── _default/
│   │   ├── baseof.html  # Base HTML shell
│   │   └── single.html  # Default single-page layout
│   ├── index.html       # Homepage layout
│   └── partials/
│       ├── nav.html
│       └── footer.html
└── static/              # Files copied verbatim to output (images, etc.)
```
