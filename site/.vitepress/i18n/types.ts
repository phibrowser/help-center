import type { DefaultTheme } from "vitepress";
import type { guideGroups, guideRoutes } from "./guide.ts";

export type GuideGroupKey = (typeof guideGroups)[number]["key"];
export type GuideRouteKey = keyof typeof guideRoutes;

export type CustomThemeCopy = {
  askPhi: string;
  privacyControls: string;
  cookieSettings: string;
  privacyChoices: string;
  cookieConsent: string;
  bannerBeforePolicy: string;
  privacyPolicy: string;
  bannerAfterPolicy: string;
  rejectAll: string;
  acceptAll: string;
  customizeSettings: string;
  cookiePreferences: string;
  close: string;
  preferencesBeforePolicy: string;
  preferencesAfterPolicy: string;
  saleAndSharingDescription: string;
  optedOut: string;
  optOutOfSaleAndSharing: string;
  functional: string;
  functionalDescription: string;
  alwaysOn: string;
  statistics: string;
  statisticsDescription: string;
  marketing: string;
  marketingDescription: string;
  gpcDisabled: string;
  saveChoices: string;
};

export type HelpThemeConfig = DefaultTheme.Config & {
  customThemeCopy: CustomThemeCopy;
};

export type LocaleResource = {
  key: string;
  label: string;
  lang: string;
  root: boolean;
  site: {
    title: string;
    description: string;
  };
  theme: {
    nav: {
      product: string;
      guide: string;
      faq: string;
    };
    groups: Record<GuideGroupKey, string>;
    pages: Record<GuideRouteKey, string>;
    controls: {
      outline: string;
      previousPage: string;
      nextPage: string;
      appearance: string;
      lightMode: string;
      darkMode: string;
      menu: string;
      returnToTop: string;
      changeLanguage: string;
      skipToContent: string;
    };
    notFound: {
      title: string;
      quote: string;
      linkLabel: string;
      linkText: string;
    };
  };
  search: DefaultTheme.LocalSearchTranslations;
  customTheme: CustomThemeCopy;
  markdown: {
    copyCode: string;
    copied: string;
  };
};
