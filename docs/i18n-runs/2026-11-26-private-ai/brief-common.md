# Brief: Private AI page and Phi Sentinel rewrite (run 2026-11-26-private-ai)

## What happened in English

English commit `5f3731e` on branch `docs/private-ai` adds a Private AI page
(`site/private-ai/index.md`), rewrites `site/sentinel/index.md` from scratch,
and edits six existing pages. The route `private-ai` is registered in
`guide.ts` (assistant group, before Phi Sentinel) and every locale resource
already carries `theme.pages.privateAi` with the shipped Phi Chat label. Why
and from what sources: `docs/private-ai.md`. Exact hunks: `english-delta.diff`
in this directory.

- `site/private-ai/index.md`: new page.
- `site/sentinel/index.md`: rewritten in full. Translate the new English
  page as a whole; do not try to merge it with the old locale page.
- `site/ai/index.md`: one link target changes (`/sentinel/#private-ai` to
  `/private-ai/`) and one sentence in "Where your questions go" is reworded.
- `site/automation/index.md`: the last sentence of "Managing a task" (Task
  Manager in Phi Chat replaces the Tasks page in Phi Sentinel), and the
  paragraph under the "Phi Sentinel" H2.
- `site/faq/index.md`: the description gains "Private AI"; a new
  `## Private AI` section with five questions is inserted right before
  `## Phi Sentinel`; the Phi Sentinel section's three answers are replaced
  (the third question is now "Where do I find Private AI settings?").
- `site/privacy/index.md`: two sentences in the "nuance" paragraph and the
  "You can also narrow what leaves your Mac" paragraph.
- `site/tips-and-shortcuts/index.md`: one sentence gains a link.
- `site/what-is-phi-browser/index.md`: two sentences in "Your data stays
  yours", and the Phi Sentinel item in "What's next" becomes two items.

## Per-locale tasks

1. Translate `site/private-ai/index.md` in full into
   `site/<locale>/private-ai/index.md`, and `site/sentinel/index.md` in full
   into `site/<locale>/sentinel/index.md` (replace the old file). Keep the
   frontmatter with a translated `description`, the single H1, the exact
   heading hierarchy, every table, and every list. The H1 of the Private AI
   page is your locale's `sidecar:settings.nav.privateAi`. Pin every
   explicit heading id exactly as in English, because other pages link to
   them: on `private-ai` `{#assistant-phi-cloud-and-providers}`,
   `{#comparing-sources}`, `{#when-phi-uses-your-provider}`,
   `{#choosing-a-source-for-each-task}`, `{#turning-on-private-ai}`,
   `{#requirements}`, `{#what-setup-installs}`,
   `{#connecting-ollama-or-lm-studio}`, `{#recommended-models}`,
   `{#when-a-local-source-is-unavailable}`, `{#using-codex}`,
   `{#turning-off-and-resetting}`; on `sentinel` every id it carries. The
   English heading "Recommended models" has an explicit id, so the in-page
   link `#recommended-models` keeps working.
2. Apply the English delta to the six existing locale pages listed above,
   editing only what the diff touches and matching each page's established
   voice, list style, quote characters, and emphasis. Do not re-translate
   untouched text.
3. Check that the cross-page anchors exist in your locale:
   `/<locale>/ai/#usage-limits`, `/<locale>/phi-chat/#opening-phi-chat`,
   `/<locale>/automation/#scheduled-tasks`, `/<locale>/faq/#phi-sentinel`.
   If your locale's FAQ "Phi Sentinel" H2 has no `{#phi-sentinel}` id and
   its text does not slug to `phi-sentinel`, add the id.
4. Prefix every internal Help link with the locale.
5. Quote shipped UI strings verbatim from `refs-private-ai.json`, your
   locale's column, wherever the English page bolds a label. Rulings:
   - Browser path: **Settings → `mac:settings.navigation.aiTitle` → Phi
     Sentinel → `mac:settings.ai.privateAI.title`**, using the word for
     **Settings** your locale's pages already use. "Phi Sentinel" is literal.
   - Phi Chat settings paths (**Settings → AI providers**, **Settings →
     Backup and updates**) use the sidecar `settings.nav.*` labels.
   - **Running privately: 2 of 4 AI tasks** is `settings.privateAi.summary`
     with the numbers filled in.
   - Product and provider names stay as they are: Phi Cloud, Phi Chat, Phi
     Sentinel, Runner, AI Gateway, AI Guardrail, Ollama, LM Studio, OpenAI,
     OpenRouter, Codex, ChatGPT, Apple Intelligence (use your locale's
     shipped name for Apple Intelligence if `sidecar:settings.privateAi.routing.apple.label`
     neighbors show one; otherwise the Apple marketing name for the locale),
     Gemma, BGE-M3, gpt-oss, Qwen. Model tags, commands, URLs, and
     environment variables in code spans stay byte-for-byte.
   - Ollama's **Context length** and LM Studio's **Context Length** and
     **Developer** are third-party English UI; keep them in English.
6. Terminology that is not a quoted label follows
   `.agents/skills/phi-translate-validate/references/product-glossary.md`,
   `site-glossary-addendum.md`, and the words your locale's existing pages
   already use (assistant, Memory, Browser Skills, task, scheduled task,
   Private AI, Phi Sentinel, usage allowance).
7. Do not touch `localization/<locale>/status.json`, English pages, locale
   resources, `guide.ts`, or any other locale. No git commands.

## Binding rules

- `.agents/skills/phi-translate-validate/references/locale-rules.md`:
  register, typography, house bans. No em dash or en dash anywhere, no 您,
  no Sie, no usted, no 습니다 or 십시오, no trailing period on labels.
- `.agents/skills/phi-help-writing/SKILL.md`: accuracy. Keep every
  limitation and privacy disclosure exactly as strong as the English. In
  particular: adding a provider changes nothing on its own; the default
  fallback sends content to Phi Cloud; the fallback setting does not cover
  cloud providers; a key sent over `http` is unencrypted; model names are
  examples of a size class; local models usually fall short of Phi Cloud.
- CJK: if `pnpm test:i18n` reports a bold span that does not render next to
  punctuation, use a targeted `<strong>` for that span only.
- The locale's own existing pages are the style authority for voice.

## Report back

Under 200 words: coined renderings (English, your rendering, and what it was
derived from), shipped-string defects noticed, anything you could not verify
or had to decide. Do not paste the pages.
