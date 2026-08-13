import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { LocaleRegistrySchema, LocaleResourceSchema } from "../schema.ts";
import type { LocaleResource } from "../types.ts";

const localeDirectory = dirname(fileURLToPath(import.meta.url));
const registry = LocaleRegistrySchema.parse(
  JSON.parse(readFileSync(resolve(localeDirectory, "registry.json"), "utf8")),
);

export const localeResources: readonly LocaleResource[] =
  registry.resources.map((resourceFile) =>
    LocaleResourceSchema.parse(
      JSON.parse(readFileSync(resolve(localeDirectory, resourceFile), "utf8")),
    ),
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
