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

const englishCopy: CustomThemeCopy = {
  askPhi: "Ask Phi",
  privacyControls: "Privacy controls",
  cookieSettings: "Cookie Settings",
  privacyChoices: "Your Privacy Choices",
  cookieConsent: "Cookie consent",
  bannerBeforePolicy:
    "We use cookies to run this site and, only with your permission, to analyze traffic and measure our advertising. See our",
  privacyPolicy: "Privacy Policy",
  bannerAfterPolicy: "for details.",
  rejectAll: "Reject all",
  acceptAll: "Accept all",
  customizeSettings: "Customize settings",
  cookiePreferences: "Cookie preferences",
  close: "Close",
  preferencesBeforePolicy:
    "Choose which cookies this site may use. Your choice is saved on this browser and you can change it here at any time. See our",
  preferencesAfterPolicy: "for details.",
  saleAndSharingDescription:
    "Sharing data with advertising partners for ad measurement may be considered a “sale” or “sharing” under some U.S. state laws. You can opt out with one click.",
  optedOut: "You’re opted out on this browser.",
  optOutOfSaleAndSharing: "Opt out of sale and sharing",
  functional: "Functional",
  functionalDescription:
    "Required for the site to work, such as remembering your cookie choices. Always on; contains no analytics and no advertising.",
  alwaysOn: "Always on",
  statistics: "Statistics",
  statisticsDescription:
    "Help us understand how the site is used through analytics services (Google Analytics, PostHog).",
  marketing: "Marketing",
  marketingDescription:
    "Allow our advertising partners' conversion tools to measure whether our ads work. Used for ad measurement on this site, not for showing you ads here.",
  gpcDisabled: "Turned off by your browser’s Global Privacy Control signal.",
  saveChoices: "Save choices",
};

const simplifiedChineseCopy: CustomThemeCopy = {
  askPhi: "询问 Phi",
  privacyControls: "隐私控制",
  cookieSettings: "Cookie 设置",
  privacyChoices: "你的隐私选择",
  cookieConsent: "Cookie 同意选项",
  bannerBeforePolicy:
    "我们使用 Cookie 来运行本网站；仅在获得你的许可后，才会分析流量并衡量广告效果。详情请参阅我们的",
  privacyPolicy: "隐私政策",
  bannerAfterPolicy: "。",
  rejectAll: "全部拒绝",
  acceptAll: "全部接受",
  customizeSettings: "自定义设置",
  cookiePreferences: "Cookie 偏好设置",
  close: "关闭",
  preferencesBeforePolicy:
    "请选择本网站可以使用哪些 Cookie。你的选择会保存在此浏览器中，并且可以随时在这里更改。详情请参阅我们的",
  preferencesAfterPolicy: "。",
  saleAndSharingDescription:
    "出于广告衡量目的与广告合作伙伴共享数据，在美国某些州的法律下可能被视为“出售”或“共享”。你可以一键选择退出。",
  optedOut: "你已在此浏览器上选择退出。",
  optOutOfSaleAndSharing: "选择退出出售和共享",
  functional: "功能性",
  functionalDescription:
    "网站正常运行所必需，例如记住你的 Cookie 选择。始终启用；不包含分析或广告用途。",
  alwaysOn: "始终启用",
  statistics: "统计",
  statisticsDescription:
    "通过分析服务（Google Analytics、PostHog）帮助我们了解网站的使用情况。",
  marketing: "营销",
  marketingDescription:
    "允许广告合作伙伴的转化工具衡量我们的广告是否有效。这些工具仅用于衡量本网站的广告效果，不会用于在这里向你展示广告。",
  gpcDisabled: "已根据浏览器的全球隐私控制（GPC）信号关闭。",
  saveChoices: "保存选择",
};

export function getCustomThemeCopy(lang: string): CustomThemeCopy {
  return lang === "zh-Hans" ? simplifiedChineseCopy : englishCopy;
}
