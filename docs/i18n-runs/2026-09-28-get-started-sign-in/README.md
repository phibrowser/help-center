# i18n run 2026-09-28-get-started-sign-in

Syncs the English change from PR #22 (merge commit `6effe67`: the
get-started page now explains signing in, exploring without an account,
and signing in later) into all eight locales.

## What this run changed

- Applied the English delta (`english-delta.diff`) to one page per locale,
  `site/<locale>/get-started/index.md`: the frontmatter description, a new
  "Sign in, or explore without an account" bullet, the reworded "AI is on
  by default" bullet, and a new "Signing in later" section. No new pages,
  routes, or resource labels; `guide.ts` and the locale resources are
  untouched.
- The new section heading carries an explicit `{#signing-in-later}` anchor
  in every locale, and the new in-page link in the sign-in bullet points at
  it, so the English anchor keeps resolving.
- Settings paths reuse each page's established rendering of
  **Settings → Phi AI** and build **Settings → Guest** by analogy with the
  shipped Guest pane title. Quoted UI strings (Explore Phi without signing
  in; Sign in to use AI features; Sign in to use Phi AI; Browser Memory;
  pinned tabs; bookmarks) are the shipped product translations in
  `refs-get-started-sign-in.json`.
- `localization/<locale>/status.json`: the edited page reset to
  `translation: complete` / `contentReview: todo` (the delta is machine
  translation; the earlier page-level approval no longer covers the whole
  page), and `sourceRevision` moved to `6effe67`. The previous baseline
  `e8cd0d8` was a branch commit not present on `main`, so `pnpm test:i18n`
  had been skipping the root-content staleness check with a warning since
  2026-09-02; the English changes from PR #20 (privacy telemetry wording)
  and PR #21 (Advanced settings and Kiosk shortcuts) were already carried
  into every locale by the 2026-09-08 run, so `6effe67` is a truthful
  baseline and the check runs again.
- One parallel translator agent per locale; the brief is in
  `brief-common.md`.

## Evidence sources

Shipped product strings were pulled from the published phi-i18n catalog
(`translations/<locale>/browser.json`); the commit is recorded in
`refs-get-started-sign-in.json`. One known drift, unchanged by this run:
the French page renders the Settings menu as **Paramètres** (its
established form since the 2026-08-26 draft) while the shipped catalog
uses "Réglages" for the profile-menu Settings action; the page's own
convention was followed for consistency within the page, and the drift is
left for the content reviewer.

## Verification

- `pnpm test:i18n`: passed for 9 locales and 234 Markdown files.
- `pnpm format:check`: passed.
- `pnpm build` with the built i18n validation: passed for 9 locales, 234
  pages, and 40 search queries.
- Mechanical gate: no em/en dashes, no 您, anchor and in-page link present
  in all eight pages, shipped strings quoted verbatim, all internal links
  locale-prefixed, five H2 sections per page matching English.

Translation completion is not content review. Every edited page stays at
`contentReview: todo` until a human reviewer approves it.
