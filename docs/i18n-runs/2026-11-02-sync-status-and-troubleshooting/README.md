# i18n run 2026-11-02-sync-status-and-troubleshooting

Closes the verified gap list between the Sync help page and Phi 2.15.0: the
sync method step and replacing this Mac's data, the fixed Default Profile row,
the automatic first-Mac setup, every status reason, the Details counts, the
Sync Now end lines, the pinned tab scope line, setup load errors, and a new
Troubleshooting section. English only so far, on branch
`help/sync-forgot-recovery-code`, on top of run
`2026-11-02-sync-forgot-recovery-code`. See `english-delta.diff` for the exact
hunks.

## What this run changes

`site/sync/index.md`:

1. `## What syncs` gains `{#what-syncs}`. The Supported settings row replaces
   "the new-tab shortcut" with **New tab behavior** (what ⌘T opens).
2. "Some things stay where they are on purpose" gains a **Keyboard shortcuts**
   bullet (**Settings → Shortcuts** never syncs). The AI and agent settings
   bullet is kept.
3. `## Set up your first Mac`, steps 4 and 5: a brand-new account shows no
   matching pages; Phi completes on its own and shows **Setting up sync…**; an
   account that could not be read completely shows the Add another Mac pages
   instead. Step 5 no longer says "Click Finish".
4. `## Add another Mac`, new step 3 (sync method): **How should this Mac
   sync?**, **Merge this Mac with your account** (**Recommended**) and **Use
   your account's data**; when the step does not appear; no option copies this
   Mac over the account. Old steps 3 to 5 become 4 to 6.
5. Step 4 (profiles): this Mac's Default Profile is always matched to the
   account's default Profile, fixed row without picker; quotes the
   `defaultProfileMismatch` error.
6. Two paragraphs after the steps: Phi shows only pages that ask something and
   otherwise finishes with **Setting up sync…**; "nothing from either side is
   lost" now applies to Merge only.
7. New `### Use your account's data {#use-your-accounts-data}`: what is removed
   (non-default Spaces with their open tabs, bookmarks, pinned tabs, URL Rules,
   synced settings, Profiles the account lacks with history, extensions and
   site data), what is kept (Default and name-matched Profiles), **Replace
   what's on this Mac?**, **Replace this Mac's data**, **Replacing this Mac's
   data…**, the initial sync afterwards, and a `::: warning` with the backup
   hint (**Finish later**, **Help → Manage User Data → Export User Data…**,
   links to `/import-export/` and `#sync-or-export`).
8. New `### If setup cannot load your account {#setup-cannot-load-account}`:
   Spaces load timed out, sync unavailable, profiles or Spaces could not be
   loaded, an account Profile that **Can't be read right now**, and replace
   unavailable because the account's default Profile cannot be read.
9. `### Finish later` gains `{#finish-later}`, the sync method on the list of
   discarded choices, and a paragraph: a started replace is not cancelled by
   leaving; the next setup opens on **Replace what's on this Mac?** with no
   **Back** and continues; **Remove this device from sync…** stays offered.
10. `## Check sync status {#check-sync-status}` restructured: the status list
    (Sync paused now links to troubleshooting, Needs attention names the
    partial-failure line), **Last successful sync on this Mac**, **Waiting
    for profiles to load**, the **Pinned tab scope change not applied yet**
    line with its three reasons. New H3s:
    `### What each problem means {#needs-attention}` (canonical table of all
    nine problems), `### Details {#sync-details}` (Received, Sent, Waiting to
    send, Held; **No recent changes**), `### Sync Now {#sync-now}` (existing
    text, the **Waiting for all profiles to be available** tooltip, end lines
    **Sync did not finish** and **Couldn't start sync. Try again later.**).
11. New `## Troubleshooting {#troubleshooting}` after Set up sync again, six
    H3s: `{#missing-shortcuts-and-open-tabs}`, `{#held-pinned-tabs}` (Phi 2.12
    and 2.13 named), `{#sync-paused}`, `{#sync-needs-attention}` (points to
    the canonical table), `{#replace-did-not-finish}`,
    `{#account-values-replaced}`.
12. `## Sync or export` gains `{#sync-or-export}`.

`site/faq/index.md`, `## Sync`:

13. "Does Phi sync between Macs?" adds keyboard shortcuts to the list that does
    not sync, links `#missing-shortcuts-and-open-tabs`, and adds the sentence
    that **Use your account's data** deletes that Mac's own Phi data first.
14. New `::: details Why is one Mac stuck on Sync did not finish?` after it,
    linking `/sync/#held-pinned-tabs`.

`site/privacy/index.md`, sync bullet:

15. One sentence: **Use your account's data** deletes that Mac's own Phi data
    first and replaces it with the account's.

English sync page headings after this run: 1 H1, 14 H2 (`grep -c '^## '`,
including "What's next"; 13 before), 17 H3 (6 before).

Not changed: frontmatter descriptions, `guide.ts`, locale resources, the eight
locale trees, `localization/*/status.json`.

## Evidence sources

- `phibrowser-mac` tag `v2.15.0` (`24c2345f`): `Resources/Localizable.xcstrings`
  (every quoted label and every value in `refs-sync-status.json`, nine locales,
  no missing values), `Sources/Sync/Phi/SyncableSettings.swift` (synced
  settings; `openNewTabPageOnCmdT` is **New tab behavior**; shortcuts and
  AI/agent settings are not in the registry),
  `Sources/UserInterface/Preferences/Devices/DevicesSettingView.swift` (partial
  failure line shown with Needs attention; Last successful sync line; Sync Now
  end lines; **Waiting for all profiles to be available** is the button's
  tooltip, not an end line), `Sources/Sync/SyncStatusSnapshot.swift`.
- Release check: `defaultProfileMismatch`, `kindHeld`,
  `pinnedTabScopeFailing` and `waitingForProfilePairing` first appear in
  v2.13.0 (absent in v2.12.0); the sync method and replace strings first
  appear in v2.15.0.
- `phibrowser-mac` `origin/dev` `c3149697` (checkout
  `phibrowser-mac-recovery-code-help`), `docs/sync.md`: "Pairing page plan"
  (auto-complete, **Setting up sync…**), "Sync method and replacing this Mac's
  data" (when the step shows, the confirmation page, replace sequence, resume
  marker and locked page), "Profile pairing and the default profile" (fixed
  Default row), native status detail and pane contract (Held definition,
  problem precedence, Sync Now). `git diff v2.15.0..c3149697 -- docs/sync.md`
  only adds the Forgot link paragraph, so these sections describe 2.15.0.
- `docs/sync-e2e-test-cases.md` SYNC-P17, P19, P21.
- Shipped strings with an em dash, paraphrased on the page:
  `sync.pairing.error.replaceLocalFailed` (bold first sentence, the rest as
  prose), `sync.pairing.profiles.unreadable` (bold "Can't be read right now",
  the rest as prose). `sync.status.offline` was already paraphrased.
  `sync.pairing.replaceLocal.defaultUnavailable` is quoted to its first
  sentence. The backup hint's `›` menu separators are written with the site's
  arrow.

Not verified at runtime (source and docs only):

- The held-pinned-tabs cause (unmatched Default Profiles on Macs paired with
  2.12) and the remedy (remove this Mac from sync, set it up again, Merge) come
  from the run request and the Held definition; no repro was run.
- "Feedback in the menu at the top right of the window": the item is
  `browser.headerMoreMenu.feedbackAction` in the header's trailing area; the
  exact placement was not checked in a running app.
- "Restart Phi" as a remedy for the local read/save problems is advice, not a
  documented recovery path.

## Verification

English, before commit (pnpm 11.28.5 via `npx`):

| Command                                                | Result                                                                                                                                                      |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm format`                                          | formatted                                                                                                                                                   |
| `phi-help-writing/scripts/check.py` on the three pages | 1 finding: the pre-existing shipped label **Register as new** (argued in the 2026-10-14 run)                                                                |
| `pnpm test:i18n`                                       | fails only on the expected gate: all eight locales are stale relative to root content (their `sourceRevision` `d524ebf` is reachable now); no other failure |
| `pnpm build`                                           | stops at its `test:i18n` step for the same reason; `vitepress build site` and `test:i18n:build` run directly pass: 9 locales, 261 pages, 40 search queries  |
| rendered `help/sync/index.html`                        | all 22 explicit anchors present; every in-page `href="#…"` resolves                                                                                         |

The staleness failure clears when the eight locales and their `status.json`
files are updated by the translators.

Locale results (fill in after the translator run):

| Locale  | H1/H2/H3 | anchors | dashes/您 | status.json | coinages |
| ------- | -------- | ------- | --------- | ----------- | -------- |
| de      |          |         |           |             |          |
| es      |          |         |           |             |          |
| fr      |          |         |           |             |          |
| ja      |          |         |           |             |          |
| ko      |          |         |           |             |          |
| nl      |          |         |           |             |          |
| zh-Hans |          |         |           |             |          |
| zh-Hant |          |         |           |             |          |

## How to run the locales

One translator per locale with `brief-common.md`, binding vocabulary in
`refs-sync-status.json`, plus the two earlier refs files it names.
