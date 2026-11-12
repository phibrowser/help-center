# llms.txt

Date: 2026-11-12 (PHI-1972)

## Why

The main site has had `https://phibrowser.com/llms.txt` since PHI-1967, with a
hand-written list of 14 help pages that did not follow new pages or changed
titles here. Most of the long-form text about Phi Browser lives in the help
center, so it now publishes its own index and a full-text file, in the format
proposed at <https://llmstxt.org/>:

- `/help/llms.txt`, one link per English page, grouped like the sidebar.
- `/help/llms-full.txt`, the body of every English page in one Markdown file.

## Where things live

| Part                                       | Source                                                            |
| ------------------------------------------ | ----------------------------------------------------------------- |
| Rendering and the Markdown clean-up        | `site/.vitepress/llms-txt.ts`                                     |
| Page list, source text, and front matter   | `createContentLoader` in `buildEnd`, `site/.vitepress/config.mts` |
| Sections and their order                   | `site/.vitepress/i18n/guide.ts`, the same data the sidebar uses   |
| Section headings and the H1                | `site/.vitepress/i18n/locales/en.json`                            |
| Summary, license note, main-site link      | Constants at the top of `site/.vitepress/llms-txt.ts`             |
| Check that runs at the end of `pnpm build` | `scripts/test-llms-build.mjs` (`pnpm test:llms:build`)            |

Nothing needs editing when a page is added: its link text is the H1 and its
description is the front matter `description`. A page that is in the sidebar
appears in its sidebar group. The FAQ has its own section. A page that is in
neither goes into a last section called "More", so it is listed even before
it is added to `guide.ts`. The home page is left out because it is a layout
with navigation only.

## Decisions

- **English only.** Translations repeat the same content, and the English
  pages are the source the others are made from.
- **Links point to the HTML pages**, as absolute production URLs. Cloudflare
  answers `Accept: text/markdown` on those URLs by converting the HTML at the
  edge, but on 2026-11-12 that output still carried navigation text ("Skip
  to content", "Menu", "Return to top"), and only clients that send the
  header get it. `llms-full.txt` is the clean Markdown form. Publishing a
  `.md` file per page is a possible follow-up; the links are generated, so
  changing their target later is a small edit in one file.
- **Own generator, not `vitepress-plugin-llms`** (1.15.0 was considered). The
  plugin does not know about locales, so the eight language directories would
  need an ignore list that grows with every new language, and it adds 14
  dependencies to render data this repository already has in one place.
- **Plain Markdown in the full file.** VitePress syntax means nothing outside
  the site, so `::: details` becomes a heading one level below the section it
  is in, `::: tip` and `::: warning` become blockquotes with a bold title,
  `{#custom-anchor}` suffixes and empty decorative `<span>` elements are
  removed, and route-relative links (`/memory/`, `#reset-sync`) become
  absolute URLs. An unknown, nested, or unclosed container fails the build
  instead of leaking into the output.
- **The fixed copy lives in the generator, not in the locale resources.** The
  summary and the sentences around it exist in one language only. Putting
  them in `en.json` would make the resource schema demand the same keys from
  every locale for text that is never shown. `config.mts` itself must stay
  free of language names (`pnpm test:i18n` checks it), so it only passes the
  root locale to the generator.
- **License note in the full file.** It reproduces the page text, which is
  under CC BY-NC-SA 4.0 (`docs/licensing.md`), so it says so at the top.

## Validation

`pnpm build` runs `scripts/test-llms-build.mjs` after the site is built. It
fails when:

- either file does not start with an H1 followed by a blockquote, or
  `llms.txt` has a second H1 or a heading deeper than H2;
- an English page other than the home page is not listed exactly once in
  `llms.txt` with its H1 and description, or is not exactly once in
  `llms-full.txt`;
- a `:::` container, a site-relative link, a custom heading anchor, or a
  `<span>` is left in either file;
- a help-center link has no built page, or its `#anchor` is not an `id` on
  that page.

Links to other hosts are not requested.

## After a deploy

- Both URLs should answer 200 with
  `Content-Type: text/plain; charset=utf-8`. Workers static assets choose
  `text/plain` from the `.txt` extension but send no charset (seen on
  2026-11-12 after the first deploy), and both files contain non-ASCII
  characters, so `buildEnd` adds a `Content-Type` rule for each file to
  `_headers`. `scripts/test-llms-build.mjs` checks that the rules are there.
- `/help/*` is cached at the Cloudflare edge. If the old 404 is still served,
  check `cf-cache-status` and purge the two URLs.

## Follow-up outside this repository

Once both files are live, philanding replaces the hand-written `helpPages`
list in `src/content/site/en/llms.md` with links to `/help/llms.txt` and
`/help/llms-full.txt` (see its `docs/llms-txt.md`).
