# i18n run 2026-11-02-sync-forgot-recovery-code

Explains what to do when the sync recovery code is lost, documents the
**Back** button on the confirmation page and **Reset sync** (both shipped in
Phi 2.15.0, build 944), and prepares the delta for the eight locales.

## What this run changes

English only so far, on branch `help/sync-forgot-recovery-code`. See
`english-delta.diff` for the exact hunks.

`site/sync/index.md`:

1. `## Set up your first Mac` gains the explicit anchor
   `{#set-up-your-first-mac}`, because the new section links to it.
2. Step 3 (Confirm your recovery code): **Back** shows the same code again;
   the existing sentence about sync staying off is kept; after closing the
   window or restarting, **Back** is gone because the code is not kept.
3. The `::: warning The recovery code is shown once` callout ends with a link
   to the new section.
4. New `## Forgot your recovery code? {#forgot-your-recovery-code}` after
   `### Finish later`, before `## Check sync status`, with four H3 cases:
   still setting up the first Mac (Back; Phi 2.14 and earlier or a closed
   window means Reset sync), another Mac is still set up (join by approval;
   keep one Mac set up), this is the only Mac or you want to start over
   (Reset sync, then first-Mac setup with a new code), and no Mac you still
   have is set up (nothing can unlock the encrypted copy; a Mac that is not
   set up cannot reset; a lost Mac still counts as set up). It names the
   **Forgot your recovery code?** link on the **Enter your recovery code**
   page, which ships in the release after 2.15.0.
5. `## Remove a Mac from sync`: the path is corrected to the shipped labels
   (section **Removal**, row **Remove this Mac from sync**, button
   **Remove…**, confirm **Remove This Device**; the setup window's
   **Remove this device from sync…**). The old line "You cannot remove the
   last Mac on the account" is replaced by a pointer to Reset sync. The
   "Removal does not re-key your account" warning is unchanged.
6. New `### Reset sync {#reset-sync}` under Remove a Mac: when it appears,
   the steps (**Reset…**, **Delete all sync data for this account?**,
   **Delete All Sync Data**), what is deleted, that local browsing data stays,
   that other Macs show Set up sync again, the setup window's last-device
   path, and the "another device has joined" refusal.
7. `## Set up sync again` gains one paragraph: Macs see this state after
   Reset sync was used on the account's last Mac.
8. `## How your data is protected`: "That is why there is no 'forgot your
   recovery code' link anywhere" is replaced, because the link now exists; it
   explains options and none brings the code back.

`site/faq/index.md`, `## Sync` section:

9. "What happens if I lose my recovery code?" mentions Reset sync and links
   `/sync/#forgot-your-recovery-code`.
10. "Can I remove a Mac I no longer have?" uses the shipped **Removal**
    section instead of the old "Remove this device from sync…" path, still
    says a lost Mac cannot be removed, and adds that the only set-up Mac shows
    **Reset sync** (link `/sync/#reset-sync`).

H2 count of the English sync page, counted as `grep -c '^## '` (which
includes "What's next"): 12 before, 13 after (the new Forgot section). The FAQ keeps its H2 count and its three Sync details blocks.

Not changed: frontmatter descriptions, `guide.ts`, locale resources, the eight
locale trees, `localization/*/status.json`.

## Evidence sources

- `phibrowser-mac` tag `v2.15.0` (`24c2345f`, 2026-10-29), the 2.15.0 stable:
  `Resources/Localizable.xcstrings` (all quoted labels and every value in
  `refs-sync-forgot.json`), `Sources/Sync/Keys/UI/RecoveryCodeEntryView.swift`
  (Back and its hint, shown only while the window that displayed the code is
  open), `Sources/UserInterface/Preferences/Devices/DevicesSettingView.swift`
  (Removal section, Reset sync row shown when the device list has only this
  Mac).
- `phibrowser-mac` `origin/dev` at `c3149697` (2026-11-02) in the checkout
  `phibrowser-mac-recovery-code-help`: `docs/sync.md` (recovery code and
  "Reset sync" sections), `Sources/Sync/Keys/UI/SelfRevokeStrings.swift`
  (reset confirmation and refusal copy),
  `Sources/Sync/Keys/UI/PairingWizardView.swift` (the setup window's remove,
  last-device note and reset offer), `KeyLayerViewModel.swift`
  (`canShowRecoveryCodeAgain`).
- The same checkout's uncommitted work for the next release
  (`RecoveryCodeDisplayView.swift`, `RecoveryCodeEntryView.swift`,
  `SyncHelpLinks.swift`): the new keys `sync.recovery.save.lossWarning` and
  `sync.recovery.entry.forgotHelp` and the fixed anchor
  `#forgot-your-recovery-code`.
- Correction to the run request: the request named the section "Recovery and
  removal". No such string exists in the catalogue; the shipped header is
  **Removal** (`sync.removal.sectionTitle`), and the old page's
  "Remove this device from sync…" in Settings was also stale. Both are fixed
  in English; locales carry the same stale path and get the fix through the
  delta.
- Not runtime-verified: that a first Mac which closed setup before confirming
  the code shows **Reset sync** in Settings. The source says the pane is
  unlocked in that state and the Removal row depends only on the device list,
  so the page sends those users to Reset sync.

## Verification

English, run before commit:

| Command                                                         | Result                                                                                                                                                    |
| --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm exec prettier --write` on the two pages and the refs file | formatted                                                                                                                                                 |
| `pnpm test:i18n`                                                | passed for 9 locales and 261 Markdown files; warning: baseline commit `6b773586` is not in this checkout, so the root-content staleness check was skipped |
| `pnpm build`                                                    | passed: 9 locales, 261 pages, 40 search queries                                                                                                           |
| `phi-help-writing/scripts/check.py` on the two pages            | 2 findings, both the pre-existing shipped label **Register as new** (argued in the 2026-10-14 run)                                                        |
| rendered `help/sync/index.html`                                 | ids `forgot-your-recovery-code`, `reset-sync`, `set-up-your-first-mac` present                                                                            |

The i18n gates did not fail on the lagging locales: `test:i18n` does not
compare H2 counts, and the staleness check was skipped as above. Expect it to
flag the eight `sync/index.md` and `faq/index.md` pages as stale wherever the
baseline commit is reachable.

Locale results (run 2026-11-02, eight translator agents, one per locale;
gates re-run by the coordinator over the finished tree):

| Locale  | sync page H1 / H2 / H3 | anchors (6, same as English) | dashes / 您 | status.json                                 | forgotHelp link label (coined)                          |
| ------- | ---------------------- | ---------------------------- | ----------- | ------------------------------------------- | ------------------------------------------------------- |
| de      | 1 / 13 / 6             | all present, links resolve   | 0 / 0       | both pages complete, review todo, `d524ebf` | Wiederherstellungscode vergessen?                       |
| es      | 1 / 13 / 6             | all present, links resolve   | 0 / 0       | same                                        | ¿Has olvidado tu código de recuperación?                |
| fr      | 1 / 13 / 6             | all present, links resolve   | 0 / 0       | same                                        | Code de récupération oublié ? (NBSP before ?)           |
| ja      | 1 / 13 / 6             | all present, links resolve   | 0 / 0       | same                                        | 復旧コードをお忘れですか？ (H2: 復旧コードを忘れた場合) |
| ko      | 1 / 13 / 6             | all present, links resolve   | 0 / 0       | same                                        | 복구 코드를 잊어버렸나요?                               |
| nl      | 1 / 13 / 6             | all present, links resolve   | 0 / 0       | same                                        | Herstelcode vergeten?                                   |
| zh-Hans | 1 / 13 / 6             | all present, links resolve   | 0 / 0       | same                                        | 忘记了恢复代码？                                        |
| zh-Hant | 1 / 13 / 6             | all present, links resolve   | 0 / 0       | same                                        | 忘記復原代碼了嗎？                                      |

`sourceRevision` is the full SHA `d524ebf228400112575a08dc013223822b2d21ea`
in every locale (two translators had written the short form; normalised by
the coordinator).

After the locales (coordinator, same worktree, pnpm 11.28.5 via `npx`):

| Command                        | Result                                                             |
| ------------------------------ | ------------------------------------------------------------------ |
| `pnpm format` + `format:check` | all files use Prettier code style                                  |
| `pnpm test:i18n`               | passed for 9 locales and 261 Markdown files                        |
| `pnpm build`                   | passed: 9 locales, 261 pages, 40 search queries                    |
| `pnpm i18n:status <locale>`    | `registered/review-pending` for all eight (expected: reviews todo) |

Coordinator read: English, zh-Hans and zh-Hant for meaning (the four cases,
the Reset sync steps and both FAQ answers say what English says, and the
"no Mac you still have" case promises nothing); the other six for structure.

## Owner review pile (needs a ruling, not applied silently)

- **Update 2026-11-02 (later):** the client translation landed on PR #278 (`8ec3f430`): de, fr, nl and zh-Hans match the Help renderings; zh-Hant ships 忘記復原代碼？ and the Help page now quotes that (H2, link label and links updated); es ships ¿Olvidaste tu código de recuperación? (es-419 preterite, while the shipped backHint on the same page is peninsular ¿No lo has guardado?), ko ships 복구 코드를 잊으셨나요? (honorific 시, while the shipped backHint is plain 해요: 아직 저장하지 않았나요?), ja ships 復旧コードをお忘れですか? with a half-width ? (37 of 40 shipped ja questions end in full-width ？). Owner ruling pending on whether the client strings change to the Help renderings or the three Help pages follow the client.
- **`sync.recovery.entry.forgotHelp` was not translated in the client when this run was made.**
  The link label renderings in the table above were coined for the Help
  page from each locale's forgot-password pattern (macOS "Passwort
  vergessen?", "Mot de passe oublié ?", "Wachtwoord vergeten?", Apple ja
  「パスワードをお忘れですか？」, Chrome zh-CN 「忘记了密码？」, Chrome zh-TW
  「忘記密碼了嗎？」, shipped ko backHint 「아직 저장하지 않았나요?」, shipped es
  backHint "¿No lo has guardado?"). The translation repository should adopt
  the same renderings for the client key so the link and the Help heading
  match; if it rules differently, update the eight pages.
- **es:** "¿Has olvidado…?" (peninsular present perfect, following the shipped
  backHint) replaces the old page's "¿Olvidaste…?" (es-419 preterite). Rule
  which form the product uses.
- **de:** prose says "Konto" while shipped strings say "Account" (pre-existing
  split, kept; quoted strings keep "Account").
- **fr:** shipped buttons say "Supprimer" for removing a device while the prose
  keeps "retirer" (pre-existing).
- **ja:** the shipped Removal section title and the "Remove…" button are both
  削除, so one sentence repeats the word; quoted as shipped. The H2 uses the
  Apple support heading pattern 「〜を忘れた場合」 rather than the question form.
- **ko:** the shipped backHint says 윈도우 where the page says 창 (not quoted).
- **nl:** the `### Reset sync` heading is the infinitive "Synchronisatie
  resetten" while the bold label stays the shipped **Reset synchronisatie**,
  mirroring the existing heading/button pair for "Set up sync again".
- **zh-Hans:** shipped `sync.pairing.removeThisDevice` says 此设备 while the
  Settings row says 这台 Mac; both quoted as shipped. The page mixes 账户 and
  账号 (pre-existing).

## How to run the locales

One translator per locale with `brief-common.md`, binding vocabulary in
`refs-sync-forgot.json`, plus the 2026-10-14 run's `refs-sync.json` for the
labels this delta keeps quoting.
