import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { LocaleRegistrySchema, LocaleResourceSchema } from "../schema.ts";
import {
  getCatalogIssues,
  getSupportedLocaleOrder,
} from "../supported-locales.ts";
import type { LocaleResource } from "../types.ts";

const localeDirectory = dirname(fileURLToPath(import.meta.url));
const registry = LocaleRegistrySchema.parse(
  JSON.parse(readFileSync(resolve(localeDirectory, "registry.json"), "utf8")),
);

const registeredResources = registry.resources.map((resourceFile) => {
  const resource = LocaleResourceSchema.parse(
    JSON.parse(readFileSync(resolve(localeDirectory, resourceFile), "utf8")),
  );
  const catalogIssues = getCatalogIssues(resource);

  if (catalogIssues.length > 0) {
    throw new Error(
      `${resourceFile} does not match the supported locale catalog:\n- ${catalogIssues.join("\n- ")}`,
    );
  }

  return resource;
});

// Present languages in the shared catalog order so the language menu lists
// them the same way as the main site's switcher, whatever the registry order.
export const localeResources: readonly LocaleResource[] = [
  ...registeredResources,
].sort(
  (left, right) =>
    getSupportedLocaleOrder(left.root ? left.lang : left.key) -
    getSupportedLocaleOrder(right.root ? right.lang : right.key),
);

const rootLocales = localeResources.filter((resource) => resource.root);

if (rootLocales.length !== 1) {
  throw new Error(
    `Expected exactly one root locale resource, received ${rootLocales.length}.`,
  );
}

export const defaultLocaleResource = rootLocales[0];

const localeResourcesByKey = new Map(
  localeResources.map((resource) => [resource.key, resource]),
);

if (localeResourcesByKey.size !== localeResources.length) {
  throw new Error("Locale resource keys must be unique.");
}

export function getLocaleResource(localeIndex: string): LocaleResource {
  return localeResourcesByKey.get(localeIndex) ?? defaultLocaleResource;
}
