# zh-Hans re-translation run (2026-08-28)

Date: 2026-08-28. Requested by the repository owner: re-translate the whole Simplified Chinese Help locale from the English source, without consulting the previous Simplified Chinese pages. Method: the `phi-translate-validate` Skill (`.agents/skills/phi-translate-validate/`), restricted to one locale.

## Scope and result

- Replaced every file under `site/zh-Hans/` (24 pages) and `site/.vitepress/i18n/locales/zh-Hans.json`. Traditional Chinese and the other locales were not touched.
- `localization/zh-Hans/status.json`: every page is `translation: complete`, `contentReview: todo`; the three global review gates are reset to `todo`; the translation owner field now names this run and asks for a human owner to be assigned.
- Lifecycle state: translation complete, review pending. Not independently reviewed, not promoted anew (the locale was already registered), not committed, not deployed.

## Inputs (provenance)

| Input               | Value                                                                                                                                                                                                                                                                                                                                       |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| English baseline    | `3c4951dd23800cb84be84d6302acf08fcf04467c` (unchanged `sourceRevision`; no English Markdown changed after it)                                                                                                                                                                                                                               |
| Ratified vocabulary | `refs-zh-Hans.json` in this directory, built from the Skill's `product-glossary.md` (catalog snapshot 2026-08-26, rulings 2026-08-27) and the shipped zh-Hans product strings in `../phi-i18n-internal/manifest/*.json` and `../phibrowser-mac/Resources/Localizable.xcstrings` (private repositories, read on 2026-08-28, not copied here) |
| Page inventory      | `slice.json` (per-page surface description, word count, structural counts, required explicit anchor ids)                                                                                                                                                                                                                                    |
| Translator brief    | `brief-zh-Hans.md`                                                                                                                                                                                                                                                                                                                          |
| Terminology corpus  | Chromium `main` `generated_resources_zh-CN.xtb`, `chromium_strings_zh-CN.xtb`, `components_strings_zh-CN.xtb` (fetched 2026-08-28) plus Apple zh-CN support pages and vendor zh-CN pages cited by the translators                                                                                                                           |
| Mechanical gates    | `gates.mjs` (run over the agent outputs before they were copied into `site/`)                                                                                                                                                                                                                                                               |

## Procedure

1. Nine translator subagents ran in parallel, one per topic group (A: home, overview, get started, switching; B: layouts, spaces, incognito; C: bookmarks, import/export, tab management; D: themes, new tab, tips; E: assistant, memory, skills; F: automation, sentinel, phi-browser skill; G: CLI, agent passwords, time machine; H1: FAQ; H2: privacy page and the locale resource). Each read only the English source, the brief, the refs, and the verification sources; the previous zh-Hans tree was excluded.
2. `gates.mjs` over the outputs: banned characters (em dash, en dash, 您), Traditional-character leaks, heading count and level parity, H1 equal to the binding page title, required `{#id}` anchors, code fence and container parity, localized Help links, external URLs preserved, resource key-set equality with `en.json`, label trailing-period check, page-title conformance in the resource.
3. Cross-group reconciliation against shipped product strings (see "Corrections applied after the agent pass").
4. Applied to `site/zh-Hans/` and the resource, then `pnpm format`, `pnpm test:i18n`, `pnpm build` (which also runs the built-output validation with the locale's search queries), and the writing checker `python3 .agents/skills/phi-help-writing/scripts/check.py site/zh-Hans/**`. All passed.

## Corrections applied after the agent pass

Made by the orchestrator so that all pages agree with each other and with the shipped zh-Hans UI:

- Settings section "Phi & AI": shipped macOS string is 「Phi 与 AI」; every `设置 → Phi AI` path was changed to `设置 → Phi 与 AI`.
- View menu items: 「显示 → 智能体会话记录」 and 「显示 → 智能体自动视图」 (shipped strings), replacing a translator's 查看 → 智能体记录 / 智能体自动跟随.
- Theme preset names aligned to shipped strings: 纯净, 薄荷绿, 薄雾灰, 水蓝色, 鸢尾色, 花瓣粉, 珊瑚色, 琥珀色. Web selection toggle label: 「将主题应用于网页文本选中效果」.
- 「智能体凭据授权…」 (shipped) for Agent Credential Approvals; 「移到空间」, 「将标签页移到标签组」 (shipped menu labels); Private AI task names 对话 / 数据搜索 / 网页任务; 「完成」 for Finish; Incognito window as 无痕式窗口 (shipped and Chrome).
- "Agentic" is 智能体式（Agentic）on every page and agentic tasks are 智能体任务 (owner ruling 2026-08-28; the first pass had left the word bare in `automation` and as 智能体能力 in the FAQ).
- Cross-page consistency: "coding agent" is 编程智能体 everywhere; "Staying in control" is 由你掌控; "How this connects to the rest of Phi" is 与 Phi 其他部分的关系; the AI Sidebar toggle label is 「自动将当前标签页添加为新对话的上下文」.
- One emphasis span in `time-machine/index.md` was restructured because CommonMark cannot open `**` before 「 after a CJK character.

## Review list for the locale owner

The run is not finished until these are decided. None of them blocks the build.

### Terminology decisions that need ratification

- Chat with Tabs = 网页聊天 (the shipped chip name). It drops the "tabs" meaning; the first mention on each page is glossed as 网页聊天（Chat with Tabs）.
- Pinned tabs: 固定标签页 in prose (Chrome zh-CN and shipped human-reviewed macOS strings); 固定的标签页 only where the sidebar section label is quoted. The Skill glossary lists 固定的标签页.
- The phi-browser skill is kept lowercase English as in the English house rule; the shipped zh-Hans UI writes phi-browser Skill.
- Shadow Tasks = 后台任务 (glossary ruling); shipped product strings are inconsistent (some rows say Shadow 任务).
- Pinned-tab scope value "App" is kept as **App** where the setting is quoted (shipped), and described as 整个应用 in running prose.
- Privacy Policy = 隐私政策 (market form); Chrome's house form is 隐私权政策.
- Site title 「Phi 帮助」; outline label 「本页目录」; skip link 「跳转到内容」.
- Newly coined renderings with no shipped string, listed per page in the translator reports and worth a pass in the product UI: 空间栏 (Spaces strip), 首次运行引导 / 初始设置 (onboarding), 元素地图 (element map), 空间切换器, 接管 / 交还 (take control / hand back), 按需操作 (on-demand actions), 悬浮胶囊 (overlay pill), 状态角标, 配套应用, 跟随全局 (Follow Global), 在哪个空间打开？(Open in which Space?), 域名后缀 / 域名 / 域名包含 / 网址 (URL Rule match kinds), 人机验证 (captcha), 登录项 (a login, Bitwarden uses 登录项目), 拷贝链接 (Copy Links, shipped), 编程智能体 (coding agent), widget names on the new tab page (概览, 时钟, 天气, 每日一句, 每日一图, 番茄钟专注计时器, 汇率换算, 快速翻译, 快捷方式, GitHub Star, 最近阅读, 热门帖子, 日报, 周报, 你的活动).

### Premise challenges raised by the translators

- Apple zh-CN uses 拖移 for drag; the refs bind 拖动 (Chrome). Complied with refs.
- Chrome zh-CN ships 拆分视图 for its own split view; the refs bind 分屏视图 for Phi's feature (shipped Phi strings use both 分屏视图 and 分屏). Complied with refs.
- "Context" is bound to 上下文 even in the ordinary-English sense ("switch contexts"); 场景 would read more naturally in two spots on the switching page.
- Claude Code's zh-CN docs say 计划任务; the refs bind 定时任务 (shipped Phi strings). Complied with refs.
- The "System" appearance option is 系统 (English UI label); macOS itself calls the same option 自动.

### Shipped product strings that look defective (report to the product owners)

- `settings.general.theme.opacityTitle` ships 饱和度 for "Opacity"; the Help pages use 不透明度.
- The "Shortcuts" widget ships 快捷键 (keyboard shortcuts); the Help page uses 快捷方式 because the widget holds quick links.
- "Move to Group" ships 标签组 while the glossary term is 标签页组.
- Private AI is rendered both as 私有 AI and as "Private AI" across shipped strings; the Help pages use 私有 AI (glossary).

### English source issues found while translating

- `privacy/index.md`: "What Phi does send" says detailed statistics are off until switched on, while "Usage statistics" says the same switch is on by default; one section says reports carry the account identifier, the other says the identifier is unrelated to the account. Translated as written; the Privacy Policy should decide.
- `privacy/index.md` names "SpaceXAI"; the provider is normally written xAI.
- `switching-to-phi/index.md` says Phi has no equivalent of Arc's Peek, while shipped Phi strings include a Peek View window mode.
- `spaces/index.md` frontmatter description lists URL Rules, bookmarks and pinned tabs among things Profiles isolate; the body says the first two belong to Spaces and pinned-tab scope is configurable.
- `import-export/index.md` gives a three-level Safari export path; Apple's current zh-CN Safari guide documents 「文件 > 将浏览数据导出到文件」.

### Rendering notes

- `CookieConsent.vue` renders the three policy fragments as separate text nodes around the link, so a space appears on each side of 「隐私政策」 in the banner. The fragments were written to read acceptably with those spaces; removing them needs a template change.
- Italic spans in the English (`_you_`, `_where_`, the restore confirmation text) were rendered variously as `*…*`, `**…**`, or 「」, all of which render; none uses `<strong>` HTML.

## Re-running

Copy this directory as the seed for the next drop. Regenerate `slice.json` from the English tree (a script is not committed; the file records the fields), refresh `refs-zh-Hans.json` from the Skill glossary and the shipped product strings, run the translator brief per group, then `node docs/i18n-runs/<run>/gates.mjs <output-root>` before copying into `site/zh-Hans/`.
