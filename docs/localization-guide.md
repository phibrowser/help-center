# Help Center localization guide

This guide is for translators, reviewers, and maintainers adding a language to Phi Help. The workflow deliberately separates translation drafts from publishable site content.

## Current status

Simplified Chinese (`zh-Hans`) is the only translated locale currently registered. Its content is implemented, but independent content review, privacy/legal review, and full search QA remain open. Do not use it as proof that every language has been validated.

The next requested locales are German (`de`), Spanish (`es`), French (`fr`), Japanese (`ja`), Korean (`ko`), Dutch (`nl`), and Traditional Chinese (`zh-Hant`). Traditional Chinese must receive its own translation and review. It must not silently fall back to Simplified Chinese.

## Roles and completion evidence

Assign these roles before requesting promotion:

| Role                         | Responsibility                                                              | Evidence                                                                        |
| ---------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Translation owner            | Translate all pages and locale resources                                    | Name in `status.json`; every page translation set to `approved`                 |
| Content reviewer             | Independently review accuracy, tone, links, and completeness                | Name in `status.json`; every page content review set to `approved`              |
| Product terminology reviewer | Verify Phi feature and UI terms against product strings                     | Review owner, `approved` status, and link or note identifying reviewed evidence |
| Privacy/legal reviewer       | Review Cookie Consent and privacy wording for the publication jurisdictions | Qualified reviewer, `approved` status, and evidence tied to the final wording   |
| Search QA owner              | Test realistic queries in the target language                               | Review owner, `approved` status, and recorded query/results evidence            |

An agent-generated or translator-generated review is not independent approval. Privacy/legal review must be performed by an appropriately qualified professional for the relevant jurisdiction and engagement scope.

## 1. Create an isolated draft

From a clean working tree whose root-language Markdown is committed, run:

```sh
pnpm i18n:scaffold <locale> '<language menu label>'
```

For example:

```sh
pnpm i18n:scaffold fr 'Français'
```

This creates:

```text
localization/fr/
├── content/      # complete copy of the current English Markdown tree
├── resource.json # copy of the root UI resource
└── status.json   # source revision, page state, owners, and review gates
```

Nothing under `localization/` is included in the site build, language menu, search index, sitemap, or deployment. Scaffolding never publishes copied English content.

The script records the latest Git commit that changed root-language Markdown. If root content has uncommitted changes, it refuses to create the draft.

## 2. Translate the locale resource

Translate every user-facing value in `resource.json`, including:

- site title and description;
- navigation, sidebar, accessibility, previous/next, appearance, and 404 labels;
- local-search controls;
- representative `searchQueries` used by build validation;
- Ask Phi, Cookie Consent, privacy controls, and accessibility copy;
- code-copy and copied-state labels.

Do not change:

- `key` or `lang`, which must remain the requested canonical BCP 47 locale;
- `root`, which must remain `false`;
- object keys such as `whatIsPhi`, `privacyControls`, or `copyCode`;
- product, vendor, or command names unless the product's approved terminology says otherwise.

Cookie Consent and privacy wording must retain the source legal meaning. Translation completion does not constitute privacy/legal approval.

## 3. Translate Markdown content

Translate every file under `content/`. Preserve:

- frontmatter and a translated `description`;
- heading hierarchy;
- custom containers such as `::: tip` and `::: details`;
- code blocks and commands unless the displayed prose itself should be localized;
- link destinations, fragments, and explicit stable IDs;
- the distinction between Browser Skills and the phi-browser skill.

### Internal links

Before promotion, draft links may still use root English paths because the scaffold is an exact source copy. During translation, rewrite all Help cross-page destinations to the target locale:

```md
[Memory](/memory/)
```

becomes, for French:

```md
[Mémoire](/fr/memory/)
```

Do not rewrite links to the main site, such as `/privacy/`, unless an approved localized destination exists. `pnpm test:i18n` validates all registered locale page targets, locale boundaries, and anchor fragments after promotion.

### CJK emphasis

Use ordinary Markdown emphasis by default:

```md
**bold text**
```

Markdown-it can fail when an emphasized span ends with punctuation or a link and is immediately followed by text in scripts without spaces. Only where `pnpm test:i18n` reports such a span, use targeted semantic HTML:

```md
<strong>[记忆](/zh-Hans/memory/)</strong>会……
```

Do not convert all emphasis to HTML.

## 4. Maintain translation status

Update `status.json` as work progresses. Valid states are:

- `todo`
- `in_progress`
- `complete`
- `approved`

`translation: approved` means the translation owner considers the page final. `contentReview: approved` means an independent reviewer has approved that final page. Assign both owners and record review evidence for every global gate.

Check progress with:

```sh
pnpm i18n:status <locale>
```

Without a locale argument, the command reports all workspaces. Drafts return a failing exit code until all promotion gates pass. Registered locales can remain visible as `registered/review-pending`; they fail only when their page inventory or English source baseline needs attention.

## 5. Synchronize English changes

`status.json` records `sourceRevision`, the root-language content baseline. `pnpm test:i18n` fails if registered translation content is based on a revision before a later English Markdown change.

For a draft that becomes stale:

1. Compare the source revision with the current English pages.
2. Apply every relevant source change to the translated page.
3. Reset affected page translation and review states as needed.
4. Update `sourceRevision` to the latest root-content commit only after synchronization.
5. Re-run the checks.

Do not update the hash merely to silence the test. The hash is evidence of the source version reviewed by the translation team.

## 6. Validate the draft

Before promotion:

```sh
pnpm i18n:status <locale>
pnpm format:check
```

The status command must report `ready-to-promote`. The translation and review owners should also manually inspect representative desktop and mobile pages, Cookie Consent, language switching, long headings, code blocks, and typography.

## 7. Promote explicitly

Promotion is a maintainer action:

```sh
pnpm i18n:promote <locale>
```

The command refuses promotion unless:

- the locale resource is valid;
- the content tree exactly matches the root page inventory;
- the English source revision is current;
- every page translation and content review is approved;
- product terminology, privacy/legal, and search QA gates have owners, approval, and evidence.

On success it copies content to `site/<locale>/`, copies the resource into the registered resource directory, updates `registry.json`, and runs the source i18n test. If validation fails, it rolls those publication changes back.

Keep the `localization/<locale>/status.json` record after promotion. It remains the source-baseline and review record for that registered locale.

## 8. Run release checks

Run:

```sh
pnpm format:check
pnpm build
```

`pnpm build` performs both source and generated-output validation. It checks:

- locale resource shape and one root locale;
- page parity for every registered locale;
- internal Help links, locale boundaries, and anchors;
- Markdown emphasis rendering;
- absence of locale-specific tokens in generic implementation files;
- generated page language, canonical URL, and reciprocal `hreflang`;
- locale theme and code-copy labels;
- one local-search index per locale;
- every locale's declared representative search queries;
- sitemap URL count.

The release owner must then test the deployed routes and retain deployment evidence. A successful local build does not mean the locale is deployed, accepted, or legally effective.

## Updating shared structure

When an English page is added, removed, renamed, or moved:

1. Update `site/.vitepress/i18n/guide.ts` when navigation is affected.
2. Update every registered locale resource label if a new route key is introduced.
3. Update each locale content tree.
4. Update each `status.json` page inventory and source revision after translation and review.
5. Run `pnpm build`.

Do not solve a single language's need with a language-code branch in generic configuration, Vue components, CSS, or tests. Add translated values to the locale resource. If a language needs different behavior, first determine whether it can be represented as a generic resource capability with tests.
