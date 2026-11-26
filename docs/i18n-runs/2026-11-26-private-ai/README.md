# i18n run 2026-11-26-private-ai

Translates the new Private AI page and the rewritten Phi Sentinel page, and
syncs the related English edits, into all eight locales.

## What this run changed

- English commit `5f3731e` on branch `docs/private-ai`: new page
  `site/private-ai/index.md`, a full rewrite of `site/sentinel/index.md`, and
  edits to `ai`, `automation`, `faq`, `privacy`, `tips-and-shortcuts`, and
  `what-is-phi-browser`. See `english-delta.diff` and `docs/private-ai.md`
  for sources and decisions.
- One translator agent per locale, all eight in parallel. Brief in
  `brief-common.md`, binding labels in `refs-private-ai.json` (49 shipped
  strings from phi-ai `release/2.19` and phibrowser-mac
  `origin/release/2.19.0`).
- zh-Hans ran in review mode: the product owner read and approved a
  Simplified Chinese draft of both full pages before the English was
  written (`zh-Hans-owner-draft/`). The zh-Hans pages keep that wording and
  depart from it only to quote shipped labels verbatim, to follow the
  locale's punctuation rules, and where the English added a link or
  tightened a sentence.
- Every locale's FAQ now carries `{#private-ai}` on the new section and
  `{#phi-sentinel}` on the Phi Sentinel section.
- `localization/<locale>/status.json`: `private-ai/index.md` added and the
  eight touched pages set to `translation: complete` /
  `contentReview: todo`; `sourceRevision` moved to `5f3731e`.
- Draft trees under `localization/<locale>/content/`: only
  `tips-and-shortcuts` matched the published page before this run (all
  eight locales), so it was synced. The `ai`, `automation`, `faq`,
  `privacy`, `sentinel`, and `what-is-phi-browser` drafts were already
  behind the published pages from earlier runs and were left as they were.

## Coordinator corrections

- The brief listed AI Gateway among names that stay English. The glossary
  rules AI 网关 (zh-Hans) and AI 閘道 (zh-Hant), and the owner draft used
  AI 网关, so both Chinese Sentinel pages were corrected after the agents
  finished. Other locales have no ratified rendering and keep English.

## Owner review pile

- **Runner (needs a ruling).** `product-glossary.md` says Runner is always
  translated (后台服务, 背景服務, バックグラウンドサービス, 백그라운드 서비스,
  Hintergrunddienst, service d'arrière-plan, servicio en segundo plano,
  achtergrondservice). On the new Sentinel page the Runner is the process
  that manages the "Background services", which ship under exactly those
  words, so the glossary rendering makes the page say that a background
  service manages the background services. All eight locales kept
  **Runner** in Latin script, introduced as a named process.
  Recommendation: add a help-site exception to `site-glossary-addendum.md`
  (Runner stays English on Help pages that explain Sentinel's structure),
  keeping the glossary rendering for UI strings.
- **Coined renderings** (no shipped string; derived from shipped
  neighbors): "AI source" (KI-Quelle, fuente de IA, source d'IA, AIソース,
  AI 소스, AI-bron, AI 来源, AI 來源, from the shipped fallback strings);
  "Image generation" in every locale; hardware memory rendered apart from
  the Memory feature (de Arbeitsspeicher, fr Mémoire vive, ko RAM,
  nl werkgeheugen); parameter classes (200億パラメータ級, 200억 파라미터급,
  20 000 millones, 200 亿参数). None were searched against a market corpus.
- **Shipped-string defects reported by translators** (not changed here,
  they belong to phi-ai):
  - zh-Hans `privateAiBanner.title` is 你正在使用 Private AI; every other
    zh-Hans string says 私有 AI. The page quotes it as shipped.
  - English `settings.privateAi.pageDescription` contains an em dash.
  - es `settings.privateAi.routing.checked` ("Source checked") ships as
    "Fuente seleccionada", which means selected, not verified. Not quoted.
  - fr `settings.providers.test` is the noun "Test" where the other
    buttons are verbs. Quoted as shipped.
  - zh-Hant 視覺模型回退 and 儲存修改 read as mainland usage (Taiwan:
    備援, 儲存變更). Quoted as shipped.
  - ja `automation` already wrote "Phi & AI" in its Phi Link path where
    the shipped label is PhiとAI. Outside this delta; not changed.

## Verification

- `pnpm test:i18n`: passed for 9 locales and 279 Markdown files.
- `pnpm build` with built i18n and llms.txt validation: passed for 9
  locales, 279 pages, 40 search queries, 30 llms.txt pages.
- `check.py` over every changed page: no failures other than the known
  French false positive on "utilise"; pre-existing bare-"Skills" warnings
  only.
- A structural comparison of both full pages in every locale against
  English: heading ids, heading levels, table rows, code spans, and
  internal link targets all match.
- Machine and coordinator checks are self-review, not an independent
  native-language review. Content review stays `todo` in every locale.
