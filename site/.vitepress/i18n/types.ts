import type { DefaultTheme } from "vitepress";
import type { z } from "zod";
import type { LocaleResourceSchema, SupportedLocalesSchema } from "./schema.ts";

export type CustomThemeCopy = z.infer<
  typeof LocaleResourceSchema
>["customTheme"];

export type HelpThemeConfig = DefaultTheme.Config & {
  customThemeCopy: CustomThemeCopy;
};

export type LocaleResource = z.infer<typeof LocaleResourceSchema> & {
  search: DefaultTheme.LocalSearchTranslations;
};

export type SupportedLocale = z.infer<
  typeof SupportedLocalesSchema
>["locales"][number];
