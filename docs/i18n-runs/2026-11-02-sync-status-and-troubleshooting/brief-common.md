# Brief: Sync method step, status reasons and troubleshooting (run 2026-11-02-sync-status-and-troubleshooting)

## What happened in English

The English Sync page now documents the sync method step that Phi 2.15.0 shows
when a Mac with its own data joins an account with data (**Merge this Mac with
your account** or **Use your account's data**), the fixed Default Profile row,
the automatic first-Mac setup, every **Needs attention** reason, the
**Details** counts, the **Sync Now** end lines, the pinned tab scope line, the
setup load errors, and a new Troubleshooting section. The FAQ and the privacy
page each gain one sentence (FAQ: one new question). See `english-delta.diff`
for the exact hunks and `README.md` for the list.

## Per-locale tasks

1. Apply the English delta semantically to `site/<locale>/sync/index.md`.
   Edit only what the diff touches; do not re-translate other text. In short:
   the What syncs table row (**New tab behavior**), a new Keyboard shortcuts
   bullet, first-Mac steps 4 and 5, Add another Mac steps 3 to 6 plus the two
   paragraphs after them, two new H3 sections under Add another Mac (Use your
   account's data, If setup cannot load your account), the second Finish later
   paragraph, the restructured Check sync status section with three H3s, and
   the new `## Troubleshooting` section (six H3s) between Set up sync again and
   Signing out.
2. Apply the FAQ hunks to `site/<locale>/faq/index.md`: the extended answer to
   "Does Phi sync between Macs?" and the new `::: details` question "Why is one
   Mac stuck on Sync did not finish?" placed right after it, keeping the
   `::: details` format.
3. Apply the one-sentence hunk to the sync bullet of
   `site/<locale>/privacy/index.md`.
4. Keep every explicit anchor verbatim and add the new ones to the matching
   headings. Existing: `{#set-up-your-first-mac}`, `{#add-another-mac}`,
   `{#forgot-your-recovery-code}`, `{#remove-a-mac-from-sync}`, `{#reset-sync}`,
   `{#set-up-sync-again}`. New on existing headings: `{#what-syncs}`,
   `{#finish-later}`, `{#check-sync-status}`, `{#sync-or-export}`. New
   headings: `{#use-your-accounts-data}`, `{#setup-cannot-load-account}`,
   `{#needs-attention}`, `{#sync-details}`, `{#sync-now}`, `{#troubleshooting}`,
   `{#missing-shortcuts-and-open-tabs}`, `{#held-pinned-tabs}`,
   `{#sync-paused}`, `{#sync-needs-attention}`, `{#replace-did-not-finish}`,
   `{#account-values-replaced}`. Every in-page link must point at one of them.
5. Prefix internal links with the locale: `/<locale>/sync/#missing-shortcuts-and-open-tabs`,
   `/<locale>/sync/#held-pinned-tabs`, `/<locale>/import-export/`.
6. Bold every shipped UI label exactly as the locale ships it, from
   `refs-sync-status.json` (`labels`, binding) and the earlier
   `../2026-10-14-sync/refs-sync.json` and
   `../2026-11-02-sync-forgot-recovery-code/refs-sync-forgot.json`. Plural
   labels (**Received**, **Sent**, **Waiting to send**, **Held**): quote the
   label without its number placeholder. **Last problem** is the label part of
   `sync.status.lastProblem`; **Last successful sync on this Mac** is the part
   of `sync.status.lastSuccessAt` before the colon; **Pinned tab scope change
   not applied yet** is the part of `sync.status.pinnedTabScopeFailing` before
   the bracket. The menu path is the locale's macOS **Help** menu name (as the locale's
   Sync or export section already writes it), then
   `app.helpMenu.manageUserData`, then `app.helpMenu.exportUserData`, joined
   with the site's arrow, as the page already does under Sync or export.
7. Two quoted strings contain an em dash in every locale
   (`sync.pairing.error.replaceLocalFailed`, `sync.pairing.profiles.unreadable`,
   listed under `dashParaphrased`). Quote only the part before the dash in bold
   and paraphrase the rest, as English does. The Default-rule error, the
   pairing load errors and `sync.pairing.replaceLocal.defaultUnavailable` are
   quoted in full (English quotes only the first sentence of the default
   unavailable string and paraphrases the rest; do the same).
8. House rules: no em or en dashes anywhere, no 您 in Chinese, no Sie or
   usted, the locale's existing register and quote characters. CJK bold spans
   that end in an ellipsis or punctuation that breaks the Markdown parser use
   `<strong>` (as in the 2026-10-14 run); `test:i18n` rejects `<strong>` where
   `**` would work.
9. The sync page must end up with one H1 and the same number of H2 as English
   (14, counting "What's next"), and the same 17 H3s in the same order.
10. Update `localization/<locale>/status.json` for `sync/index.md`,
    `faq/index.md` and `privacy/index.md`: `translation: complete`,
    `contentReview: todo`, `sourceRevision` set to the full SHA of this run's
    English commit (given by the coordinator), and append this run to
    `owners.translation` like the earlier runs.
11. Do not touch English pages, other pages, locale resources, or `guide.ts`.

## Binding vocabulary

- `refs-sync-status.json`: shipped strings from the 2.15.0 catalogue,
  BINDING; flag defects instead of diverging.
- The two earlier refs files named in task 6.
- `.agents/skills/phi-translate-validate/references/product-glossary.md`
  and `references/locale-rules.md`.
- `.agents/skills/phi-help-writing/SKILL.md`: keep every limitation. In
  particular keep "cannot be undone", "Phi does not keep a copy of what it
  deletes", "There is no option that copies this Mac's data over your
  account", and that leaving does not cancel a replace that has started.

## Report back

Under 200 words: coined renderings, shipped-string defects noticed, gate
results for the table in `README.md`, anything you could not verify. Do not
paste the page.
