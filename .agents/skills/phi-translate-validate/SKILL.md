---
name: phi-translate-validate
description: Translate user-visible content into the 8 Phi locales using the Phi i18n pipeline's method, then gate the output through its validation battery; online terminology verification against authentic locale sources (Chrome/Apple corpora, locale authorities) instead of trusting LLM knowledge, ratified product vocabulary reuse, register enforcement, and mechanical checks. Use for translating or reviewing website copy, marketing pages, or any Phi-adjacent content outside the main string pipeline.
---

# Translate and validate, the Phi way

This is a portable export of the process the Phi i18n pipeline actually
runs for every string drop and marketing text. It assumes you are an agent
with parallel-subagent, file, and web-search tools, working in the repo
that owns the content. Nothing here depends on the pipeline's own tooling.

Companion references in this skill's directory, read them before starting:

- `references/locale-rules.md`: registers, typography, house bans, and the
  per-locale evidence authorities.
- `references/product-glossary.md`: ratified renderings of Phi feature
  names. BINDING wherever content names a product feature.

Target locales: zh-Hans, zh-Hant, ja, ko, de, fr, es, nl.

## Stage 1: Inventory and slice

Find every user-visible string to translate. Build one `slice.json`:

    {"entries": {"<stable-key>": {"en": "...", "desc": "<where it renders,
    what it does, any length constraint>", "placeholders": ["{{x}}"]}}}

The `desc` is not optional: translators translate MEANING IN CONTEXT, and
a bare string without its surface produces the stiff output this process
exists to prevent. Write descs from the rendered page, not the code.

Marketing prose (hero lines, jokes, taglines) is translated per PARAGRAPH
or per BLOCK, not per sentence fragment, so the voice can carry.

## Stage 2: Refs, the ratified vocabulary

Collect into `refs.json` (per locale) every already-approved rendering the
new content should agree with: the product glossary reference, plus any
existing reviewed translations in this repo. Refs are BINDING: a
translator reuses them verbatim rather than re-deriving them. If the
content names a feature with no ratified rendering, the agent must verify
candidate renderings online (Stage 4 doctrine) and FLAG the term as newly
coined in its report, so a human can ratify it.

## Stage 3: Brief and fan out

Write one brief per locale (a prompt file), then run 8 translator
subagents in parallel, one per locale, each producing one output file.
Every brief carries:

1. WHAT the content is and where it renders (audience, surface, tone).
2. The locale's register line and typography rules (from locale-rules).
3. The refs mandate: ratified vocabulary verbatim; brands keep-English.
4. The online-verification mandate (Stage 4), with the instruction to cite
   evidence URLs in the final report.
5. Output shape: exactly one file, valid JSON (or the repo's format),
   covering every key; verify it parses before finishing.
6. House bans: no em/en dashes, no 您, placeholders byte-exact.

For MARKETING copy add the voice-first doctrine: recreate, do not
translate. Jokes must land as jokes a native reader smiles at; if a pun
falls flat literally, replace it with an equivalent quip making the same
point. For playful phrase SETS, do not translate slot-by-slot at all:
author an independent native set in the same spirit (theme, warmth,
brevity), using the English only as a spirit reference.

## Stage 4: Online verification doctrine (the heart of the method)

Translator agents MUST NOT settle contested terminology from model
memory. For every platform term, feature analog, brand, or idiom where the
right rendering is not already ratified:

- Search the authentic representation in the locale: what does the locale's
  Chrome UI actually say (the xtb corpus is ground truth and greppable)?
  What do Apple's own pages in that locale say? What does the locale's real
  market call this concept (product docs, help sites, reviews)?
- Decide by SURFACE and MARKET, not by dictionary: pick what a user of
  this kind of product in this locale expects to read.
- CITE the evidence (URL, quoted phrase) in the agent's final report. An
  uncited contested decision is an unreviewed decision.
- CHALLENGE THE PREMISE: if the brief asserts something the evidence
  contradicts (a brand that "stays English" but the locale's own vendor
  translates it; a claimed convention the corpus disproves), the agent
  complies OR flags, but never silently guesses. Premise corrections found
  this way are the most valuable output of the whole process; surface them.
- Two locales that share a script are still separate markets: zh-Hans and
  zh-Hant must each verify against their own sources (they genuinely
  diverge, e.g. Chrome calls the side panel 侧边栏 in zh-CN but 側邊面板
  in zh-TW).

## Stage 5: Mechanical gates

Run these as code over every output file. A failure blocks; fix and rerun.

1. Parses; covers EVERY slice key; no extra keys.
2. Placeholders byte-exact per key (`includes` check against the slice).
3. Banned characters: `/[—–]/` and `/您/` must match nothing. Check the
   English source too.
4. Register probes: no Sie in de, no usted in es, no 您 anywhere.
5. Identical-EN keys got identical renderings (unless descs demand
   otherwise; then the difference is deliberate and reported).
6. Phrase sets: no duplicate values; length fits the widget.
7. Glossary conformance: every ratified term in refs appears in the
   translation of the keys whose EN contains that term (spot-check
   mechanically where feasible, by eye otherwise).
8. UI-fit sanity: labels/buttons stay short; no trailing punctuation on
   chips or menu items.

## Stage 6: Review pass

- Spot-check each locale yourself: read 5 to 10 strings against their
  descs; read every marketing paragraph aloud for rhythm.
- Read every agent's evidence citations; verify the load-bearing ones
  (open the URL, confirm the quoted phrase).
- Collect every flagged item (newly coined terms, premise challenges,
  fell-flat jokes replaced) into a review list for the human owner. The
  process is not done until that list is delivered, even when empty.

## Stage 7: Apply with provenance

Land translations with a record of origin: which run produced them, which
glossary/reference version was in force, machine vs human-reviewed status.
Keep the slice, refs, briefs, and seed files in the repo (a `bulk-run/`
style directory) so the next drop copies the previous one instead of
starting cold, and so any later dispute can be traced to its evidence.

Re-runs must be deterministic: re-applying the same seeds over the same
content changes nothing (byte-stability). If your format has a canonical
serializer (Xcode xcstrings, a website framework's JSON loader), emit its
exact style so diffs stay reviewable and downstream tools do not churn.

## Failure modes this process exists to catch (all real)

- A "translation" of a UI term that no real product in the locale uses
  (the corpus check catches it).
- A brand assumed to stay English that the platform vendor translates in
  exactly two locales (the challenge-the-premise rule caught 时间机器/時光機).
- Jokes translated word-for-word that read as machine output (the
  voice-first brief and review-aloud pass catch them).
- The same English string translated three different ways across surfaces
  (refs discipline catches it).
- A placeholder reworded or a dash smuggled in by the model's style
  (mechanical gates catch both).
- Two Chinese locales treated as one language (separate verification
  catches the divergence).
