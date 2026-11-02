# i18n run 2026-11-02-cli-permission-default

Corrects one passage on the Phi CLI page in English and the eight registered
locales: de, es, fr, ja, ko, nl, zh-Hans, and zh-Hant.

## What changed

- The English change is one passage in `site/phi-cli/index.md`, based on `a02d280`.
  "Allow agents to operate your Spaces" is on by default
  (`PhiPreferences.swift`, `userSpaceOperationsEnabled`). The page said off, in
  every language, which contradicted the app.
- Updated `site/<locale>/phi-cli/index.md` and mirrored it to
  `localization/<locale>/content/phi-cli/index.md`. The zh-Hans draft copy was
  absent and is now present.
- One translator agent per locale, followed by coordinator self-review. Final
  translations live in the page files.
- The page is `translation: complete` / `contentReview: todo` in every locale.
  This reopens its review in the seven locales where it was approved. Owners and
  privacy/legal records are preserved. `sourceRevision` is unchanged.

## Scope

This run covers the permission default only. The page's wider update for new CLI
commands waits for the CLI release. The phi-browser skill page is left out by the
owner's decision: it still says the permission is off by default, so the two
pages disagree until that page changes.

## Evidence

The quoted label comes from `phibrowser-mac/Resources/Localizable.xcstrings`, key
`settings.developer.agentBrowsingDataAccess.enableToggle`, catalog SHA-256
`a08b0ecf9e9762d9e7635cf46680b0e0379c14b460c54d63173ca2c9ee77f020`. This change
coins no new terms.

For the CLI release sync: locale CLI pages still carry "at any time" in the intro
and "always" in the "You stay in charge" heading.

## Verification and review state

- `node scripts/test-i18n.mjs`: passed, 9 locales and 261 Markdown files.
- `pnpm build`, including `test-i18n-build`: passed, 261 pages and 40 search queries.
- `pnpm format:check` and `git diff --check`: passed.
- Writing checker: English and seven locales passed. zh-Hant reports existing
  `phi-browser Skill` lines under the zh Skill ruling, none in the changed passage.
- The eight draft copies match their registered pages.

`node scripts/check-localization-status.mjs` still exits 1: historical
`sourceRevision` `6b773586bc9a3789a4170fbb2a1d852d2a2600db` is absent from this
checkout and reviews are pending, as in earlier runs. The baseline was preserved.

These checks are local technical validation, not independent content approval or
deployed-site QA. Locale reviewers still need to approve the final content.
