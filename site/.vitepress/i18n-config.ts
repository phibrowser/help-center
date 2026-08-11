import type { DefaultTheme } from "vitepress";

export const ZH_HANS_LOCALE = "zh-Hans";

const guideGroups = [
  {
    key: "startHere",
    items: ["whatIsPhi", "gettingStarted", "switchingToPhi"],
  },
  {
    key: "browserWorkspace",
    items: [
      "layouts",
      "spaces",
      "incognito",
      "bookmarks",
      "importExport",
      "tabManagement",
      "themes",
      "newTab",
    ],
  },
  {
    key: "assistantAutomation",
    items: [
      "assistant",
      "memory",
      "skills",
      "automation",
      "phiBrowserSkill",
      "phiCli",
      "agentPasswords",
      "sentinel",
    ],
  },
  {
    key: "privacyRecovery",
    items: ["privacy", "timeMachine"],
  },
] as const;

const guideRoutes = {
  whatIsPhi: "/what-is-phi-browser/",
  gettingStarted: "/get-started/",
  switchingToPhi: "/switching-to-phi/",
  layouts: "/layouts/",
  spaces: "/spaces/",
  incognito: "/incognito/",
  bookmarks: "/bookmarks/",
  importExport: "/import-export/",
  tabManagement: "/tab-management/",
  themes: "/themes/",
  newTab: "/new-tab/",
  assistant: "/ai/",
  memory: "/memory/",
  skills: "/skills/",
  automation: "/automation/",
  phiBrowserSkill: "/phi-browser-skill/",
  phiCli: "/phi-cli/",
  agentPasswords: "/agent-passwords/",
  sentinel: "/sentinel/",
  privacy: "/privacy/",
  timeMachine: "/time-machine/",
} as const;

type GuideGroupKey = (typeof guideGroups)[number]["key"];
type GuideRouteKey = keyof typeof guideRoutes;

type LocaleThemeCopy = {
  nav: {
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

const englishCopy: LocaleThemeCopy = {
  nav: {
    guide: "Guide",
    faq: "FAQ",
  },
  groups: {
    startHere: "Start Here",
    browserWorkspace: "Browser Workspace",
    assistantAutomation: "Assistant & Automation",
    privacyRecovery: "Privacy & Recovery",
  },
  pages: {
    whatIsPhi: "What is Phi Browser?",
    gettingStarted: "Getting Started",
    switchingToPhi: "Switching to Phi",
    layouts: "Layouts & Navigation",
    spaces: "Spaces & Profiles",
    incognito: "Incognito Spaces",
    bookmarks: "Bookmarks & Pinned Tabs",
    importExport: "Importing & Exporting",
    tabManagement: "Managing Tabs & Bookmarks",
    themes: "Themes & Appearance",
    newTab: "New Tab & Widgets",
    assistant: "Meet your assistant",
    memory: "Memory",
    skills: "Browser Skills",
    automation: "Automation & Phi Link",
    phiBrowserSkill: "The phi-browser skill",
    phiCli: "The Phi CLI",
    agentPasswords: "Agent Password Manager",
    sentinel: "Phi Sentinel",
    privacy: "Privacy & Your Data",
    timeMachine: "Time Machine Backups",
  },
  controls: {
    outline: "On this page",
    previousPage: "Previous page",
    nextPage: "Next page",
    appearance: "Appearance",
    lightMode: "Switch to light theme",
    darkMode: "Switch to dark theme",
    menu: "Menu",
    returnToTop: "Return to top",
    changeLanguage: "Change language",
    skipToContent: "Skip to content",
  },
  notFound: {
    title: "PAGE NOT FOUND",
    quote:
      "But if you don't change your direction, and if you keep looking, you may end up where you are heading.",
    linkLabel: "go to home",
    linkText: "Take me home",
  },
};

const simplifiedChineseCopy: LocaleThemeCopy = {
  nav: {
    guide: "指南",
    faq: "常见问题",
  },
  groups: {
    startHere: "从这里开始",
    browserWorkspace: "浏览器工作区",
    assistantAutomation: "助理与自动化",
    privacyRecovery: "隐私与恢复",
  },
  pages: {
    whatIsPhi: "什么是 Phi Browser？",
    gettingStarted: "开始使用",
    switchingToPhi: "迁移到 Phi",
    layouts: "布局与导航",
    spaces: "空间与个人资料",
    incognito: "无痕空间",
    bookmarks: "书签与固定标签页",
    importExport: "导入与导出",
    tabManagement: "管理标签页与书签",
    themes: "主题与外观",
    newTab: "新标签页与小组件",
    assistant: "认识你的助理",
    memory: "记忆",
    skills: "浏览器技能",
    automation: "自动化与 Phi Link",
    phiBrowserSkill: "phi-browser skill",
    phiCli: "Phi CLI",
    agentPasswords: "智能体密码管理器",
    sentinel: "Phi Sentinel",
    privacy: "隐私与数据",
    timeMachine: "时间机器备份",
  },
  controls: {
    outline: "本页内容",
    previousPage: "上一页",
    nextPage: "下一页",
    appearance: "外观",
    lightMode: "切换到浅色主题",
    darkMode: "切换到深色主题",
    menu: "菜单",
    returnToTop: "返回顶部",
    changeLanguage: "切换语言",
    skipToContent: "跳到正文",
  },
  notFound: {
    title: "页面未找到",
    quote: "你访问的页面不存在或已被移动。",
    linkLabel: "返回首页",
    linkText: "返回首页",
  },
};

function localizePath(localePrefix: string, route: string): string {
  return `${localePrefix}${route}`;
}

function createSidebar(
  localePrefix: string,
  copy: LocaleThemeCopy,
): DefaultTheme.Sidebar {
  const groups: DefaultTheme.SidebarItem[] = guideGroups.map((group) => ({
    text: copy.groups[group.key],
    items: group.items.map((key) => ({
      text: copy.pages[key],
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

function createThemeConfig(
  localePrefix: string,
  copy: LocaleThemeCopy,
): DefaultTheme.Config {
  return {
    nav: [
      { text: "Phi Browser", link: "https://phibrowser.com" },
      {
        text: copy.nav.guide,
        link: localizePath(localePrefix, guideRoutes.whatIsPhi),
      },
      {
        text: copy.nav.faq,
        link: localizePath(localePrefix, "/faq/"),
      },
    ],
    sidebar: createSidebar(localePrefix, copy),
    outline: { label: copy.controls.outline },
    docFooter: {
      prev: copy.controls.previousPage,
      next: copy.controls.nextPage,
    },
    darkModeSwitchLabel: copy.controls.appearance,
    lightModeSwitchTitle: copy.controls.lightMode,
    darkModeSwitchTitle: copy.controls.darkMode,
    sidebarMenuLabel: copy.controls.menu,
    returnToTopLabel: copy.controls.returnToTop,
    langMenuLabel: copy.controls.changeLanguage,
    skipToContentLabel: copy.controls.skipToContent,
    notFound: copy.notFound,
  };
}

export const localeConfig = {
  root: {
    label: "English",
    lang: "en-US",
    themeConfig: createThemeConfig("", englishCopy),
  },
  [ZH_HANS_LOCALE]: {
    label: "简体中文",
    lang: ZH_HANS_LOCALE,
    title: "Phi 帮助",
    description: "Phi Browser 帮助与常见问题。",
    themeConfig: createThemeConfig(`/${ZH_HANS_LOCALE}`, simplifiedChineseCopy),
  },
};

export const localeRoutePrefixes = [`/${ZH_HANS_LOCALE}`] as const;
