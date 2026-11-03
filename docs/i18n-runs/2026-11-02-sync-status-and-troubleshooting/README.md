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

| Locale  | H1/H2/H3    | anchors                                      | dashes/您 | status.json                                                           | coinages                                                                                                                                                                                                                        |
| ------- | ----------- | -------------------------------------------- | --------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| de      | 1 / 14 / 17 | 22, same order as English, all links resolve | 0 / 0     | sync, faq, privacy complete / review todo; sourceRevision `4321f0ca…` | Synchronisierungsmethode (sync method); Fehlerbehebung (Troubleshooting, Chrome de); count labels quoted lowercase as shipped; tooltip paraphrased                                                                              |
| es      | 1 / 14 / 17 | 22, same order as English, all links resolve | 0 / 0     | sync, faq, privacy complete / review todo; sourceRevision `4321f0ca…` | Solución de problemas; método de sincronización; "Se conserva:" (parallel to shipped "Se elimina de este Mac"); recuento(s); tooltip paraphrased                                                                                |
| fr      | 1 / 14 / 17 | 22, same order as English, all links resolve | 0 / 0     | sync, faq, privacy complete / review todo; sourceRevision `4321f0ca…` | mode de synchronisation; Compteur (Details column); count labels quoted lowercase; jumelé / associer from shipped strings; held-pinned-tabs H3 paraphrased                                                                      |
| ja      | 1 / 14 / 17 | 22, same order as English, all links resolve | 0 / 0     | sync, faq, privacy complete / review todo; sourceRevision `4321f0ca…` | 設定でアカウントを読み込めない場合, 各問題の意味, トラブルシューティング and the six troubleshooting H3s; 保持されるもの (parallel to shipped このMacから削除される項目); 選択メニュー (picker); count labels quoted without 件 |
| ko      | 1 / 14 / 17 | 22, same order as English, all links resolve | 0 / 0     | sync, faq, privacy complete / review todo; sourceRevision `4321f0ca…` | 문제 해결 (Chrome/Apple ko); 키보드 단축키 (from shipped 단축키); 기본 프로필 (glossary 2026-10-15); 고를 수 있는 메뉴 (picker); ~경우 H3 pattern                                                                               |
| nl      | 1 / 14 / 17 | 22, same order as English, all links resolve | 0 / 0     | sync, faq, privacy complete / review todo; sourceRevision `4321f0ca…` | De gegevens van je account gebruiken (H3, from shipped label); Problemen oplossen (Apple nl); synchronisatiemethode; knopinfo (tooltip, Apple nl); standaardprofiel                                                             |
| zh-Hans | 1 / 14 / 17 | 22, same order as English, all links resolve | 0 / 0     | sync, faq, privacy complete / review todo; sourceRevision `4321f0ca…` | 故障排除 (H2, not probed against Apple/Chrome zh-CN corpus); 悬停提示 (tooltip); 键盘快捷键 (from shipped 快捷键); 表头 计数/统计的内容; 保留：; 固定标签页被暂存 (from shipped 已暂存)                                         |
| zh-Hant | 1 / 14 / 17 | 22, same order as English, all links resolve | 0 / 0     | sync, faq, privacy complete / review todo; sourceRevision `4321f0ca…` | 疑難排解 (Apple/Chrome zh-TW); 工具提示 (Chrome zh-TW); 同步方式 (from shipped 這部 Mac 要如何同步？); 釘選分頁遭到保留 (from shipped 保留); 預設設定檔 (glossary 2026-10-15)                                                   |

## How to run the locales

One translator per locale with `brief-common.md`, binding vocabulary in
`refs-sync-status.json`, plus the two earlier refs files it names.

## Locale results (coordinator, 2026-11-02)

Eight translator agents, one per locale, edited `site/<locale>/sync/index.md`, `faq/index.md` and `privacy/index.md` plus `localization/<locale>/status.json`. Gates re-run by the coordinator over the finished tree: every locale has H1/H2/H3 = 1/14/17, the 22 explicit anchors in English order, zero U+2014/U+2013 and zero 您 across the three pages, four locale-prefixed sync links in the FAQ and one in privacy, and 26 table rows on the sync page like English. The coordinator read zh-Hans and zh-Hant in full for the sync method step, Use your account's data, and Troubleshooting (meaning matches English, the no-support-path wording is intact); the other six were checked for structure. `pnpm format`, `format:check`, `test:i18n`, `build` and `i18n:status` results are in the commit that carries the locales.

## Owner review pile (needs a ruling, not applied silently)

- **"A browser migration is running"** (`sync.status.pinnedTabScopeFailing` reason) ships in fr, ja, nl, zh-Hans and zh-Hant as "a migration from another browser is running". Translators doubted it; it is correct: in Phi, a browser migration is the import from another browser. No change.
- **Pinned tab scope wording split in the shipped catalogue:** es `ámbito` in the scope line vs `alcance` elsewhere; ja 固定タブの適用範囲 vs glossary 固定タブの範囲; ko 고정 탭 범위 vs 고정된 탭 범위. Pages quote the shipped label and keep the glossary term in prose; the client catalogue should pick one.
- **de Help menu:** shipped "Nutzerdaten verwalten" next to "Benutzerdaten exportieren…"; the older Sync or export section says "Benutzerdaten verwalten". Client-side inconsistency; the page quotes both as shipped.
- **de:** replace sheet title "Daten dieses Mac ersetzen?" and its button are identical apart from the question mark; "%lld warten auf das Senden" reads awkwardly.
- **nl:** `sync.pairing.replaceLocal.defaultUnavailable` says "Kies Samenvoegen" but no button carries that label.
- **zh-Hans:** `overwrite.explanation` says URL 规则 while every other string says 网址规则; the page also mixes 账户 / 账号 (pre-existing).
- **Dash split:** `replaceLocalFailed` and `profiles.unreadable` carry an em dash only in English; most locales have a colon, semicolon or comma there. Each locale bolds the first clause and paraphrases the rest as English does (ko quotes `unreadable` in full because its first clause cannot stand alone).
- **ko:** one pre-existing `<strong>재설정…</strong>` followed by a space could be plain bold; left as is.
- New Troubleshooting headings and the words for tooltip and picker are coined in every locale (table above); the product glossary has no entry for them yet.
