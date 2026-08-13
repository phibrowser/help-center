# Simplified Chinese internationalization implementation

Implementation performed: 2026-08-10 11:10:44 CST (+0800).

CJK emphasis rendering fix performed: 2026-08-10 14:41:29 CST (+0800).

Targeted-markup refinement and automated test performed: 2026-08-10 16:23:48 CST (+0800).

Pilot branch integration updated: 2026-08-11 10:09:59 CST (+0800).

Exploratory branch renamed: 2026-08-11 12:21:47 CST (+0800).

Language-agnostic resource refactor performed: 2026-08-13 10:35:41 CST (+0800).

Language-support branch renamed: 2026-08-13 12:05:59 CST (+0800).

Localization handoff workflow added: 2026-08-13 12:39:32 CST (+0800).

Status: implemented and validated locally on the `experiment/i18n-language-support` branch. Not independently translated-reviewed, privacy-reviewed, legally reviewed, deployed, or published.

Pilot maturity warning: this branch is explicitly an i18n test, not a complete or production-ready multilingual release. Only Simplified Chinese is implemented. The other seven requested locales are not ready, and exercising the architecture with one translated locale cannot reveal every routing, typography, search, content-workflow, or deployment issue that later languages may expose. The implementation and its checks are expected to require further refinement as those locales are piloted.

## Why this work was done

The requested language set is:

- German (`de`)
- Spanish (`es`)
- French (`fr`)
- Japanese (`ja`)
- Korean (`ko`)
- Dutch (`nl`)
- Simplified Chinese (`zh-Hans`)
- Traditional Chinese (`zh-Hant`)

The owner requested a complete Simplified Chinese implementation first so that the i18n system can be verified before the other seven locale trees are added. The initial approved pilot scope included all 22 content pages, the VitePress shell, local search, the Ask Phi control, and Cookie Consent.

While the pilot branch was being created from the latest `origin/main`, upstream added the Phi CLI as a twenty-third English page. The owner approved translating that page rather than accepting partial locale coverage, so the final pilot contains 23 English and 23 Simplified Chinese pages. This preserves page parity but does not change the branch's experimental status.

## Implementation status

English remains at its existing `/help/...` routes. Simplified Chinese is available at matching `/help/zh-Hans/...` routes.

Examples:

| English         | Simplified Chinese      |
| --------------- | ----------------------- |
| `/help/`        | `/help/zh-Hans/`        |
| `/help/memory/` | `/help/zh-Hans/memory/` |
| `/help/faq/`    | `/help/zh-Hans/faq/`    |

The existing implicit English language tag, `en-US`, was preserved rather than changing the site's English SEO targeting as part of this implementation. Simplified Chinese uses the script-specific `zh-Hans` tag.

## How it was implemented

### Locale configuration

Locale data is resource-driven rather than embedded in application configuration:

- `site/.vitepress/i18n/locales/*.json` contains translated UI resources;
- `site/.vitepress/i18n/locales/registry.json` is the explicit locale registration list;
- `site/.vitepress/i18n/locales/index.ts` validates and loads registered resources;
- `site/.vitepress/i18n/guide.ts` contains the language-neutral guide structure and routes;
- `site/.vitepress/i18n/types.ts` defines the resource contract;
- `site/.vitepress/i18n-config.ts` generically builds VitePress locales, navigation, sidebars, search translations, route prefixes, and fallback lookup.

The core configuration does not branch on a language code and contains no translated UI literals. Each resource declares its key, BCP 47 language tag, root status, site metadata, theme labels, search copy and representative queries, project-owned component copy, and Markdown control labels. Zod validates external JSON resources at load time. Exactly one resource must declare itself as the root locale. Unknown locale indexes fall back to that resource rather than to another translated language.

This keeps route parity explicit without introducing a runtime i18n framework. Adding a language still requires explicit registration, but it does not require modifying the generic configuration or Vue components.

### Content

`site/zh-Hans/` contains a complete translated tree matching the 23 English Markdown files currently on this branch.

The translation preserves:

- page structure and frontmatter descriptions;
- 72 FAQ detail entries;
- code fences and custom containers;
- all 164 internal cross-page links;
- all 11 cross-page anchor links.

Translated internal links use `/zh-Hans/` destinations so they cannot silently return readers to English. Durable cross-page anchors use explicit IDs where translated headings would otherwise change the generated slug.

The terminology was checked against the current `zh-Hans` values in `../phibrowser-mac/Resources/Localizable.xcstrings`. In particular:

- Profile is translated as “个人资料”.
- Balanced is translated as “均衡”.
- Open as Split is translated as “以分屏打开”.
- New Incognito Window is translated as “新建无痕式窗口”.

### CJK emphasis markup

Markdown-it's CommonMark emphasis rules do not recognize some closing `**` delimiters when emphasized content ends in a punctuation token and the delimiter is immediately followed by text. A link also ends in a punctuation token for this purpose. For example, `**[记忆](...)**会` rendered the link but left both pairs of asterisks visible. Multiple affected spans on one line could also be paired across unrelated text and produce incorrect nested emphasis.

The 403 spans that VitePress parses correctly remain normal Markdown. Only the 57 parser-incompatible spans use semantic `<strong>...</strong>` markup. Markdown links inside those exceptions remain normal Markdown links, so `<strong>[记忆](...)</strong>会` renders as a bold link without adding typographically unwanted spaces around Chinese text.

`scripts/test-i18n.mjs` imports the registered locale resources and validates every registered content tree with the installed VitePress renderer. It fails when a locale directory is missing, page parity differs from the root tree, an internal Help link leaves its locale or points to a missing page or anchor, a Markdown strong span cannot close in context, a prose delimiter is emitted literally, or the intended and rendered strong-span counts differ. It also requires a current English source baseline for every registered locale and rejects registered locale keys, language tags, and labels in the generic config, components, CSS, and test itself, preventing future language-specific branches from silently returning. The test contains no language list.

`scripts/test-i18n-build.mjs` runs after VitePress builds. It validates every generated page's language, canonical URL, reciprocal `hreflang`, locale theme copy, Markdown controls, sitemap entry, local-search index, and resource-declared representative search queries. `pnpm build` runs both source and generated-output validation.

### Theme and custom components

The default VitePress theme receives locale-specific labels through `themeConfig`.

Each locale JSON resource contains project-owned Vue UI copy for:

- Ask Phi;
- footer privacy controls;
- Cookie Consent banner;
- Cookie preferences dialog;
- consent category and Global Privacy Control text;
- accessibility labels.

The generic locale builder attaches `customThemeCopy` to each locale's typed VitePress theme configuration. `CookieConsent.vue` and `PhiSidebarButton.vue` read that active theme data directly; neither component imports the locale registry, knows a language code, or contains translated text. Consent storage and analytics behavior were not changed.

The main-site Privacy Policy link intentionally remains `/privacy/`. The main marketing site does not currently publish a Chinese policy route, so Chinese Help users still reach the English authoritative policy.

### Search

VitePress still uses local MiniSearch indexes and generates one independent index per locale.

The implementation adds:

- search button, modal, footer, and accessibility copy generated from every registered locale resource;
- a shared `Intl.Segmenter` word tokenizer so scripts without whitespace boundaries are tokenized without language branches;
- representative English and Simplified Chinese query checks.

VitePress 1.6.4 applies one tokenizer configuration to all locale indexes. English query behavior was therefore tested after adding the CJK-capable tokenizer.

### Markdown-rendered UI

Installed VitePress 1.6.4 does not support the newer per-locale `markdown` key documented by current online VitePress documentation.

A narrow Markdown fence-renderer adaptation obtains the copy-button title from the active locale resource. A locale-aware head transform obtains the copied-state CSS label from the same resource. The renderer and CSS mechanism contain no language code or translated literal. English currently supplies “Copy Code” and “Copied”, while Simplified Chinese supplies “复制代码” and “已复制”.

This workaround is intentionally limited to the missing 1.6.4 capability. It should be removed after a future VitePress upgrade provides and validates native per-locale Markdown renderer copy.

### SEO and sitemap

The existing canonical URL function already includes the locale source path, so translated pages receive self-referencing canonical URLs.

The sitemap priority and change-frequency policy now strips known locale prefixes before classifying a page. This gives corresponding English and Simplified Chinese pages the same policy.

VitePress generates reciprocal sitemap alternatives for every page pair:

- English uses `hreflang="en-US"`.
- Simplified Chinese uses `hreflang="zh-Hans"`.

No automatic browser-language redirect was added.

### Deployment

No Wrangler or output-directory change was needed.

The existing layout produces files such as:

```text
site/.vitepress/dist/help/zh-Hans/memory/index.html
```

under the same Cloudflare assets root.

### Translation handoff workflow

`docs/localization-guide.md` is the operational guide for translators, reviewers, and maintainers. New translations begin under `localization/<locale>/`, which is outside the publishable VitePress tree. `pnpm i18n:scaffold` copies the current English tree and records its Git source revision; copied English therefore cannot accidentally appear in the language menu or deployment.

`status.json` tracks owners, every page's translation and independent content-review state, and product terminology, privacy/legal, and search QA gates with evidence. `pnpm i18n:status` reports readiness and stale English baselines. `pnpm i18n:promote` is the explicit publication-tree transition; it refuses incomplete or stale drafts and rolls back copied files and registry changes if source validation fails.

The existing `zh-Hans` status record truthfully marks translation as complete while leaving independent content review and global review gates open.

## Validation performed

### Repository validation

The final validation commands are recorded in the task handoff. The implementation is required to pass:

```sh
pnpm format:check
pnpm i18n:status
pnpm test:i18n
pnpm build
```

`pnpm i18n:status` may report registered review work still pending without failing when the published content baseline remains current. Draft locales fail until all promotion gates are approved.

### Generated output checks

The local production build generates:

- 47 HTML files: 23 English pages, 23 Simplified Chinese pages, and the not-found document;
- `<html lang="en-US">` on English pages;
- `<html lang="zh-Hans">` on Simplified Chinese pages;
- self-referencing English and Simplified Chinese canonical URLs;
- reciprocal `en-US` and `zh-Hans` sitemap alternatives;
- one English and one `zh-Hans` local-search index;
- English and Simplified Chinese corresponding-page links in the language menu;
- localized code-copy labels.

Automated structural checks verify:

- 23 English and 23 Simplified Chinese Markdown files;
- no missing or extra translated route files;
- matching heading, FAQ detail, and code-fence counts;
- 23 translated descriptions;
- no unintended English root-relative Markdown links in `site/zh-Hans/`;
- all 164 translated internal page targets exist;
- all 11 translated cross-page anchors exist in rendered HTML;
- all 403 regular Markdown strong spans render correctly;
- only the 57 parser-incompatible spans use targeted `<strong>` markup;
- no literal `**` delimiter remains in generated Simplified Chinese prose;
- the reported bold-link case renders as `<strong><a ...>记忆</a></strong>`.

Representative search checks return results for:

- English: `memory`, `incognito space`, and `password manager`;
- Simplified Chinese: `记忆`, `无痕空间`, and `密码管理器`.

## Manual verification requested from the owner

The owner should perform this before approving the i18n mechanism or asking for the other seven locales.

1. Start the documented local development environment.
2. Open `/help/` and switch to Simplified Chinese.
3. From `/help/zh-Hans/memory/`, switch to English and back; confirm the deep page is preserved.
4. On `/help/zh-Hans/what-is-phi-browser/`, confirm the linked “记忆” and “浏览器技能” labels are both bold and clickable, with no visible asterisks.
5. Search for `记忆`, `无痕空间`, and `密码管理器` and open results.
6. Check desktop and mobile navigation, sidebar labels, outline labels, previous/next links, appearance controls, skip link, and return-to-top copy.
7. On `/help/zh-Hans/get-started/`, use the code-copy button and confirm “复制代码” and “已复制”.
8. Open Cookie Settings from the footer and inspect every category and accessibility label. A previously stored shared consent choice can suppress the first-visit banner, so use the footer control or a clean browser profile.
9. In Phi Browser with Sidecar installed, verify that the Ask Phi button displays “询问 Phi”. The button remains hidden in browsers where the Phi extension contract is unavailable.
10. Check a nonexistent `/help/zh-Hans/...` URL and confirm the hydrated not-found experience is Chinese.
11. Inspect a translated page's language tag, canonical URL, and corresponding language-menu target.

Evidence of completion should be a recorded QA result, including the tested build or commit and any screenshots or defects found.

## Open issues and resolution conditions

| Open issue                                                                                            | Responsible party                                                                                         | Required timing                                          | Resolution condition and evidence                                                                                           |
| ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Simplified Chinese prose has not had independent native-language review                               | Simplified Chinese content reviewer with Phi product knowledge                                            | Before public deployment                                 | Review all 23 final Markdown files; record approval or corrections against the reviewed commit                              |
| Translated Cookie Consent and privacy wording has not had privacy/legal review                        | Privacy or legal professional qualified for the applicable publication jurisdictions and engagement scope | Before public deployment                                 | Review the final rendered copy, consent behavior, and policy destination; record approval against the deployed wording      |
| The linked main-site Privacy Policy remains English                                                   | Product, privacy, and main-site owners                                                                    | Before describing the Chinese journey as fully localized | Approve the English authoritative destination or publish and link an approved Chinese policy                                |
| Runtime mobile, extension-only Ask Phi, and locale not-found behavior has not been manually exercised | Help-center owner                                                                                         | Before approving this pilot                              | Complete the manual verification checklist and retain the QA result                                                         |
| Simplified Chinese search relevance has only representative automated coverage                        | Help-center owner and Simplified Chinese reviewer                                                         | During pilot QA                                          | Test real user queries and record acceptable results or required tokenizer changes                                          |
| Per-locale Markdown copy uses a VitePress 1.6.4 workaround                                            | Help-center maintainer                                                                                    | On a future VitePress upgrade                            | Replace it with native locale Markdown configuration after dependency review and passing regression tests                   |
| The i18n architecture has only been exercised with one translated locale                              | Help-center owner and maintainers                                                                         | Before treating the design as stable                     | Pilot at least one additional locale through scaffold, review, promotion, and production QA; record newly discovered issues |
| The remaining seven requested locales are not implemented                                             | Locale content owners                                                                                     | After the owner accepts this pilot                       | Follow `docs/localization-guide.md`; retain current source revision and review evidence for every locale                    |

## Adding the remaining locales

For each future locale, follow `docs/localization-guide.md`:

1. Run `pnpm i18n:scaffold <locale> '<label>'` from a clean, committed root-content baseline.
2. Translate the isolated resource and complete 23-file Markdown draft under `localization/<locale>/`.
3. Assign owners and maintain page and global review evidence in `status.json`.
4. Use `pnpm i18n:status <locale>` until the draft is current and ready.
5. Have a maintainer run `pnpm i18n:promote <locale>`; do not manually add language branches to generic code.
6. Run `pnpm build`, manual locale QA, required content and privacy/legal review, and deployment verification.

Do not use Simplified Chinese as a fallback for `zh-Hant`. Traditional Chinese must receive its own reviewed content, and missing Traditional Chinese copy should fall back to English rather than Simplified Chinese.

## Required follow-up

No external publication action was performed.

Before this implementation can be described as published or production-effective:

1. The help-center owner must complete functional pilot QA.
2. A Simplified Chinese product-content reviewer must review the final content.
3. The appropriate privacy/legal professional must review the final consent and privacy wording.
4. An authorized release owner must approve and perform deployment.
5. The release owner must verify production `/help/zh-Hans/...` routing and retain deployment evidence.

Failure to complete the first three reviews can ship broken navigation, inaccurate product terminology, or privacy wording whose legal meaning has not been verified.
