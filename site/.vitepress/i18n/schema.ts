import { z } from "zod";
import { guideGroups, guideRoutes } from "./guide.ts";

type GuideGroupKey = (typeof guideGroups)[number]["key"];
type GuideRouteKey = keyof typeof guideRoutes;

const guideGroupKeys = guideGroups.map((group) => group.key) as [
  GuideGroupKey,
  ...GuideGroupKey[],
];
const guideRouteKeys = Object.keys(guideRoutes) as [
  GuideRouteKey,
  ...GuideRouteKey[],
];

const stringRecord = <T extends readonly [string, ...string[]]>(keys: T) =>
  z.record(z.enum(keys), z.string().min(1));

export const CustomThemeCopySchema = z.object({
  askPhi: z.string().min(1),
  privacyControls: z.string().min(1),
  cookieSettings: z.string().min(1),
  privacyChoices: z.string().min(1),
  cookieConsent: z.string().min(1),
  bannerBeforePolicy: z.string().min(1),
  privacyPolicy: z.string().min(1),
  bannerAfterPolicy: z.string().min(1),
  rejectAll: z.string().min(1),
  acceptAll: z.string().min(1),
  customizeSettings: z.string().min(1),
  cookiePreferences: z.string().min(1),
  close: z.string().min(1),
  preferencesBeforePolicy: z.string().min(1),
  preferencesAfterPolicy: z.string().min(1),
  saleAndSharingDescription: z.string().min(1),
  optedOut: z.string().min(1),
  optOutOfSaleAndSharing: z.string().min(1),
  functional: z.string().min(1),
  functionalDescription: z.string().min(1),
  alwaysOn: z.string().min(1),
  statistics: z.string().min(1),
  statisticsDescription: z.string().min(1),
  marketing: z.string().min(1),
  marketingDescription: z.string().min(1),
  gpcDisabled: z.string().min(1),
  saveChoices: z.string().min(1),
});

const SearchTranslationsSchema = z.object({
  button: z.object({
    buttonText: z.string().min(1),
    buttonAriaLabel: z.string().min(1),
  }),
  modal: z.object({
    displayDetails: z.string().min(1),
    resetButtonTitle: z.string().min(1),
    backButtonTitle: z.string().min(1),
    noResultsText: z.string().min(1),
    footer: z.object({
      selectText: z.string().min(1),
      selectKeyAriaLabel: z.string().min(1),
      navigateText: z.string().min(1),
      navigateUpKeyAriaLabel: z.string().min(1),
      navigateDownKeyAriaLabel: z.string().min(1),
      closeText: z.string().min(1),
      closeKeyAriaLabel: z.string().min(1),
    }),
  }),
});

export const LocaleResourceSchema = z.object({
  key: z.string().min(1),
  label: z.string().min(1),
  lang: z.string().min(1),
  root: z.boolean(),
  site: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
  }),
  theme: z.object({
    nav: z.object({
      product: z.string().min(1),
      guide: z.string().min(1),
      faq: z.string().min(1),
    }),
    groups: stringRecord(guideGroupKeys),
    pages: stringRecord(guideRouteKeys),
    controls: z.object({
      outline: z.string().min(1),
      previousPage: z.string().min(1),
      nextPage: z.string().min(1),
      appearance: z.string().min(1),
      lightMode: z.string().min(1),
      darkMode: z.string().min(1),
      menu: z.string().min(1),
      returnToTop: z.string().min(1),
      changeLanguage: z.string().min(1),
      skipToContent: z.string().min(1),
    }),
    notFound: z.object({
      title: z.string().min(1),
      quote: z.string().min(1),
      linkLabel: z.string().min(1),
      linkText: z.string().min(1),
    }),
  }),
  search: SearchTranslationsSchema,
  searchQueries: z.array(z.string().min(1)).min(1),
  customTheme: CustomThemeCopySchema,
  markdown: z.object({
    copyCode: z.string().min(1),
    copied: z.string().min(1),
  }),
});

export const LocaleRegistrySchema = z.object({
  resources: z.array(z.string().min(1)).min(1),
});

const WorkflowStatusSchema = z.enum([
  "todo",
  "in_progress",
  "complete",
  "approved",
]);

const ReviewGateSchema = z.object({
  status: WorkflowStatusSchema,
  owner: z.string(),
  evidence: z.string(),
});

export const LocalizationStatusSchema = z.object({
  locale: z.string().min(1),
  sourceRevision: z.string().regex(/^[0-9a-f]{40}$/),
  owners: z.object({
    translation: z.string(),
    contentReview: z.string(),
  }),
  pages: z.record(
    z.string().min(1),
    z.object({
      translation: WorkflowStatusSchema,
      contentReview: WorkflowStatusSchema,
    }),
  ),
  reviews: z.object({
    productTerminology: ReviewGateSchema,
    privacyLegal: ReviewGateSchema,
    searchQa: ReviewGateSchema,
  }),
});
