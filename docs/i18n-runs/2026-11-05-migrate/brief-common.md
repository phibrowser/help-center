# Brief: Migrate from Another Browser (run 2026-11-05-migrate)

## What happened in English

User feedback #282 (PHI-1899): the Help Center explained **Import from Another
Browser…** but not **Migrate from Another Browser…**, which sits beside it in
the Phi menu since 2.15.0. English now has:

- a new page `site/migrate/index.md`, "Migrating from Arc or Zen", with a
  Migrate vs Import table, prerequisites, the wizard steps, what each source
  brings across, limits, the report, and re-running;
- `site/import-export/index.md`: an "Import or Migrate" tip, Dia added as a
  source, which sources appear when, a data-type table, Full Disk Access for
  Safari, Profile-level data, and the closing link list now uses comma glosses;
- `site/switching-to-phi/index.md`: an intro paragraph pointing at Import and
  Migrate, an Arc-section paragraph about Migrate, and one new link.

Facts come from phibrowser-mac `v2.15.0`. See `english-delta.diff` for the two
edited pages; read `site/migrate/index.md` in full.

## Per-locale tasks

1. Create `site/<locale>/migrate/index.md`: a complete translation of
   `site/migrate/index.md`. Keep the frontmatter with a translated
   `description`, one H1, every H2 in order, both tables (same rows and
   columns), every bullet and step, and every limitation. Give each H2 an
   explicit id equal to the English slug: `{#migrate-or-import}`,
   `{#before-you-start}`, `{#running-a-migration}`, `{#what-comes-across}`,
   `{#reading-the-report}`, `{#migrating-again}`, `{#what-to-read-next}`.
2. Apply `english-delta.diff` to `site/<locale>/import-export/index.md` and
   `site/<locale>/switching-to-phi/index.md`. Edit only what the diff touches;
   do not re-translate other text. If the locale's closing link list already
   uses commas (or the locale's natural equivalent), leave it.
3. Prefix every internal Help link with the locale: `/<locale>/migrate/`,
   `/<locale>/import-export/`, `/<locale>/bookmarks/#choose-a-pinned-tab-scope`
   (that anchor already exists in every locale), and so on.
4. Replace the English placeholder value of `theme.pages.migrate` in
   `site/.vitepress/i18n/locales/<locale>.json` with the translated nav label.
   It must match the H1 of your new page. Change nothing else in that file.
5. Quote shipped UI labels in bold exactly as the locale ships them, from
   `refs-migrate.json` (BINDING). Key labels: `app.phiMenu.importFromAnotherBrowser`,
   `app.phiMenu.migrateFromAnotherBrowser`, `app.browserMigration.windowTitle`,
   `app.browserMigration.pick.continueButton`, `app.browserMigration.preview.heading`,
   `app.browserMigration.preview.startButton`, `app.browserMigration.report.heading`,
   `app.browserMigration.report.doneButton`, `app.browserMigration.report.goToSpaceButton`
   (the English page says "**Go to** followed by a Space's name"; render the
   fixed part of the shipped string), `app.browserMigration.rerun.confirmButton`,
   `app.browserMigration.report.spaceNotCreated`, `app.browserMigration.report.bookmarksFailed`,
   `oobe.importBrowserData.source.*Option`, `oobe.importBrowserData.permission.openSettingsButton`,
   `oobe.importBrowserData.importButton`. The preview summary example
   ("_Will create 2 Profiles and 5 Spaces._") follows
   `app.browserMigration.preview.summary` with the plural forms filled in.
   Keep the trailing ellipsis exactly as the locale's shipped string has it
   (some ship `...`, some `…`); do not normalize a shipped label.
6. Use the vocabulary the locale's existing Help pages already use for Space,
   Profile, pinned tab, pinned tab scope, bookmark, Incognito, Favorites.
   Arc's **Favorites** and Zen's **Essentials**, **containers**, and
   **workspaces** are the other browsers' own feature names: keep them in
   English unless that browser itself ships a localized name in your locale
   that you can cite; flag what you chose. Keychain, Full Disk Access, and
   **Always Allow** are macOS terms: use Apple's own rendering in your
   locale (support.apple.com), cite it.
7. House rules: no em or en dashes anywhere, no 您 in Chinese, no Sie or
   usted, the locale's existing register and quote characters. If a CJK bold
   span fails `node scripts/test-i18n.mjs`, use `<strong>` for that span only.
8. Do not touch English pages, other pages, other locales, `guide.ts`,
   `localization/`, or `status.json`. No git commands.

## Binding vocabulary

- `refs-migrate.json`: 76 shipped strings from the 2.15.0 catalog with all
  eight renderings, BINDING; flag defects instead of diverging.
- `.agents/skills/phi-translate-validate/references/product-glossary.md`,
  `references/site-glossary-addendum.md`, and `references/locale-rules.md`.
- `.agents/skills/phi-help-writing/SKILL.md`: keep every limitation as blunt
  as English (open tabs do not move, history is recent, the report does not
  flag denied Keychain cookies, re-running creates a second set, no ongoing
  sync).

## Report back

Under 200 words: the nav label you chose, coined renderings, decisions on
Favorites, Essentials, containers, workspaces, Keychain, Full Disk Access,
Always Allow (with citations), shipped-string defects noticed, and anything
you could not verify. Do not paste the page.
