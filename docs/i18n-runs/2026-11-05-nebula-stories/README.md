# i18n run 2026-11-05-nebula-stories

Documents Nebula stories, the letters Phi writes from a person's Memory, which
had no Help coverage, with a matching FAQ question. See `english-delta.diff` for the exact English
hunks.

## What this run changes

`site/memory/index.md`: a new `### Stories {#stories}` at the end of
`## Nebula`, with what a story is, where the card sits, that a language model
writes them, and six bullets (page through, see what a story is based on,
rate, tell the Phi team, ask Phi Chat, share as an image).

`site/faq/index.md`: a new question, "What are the stories in Nebula?", right
before "Does Phi send my memory to its servers?".

## Evidence for the English

Checked against the shipped app: the story card, its dialogs, and the strings
they show in each locale.

Left out on purpose: timings, limits and sample counts (when stories start,
how often they arrive, how long they stay); what clearing Memory does to
stories (open product question); that a single story cannot be removed; and
developer-only controls.

## How to run the locales

One translator per locale with `brief-common.md`. UI labels are quoted exactly
as the app shows them in that locale.

## Locale results (coordinator, 2026-11-05)

Eight translator agents, one per locale, edited `site/<locale>/memory/index.md`,
`site/<locale>/faq/index.md` and `localization/<locale>/status.json`. Trims
made at review (timings, the sample count label, the single-story removal
line, and a story-report exception sentence in the FAQ's memory answer, which
is back to its earlier text) were applied by the coordinator in all eight locales. Gates re-run by
the coordinator over the finished tree:

- every locale's Memory page has H1/H2/H3 = 1/6/1 like English, one
  `{#stories}` heading and six bullets in the section; every FAQ has 12 H2 and
  83 `::: details` like English, and links to `/<locale>/memory/#stories`;
- zero U+2014/U+2013 in all 16 pages, zero 您 in zh, no Sie or usted, no
  습니다 or 십시오 in the new text;
- `sourceRevision` is the latest English commit and both pages are
  `translation: complete`, `contentReview: todo` in every locale (fr's Memory
  page was approved before and is reopened);
- `pnpm format:check`, `pnpm test:i18n`, `pnpm build` (with the search
  queries) pass; `pnpm i18n:status` reports `registered/review-pending` for
  all eight.

The coordinator read zh-Hans and zh-Hant in full against English (meaning and
disclosures intact; UI labels verbatim); the other six were checked for
structure. Three locales (zh-Hans, zh-Hant, ja) needed one `<strong>` for a
label ending in a full-width bracket.

## Coined renderings (no UI string; Apple's own wording in each locale)

| English          | zh-Hans        | zh-Hant              | ja                         | ko                      | de                               | fr                                            | es                                   | nl                            |
| ---------------- | -------------- | -------------------- | -------------------------- | ----------------------- | -------------------------------- | --------------------------------------------- | ------------------------------------ | ----------------------------- |
| arrow keys       | 箭头键         | 方向鍵               | 矢印キー                   | 화살표 키               | Pfeiltasten                      | touches fléchées                              | teclas de flecha                     | pijltoetsen                   |
| trackpad swipe   | 在触控板上轻扫 | 在觸控式軌跡板上滑動 | トラックパッドでのスワイプ | 트랙패드에서 쓸어넘기기 | durch Streichen auf dem Trackpad | un balayage sur le trackpad                   | deslizando en el trackpad            | door op de trackpad te swipen |
| thumbs up / down | 赞或踩         | 拇指朝上或朝下       | 「いいね」か「よくないね」 | 엄지 올림 / 엄지 내림   | Daumen hoch / Daumen runter      | un pouce pointant vers le haut ou vers le bas | un pulgar hacia arriba o hacia abajo | een duim omhoog of omlaag     |

Sources cited by the translators: support.apple.com/<locale>/102650 (keyboard),
/102482 (trackpad gestures), and the Messages Tapback guide.

## Owner review pile (needs a ruling, not applied silently)

- **Privacy page:** `site/privacy/index.md` says Phi will never collect "your
  memory data". The story report sends memories only when the reader ticks the
  box, which this run treats as the reader sending, not Phi collecting, and
  leaves the page alone. A privacy/legal owner should confirm.
- **In-app wording:** small issues in the app's own labels, noticed while
  quoting them, were passed to the app's strings owner. The pages quote the
  labels as they ship today.
- **sourceRevision after squash:** as in earlier runs, `sourceRevision` names
  the branch's English commit, which a squash merge leaves off `main`; the
  status checker then reports the locale as needing a rebase.
