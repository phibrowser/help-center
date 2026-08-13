import enUS from "./en-US.json" with { type: "json" };
import zhHans from "./zh-Hans.json" with { type: "json" };
import type { LocaleResource } from "../types.ts";

function defineLocale(resource: LocaleResource): LocaleResource {
  return resource;
}

export const localeResources = [
  defineLocale(enUS),
  defineLocale(zhHans),
] as const;

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
