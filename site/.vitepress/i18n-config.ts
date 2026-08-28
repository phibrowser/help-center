import type { DefaultTheme, LocaleConfig } from "vitepress";
import { guideGroups, guideRoutes } from "./i18n/guide.ts";
import {
  defaultLocaleResource,
  localeResources,
} from "./i18n/locales/index.ts";
import type { HelpThemeConfig, LocaleResource } from "./i18n/types.ts";

function getLocalePrefix(resource: LocaleResource): string {
  return resource.root ? "" : `/${resource.key}`;
}

function localizePath(localePrefix: string, route: string): string {
  return `${localePrefix}${route}`;
}

function createSidebar(
  localePrefix: string,
  resource: LocaleResource,
): DefaultTheme.Sidebar {
  const groups: DefaultTheme.SidebarItem[] = guideGroups.map((group) => ({
    text: resource.theme.groups[group.key],
    items: group.items.map((key) => ({
      text: resource.theme.pages[key],
      link: localizePath(localePrefix, guideRoutes[key]),
    })),
  }));

  return Object.fromEntries(
    Object.values(guideRoutes).map((route) => [
      localizePath(localePrefix, route),
      groups,
    ]),
  );
}

function createThemeConfig(resource: LocaleResource): HelpThemeConfig {
  const localePrefix = getLocalePrefix(resource);
  const { controls, nav, notFound } = resource.theme;

  return {
    customThemeCopy: resource.customTheme,
    nav: [
      { text: nav.product, link: "https://phibrowser.com" },
      {
        text: nav.guide,
        link: localizePath(localePrefix, guideRoutes.whatIsPhi),
      },
      {
        text: nav.faq,
        link: localizePath(localePrefix, "/faq/"),
      },
    ],
    sidebar: createSidebar(localePrefix, resource),
    outline: { label: controls.outline },
    docFooter: {
      prev: controls.previousPage,
      next: controls.nextPage,
    },
    darkModeSwitchLabel: controls.appearance,
    lightModeSwitchTitle: controls.lightMode,
    darkModeSwitchTitle: controls.darkMode,
    sidebarMenuLabel: controls.menu,
    returnToTopLabel: controls.returnToTop,
    langMenuLabel: controls.changeLanguage,
    skipToContentLabel: controls.skipToContent,
    notFound,
  };
}

export const localeConfig: LocaleConfig<HelpThemeConfig> = Object.fromEntries(
  localeResources.map((resource) => [
    resource.key,
    {
      label: resource.label,
      lang: resource.lang,
      title: resource.site.title,
      description: resource.site.description,
      themeConfig: createThemeConfig(resource),
    },
  ]),
);

export const localeRoutePrefixes = localeResources
  .filter((resource) => !resource.root)
  .map((resource) => getLocalePrefix(resource));

export const localeSearchOptions = Object.fromEntries(
  localeResources.map((resource) => [
    resource.key,
    { translations: resource.search },
  ]),
);
