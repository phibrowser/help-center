import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { SupportedLocalesSchema } from "./schema.ts";
import type { LocaleResource, SupportedLocale } from "./types.ts";

// The catalog mirrors the main site's locale registry (philanding
// `i18n/locales.ts`): the same BCP 47 codes, the same native-language menu
// names, and the same unprefixed default language. Help pages publish under
// `/help/<code>/`, so the two sites share one language model even though the
// Help Center is a separate static build. Keep the two files in sync by hand;
// there is no cross-repository check.
const catalogFile = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "supported-locales.json",
);

export const supportedLocaleCatalog = SupportedLocalesSchema.parse(
  JSON.parse(readFileSync(catalogFile, "utf8")),
);

export const supportedLocales: readonly SupportedLocale[] =
  supportedLocaleCatalog.locales;

export const defaultLocaleCode = supportedLocaleCatalog.defaultLocale;

const supportedLocalesByCode = new Map(
  supportedLocales.map((locale) => [locale.code, locale]),
);

if (supportedLocalesByCode.size !== supportedLocales.length) {
  throw new Error("Supported locale codes must be unique.");
}

if (!supportedLocalesByCode.has(defaultLocaleCode)) {
  throw new Error(
    `Default locale ${defaultLocaleCode} is missing from the supported locale catalog.`,
  );
}

export function getSupportedLocale(code: string): SupportedLocale | undefined {
  return supportedLocalesByCode.get(code);
}

export function getSupportedLocaleOrder(code: string): number {
  const index = supportedLocales.findIndex((locale) => locale.code === code);
  return index === -1 ? supportedLocales.length : index;
}

/**
 * Returns the ways a locale resource disagrees with the shared catalog. The
 * root resource keeps VitePress's reserved `root` key and identifies its
 * language through `lang`; every other resource is addressed by its locale
 * code in both `key` and `lang`.
 */
export function getCatalogIssues(
  resource: Pick<LocaleResource, "key" | "label" | "lang" | "root">,
): string[] {
  const issues: string[] = [];
  const code = resource.root ? resource.lang : resource.key;
  const catalogEntry = getSupportedLocale(code);

  if (!catalogEntry) {
    issues.push(
      `locale ${code} is not in the supported locale catalog (${supportedLocales
        .map((locale) => locale.code)
        .join(", ")})`,
    );
    return issues;
  }

  if (resource.root && code !== defaultLocaleCode) {
    issues.push(
      `root locale must use the default language ${defaultLocaleCode}, received ${code}`,
    );
  }
  if (!resource.root && code === defaultLocaleCode) {
    issues.push(
      `${code} is the default language and must stay the root locale`,
    );
  }
  if (!resource.root && resource.lang !== resource.key) {
    issues.push(
      `lang ${resource.lang} must equal the locale key ${resource.key}`,
    );
  }
  if (resource.label !== catalogEntry.name) {
    issues.push(
      `label ${JSON.stringify(resource.label)} must match the catalog name ${JSON.stringify(catalogEntry.name)}`,
    );
  }

  return issues;
}
