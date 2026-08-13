import type { DefaultTheme } from "vitepress";
import type { z } from "zod";
import type { LocaleResourceSchema } from "./schema.ts";

export type CustomThemeCopy = z.infer<
  typeof LocaleResourceSchema
>["customTheme"];

export type HelpThemeConfig = DefaultTheme.Config & {
  customThemeCopy: CustomThemeCopy;
};

export type LocaleResource = z.infer<typeof LocaleResourceSchema> & {
  search: DefaultTheme.LocalSearchTranslations;
};
