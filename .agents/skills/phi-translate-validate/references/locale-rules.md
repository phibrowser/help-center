# Per-locale rules (Phi house style)

Eight target locales. The register column is non-negotiable; the evidence
column lists the authorities a translator agent should verify against online
before deciding contested terminology.

| Locale  | Register                                                                     | Typography and spacing                                                                                                                                                                         | Verify terminology against                                                                                                  |
| ------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| zh-Hans | 你, NEVER 您                                                                 | Pangu spacing: one space between CJK and Latin/digits/placeholders; none between digit and unit; full-width punctuation; corner quotes 「」『』 (not ""); digits half-width                    | Chrome zh-CN UI corpus, Apple zh-CN support/guides, Feishu style norms                                                      |
| zh-Hant | 你, NEVER 您                                                                 | Taiwan conventions; pangu spacing; full-width punctuation; corner quotes                                                                                                                       | Chrome zh-TW UI corpus, Apple zh-TW support (note: Apple zh-TW wording often differs from zh-CN, e.g. 網址 vs 网址, 時光機) |
| ja      | Teineigo です/ます for sentences; plain noun form for buttons, menus, labels | NO literal spaces at CJK/Latin boundaries in app-native text (web pages should instead set `text-autospace` CSS); Chrome-style spaced text only when matching upstream Chrome strings verbatim | Chrome ja xtb corpus, Apple ja support/guides, JTF style guide                                                              |
| ko      | Haeyoche (해요체) for user-facing sentences; noun form for labels            | Particles and counters attach directly to English brand words (Kiosk에서); standard Korean orthography (한글 맞춤법)                                                                           | Chrome ko xtb corpus, Apple ko support, 국립국어원                                                                          |
| de      | du, never Sie                                                                | „…" quotes; Apple de menu convention: infinitive commands (Lesezeichen verwalten)                                                                                                              | Chrome de xtb corpus, Apple de support/guides                                                                               |
| fr      | vous                                                                         | NBSP before high punctuation (: ; ! ?) and inside « » guillemets                                                                                                                               | Chrome fr xtb corpus, Apple fr support/guides                                                                               |
| es      | tú, never usted                                                              | Sentence-case menus; «…» quotes acceptable; prefer variant-neutral wording that works in es-ES and es-419                                                                                      | Chrome es xtb corpus, Apple es-es AND es-lamr support, FundeuRAE (esp. AI→IA and anglicisms)                                |
| nl      | je                                                                           | Apple-leaning vocabulary (toetscombinaties, not sneltoetsen); imperative verb style for commands (Kopieer, Sluit)                                                                              | Chrome nl xtb corpus, Apple nl support/guides                                                                               |

## House-wide bans (all locales, all content)

- NO em dash (U+2014) and NO en dash (U+2013), anywhere, ever. Restructure
  with comma, colon, semicolon, period, or parentheses. This applies to the
  English source too; fix the source rather than propagating a dash.
- NO 您 in any Chinese text.
- Placeholders byte-exact: `{{name}}`, `%@`, `%1$@`, `$1`, `%d` are
  untouchable tokens; spacing around them follows the locale's Latin-word
  rules.
- No exclamation-mark inflation: at most what the English uses, usually zero.
- No trailing period on labels, buttons, menu items, or status chips.

## Where the evidence lives

- **Chrome UI corpus**: raw.githubusercontent.com/chromium/chromium/main/
  chrome/app/resources/generated*resources*<locale>.xtb (locale codes:
  zh-CN, zh-TW, ja, ko, de, fr, es, nl). Grep for the English concept's
  known translation ids or search phrases. This is the strongest authority
  for browser-domain vocabulary because Phi is a Chromium browser.
- **Apple**: support.apple.com/<locale>/guide/... per-locale pages. The
  authority for macOS-native surfaces (system dialogs, permission prompts,
  Time Machine, Finder idiom) and for Apple-brand renderings.
- When Chrome and Apple disagree, pick by SURFACE: browser-web features
  follow Chrome, macOS-native dialogs follow Apple, and the market's actual
  usage (search real product docs and reviews in the locale) breaks ties.
- Never assume a brand keeps English in every locale: verify per locale
  (example: Apple translates "Time Machine" in both Chinese locales but
  nowhere else).
