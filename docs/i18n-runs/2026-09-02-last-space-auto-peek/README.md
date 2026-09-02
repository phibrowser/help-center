# i18n run 2026-09-02-last-space-auto-peek

Syncs the English changes from PR #19 (commit `e8cd0d8`: the last-Space
delete rule and the automatic Peek View toggle) into all eight locales.

## What this run changed

- Applied the English delta (`english-delta.diff`) to five pages per
  locale: bookmarks, faq, peek, spaces, and switching-to-phi. No new
  pages, routes, or resource labels; `guide.ts` and the locale resources
  are untouched.
- The renamed Peek section heading ("Peek settings") carries an explicit
  `{#peek-settings}` anchor in every locale, and the new in-page link in
  the first "Open a Peek" bullet points at it.
- `localization/<locale>/status.json`: the five edited pages reset to
  `translation: complete` / `contentReview: todo` (the delta is machine
  translation; earlier page-level approvals no longer cover the whole
  page), and `sourceRevision` moved to `e8cd0d8`. The previous baseline
  `c4bda7f` is not in this clone, so `pnpm test:i18n` had been skipping
  the root-content staleness check with a warning; it runs again now.
- One parallel translator agent per locale; the brief is in
  `brief-common.md`, binding vocabulary in `refs-last-space-auto-peek.json`.

## Evidence sources

Shipped product strings were pulled from `phibrowser-mac`
`Resources/Localizable.xcstrings` at `082a9373` for the labels these
pages quote (recorded in the refs file). Contested renderings were checked
against the Chrome xtb corpus for the locale and Apple support pages; each
agent's report carries the URL and quoted phrase, summarised below.

## Newly coined renderings to ratify

The product catalog ships `settings.navigations.peek.autoToggle.title` and
`.description` in English only at `082a9373`. The pages quote a coined
title per locale, built by analogy with the shipped "Enable Peek View"
string. The product side should ship these (or its own wording), after
which the pages need a matching find-and-replace.

| Locale  | "Automatically peek from pinned tabs and bookmarks"                              | "Peek settings" heading |
| ------- | -------------------------------------------------------------------------------- | ----------------------- |
| de      | Links aus angehefteten Tabs und Lesezeichen automatisch in Peek-Ansicht öffnen   | Peek-Einstellungen      |
| es      | Abrir automáticamente los enlaces de pestañas fijadas y marcadores en vista Peek | Configuración de Peek   |
| fr      | Ouvrir automatiquement une vue Peek depuis les onglets épinglés et les favoris   | Réglages de la vue Peek |
| ja      | 固定タブとブックマークのリンクを自動的にPeekビューで開く                         | Peekの設定              |
| ko      | 고정된 탭과 북마크에서 Peek 자동 열기                                            | Peek 설정               |
| nl      | Open automatisch een Peek vanuit vastgezette tabbladen en bladwijzers            | Peek-instellingen       |
| zh-Hans | 自动在 Peek 视图中打开固定标签页和书签的链接                                     | Peek 设置               |
| zh-Hant | 自動從釘選分頁和書籤開啟 Peek                                                    | Peek 設定               |

Suggested description strings offered by the agents, not used on any page:

- de: Links, die die Website eines angehefteten Tabs oder Lesezeichens verlassen, öffnen sich in einem Peek-Panel statt in einem neuen Tab.
- es: Los enlaces que salen del sitio de una pestaña fijada o de un marcador se abren en un panel Peek en lugar de en una pestaña nueva.
- zh-Hans: 固定标签页或书签中离开当前网站的链接会在 Peek 面板中打开，而不是新标签页

The de agent notes its title is longer than the English; a noun-form
alternative is "Automatische Peek-Ansicht für angeheftete Tabs und
Lesezeichen" if the settings pane needs something shorter.

## Terminology decisions resting on tree precedent

Neither Chrome nor Apple names a settings switch as a control in most
locales, so "switch" and "greyed out" were settled by the locale's own
Help tree, with market evidence where it exists:

- "switch": de Schalter (Google help de, tree), es interruptor (tree only;
  FundéuRAE unreachable), fr interrupteur (tree; Apple fr says
  commutateur, an owner call tree-wide), ja スイッチ (tree), ko 스위치
  (tree), nl schakelaar (Google help nl, tree), zh-Hans 开关 (Chrome
  zh-CN, tree), zh-Hant 開關 (tree only).
- "greyed out": de ausgegraut (Google Chromebook help, tree; Apple de says
  abgeblendet), es atenuado (Apple es-es and es-lamr), fr grisée (Apple
  fr), ja グレイ表示 (Apple ja), ko 흐리게 표시 (Apple ko), nl gedimd
  (Apple nl), zh-Hans 呈灰色不可用 (tree; Apple zh-CN 显示为灰色), zh-Hant
  呈現灰色 (Apple zh-TW).
- "default Space": de Standard-Space, es Espacio predeterminado, fr Espace
  par défaut, ja デフォルトスペース, ko 기본 스페이스 (정해진 rather than
  고정된, to avoid colliding with 고정된 탭), nl standaard-Space, zh-Hans
  默认空间, zh-Hant 預設空間.
- ja and ko wrap the menu path ending in "…" in `<strong>` where a CJK
  character follows, because the closing `**` after U+2026 is not
  right-flanking; this matches the existing `<strong>スペース → URLルール…</strong>`
  pattern in both trees.

## Owner review list

Shipped-string defects to file with the product side:

- es: the catalog uses es-419 "Agregar" while the Help es tree uses es-ES
  "Añadir"; the two surfaces disagree.
- ja: the chromium menu string spaces "Peek ビュー" while the settings
  string ships "Peekビュー"; the Help tree follows the unspaced form.
- ko: `settings.spaces.pinnedTabScope.spaceDescription` says 고정 탭 while
  its sibling descriptions say 고정된 탭;
  `settings.spaces.changeProfileConfirmation.spaceScopedMessage` says 창
  where its duplicates say 윈도우.
- nl: the shipped imperative "Schakel Peek-weergave in" forces "zet dan
  **Schakel Peek-weergave in** uit" in prose; the FAQ softens it with a
  "Wil je …, zet dan …" frame.

Pre-existing tree issues surfaced (outside this run's scope):

- de: the telemetry toggle is quoted two ways (privacy:42 vs faq:296), and
  the settings section is "Phi und ich" (privacy:48) vs "Du und Phi"
  (faq:300).
- es: H1 "Cambiar a Phi" vs every cross-link "Cambiarse a Phi"; "Vista
  dividida" capitalisation is mixed in the FAQ.
- fr: bookmarks and spaces use plain spaces before high punctuation while
  faq, peek, and switching-to-phi use NBSP (each delta matched its page);
  "Phi et vous" (faq:288) vs "Vous et Phi" (privacy:48); the telemetry
  toggle wording differs between faq:284 and privacy:42.
- ja: **Command**（⌘） (faq:126) vs **Command（⌘）キー** (bookmarks:54).
- ko: link text for the bookmarks page varies (북마크 및 고정된 탭 /
  북마크와 고정된 탭 / 북마크와 고정 탭), likewise 레이아웃 및 탐색 vs
  레이아웃과 탐색; prose splits between 고정된 탭 and 고정 탭.
- nl: switching-to-phi lowercases "profiel" and writes "&" where the tree
  uses "en"; H1 "Overstappen op Phi" vs links "Overstappen naar Phi".
- zh-Hans: bookmarks:52 spaces the [Peek 视图] link on one side only.
- zh-Hant: the peek page uses 右鍵選單 where Chrome zh-TW says 內容選單;
  開關 and 總開關 rest on tree precedent only (整個功能的開關 is a drop-in
  alternative if the owner wants corpus-attested wording).

Brief correction: `brief-common.md` says the toggle label appears on the
peek page twice; the English delta carries the bold label once there
(three occurrences across the five pages). Agents followed the English.

## How to re-run

Copy this directory's brief and refs, regenerate `english-delta.diff`
from the English commits being synced, and fan out one translator agent
per locale as described in the phi-translate-validate skill.
