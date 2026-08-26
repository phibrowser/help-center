# Main-site i18n alignment

Implementation performed: 2026-08-26 10:37 CST (+0800).

Status: implemented and validated locally on the `experiment/i18n-language-support` branch. Not deployed or published. Translated content was deliberately left untouched; the remaining locales are owned by the localization team.

## Why this work was done

The main site (`philanding`, Next.js with `next-intl`) now has a locale routing foundation with nine explicit locales, unprefixed English, `/<locale>/` prefixes for every other language, native-language menu names, and `hreflang` alternates with `x-default` pointing at English (see `../philanding/docs/i18n-routing-foundation.md` and `../philanding/i18n/locales.ts`). The Help Center's Simplified Chinese pilot had chosen compatible URLs but had no shared language list, tagged English as `en-US`, and emitted no `x-default`. The owner asked to align the Help Center with the main site's conventions (URL structure, language set, and related metadata) without changing translated content.

## What changed

| Concern                 | Before                                                      | After                                                                                                                                     |
| ----------------------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Language list           | Implicit; any BCP 47 tag could be scaffolded and registered | `site/.vitepress/i18n/supported-locales.json` mirrors the main site's nine locales and native names; scripts and the registry validate it |
| English language tag    | `en-US` (VitePress default, `en-US.json`)                   | `en` (`en.json`), matching the main site's `<html lang>` and `hreflang`                                                                   |
| Site-level `lang`       | VitePress default `en-US` in `__VP_SITE_DATA__`             | Root locale's `lang`                                                                                                                      |
| Language menu order     | `registry.json` order                                       | Shared catalog order (same as the main site's switcher)                                                                                   |
| Language menu names     | Free-form label per resource                                | Must equal the catalog name; `pnpm i18n:scaffold` fills it in                                                                             |
| `hreflang` in page head | None (sitemap only)                                         | `<link rel="alternate" hreflang="…">` for every registered locale plus `x-default`                                                        |
| `hreflang` in sitemap   | One per registered locale                                   | One per registered locale plus `x-default` → unprefixed English                                                                           |
| `pnpm i18n:scaffold`    | `<locale> <label>` required                                 | `<locale> [label]`; locale must be a non-default catalog code; label optional and must match the catalog                                  |
| `pnpm i18n:promote`     | Schema check only                                           | Also rejects a draft whose `key`/`lang`/`label` disagree with the catalog                                                                 |
| `pnpm i18n:status`      | No locale check                                             | Flags a workspace whose directory name is not a translatable catalog code                                                                 |
| `pnpm test:i18n`        | Substring search for locale tokens in generic files         | Whole-token search, so the two-letter `en` tag does not flag ordinary words                                                               |
| `pnpm test:i18n:build`  | Verified sitemap `hreflang` per locale                      | Also verifies `x-default` and the head alternates on every generated page                                                                 |

Unchanged on purpose:

- URL structure: English at `/help/…`, other languages at `/help/<locale>/…`, trailing slashes, no browser-language redirect. This already matched the main site.
- VitePress's reserved `root` key for the default locale. The root resource identifies its language through `lang: "en"`; every other resource uses the locale code for both `key` and `lang`.
- All Markdown under `site/` and `site/zh-Hans/`, `localization/zh-Hans/status.json`, and the Simplified Chinese resource copy.
- The main-site Privacy Policy link (`/privacy/`) and the nav "Phi Browser" link stay unlocalized until the main site publishes approved localized destinations.

## How it was implemented

- `site/.vitepress/i18n/supported-locales.json` holds `defaultLocale` and the ordered `{ code, name }` list copied from the main site's `LOCALE_DEFINITIONS`.
- `site/.vitepress/i18n/supported-locales.ts` loads and validates the catalog (`SupportedLocalesSchema` in `schema.ts`) and exports `getCatalogIssues(resource)`, the single rule set shared by the registry loader, `scaffold-locale.mjs`, and `promote-locale.mjs`.
- `site/.vitepress/i18n/locales/index.ts` rejects a registered resource that disagrees with the catalog and sorts `localeResources` in catalog order.
- `site/.vitepress/config.mts` sets the site-level `lang`, appends head alternates in `transformHead`, and adds the `x-default` sitemap link in `sitemap.transformItems`. VitePress shares one `links` array between the items of a page group, so the transform copies it instead of pushing into it.

## Validation performed

Run with pnpm 11.22.0 via `corepack pnpm@11` because the machine's global pnpm is 10.x and `engines.pnpm` requires `>=11`:

- `pnpm format`
- `pnpm test:i18n` → 2 locales, 48 Markdown files
- `pnpm build` → VitePress build plus `pnpm test:i18n:build` → 2 locales, 48 pages, 6 search queries
- `pnpm i18n:status` → `zh-Hans: registered/review-pending`, exit 0 (unchanged review gates)
- Generated output: `<html lang="en">` / `<html lang="zh-Hans">`; head and sitemap alternates `en`, `zh-Hans`, `x-default` on both language variants; no `en-US` left in the output.
- Script guards: `pnpm i18n:scaffold` with no locale, `zh-CN`, `en`, and `fr 'French'` each exit 1 with a catalog message; `pnpm i18n:scaffold fr` creates a draft labelled `Français` (removed again; no French draft exists).

Not verified: deployed routing, search-engine handling of the `en-US` → `en` change, and any runtime behavior in a browser.

## Compatibility and SEO note

Changing the English tag from `en-US` to `en` changes the `hreflang` value search engines see for English Help pages. URLs and canonicals are unchanged. The 2026-08-10 research already recorded that `en-US` was an unintentional VitePress default and recommended `en`; the main site uses `en`. If SEO ownership wants US-specific targeting instead, change the catalog's default entry and the main site together.

## Required follow-up

| Action                                                                                              | Owner                        | Trigger                                              | Evidence                                              |
| --------------------------------------------------------------------------------------------------- | ---------------------------- | ---------------------------------------------------- | ----------------------------------------------------- |
| Keep `supported-locales.json` in sync with `philanding/i18n/locales.ts`                             | Help Center maintainer       | Whenever the main site changes its locale list/names | Same-change update in this repository                 |
| Decide whether localized Help pages should link to localized main-site routes (`/zh-Hans/privacy/`) | Product and main-site owners | When the main site's localized legal pages go live   | Approved destinations recorded in the locale resource |
| Consider deep-linking `/help/<locale>/` from the main site's localized navigation                   | Main-site owner              | Before localized launch                              | Change in `philanding`                                |
| Draft, review, and promote the remaining seven locales                                              | Localization team            | Per `docs/localization-guide.md`                     | `status.json` records and promotion runs              |
