# i18n run 2026-10-15-phi-chat

Translates the new Phi Chat page and syncs the 2.13 assistant updates into
all eight locales.

## What this run changed

- English commit `9ccf028` on branch `docs/phi-chat-and-assistant-updates`:
  new page `site/phi-chat/index.md`, plus edits to `ai`, `automation`,
  `faq`, `get-started`, `privacy`, `sentinel`, `skills`,
  `tips-and-shortcuts`, `what-is-phi-browser`, and the home page. See
  `english-delta.diff` and `docs/phi-chat.md` for sources and decisions.
- Translated `phi-chat/index.md` into every locale and applied the English
  delta to the ten edited pages, one parallel translator agent per locale.
  Brief in `brief-common.md`, binding vocabulary in `refs-phi-chat.json`.
- Pinned the anchors the new links need in every locale: the four on
  `phi-chat`, `{#where-your-questions-go}`, `{#going-back-to-a-page}` and
  `{#usage-limits}` on `ai`, `{#tasks-report-back-to-their-conversation}`
  and `{#notifications}` on `automation`, `{#using-skills-in-chat}` on
  `skills`, and `{#private-ai}` on `sentinel`.
- `localization/<locale>/status.json`: added `phi-chat/index.md` and reset
  the eleven touched pages to `translation: complete` /
  `contentReview: todo`; `sourceRevision` moved to `9ccf028`. The three
  global review gates were already `todo`; their evidence now also names
  this run.

## Merge with main

`main` gained the new-tab Widgets run (#26) after this run started. The
merge conflicted on the Skills library sentence in `skills` (every locale)
and on `sourceRevision` and the translation owner note in `status.json`.
The Skills sentence takes #26's wording, which already drops "recent
conversations"; the owner note keeps both runs. `sourceRevision` then moves
to the merge commit, as the Widgets branch did with its own merge.

## Evidence sources

`refs-phi-chat.json` holds 62 shipped strings, quoted verbatim on the
pages:

- Phi Chat and sidebar strings from `phi-ai` `release/2.13` (`436f24a5d`),
  `ai-extension/sidecar/src/locales`;
- the Settings labels (**Phi & AI**, **AI Sidebar**, **Summon Phi Chat
  with Shift Shift Shift**) from `phibrowser-mac` `origin/release/2.13.0`
  (`f6e13a27`);
- **Open Phi Chat** and the Sentinel **Tasks** page title from `sentinel`
  `origin/release/2.13` (`adbc7c8`).

"Phi Apps" is in no catalogue. On `chromium-phibrowser` `release/2.13.0`,
`apps_folder_support.mm` writes the branded folder name as its own display
name in every locale, so it stays English everywhere.

## Verification

- `pnpm test:i18n`: passed for 9 locales and 252 Markdown files, after
  ten CJK bold spans next to an ellipsis, a `+`, or corner quotes (ja `ai`,
  `automation`, `phi-chat`; zh-Hans `phi-chat`) were converted to
  `<strong>`.
- `pnpm build` with the built i18n validation: passed for 9 locales, 252
  pages, and 40 search queries.
- `pnpm format:check`: passed.
- Mechanical gate over all eight locales and the eleven touched pages: no
  em or en dashes, no 您, no 습니다 or 십시오, no usted, every internal link
  locale-prefixed, every in-page and cross-page anchor resolvable, heading
  levels identical to English, no "Phi AI" settings path left, no "Shadow
  Task" left, and the key shipped strings present on every `phi-chat` page.
- Coordinator read the zh-Hans and zh-Hant pages in full, and the gate
  output and agent reports for the rest.

Translation completion is not content review. Every touched page is at
`contentReview: todo` until a human reviewer approves it.

## Baseline note

`sourceRevision` points at the merge of `main` into this branch (see above).
The repository squash-merges, so after merge that commit is unreachable
from `main` and the staleness check is skipped with a warning. Bump every
`sourceRevision` to the squash commit in a follow-up.

## Owner review list

Coined renderings to ratify:

- **Open Phi Chat** has no shipped zh-Hans or zh-Hant string: zh-Hans
  打开 Phi Chat, zh-Hant 開啟 Phi Chat, each from the "open" verb its
  pages and shipped strings already use.
- macOS names written from memory, not checked against Apple pages: zh-Hans
  程序坞, 访达, 辅助功能; zh-Hant 輔助使用, 個人專屬資料夾; ko 손쉬운 사용,
  응용 프로그램 폴더; nl "de map Programma's in je thuismap".

Shipped-string issues:

- nl: Running ships as "Actief" and Active ships as "Gepland" (the open
  "nl Active vs Gepland" glossary item); both are quoted as shipped.
- zh-Hant: `chatTasks.reportPolicy` ships as 回報時機 ("when to report")
  for "What to report"; quoted as shipped.
- zh-Hans: the existing `ai` and `faq` pages call the Chat button 聊天,
  while the shipped `sidebar.chatButton.title` is 对话. Left as the pages
  had it.

Existing page inconsistencies, not fixed by this run:

- The assistant placeholder is written differently across pages in de
  ([Name deines Assistenten] vs [dein Assistent]), ja (［アシスタント名］
  vs [アシスタント名]), nl (naar… vs naar ...), and zh-Hant (〔你的助理〕 in
  one FAQ line). Each page kept its own form.
- fr `ai` uses plain spaces before `:` `?` `»` where other fr pages use
  no-break spaces; the new text uses no-break spaces, so the page is mixed.
- es and fr: the quoted **Automatically add current tab as context to new
  conversation** label was updated to the shipped wording on the lines the
  delta touched.

## How to re-run

Copy this directory's brief and refs, regenerate `english-delta.diff`
from the English commits being synced, and fan out one translator agent
per locale as described in the phi-translate-validate skill.
