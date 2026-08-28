# Translator brief: Phi Help, zh-Hans, full re-translation (run 2026-08-28-zh-hans)

You are translating the Phi Help centre into Simplified Chinese from the English source only. This is a from-scratch re-translation. The previous Simplified Chinese pages must not be consulted.

## 1. What this is and where it renders

Phi Help is the help and FAQ site for Phi Browser, a macOS-native Chromium browser with a built-in assistant, Memory, Browser Skills, and automation. It is built with VitePress and served at `phibrowser.com/help/zh-Hans/…`. Readers are Chinese-speaking Mac users who already use, or are evaluating, Phi. They arrive with a task or a question and want the answer, the limitation, and the next page.

Voice: a capable colleague explaining something at a desk. Direct; say the thing, then explain. Honest about limits: if the English says what a feature does not do, the Chinese says it with the same weight. No marketing gloss, no reassurance padding, no chatbot warmth. Dry humour survives only if it is actually funny in Chinese; otherwise replace it with a plain sentence that makes the same point.

Translate meaning in context, paragraph by paragraph, not word by word. Reorder clauses, split or merge sentences, and drop English-only connective tissue (that is, in other words, note that) whenever the Chinese reads better without it. Keep every fact, qualification, disclosure, warning, third-party name, and link.

## 2. Register and typography

Read `refs-zh-Hans.json` `styleRules` and apply all of them. In short: 你 never 您; no em or en dash anywhere; full-width punctuation; 「」 corner quotes; pangu spacing between CJK and Latin or digits; digits half-width; no exclamation inflation; no trailing period on labels.

## 3. Refs are binding

`refs-zh-Hans.json` holds the ratified vocabulary: page titles, nav groups, feature terms, action vocabulary, and the decisions ratified for this run. Reuse every entry verbatim. Brands and names in `keepEnglish` stay in English. Page titles are used three ways and must be byte-identical in all three: as the H1, as the sidebar label, and as link text on other pages.

If the English names a feature or UI element that has no entry in refs, do not invent a rendering from memory. Verify (section 4), pick the rendering a Phi user in mainland China would expect, use it consistently within your files, and list it in your report under "newly coined terms" so the owner can ratify it.

## 4. Online verification (mandatory for every contested term)

Decide by surface and market, not by dictionary:

- Chrome zh-CN UI corpus (ground truth for browser vocabulary): the three `.xtb` files under the corpus directory named in your task. Grep candidate Chinese renderings, for example `rg -c 画中画 *.xtb`. A rendering with hits in the corpus beats one without.
- Apple zh-CN (ground truth for macOS-native surfaces and Apple brands): `support.apple.com/zh-cn/guide/mac-help/…`, `support.apple.com/zh-cn/guide/safari/…`. Fetch the page and quote the phrase.
- Third-party vendors in zh-CN for their own products: Bitwarden (bitwarden.com/zh-cn or its help centre), Telegram, Homebrew, Claude Code docs.
- Market usage for concepts with no vendor authority: search real zh-CN product docs and reviews.

Cite the evidence (URL or corpus grep plus the quoted phrase) in your final report for every contested decision. An uncited contested decision is an unreviewed decision.

Challenge the premise: if the brief or refs assert something the evidence contradicts, comply with the binding entry, but flag the contradiction with your evidence. Do not silently pick either side.

## 5. Output shape

Write each page to the output path given in your task, mirroring `site/<page>/index.md` exactly in structure:

- Frontmatter: keep every key; translate `description` (and for the home page `title`, hero and feature texts). Keep `layout`, image paths, `link` and `theme` values. Rewrite Help links in frontmatter to `/zh-Hans/…`.
- Exactly one H1, equal to the page title in refs. Keep the heading hierarchy and heading count. Headings are labels, not questions, except in the FAQ, where they are questions and end with ？.
- Required explicit ids: where your task lists `requiredAnchorIds`, append ` {#slug}` to that translated heading, for example `## 网页聊天 {#chat-with-tabs}`. Add explicit ids only to those headings.
- Links: every Help cross-page link becomes `/zh-Hans/<route>/` (keep any `#fragment` unchanged). Absolute links to `phibrowser.com`, GitHub, and other sites stay unchanged. Link text uses the refs page title when it names a page.
- Code fences, inline code, commands, paths, settings keys, file names, and keyboard shortcuts stay byte-identical. Translate only prose, including prose inside `::: tip` / `::: details` containers and table cells. Container titles (the text after `::: tip`) are translated.
- Tables keep their column count. Lists keep their item count.
- Emphasis: use `**…**`. Do not end a bold span with a link or a closing bracket that is immediately followed by a CJK character; put the punctuation inside or restructure. Use `<strong>…</strong>` only if there is no other way, and say so in your report.
- Do not add, remove, or reorder sections, paragraphs, callouts, or list items. Do not add a translator's note in the page.
- Never introduce a product name, feature name, or codename that is not in the English source or in refs.

Before finishing, re-read every output file end to end against its English source once, checking facts, negations, numbers, and links.

## 6. Do not read

- `site/zh-Hans/**` and `site/.vitepress/i18n/locales/zh-Hans.json` (the previous translation; the owner has excluded it from this run).
- Other locale trees (`site/de`, `site/ja`, `localization/**`): not needed.

You may read any English page under `site/` for cross-reference and the docs under `docs/` for product context.

## 7. Report

Finish with a report in English containing:

1. Files written (paths) and a one-line note per file on anything structurally unusual.
2. Terminology decisions with evidence: a table of term, rendering, and citation (URL or corpus grep with the quoted phrase).
3. Newly coined terms: renderings not in refs, for the owner to ratify.
4. Premise challenges: places where evidence contradicts refs or the brief.
5. Accuracy concerns: any English sentence you suspect is no longer true of the product, and any place the Chinese had to choose between two readings of the English.
6. Emphasis or rendering risks: any `<strong>` used, any bold span you were unsure would render.
