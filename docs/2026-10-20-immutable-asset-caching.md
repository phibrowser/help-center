# Long-lived caching for hashed assets

Date: 2026-10-20

## Why

Cloudflare Workers static assets answer every file with
`Cache-Control: public, max-age=0, must-revalidate` unless told otherwise,
so browsers sent a conditional request (answered with 304) for every script,
stylesheet, and font on every page view. All files under `/help/assets/` have
a content hash in their name, so a changed file always gets a new URL and
they can be cached for a year without revalidation. This matters more since
the shared site-data chunk (`docs/2026-10-20-site-data-meta-chunk.md`) is
loaded by every page.

## Change

`buildEnd` in `site/.vitepress/config.mts` writes
`site/.vitepress/dist/_headers`:

```txt
/help/assets/*
  Cache-Control: public, max-age=31536000, immutable
```

Workers reads `_headers` from the root of `assets.directory` in
`wrangler.jsonc` (`site/.vitepress/dist`), which is the parent of the
VitePress `outDir` (`dist/help`). A file in `site/public/` would land in
`dist/help/` and be ignored, which is why the file is generated in
`buildEnd` instead. Workers parses it and does not serve it.

HTML pages and unhashed files such as `/help/favicon.ico` and
`/help/sitemap.xml` keep the default revalidating policy, so content
updates appear immediately.

## Invariant

Only content-hashed files may live under `/help/assets/`. At the time of
the change, all 552 files there were hashed. If anything unhashed is ever
emitted into `assets/`, browsers would keep a stale copy for up to a year.

## Validation

- `pnpm build` and `pnpm format:check` pass; `_headers` is generated at
  `dist/_headers` and not under `dist/help/`.
- `wrangler dev` (4.104.0) against the build: an asset under
  `/help/assets/` returns `public, max-age=31536000, immutable`, a page
  returns `public, max-age=0, must-revalidate`, and `/_headers` is 404.

Reference: <https://developers.cloudflare.com/workers/static-assets/headers/>
