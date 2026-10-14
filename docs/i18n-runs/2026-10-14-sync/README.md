# i18n run 2026-10-14-sync

Documents cross-device Sync (the **Settings → Sync** pane) in English and
syncs the new page and its cross-links into all eight locales.

## What this run changed

- English commit `8a7be18` on branch `help/sync`: new page
  `site/sync/index.md` (what syncs and what does not, first-Mac setup with
  the one-time recovery code, adding a Mac by approval or recovery code,
  Profile and Space matching, Finish later, the status card, Devices,
  removal, Set up sync again, signing out, encryption, sync versus export),
  plus one cross-link each in `what-is-phi-browser`, `spaces`, and
  `privacy` ("What Phi does send"), and a three-question `## Sync` section
  in the FAQ. See `english-delta.diff`.
- Registered the `sync` route in `site/.vitepress/i18n/guide.ts` (Browser
  Workspace group, after Importing & Exporting) and added
  `theme.pages.sync` to all nine locale resources, using the shipped Sync
  pane title for each locale (Synchronisierung, Sincronización,
  Synchronisation, 同期, 동기화, Synchronisatie, 同步, 同步).
- Translated the new page into all eight locales and applied the English
  delta to the four edited pages per locale, one parallel translator agent
  per locale; brief in `brief-common.md`, binding vocabulary in
  `refs-sync.json`.
- The three English heading anchors `{#add-another-mac}`,
  `{#remove-a-mac-from-sync}` and `{#set-up-sync-again}` are explicit in
  every locale so the in-page links keep resolving.
- `localization/<locale>/status.json`: added `sync/index.md` and reset the
  four edited pages to `translation: complete` / `contentReview: todo`;
  `sourceRevision` moved to `8a7be18`.

## Evidence sources

- Product behaviour: `phibrowser-mac` `origin/dev` at `05160468`
  (2026-10-14), which the `release/2.13.0` branch contains in full:
  `docs/sync.md`, `docs/sync-e2e-test-cases.md`,
  `Sources/Sync/Phi/SyncableSettings.swift`, the Sync settings views, and
  `Resources/Localizable.xcstrings`. The KB pages
  `20-products/phibrowser/sync-service-design.md` and
  `30-projects/phinomenon/sync-service/status.md` were used for scope and
  delivery state.
- Shipped UI strings for the eight locales were pulled from that string
  catalogue into `refs-sync.json`. Most `sync.status.*` keys (Sync paused,
  Retry, Last problem, Sign-in expired, No connection, Server error, Sync
  needs to be reset, Sync Now, and the per-kind row labels) have no shipped
  translation yet; each locale coined one, listed below.
- Deliberately not quoted: the catalogue's `sync.contents.*` strings
  ("Sync contents", "What's included", the exclusions sentence) and a few
  others are present in the catalogue but used nowhere in the app's
  sources, so the page describes the facts behind them without naming them
  as UI. The Offline status is paraphrased in every language because the
  shipped English string contains an em dash.

## Verification

- `pnpm test:i18n`: passed for 9 locales and 243 Markdown files.
- `pnpm build` with the built i18n validation: passed for 9 locales, 243
  pages, and 40 search queries.
- `pnpm format:check`: passed.
- Mechanical gate over all eight locales: no em or en dashes, no 您,
  anchors present and used, every internal link locale-prefixed, one H1 and
  twelve H2 per page matching English, three new FAQ details blocks per
  locale. Four CJK bold spans ending in an ellipsis (zh-Hans and zh-Hant,
  sync page and FAQ) were converted to `<strong>` after `pnpm test:i18n`
  flagged them.
- `phi-help-writing/scripts/check.py` on the English pages: two findings,
  both the quoted button label **Register as new** on the sync page. The
  rule targets the account action ("create an account", never "register");
  this is the shipped control's name, so it stays and is argued in the PR.

Translation completion is not content review. Every new or edited page is
at `contentReview: todo` until a human reviewer approves it.

## Baseline note

`sourceRevision` points at the English commit on this branch. The
repository squash-merges, so after merge that commit is unreachable from
`main` and `pnpm test:i18n` will skip the staleness comparison with a
warning in full clones (as after the 2026-08-31 run). Bump every
`sourceRevision` to the squash commit in a follow-up to make the check run
again.

## Coined renderings (no shipped translation)

| English                | de                                         | es                                         | fr                                         | nl                                 |
| ---------------------- | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ---------------------------------- |
| Sync paused            | Synchronisierung pausiert                  | Sincronización en pausa                    | Synchronisation en pause                   | Synchronisatie gepauzeerd          |
| Retry                  | Erneut versuchen                           | Reintentar                                 | Réessayer                                  | Probeer opnieuw                    |
| Last problem           | Letztes Problem                            | Último problema                            | Dernier problème                           | Laatste probleem                   |
| Sign-in expired        | Anmeldung abgelaufen                       | Sesión expirada                            | Connexion expirée                          | Inlogsessie verlopen               |
| No connection          | Keine Verbindung                           | No hay conexión                            | Aucune connexion                           | Geen verbinding                    |
| Server error           | Serverfehler                               | Error del servidor                         | Erreur du serveur                          | Serverfout                         |
| Sync needs to be reset | Synchronisierung muss zurückgesetzt werden | Es necesario restablecer la sincronización | La synchronisation doit être réinitialisée | Synchronisatie moet worden gereset |
| Sync Now               | Jetzt synchronisieren                      | Sincronizar ahora                          | Synchroniser maintenant                    | Synchroniseer nu                   |

| English                | ja                       | ko                     | zh-Hans      | zh-Hant      |
| ---------------------- | ------------------------ | ---------------------- | ------------ | ------------ |
| Sync paused            | 同期を一時停止中         | 동기화 일시 중지됨     | 同步已暂停   | 同步已暫停   |
| Retry                  | 再試行                   | 다시 시도              | 重试         | 重試         |
| Last problem           | 前回の問題               | 마지막 문제            | 最近的问题   | 上次問題     |
| Sign-in expired        | サインインの有効期限切れ | 로그인 만료됨          | 登录已过期   | 登入已過期   |
| No connection          | 接続なし                 | 연결 없음              | 无网络连接   | 無網路連線   |
| Server error           | サーバーエラー           | 서버 오류              | 服务器错误   | 伺服器錯誤   |
| Sync needs to be reset | 同期のリセットが必要     | 동기화를 재설정해야 함 | 需要重置同步 | 同步需要重設 |
| Sync Now               | 今すぐ同期               | 지금 동기화            | 立即同步     | 立即同步     |

The per-kind row labels (Spaces, Bookmarks, Pinned tabs, URL rules,
Settings, Profiles) reuse each locale's glossary terms. "Phi Chat" stays in
English in every locale; no page or glossary entry renders it yet.

## Owner review list

Shipped-string defects to file with the product side:

- de: the Sync strings say "Account" while every German Help page says
  "Konto"; labels are quoted as shipped, prose uses Konto.
- es: the shipped Offline status begins "Sin conexión:", so the page renders
  "No connection" as "No hay conexión" to keep the two statuses distinct;
  the strings mix es-ES "Introduce" with es-419 "Agrega"; one string
  lowercases "reglas de URL" against the glossary's "Reglas de URL".
- fr: two shipped strings (setup introduction, review explanation) say
  "signets" where the glossary and every page say "Favoris"; "Associez vos
  profils" and "Profils du compte non attribués" lowercase "profils".
- ja: the shipped strings say ピンで固定されたタブ where the glossary has
  固定タブ; the pane says サインイン while get-started and the FAQ say
  ログイン (the page follows the pane); the import-export page's H1 and nav
  label differ.
- ko: "Details" ships as 세부사항 (standard spacing 세부 사항); pages mix
  고정 탭 and the shipped 고정된 탭.
- nl: shipped strings lowercase "profielen" while the pages capitalise
  Profiel.
- zh-Hans: shipped strings say 账户 while the pages say 账号 (labels quoted
  as shipped, prose keeps 账号); the glossary's 固定的标签页 is not what the
  strings or pages use (固定标签页).

Newly coined renderings to ratify:

- de: Auswahlfarbe (selection tint), Einstellungsbereich (the pane).
- ja: 選択時の色合い (selection tint).
- zh-Hant: 服務條款 for Terms (the pages use both 服務條款 and 使用條款);
  密碼管理工具 for a generic password manager, kept distinct from the
  代理密碼管理員 feature name.
- fr: "Et ensuite" for "What's next", the majority form on the French pages.

## How to re-run

Copy this directory's brief and refs, regenerate `english-delta.diff` from
the English commits being synced, and fan out one translator agent per
locale as described in the phi-translate-validate skill.
