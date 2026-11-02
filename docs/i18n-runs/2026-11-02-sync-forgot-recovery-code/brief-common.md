# Brief: Sync, forgot recovery code and Reset sync (run 2026-11-02-sync-forgot-recovery-code)

## What happened in English

The English Sync page now explains what to do when the recovery code is lost,
documents the **Back** button on the confirmation page and **Reset sync**, and
corrects the removal path to the shipped labels. Two FAQ answers follow. See
`english-delta.diff` for the exact hunks and `README.md` for the list.

## Per-locale tasks

1. Apply the English delta to `site/<locale>/sync/index.md`: step 3 of the
   first-Mac setup, the end of the recovery-code warning callout, the new
   `## Forgot your recovery code?` section with its four H3 cases (placed after
   the Finish later subsection, before Check sync status), the rewritten
   Remove a Mac paragraph and the new `### Reset sync` subsection, the new
   paragraph in Set up sync again, and the reworded bullet in How your data
   is protected. Edit only what the diff touches; do not re-translate other
   text.
2. Apply the two FAQ hunks to `site/<locale>/faq/index.md`, keeping the
   `::: details` format and each question's position.
3. Keep these anchors verbatim, and add the first one to the locale's
   first-Mac heading: `{#set-up-your-first-mac}`,
   `{#forgot-your-recovery-code}`, `{#reset-sync}`. The existing
   `{#add-another-mac}`, `{#remove-a-mac-from-sync}`, `{#set-up-sync-again}`
   stay. Every in-page link must point at one of them.
4. Prefix internal links with the locale: `/<locale>/sync/#forgot-your-recovery-code`,
   `/<locale>/sync/#reset-sync`.
5. Bold every shipped UI label exactly as the locale ships it. Labels come from
   `refs-sync-forgot.json` (`labels`, binding) and the 2026-10-14
   `refs-sync.json`. The removal path changes in every locale: use
   `sync.removal.sectionTitle`, `sync.removal.rowTitle`,
   `sync.removal.rowAction` and `sync.removal.confirmation.confirm`, and
   `sync.pairing.removeThisDevice` for the setup window. The quoted sentences
   (last-device note, not-last-device refusal, reset confirmation title) are
   quoted in full from the refs file.
6. `notYetShipped` keys have no translation yet. `sync.recovery.entry.forgotHelp`
   is quoted as a link label: render it as the natural question in your
   locale (normally your translated H2 text) and list it as a coinage.
7. House rules: no em or en dashes anywhere, no 您 in Chinese, no Sie or
   usted, the locale's existing register and quote characters. CJK bold
   spans that end in an ellipsis use `<strong>` (as in the 2026-10-14 run).
8. The sync page must end up with one H1 and the same number of H2 as English
   (12), and the same H3 set.
9. Update `localization/<locale>/status.json` for `sync/index.md` and
   `faq/index.md`: `translation: complete`, `contentReview: todo`,
   `sourceRevision` set to the English commit of this run.
10. Do not touch English pages, other pages, locale resources, or `guide.ts`.

## Binding vocabulary

- `refs-sync-forgot.json`: shipped strings from the 2.15.0 catalogue,
  BINDING; flag defects instead of diverging.
- `../2026-10-14-sync/refs-sync.json`: the Sync labels already quoted.
- `.agents/skills/phi-translate-validate/references/product-glossary.md`
  and `references/locale-rules.md`.
- `.agents/skills/phi-help-writing/SKILL.md`: keep every limitation. The
  "No Mac you still have" case must stay as blunt as English: no support
  path, no promise.

## Report back

Under 200 words: coined renderings, shipped-string defects noticed, gate
results for the table in `README.md`, anything you could not verify. Do not
paste the page.
