# Site data moved into a shared metadata chunk

Date: 2026-10-20

## Problem

Google Search Console reported dozens of 404s on the main site for Help
paths without the `/help/` base, such as `https://phibrowser.com/peek/`,
`/kiosk/`, `/tips-and-shortcuts/`, and locale-prefixed forms such as
`/nl/tips-and-shortcuts/`. They kept appearing after the 2026-06 launch
redirects in philanding (`docs/gsc-coverage-2026-07.md` there), so that
launch-period explanation did not cover them.

GSC URL Inspection named Help pages as the referring pages
(`/help/tips-and-shortcuts/` for `/peek/`; `/help/layouts/` and
`/help/zh-Hant/automation/` for `/nl/tips-and-shortcuts/`). No rendered
link on those pages is wrong. The only place the base-less strings exist is
VitePress's site data (`__VP_SITE_DATA__`): it holds every locale's nav
and sidebar, whose `link` values are written without the base because
VitePress adds `base` when it renders a link. VitePress inlined that data
into a script in every page, so each page carried every base-less route of
every locale, and Googlebot crawled those strings as URLs. That Google
extracts URLs from inline script text is an inference from this evidence,
not documented Google behavior.

The inlined data was also about 95% of each page: `/help/layouts/` was
517 KB of HTML, of which about 490 KB was site data, repeated in all 252
pages.

## Change

`metaChunk: true` in `site/.vitepress/config.mts` makes VitePress write
the site data to one hashed file, `assets/chunks/metadata.<hash>.js`,
loaded by each page through `<script type="module">` in the head. The
data and the runtime behavior are unchanged; only where it is loaded from
changes.

| Page (built HTML)              | Before | After |
| ------------------------------ | ------ | ----- |
| `/help/layouts/`               | 517 KB | 31 KB |
| `/help/`                       | 503 KB | 17 KB |
| `/help/nl/tips-and-shortcuts/` | 525 KB | 39 KB |

The shared chunk is 486 KB and is cached across pages by its hashed name.

## Trade-offs and risks

- `metaChunk` is marked `@experimental` in VitePress 1.6.4. Recheck it on
  VitePress upgrades; removing the option restores the inline behavior.
- Googlebot may still read the base-less strings from the chunk while
  rendering. The change removes them from every HTML document, but whether
  the 404s stop entirely is unverified until Google recrawls.

## Validation

- `pnpm build`, including both i18n checks, passes.
- No built HTML file contains a root-relative link without `/help/`.
- Browser checks against the built output in Chromium and WebKit: site data
  loads, sidebar links and client-side navigation to `/help/peek/` work,
  the language link to `/help/nl/peek/` is present, the Dutch page has
  `lang="nl"` and a localized sidebar, local search returns Dutch results,
  and there are no console errors.

## Follow-up

- Two to three weeks after deployment, check the GSC "Not found (404)"
  bucket. If base-less Help URLs are still being discovered, the remaining
  option is a main-site redirect from those paths to `/help/...`, which
  philanding's docs want to avoid growing.
