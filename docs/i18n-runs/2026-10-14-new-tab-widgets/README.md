# i18n run 2026-10-14-new-tab-widgets

Syncs the English change from commit `eb3f991` (branch `docs/widget-updates`:
the New Tab & Widgets page brought up to date with the current new tab, plus
one sentence on the Skills page) into all eight locales.

## What this run changed

- Applied the English delta (`english-delta.diff`) to two pages per locale:
  - `site/<locale>/new-tab/index.md`: the third "Your new tab" bullet (the ⋮
    menu) and everything from the Widgets H2 down to, not including, "What's
    next". The H2/H3 structure now matches English: six H3s under Widgets.
    Unchanged meaning reuses each page's earlier wording.
  - `site/<locale>/skills/index.md`: the one sentence that matches English
    line 26 (the menu no longer "holds recent conversations").
- No new pages, routes, anchors, or resource labels; `guide.ts` and the
  locale resources are untouched.
- Every bold UI label is quoted from `refs-new-tab-widgets.json`, the shipped
  new-tab strings in phi-ai `staging` `75f5868d5`. In ja and zh-Hant the
  Refresh button on a suggestion and the Refresh menu item ship as different
  strings; each is quoted where it appears.
- Skills: es, ja, and ko pages use Habilidades, スキル, and 스킬, each
  page's existing term, so no page mixes two terms. The v2 glossary
  (2026-10-15) lists exactly these renderings as shipped, so the earlier
  plan to migrate those locales away from them no longer applies.
- `localization/<locale>/status.json`: `new-tab/index.md` and
  `skills/index.md` reset to `translation: complete` / `contentReview: todo`
  (the delta is machine translation; the earlier page-level approval no
  longer covers the whole page), and `sourceRevision` moved to `eb3f991`,
  then to `8a0ee56` after merging `main` (see below).
- One parallel translator agent per locale; the brief is in
  `brief-common.md`.

## Baseline after merging main

On 2026-10-15 `main` (PR #24, the Sync page and its translations, run
`2026-10-14-sync`) was merged into this branch as `8a0ee56`. The only
conflicts were `sourceRevision` in the eight `status.json` files; page states
merged cleanly, and the result keeps everything from `main` plus this run's
two page resets and an `owners.translation` note.

The staleness check compares root-language content between `sourceRevision`
and `HEAD`, so the only baseline that covers both English changes is the merge
commit itself. Every locale's `sourceRevision` now points at `8a0ee56`.
`main`'s previous baseline `b79db2b` is a commit from the PR #24 branch that
squash-merging left off `main`, so on `main` the check had been skipping with
a warning. On this branch it runs and passes; setting `de` back to `eb3f991`
makes it fail, as it should.

Squash-merging this PR will strand `8a0ee56` the same way. Afterwards, move
every locale's `sourceRevision` to the squash commit on `main` so the check
runs again.

## Review list for the content reviewer

Newly chosen terms with no ref or earlier page rendering, with the evidence
the translators cited:

| Term         | Renderings                                                                                             | Evidence                                                                                                      |
| ------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| panel        | Panel (de), panneau (fr), deelvenster (nl), パネル, 패널, 面板 (zh-Hans, zh-Hant)                      | Chrome xtb per locale; de and zh-Hans already used it on the Peek page                                        |
| RSS feed     | RSS-Feed, canal RSS, flux RSS, RSS-feed, RSSフィード, RSS 피드, RSS 订阅, RSS 饋給                     | Apple support per locale; **zh-Hans has no source** (Chrome and Apple zh-CN have no RSS string)               |
| GitHub forks | Forks (de, nl), forks (fr), bifurcaciones (forks) (es), フォーク, 포크, Fork (zh-Hans), fork (zh-Hant) | No Chrome or Apple source in any locale; GitHub docs where available. GitHub's own ko docs use 분기, not 포크 |
| regenerate   | plain wording in de, es, fr, ko; opnieuw genereren (nl); 重新生成 (zh-Hans); 重新產生 (zh-Hant)        | Chrome components_strings for zh-Hans and zh-Hant                                                             |

Other notes from the translators:

- nl: the shipped `promptPreferences.restore` string, "Verborgen meldingen
  terugzetten", uses "meldingen" (notifications) for prompts. Quoted verbatim;
  a product string question, not a page defect.
- fr: the old page named the Custom button **Personnaliser**; the shipped
  string is **Personnalisé**, which the page now uses.
- es: the kept H3 and prose say "añadir" while the shipped buttons say
  "Agregar". Inherited from the earlier page.

## Verification

- `pnpm test:i18n`: passed for 9 locales and 243 Markdown files.
- `pnpm format:check`: passed.
- `pnpm build` with the built i18n validation: passed for 9 locales, 243
  pages, and 40 search queries.
- `pnpm i18n:status <locale>`: `registered/review-pending` for all eight.
- Mechanical gate: no em or en dashes, no 您, no Sie or usted forms, H1/H2/H3
  sequence identical to English on every new-tab page, every internal link
  locale-prefixed, every shipped label in the refs present verbatim, no
  Hacker News or Reddit, no durations or counts.

## Review against phi-translate-validate v2

On 2026-10-15 `main` brought in v2 of the `phi-translate-validate` skill
(PR #27, merged here as `d2699cb`). The run's output was rechecked in the
skill's review mode, auditing the existing translations instead of
retranslating them:

- Stage 5 gates on the lines this branch changed in all 16 locale pages:
  no em or en dashes (whole page), no 您, no Sie forms, no usted, no 습니다
  or 십시오, no missing zh pangu spaces, no ja spaces at Japanese/Latin
  boundaries, every internal link locale-prefixed, no explicit anchors and
  no inbound links to new-tab headings, no Hacker News or Reddit. Every
  shipped label in `refs-new-tab-widgets.json` is on its locale's page.
- Vocabulary probe against `product-glossary.md` and
  `site-glossary-addendum.md`: Memory, Skills, New Tab and New Tab Page
  match the ratified rendering in every locale.
- Rendering: no literal `**` in any of the 18 built pages. The ja page
  writes `<strong>+</strong>` because `**+**` after a kana does not open
  bold under CommonMark rules.
- `check.py` on all 18 changed pages: 0 problems. Its warn-only "bare
  'Skills'" hits on the changed lines refer to the UI menu label and
  predate this branch.

Owner review pile, added by v2:

- **Custom** is an open ratification in the v2 glossary (de Anpassen vs
  Eigene, ko 커스텀 vs 맞춤). The pages quote the shipped strings, de
  **Eigene** and ko **맞춤**; if the owner rules otherwise, the product
  string and these two pages change together.

Translation completion is not content review. Every edited page stays at
`contentReview: todo` until a human reviewer approves it.
