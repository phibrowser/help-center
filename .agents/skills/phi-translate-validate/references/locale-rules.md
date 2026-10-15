# Per-locale rules (Phi house style), v2 2026-10-15

Eight target locales. The register column is non-negotiable; the evidence
column lists the authorities a translator agent verifies against before
deciding contested terminology. Where a surface rule exists (UI microcopy
vs prose vs system dialog), it beats the generic register line.

| Locale  | Register                                                                                                                                                       | Typography and spacing                                                                                                                                                                                                                               | Verify terminology against                                                                                                                                                             |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| zh-Hans | 你, NEVER 您                                                                                                                                                   | Pangu spacing: one space between CJK and Latin/digits/placeholders; one space between a digit and a Chinese-word unit (10 分钟), none before symbol units and percent (10GB, 10%); full-width punctuation; corner quotes 「」『』; digits half-width | Chrome zh-CN UI corpus, Apple zh-CN support/guides, mainland tech media for new concepts (智能体)                                                                                      |
| zh-Hant | 你, NEVER 您; an independent Taiwan translation, never converted from zh-Hans                                                                                  | Taiwan vocabulary (分頁, 設定檔, 網址列, 釘選); pangu spacing; full-width punctuation; corner quotes                                                                                                                                                 | Chrome zh-TW UI corpus, Apple zh-TW support, Taiwan tech media (iThome, AWS TW) for new concepts (AI 代理)                                                                             |
| ja      | Teineigo です/ます for sentences (dialogs, descriptions, errors, empty states); 体言止め plain noun or verb form for buttons, menu items, labels, status chips | NO literal spaces at Japanese/Latin/digit boundaries in app-native text (engines add optical spacing); Chrome-style spaced text only when reproducing upstream Chrome strings verbatim; brands in Latin script untouched                             | Chrome ja xtb corpus, Apple ja support/guides, Apple ja app UI for Apple feature names, JTF style guide; evidence for the register split: SmartHR Design System, zumuya macOS Japanese |
| ko      | Haeyoche (해요체, 요 endings) for sentences; noun form for labels; never 습니다/십시오                                                                         | Particles and counters attach directly to Latin brand words (Kiosk에서, %lld회); 한글 맞춤법                                                                                                                                                         | Chrome ko xtb corpus, Apple ko support, 국립국어원                                                                                                                                     |
| de      | du, never Sie                                                                                                                                                  | „…“ quotes; Apple de menu convention: infinitive commands (Lesezeichen verwalten); Apple menu names (Ablage, not Datei, for the File menu in macOS copy); compounds with a hyphen when one part is an English brand (Standard-Space)                 | Chrome de xtb corpus, Apple de support/guides, German tech media (t3n, heise) for new concepts (KI-Agent)                                                                              |
| fr      | vous                                                                                                                                                           | ASCII apostrophes in UI strings (l'onglet, not l’onglet); non-breaking space before : ; ! ? and inside « » guillemets; sentence case                                                                                                                 | Chrome fr xtb corpus, Apple fr support/guides                                                                                                                                          |
| es      | tú, never usted; variant-neutral wording that works in es-ES and es-419                                                                                        | Sentence-case menus; «…» acceptable; IA not AI (FundeuRAE)                                                                                                                                                                                           | Chrome es xtb corpus, Apple es-es AND es-lamr support, FundeuRAE                                                                                                                       |
| nl      | je                                                                                                                                                             | Apple-leaning vocabulary (toetscombinaties, not sneltoetsen; Archief for the File menu); imperative verb style for commands (Kopieer, Sluit); hyphenated compounds with English brands (standaard-Space)                                             | Chrome nl xtb corpus, Apple nl support/guides                                                                                                                                          |

## Surface rules (apply on top of the register)

- **Menu items, buttons, titles, option labels, status chips**: no trailing
  period, short, verb-first where the locale's platform does it (de
  infinitive, nl imperative, ja plain form, zh verb-first).
- **Sentences** (descriptions, errors, confirmations): keep the period the
  English has; add no exclamation marks the English lacks.
- **Fragments inserted into another string's placeholder** (a reason slot,
  a count slot): translate as a sentence-case fragment with NO trailing
  period; when the fragment is a shipped sentence minus its period, reuse
  that sentence's translation minus its final punctuation.
- **Parallel pairs** (the same sentence for Profile and for Space): keep
  the two translations parallel, differing only in the noun.
- **A noun repeated inside one string** ("this Mac's default profile" and
  "the account's default profile"): render it with the same noun both
  times.
- **Counts without plural variation in the source** ("%1$lld attempts"):
  choose a wording that reads naturally for 1 and for many (de "Versuche:
  %1$lld", ko "%1$lld회 시도", zh "已尝试 %1$lld 次").
- **Plural variations when the format supports them** (Xcode xcstrings):
  one + other forms for de, fr, es, nl, derived from the shipped plural;
  a single form for zh-Hans, zh-Hant, ja, ko.
- **macOS system permission prompts** (Info.plist usage descriptions):
  Apple's own permission-prompt register in that locale (verify the
  wording on an Apple page or a shipping Mac app), since macOS renders them
  in a system dialog next to Apple's own sentences.
- **Apple feature names** (Mini Player, Reader, Picture in Picture): render
  them the way Apple renders them in that locale's Music, Safari or System
  Settings UI; verify on support.apple.com before deciding. When the app
  already ships a different rendering (ja ミュート vs Apple 消音), keep the
  app consistent and raise the conflict for a ruling instead of mixing.
- **Marketing and release notes**: recreate the voice; named house jokes
  must land as the same image in every locale (a cake baking in an oven is
  an oven in every locale, never stewing or simmering).
- **Help pages**: translate per page, keep heading anchors resolvable
  (explicit {#slug} ids), prefix internal links with the locale, quote UI
  labels exactly as the shipped catalog renders them, translate known
  English defects faithfully and report them rather than fixing silently.

## House-wide bans (all locales, all content)

- NO em dash (U+2014) and NO en dash (U+2013), anywhere, ever. Restructure
  with comma, colon, semicolon, period, or parentheses. This applies to the
  English source too; fix the source rather than propagating a dash.
- NO 您 in any Chinese text.
- NO internal codename in any user-visible text, in any locale.
- Placeholders byte-exact: `{{name}}`, `%@`, `%1$@`, `%1$lld`, `$1`, `%d`
  are untouchable tokens; spacing around them follows the locale's
  Latin-word rules.
- No exclamation-mark inflation; no length padding; stale or missing
  translations fall back to English by design, never to a sibling locale.
- Brands in the keep-English list stay verbatim, including their casing.

## Where the evidence lives

- **Shipped catalogs of the product** (strongest for product vocabulary):
  the locale's own translation file, grepped for the English concept or the
  known rendering. A term with zero hits there is a coined term and must be
  flagged.
- **Chrome UI corpus**: raw.githubusercontent.com/chromium/chromium/main/
  chrome/app/resources/generated*resources*<locale>.xtb (locale codes:
  zh-CN, zh-TW, ja, ko, de, fr, es, nl). The strongest external authority
  for browser-domain vocabulary because Phi is a Chromium browser. For
  strings whose English is identical to an upstream Chrome string, take
  Chrome's translation outright instead of retranslating.
- **Apple**: support.apple.com/<locale>/guide/... per-locale pages and the
  Apple apps themselves. The authority for macOS-native surfaces (system
  dialogs, permission prompts, menu names, Apple feature names).
- **Locale market media** for concepts newer than the platforms' UI (AI
  agent, skills, memory): the locale's own tech press and vendor docs; cite
  the URL and quote the phrase.
- When Chrome and Apple disagree, pick by SURFACE: browser-web features
  follow Chrome, macOS-native dialogs and menus follow Apple, and the
  market's actual usage breaks ties.
- Never assume a brand keeps English in every locale: verify per locale
  (Apple translates "Time Machine" in both Chinese locales but nowhere
  else).
- Record each verified decision in a per-locale addendum (recommendation,
  alternatives, evidence URLs, confidence, note) so the next run inherits
  it instead of re-deriving it.
