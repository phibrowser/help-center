---
name: phi-translate-validate
version: 2 (2026-10-15)
description: Translate user-visible content into the 8 Phi locales the way the Phi i18n pipeline does it, then gate the output through its validation battery. Corpus-first terminology (shipped catalogs, Chrome and Apple corpora, locale market media) instead of model memory; one brief per locale and 8 translator subagents in parallel; register and surface rules per locale; mechanical gates as code; a coordinator review that reads every locale side by side; coined terms and premise conflicts flagged to a human owner instead of silently applied. Use for UI string drops, release notes, help pages, marketing copy, or reviewing any Phi-adjacent translation.
---

# Translate and validate, the Phi way (v2)

Portable export of the process the Phi i18n pipeline runs for every string
drop, release note and help page. It assumes an agent with parallel
subagents, file tools and web search, working in the repo that owns the
content. Nothing here depends on the pipeline's own tooling; the scripts
named below are 20 to 60 lines each and are described well enough to
rewrite.

Companion references in this skill's directory, read them before starting:

- `references/locale-rules.md`: registers, surface rules, typography,
  house bans, evidence authorities per locale.
- `references/product-glossary.md`: ratified renderings of product
  vocabulary, regenerated from the shipped catalogs. BINDING wherever the
  content names a product feature.
- `references/site-glossary-addendum.md`: local to this repository, the
  ratified renderings this site still uses that the upstream glossary no
  longer lists. BINDING like the glossary; keep it when updating the skill.

Target locales: zh-Hans, zh-Hant, ja, ko, de, fr, es, nl.

## What changed since v1 (2026-08-26)

- Change detection by native identity, with a safety diff that names the
  three ways a catalog import silently loses or misplaces translations.
- Refs are built from the live catalog by key family, and seeds are probed
  mechanically against the shipped corpus so a coined term cannot pass
  unnoticed.
- Surface rules on top of register: microcopy vs sentences, fragments that
  land in placeholders, parallel pairs, counts without plural forms,
  system permission prompts, Apple feature names.
- An owner review pile that persists across runs: coined terms, premise
  conflicts and register doubts are raised when the component next comes
  up, and a ruling lands in four places at once.
- Export gates: a semantic old-vs-new comparison that proves a sync is
  pure addition, and byte-stability on refold.
- The coordinator reads a full cross-locale table of every key before
  anything ships.

## Principles

1. **Corpus before memory, memory never decides.** The order of authority
   for any rendering: the product's own shipped catalog, the ratified
   glossary and addenda, the platform corpus (Chrome xtb for browser
   vocabulary, Apple for macOS-native surfaces), then current market usage
   found online and cited. A translator's recollection is a hypothesis to
   verify, not a source.
2. **Meaning in context.** Every string carries a description of where it
   renders and what it does. A string without its surface produces stiff
   output; the description is written from the rendered UI, not the code.
3. **One product voice.** Shipped renderings are reused verbatim. Two keys
   with identical English on different surfaces get identical translations
   unless their descriptions demand otherwise, and then the difference is
   reported.
4. **Native, not translated.** The brief tells the translator what the
   reader must feel and where; prose is recreated, UI copy follows the
   platform idiom of that locale (Apple menu verbs in German, plain noun
   forms on Japanese buttons, 해요체 in Korean sentences).
5. **Flag, never silently comply.** When a term has no ratified rendering,
   when the brief's premise contradicts the evidence, or when the owner's
   own call conflicts with a platform convention, the agent surfaces the
   conflict with a recommendation and lets the owner rule. Silent
   compliance is counted as the agent's failure.
6. **Gates are code.** Shape, coverage, placeholders, banned characters,
   register probes, brand preservation, codename leaks, byte-stability and
   semantic export checks run as scripts; a failure blocks.
7. **Everything is traceable.** Each run keeps its slice, refs, briefs,
   seeds and evidence in a dated directory, and every landed translation
   carries provenance (run id, glossary version, origin machine or human).

## Stage 1: Inventory, change detection, slice

Identify what needs translating by **native identity** (file plus native
key), never by slug or by text alone. After every import of a catalog, run
a safety diff against the previous manifest and read all of it:

- **added**: new native keys (read every English string and description
  yourself before briefing).
- **dropped**: native keys gone from the source; their translations leave
  with them (confirm against the source diff, never against assumptions).
- **reslug**: a new string took an existing key's plain slug (slug theft);
  translations must have followed the old native key, and the public key
  of the old string must stay pinned to the old target.
- **count regression with unchanged fingerprint**: a native-key rename;
  the carry dropped translations silently. Restore them by slug from the
  previous manifest; fingerprints match, so it is safe.
- **mirror**: text changed under the same native key; the old translations
  were carried as stale. A slug-keyed diff files this under "added" and
  reports no staleness, so scan the manifest itself for translation
  fingerprints that mismatch the entry fingerprint.
- **stale by fingerprint**: reworded English; retranslate against the new
  English, never patch the old translation.
- **untranslatable**: plural or device variations the manifest cannot
  hold; handle them in Stage 7 directly in the native format.

The slice is every live, translatable entry that is missing in any locale
or stale in any locale, written as `slice.json`:

    {"component": "<id>", "entries": {"<key>": {"message": "...",
     "description": "...", "native_key": "...", "placeholders": ["%1$lld"],
     "reworded": true}}}

Mark in the brief any string that is a **fragment inserted into another
string's placeholder** (a reason slot, a count slot): it is translated
without a trailing period, and if it is a shipped sentence minus its
period, it reuses that sentence's translation minus its punctuation.

English defects found here (a dash in a description, a stale claim in a
help page, a codename in a source string) are fixed upstream when the
content is ours, or translated faithfully and reported when it is not.
Never fix silently.

## Stage 2: Refs, the binding corpus

Build `refs.json` per locale from the live catalog, by script, selecting:

- every shipped entry whose native key belongs to the same families as the
  slice (settings.spaces._, sync.status._, app.browserMigration.\*);
- every shipped entry whose English contains the slice's key concepts
  (pinned tab, scope, default profile, synced devices, try again);
- the glossary concepts block.

Each ref carries its English, its description and the locale rendering, so
the translator sees where the ref renders and can reuse it verbatim. In
the brief, name the renderings that must be reused.

When English is **identical to an upstream platform string** (Chromium
strings share message ids by text hash), take the platform's translation
outright and record it as human origin from that corpus. Only novel
English goes to translators.

## Stage 3: Brief and fan out

One brief per locale, generated by one script so all eight share the same
context and differ only in the locale line; then **8 translator subagents
in one message**, one per locale, each reading its brief file and writing
exactly one seeds file in a fixed shape (`{"<locale>": {"<component>":
{...}}}`), replying with one line plus any flagged items.

Anatomy of a brief (every item is binding):

1. **What and where**: the feature in three lines, which surfaces the
   strings sit on, how many keys, which are reworded vs new.
2. **Both files to read first**: the slice (descriptions are mandatory
   reading) and the locale's refs block.
3. **Refs mandate**: the specific shipped renderings to reuse verbatim,
   named in the brief; brands keep English.
4. **Rendering rules with an example**: how a placeholder string renders
   when filled ("Pinned tab scope change not applied yet (3 attempts; A
   browser migration is running)"), which keys are fragments, which pairs
   are parallel, which noun repeats inside a string and must stay one noun,
   what to do with a count that has no plural variation.
5. **Locale line**: register, typography, platform idiom (from
   locale-rules), then the house bans: no em or en dash, no 您,
   placeholders byte-exact.
6. **Verification mandate**: anything not covered by refs or glossary is
   verified online against the authorities for that locale (Stage 4), with
   the evidence cited in the final reply; a term that had to be coined is
   flagged as coined.
7. **Output contract**: exactly one file, valid JSON, every slice key, no
   extra keys, verify it parses before finishing, no other changes, no git.

Surface variants of the brief:

- **UI microcopy**: plain forms on buttons and menu items (ja 体言止め,
  de infinitive, nl imperative, zh verb-first), sentences keep their period.
- **System permission prompts**: Apple's own permission-prompt register in
  that locale; the sentence sits in a system dialog beside Apple's.
- **Apple feature names** (Mini Player, Reader, Picture in Picture): the
  rendering Apple uses in that locale's own apps; verify on
  support.apple.com; if the app already ships a different rendering, stay
  consistent with the app and raise the conflict.
- **Release notes and marketing**: voice-first. Recreate jokes as jokes a
  native reader smiles at; replace a pun that falls flat with an
  equivalent quip making the same point; keep structure (heading, paragraph
  count). Named house jokes are bound explicitly in every brief so the same
  image lands in every locale (a cake baking in an oven is an oven in zh,
  ja, ko, de, fr, es and nl alike; the first pass once drifted to stewing
  and simmering).
- **Help pages**: per-page batches of about five pages per agent, quoted UI
  labels taken verbatim from the shipped catalog, internal links prefixed
  with the locale, inbound anchors pinned with explicit ids, known English
  defects translated faithfully and listed, and a shared addendum file that
  accumulates what sibling locales learned during the run.
- **Review mode**: when a machine draft already exists, pass it in the
  slice and have the locale's agent audit it against the brief, fixing only
  defects, instead of retranslating.

## Stage 4: Verification doctrine

Translator agents must not settle contested terminology from model memory.
For every platform term, feature analog, brand or idiom without a ratified
rendering:

- **Search the authentic representation in the locale.** What does the
  locale's Chrome UI actually say (the xtb corpus is greppable ground
  truth)? What do Apple's own pages and apps in that locale say? What does
  the locale's real market call the concept (tech press, vendor docs,
  competitor UIs)? Examples that decided real rulings: Taiwan press and
  AWS TW use AI 代理 where the mainland uses 智能体; German press writes
  KI-Agent and keeps Space in English for Arc-style browsers; Japanese
  consumer UIs use です/ます in sentences but plain forms on buttons
  (Chrome ja タブを固定, never 固定します).
- **Decide by surface and market, not by dictionary.** Browser-web features
  follow Chrome, macOS-native dialogs and menus follow Apple, market usage
  breaks ties.
- **Cite the evidence** (URL, quoted phrase) in the final reply. An uncited
  contested decision is an unreviewed decision. Record it in the locale's
  addendum (recommendation, alternatives, evidence, confidence, note) so
  the next run inherits it.
- **Challenge the premise.** If the brief asserts something the evidence
  contradicts (a brand that "stays English" but the platform vendor
  translates it in that locale; an owner's term that is the platform's
  word for a different concept, as with Extension rendered as 插件 when
  Chrome zh-CN says 扩展程序 and 插件 means plug-in), comply or flag, never
  silently guess. Premise corrections are the most valuable output of the
  whole process.
- **Two Chinese locales are two markets.** zh-Hant is an independent Taiwan
  translation verified against its own sources, never a conversion of
  zh-Hans (Chrome's side panel is 侧边栏 in zh-CN and 側邊面板 in zh-TW; a
  browser profile is 个人资料 in zh-CN and 設定檔 in zh-TW).
- **Corpus first, web second.** When every term of the batch already ships
  in the catalog, the run exercises the corpus path and no web search is
  needed; the mechanical probe in Stage 5 proves it rather than the
  translator asserting it.

## Stage 5: Mechanical gates

Run as code over every output; a failure blocks, fix and rerun.

Seeds (per locale file):

1. Parses; shape is exactly `{locale: {component: {...}}}`; covers every
   slice key; no extra keys.
2. Placeholders byte-exact per key (an `includes` check against the
   slice's placeholder list).
3. Banned characters: `/[\u2014\u2013]/` and `/您/` match nothing; fr has no curly
   apostrophe in UI strings; no internal codename anywhere.
4. Register probes: no Sie in de, no usted in es, no 습니다 or 십시오 in ko.

Vocabulary probe (new in v2): for each key concept of the batch, grep the
locale's candidate rendering against the shipped catalog. A rendering with
zero hits is a coined term; it goes to the owner review pile with the
pattern it was derived from (today's example: "default profile" had never
shipped, every locale derived it from the shipped "default Space" row).

Manifest lint after apply: 您; codename leak; keep-English brands preserved
verbatim and in count; translation identical to English (warning, often
legitimate); zh wants a space between CJK and Latin and between a digit and
a Chinese-word unit; ja wants no literal space at Japanese boundaries
outside the Chromium component; ko polite 요 endings; the browser profile
ruling (zh-Hans never 配置文件, zh-Hant 設定檔, ja プロファイル).

Publish gates: the fold fails on dashes in shipped descriptions and on
codename leaks; the public validator checks counts per locale; fold twice
and compare checksums of every emitted file (byte-stability); emit the
exact style of the downstream serializer (4-space JSON for the TMS, Xcode's
own xcstrings layout) so diffs stay surgical and tools do not churn.

Export gates: compare the old and new native catalog semantically, not
textually: English strings changed must be 0, existing localizations
removed or altered 0, metadata changed 0, localizations added equal to keys
times locales. Git's default diff can show thousands of deleted lines on
many inserted blocks; the histogram diff algorithm shows the truth, and the
semantic numbers go in the PR body.

## Stage 6: Coordinator review

- Print the **full cross-locale table**: every key, its English, and all
  eight renderings side by side. Read it. The coordinator reads English and
  both Chinese locales for meaning, and reads every other locale for
  structure: placeholders in place, parallel pairs parallel, one noun per
  repeated concept, fragment keys without periods, label keys without
  periods, lengths sane for the widget, brand casing intact.
- Check vocabulary consistency inside the table against the shipped rows
  the refs named (today: es pairing rows capitalise Perfil, so the new
  sentence keeps the capital).
- Read every agent's citations; open the load-bearing ones.
- Assemble the **owner review pile**: coined terms with their derivation,
  premise challenges, register doubts, conflicts between the app and the
  platform (the app ships ミュート, Apple says 消音). Persist it across runs;
  raise the relevant items when that component next comes up; after a
  ruling, land it in all four places at once: the human glossary document,
  the machine glossary or addenda, the lint rule, and the brief generator.
- Owner-facing flags are phrased as conflict plus recommendation, in the
  owner's language, never as a question with no proposal.

## Stage 7: Apply, publish, sync, refresh

- Apply seeds with a provenance string (run id, glossary version), then
  lint; keep slice, refs, briefs and seeds in a dated `bulk-run/` directory
  so the next drop copies the previous one instead of starting cold and any
  later dispute traces to its evidence.
- Plural and device variations live in the native format: write one and
  other forms for de, fr, es, nl and a single form for zh-Hans, zh-Hant,
  ja, ko, before the exporter serialises, so the diff comes out in the
  canonical layout.
- Public commits follow the blur policy: neutral wording, no internal
  component names, no dashes.
- Sync back as **pure additions** on a branch cut from the branch the
  requester named; when two branches share the same catalog (a release
  branch and dev), open one PR against each with the same file so neither
  lags. The PR body carries the semantic numbers and the surface list.
- Refresh the TMS per component after the public push; a source-only
  change can leave units in a needs-editing state even though the
  translation is current, so query that state and clear it, then read back
  counts per locale.
- Report to the requester in their language, tight and skimmable: scope,
  links, what was retired, what was coined, what needs a ruling. Read the
  message back after posting.

## Failure modes this process exists to catch (all real, dated)

- A "translation" of a UI term that no real product in the locale uses
  (corpus probe catches it).
- A brand assumed to stay English that the platform vendor translates in
  exactly two locales (challenge-the-premise caught 时间机器/時光機).
- An owner's term that is the platform's word for a different concept
  (Extension as 插件, 2026-08-04; flagged after the fact, hence Principle 5).
- A house joke rendered as a different image per locale (oven became
  stewing and simmering, 2026-09-29; now bound in every brief).
- A new string stealing an existing key's slug so the old public key would
  have pointed at new English (pinned, 2026-10-09 and 2026-10-15).
- A native-key rename dropping translations with every counter reading
  zero (2026-09-08; count regression check).
- Reworded English carrying old translations as current (2026-09-15;
  fingerprint scan of the manifest itself).
- An Apple term that contradicts what the app already ships (ミュート vs
  消音, 2026-10-12; app consistency kept, conflict raised).
- A fragment translated with a trailing period that then renders inside
  parentheses (fragment rule, 2026-10-15).
- A placeholder reworded, a dash smuggled in, a 您 slipped in by the
  model's habit (mechanical gates).
- Two Chinese locales treated as one language (separate verification).
- A sync PR that looked like a rewrite of the catalog because of git's
  diff heuristics (semantic check plus histogram diff, 2026-10-12).

## Appendix: a brief from the 2026-10-15 macOS drop (zh-Hans, abridged)

    You are the zh-Hans translator for 12 new Phi Browser macOS strings.
    Three small features: (a) pinned tab scope changes: a status problem
    line, three short REASON fragments inserted into it, two migration
    wizard refusals, a settings error and a settings note. (b) synced
    deletion: an extra sentence appended to the delete profile and delete
    Space confirmations, plus one error reason. (c) profile matching during
    sync pairing: one error sentence.
    Read BOTH files first: slice.json (every key has a description saying
    where the string sits) and refs.json (zh-Hans block, BINDING: shipped
    pinned tab, scope, sync status, browser migration, profile and Space
    wording, plus the glossary block). Reuse shipped vocabulary verbatim:
    "pinned tab scope", "Space", "profile", "browser migration", "synced
    devices", "Try again" phrasing, "Local browser data is unavailable."
    Rules: 1. The status key keeps %1$lld and %2$@ byte-exact and renders
    like "Pinned tab scope change not applied yet (3 attempts; A browser
    migration is running)"; the English has no plural variation, so use a
    wording that reads naturally with any number. 2. The three reason
    fragments take NO trailing period; the data-unavailable fragment is the
    shipped sentence minus its period, reuse that translation exactly.
    3. The two synced-devices sentences are parallel; profile vs Space is
    the only difference. 4. "default profile" appears twice in one key;
    render both with the same noun. 5. 你 register, Apple zh-Hans macOS
    wording, Pangu spacing, never 您. No em dashes, no en dashes.
    Write EXACTLY one file, seeds-zh-Hans.json, shaped
    {"zh-Hans": {"macos": {...all 12 keys}}}. Verify it parses. Final
    reply: one line.

Outcome: all eight seeds passed the gates first time; the vocabulary probe
found one coined term ("default profile", zero shipped hits in every
locale) and it went to the owner review pile with its derivation.
