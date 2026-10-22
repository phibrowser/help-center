# i18n run 2026-10-22-mini-player-and-screenshots

Adds Mini Player and screenshot guidance to Quick tips in English and the
eight registered locales: de, es, fr, ja, ko, nl, zh-Hans, and zh-Hant.

## What changed

- English commits `20b6553` and `e99a64a`, based on `f854193`:
  Mini Player follows Picture-in-Picture; screenshots follow Mini Player.
  The shortcut table adds Command-Shift-1 for full-page capture and
  Command-Shift-2 for area capture. See `english-delta.diff`.
- Mini Player covers appearance, controls, and settings modes. Muted media
  does not automatically show it, and Off prevents automatic appearance.
  Screenshot guidance covers scrolling selection, shortcut customization,
  a concise editing overview, and PNG/JPG/PDF export.
- Updated `site/<locale>/tips-and-shortcuts/index.md` and synchronized its
  `localization/<locale>/content/` copy. Those isolated copies were older
  than the registered pages; the zh-Hans copy was absent. This accounts for
  the larger draft-copy diffs. No routes or locale resources changed.
- One translator agent per locale used the writing rules and
  phi-translate-validate v2 glossary (2026-10-15), followed by coordinator
  self-review. The shared brief is in `brief-common.md`; the final page
  files hold the translations.
- Each page remains `translation: complete` / `contentReview: todo`.
  Translation provenance and terminology/search evidence name this run;
  existing owners and privacy/legal records are preserved.

## Evidence and terminology

`refs-media-tools.json` retains 13 relevant labels from
`phi-browser-mac/Resources/Localizable.xcstrings`, including their catalog
hashes. Mini Player behavior was checked against the native implementation.
Screenshot behavior and defaults were checked against `docs/page-screenshots.md`,
`Shortcuts.swift`, `AppController+Menu.swift`, `PageScreenshotService.swift`,
and the screenshot editor sources in the paired browser checkout.

Review notes:

- zh-Hans uses the shipped Mini Player name `迷你播放程序`, already an open
  glossary question. zh-Hant is independently translated for Taiwan.
- ja follows shipped `ミュート`; the glossary's `消音` comparison remains
  open. Its image-editor wording is descriptive prose, not a quoted label.
- fr and es retain earlier Picture-in-Picture naming differences outside
  the new section. ko retains earlier English Split View mentions.
- Blur uses the catalog's pixelation/mosaic terminology in translations.
- Four ja/ko area-command and export emphasis spans use `<strong>` because
  the repository validator demonstrated Markdown parsing failures.

## Verification and review state

- `node scripts/test-i18n.mjs`: passed, 9 locales and 261 Markdown files.
- VitePress build and `node scripts/test-i18n-build.mjs`: passed,
  261 pages and 40 search queries.
- Repository formatting and `git diff --check`: passed.
- Writing checker: passed for the English page and translated additions.
  An existing French `utilise` in the PiP section triggers the checker's
  English spelling rule when checking the whole French page.
- During translation, mechanical checks covered 56 Mini Player entries and
  72 screenshot entries, catalog labels, shortcuts, and unchanged surrounding
  registered content. All eight draft copies match their registered pages.

`node scripts/check-localization-status.mjs` still exits 1: historical
`sourceRevision` `6b773586bc9a3789a4170fbb2a1d852d2a2600db` is absent from
this checkout. Source validation warns and skips that staleness comparison.
The baseline was preserved; a maintainer must reconcile it before claiming
whole-locale currency. Final English content is recorded in `e99a64a` with
SHA-256 `3d50b3b3e36481ddbb0ecdc068c419c412db3b745eee491b3a5b700dc4236bad`.

Installed Node entrypoints were used because the pnpm/Corepack shim could
not resolve its configured version. These checks are local technical
validation, not independent content approval or deployed-site QA. Locale
reviewers still need to approve the final content and terminology.
