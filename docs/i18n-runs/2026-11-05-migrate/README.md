# i18n run 2026-11-05-migrate

Adds the Migrate from Another Browser page and the related Import and
Switching to Phi updates (PHI-1899, user feedback #282) in English and the
eight registered locales: de, es, fr, ja, ko, nl, zh-Hans, and zh-Hant.

## What changed

- English: new `site/migrate/index.md` ("Migrating from Arc or Zen"), a new
  `migrate` route and nav label after Importing & Exporting, and the edits to
  `import-export` and `switching-to-phi` in `english-delta.diff`. The diff was
  taken before round 2, which also replaced "Zen workspace" with "Zen Space"
  on the new page.
- Facts come from a static read of phibrowser-mac `v2.15.0` (`24c2345f`),
  not from a device run. Fangzhou (feature author) is asked to review the
  facts and Xinyue to test Arc and Zen migration on 2.15.0 stable. If either
  corrects the English, re-sync all eight locales.
- Per locale: new `site/<locale>/migrate/index.md`, the delta applied to the
  two edited pages, the translated `theme.pages.migrate` label, and the three
  pages copied to `localization/<locale>/content/`.
- `status.json`: the three pages are `translation: complete` /
  `contentReview: todo`; translation provenance names this run;
  productTerminology and searchQa evidence note that the new vocabulary and
  page need review. `sourceRevision` is unchanged, as in earlier runs.

## Process

One translator agent per locale worked from `brief-common.md` and
`refs-migrate.json` (76 shipped strings from the 2.15.0 catalog, all eight
locales). After reading all eight reports, the coordinator issued
`brief-corrections.md`; every agent applied it. The coordinator read both
Chinese pages in full for meaning and checked the others mechanically.

## Rulings in this run

| Concept                        | Ruling                                                                                                                                                              | Evidence                                                                                                                                                         |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Zen Spaces                     | The locale's Phi word for Space                                                                                                                                     | Zen en UI says Spaces and Create Space (zen-browser/l10n-packs `zen-workspaces.ftl`); Phi ships `app.browserMigration.zen.untitledSpaceName` with its Space word |
| Zen containers                 | Phi's shipped noun from `app.browserMigration.zen.container.numbered` (de Umgebung, es Contenedor, fr Conteneur, ja コンテナー, ko 컨테이너, nl Container, zh 容器) | That is the name a migrated Profile shows in Phi                                                                                                                 |
| Zen Essentials                 | Zen's own localized label where it ships one, glossed once with the English (es esenciales, ko 에센셜, zh-Hans 常驻标签页); English elsewhere                       | Zen `zen-general.ftl` `tab-context-zen-add-essential` per locale                                                                                                 |
| Arc Favorites                  | English "Favorites" in every locale; existing de, es, ko, nl switching-to-phi wording aligned                                                                       | Arc's UI is English only; fr "Favoris" is Phi's word for bookmarks                                                                                               |
| Chrome Web Store               | The name each locale already uses on `agent-passwords`                                                                                                              | Existing site usage                                                                                                                                              |
| Quoted labels on import-export | Must match the shipped string byte for byte, including the existing lines                                                                                           | de, es, ko, nl, zh-Hans old lines corrected (ellipsis style, wording)                                                                                            |

## Owner review pile

- **es pinned tab scope:** the pages use "alcance de las pestañas fijadas";
  the glossary and the shipped catalog use "ámbito". Kept "alcance" so the
  link text matches the linked bookmarks heading. Recommend ruling for
  "ámbito" and changing every es page in one pass.
- **zh-Hans title clash:** the Switching to Phi page's H1 迁移到 Phi is
  identical to the migration window title 迁移到 Phi. Recommend renaming the
  Switching page (for example 换用 Phi) in a separate pass.
- **Coined renderings:** de Quellprofil, Quell-Space; nl bronprofiel,
  bron-Space, sleutelhangervragen; zh-Hans 来源个人资料, 来源空间; es "ventana
  de migración" for the wizard (asistente is the AI assistant on es pages).
- **macOS terms not confirmed on an Apple page:** Always Allow in every
  locale and Full Disk Access in de, es, ko, nl, zh-Hant are taken from
  Phi's own shipped strings.
- **Unverified labels:** labels outside `refs-migrate.json` on import-export
  (Export Bookmarks…, Importing data from file…, Imported) were not re-checked
  in fr, ja, ko, nl, es, zh-Hans, zh-Hant; de checked them in the catalog.
- **Shipped-string defects (phibrowser-mac):** `app.browserMigration.pick.noSourcesFound`
  names Dia, which Migrate does not support; `app.phiMenu.importFromAnotherBrowser`
  ships `...` in several locales while the Migrate item ships `…`.

## Verification

- `node scripts/test-i18n.mjs`: passed, 9 locales and 270 Markdown files
  (warns that historical baseline `4321f0c` is absent from this checkout and
  skips the staleness comparison, as in earlier runs).
- `pnpm build`: VitePress build and `test-i18n-build` passed, 270 pages and
  40 search queries.
- `pnpm format:check` and `git diff --check`: passed.
- Writing checker: 0 problems on the three English pages; locale pages report
  only English-spelling false positives (fr "utilise").
- Coordinator gate script: structure parity with English (1 H1, 7 H2, 18
  table rows, 15 bullets, 5 steps), no dashes, no 您, every link
  locale-prefixed and live, five key labels quoted verbatim, nav label equals
  H1, register probes clean (de "Sie" hits are the pronoun "it/they").

These are local technical checks, not independent content approval or
deployed-site QA.
