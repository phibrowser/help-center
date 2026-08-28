---
description: "在终端里用 phi 命令驱动 Phi Browser：打开页面、点按、填写表单、截图，全部在复用你已登录网站的智能体空间中完成。"
---

# Phi CLI

**Phi CLI** 把 Phi 的浏览器自动化搬到命令行，只用一条命令：**`phi`**。任何能运行终端命令的东西都能用它驱动你的浏览器：你自己、一段 Shell 脚本、一个 CI 任务，或者一个编程智能体。

```bash
phi open https://example.com        # open the page, print its element map
phi click @2                        # act on an element from the map
phi fill @1 "search term" --submit
phi screenshot shot.png
phi close
```

和那些启动一个空白、用完即弃浏览器的自动化工具不同，CLI 驱动的是**你自己的** Phi。它是 [phi-browser skill](/zh-Hans/phi-browser-skill/) 所用同一引擎的命令行前端，所以那一页讲的一切在这里同样成立：工作在一个隐藏的**智能体空间**里进行，里面有你已经登录的网站；它会以机器人标记的形式出现在空间切换器中；你可以实时观看，也可以随时接管。

## 安装

```bash
npm install -g @phibrowser/cli          # npm
brew install phibrowser/tap/phi-cli     # Homebrew
```

两种方式都会安装 `phi` 命令，外加一个别名 `phibrowser`。它需要 macOS、Node 22 或更新版本，以及 Phi Browser 2.4.0 或更新版本，因为 CLI 只是客户端，不是浏览器。如果没装 Phi Browser 或版本太旧，CLI 会提议替你安装或更新，来源与应用自我更新所用的签名发布源相同；`phi install browser` 做的是同一件事，只是不再询问。

没有别的要配置。Phi Browser 不必处于运行状态，CLI 需要时会自己启动它。CLI 第一次连接时，Phi 会弹出常规的批准提示（**允许一次**、**始终允许**或**拒绝**），批准 CLI 的同时也会开启智能体控制。在较旧的 Phi 版本上，智能体访问需要在**设置 → 开发者**里手动开启；遇到这种版本时 CLI 会告诉你。

## 元素地图

每次导航之后，CLI 都会打印页面头部，再为每个可交互元素打印一行，格式正是各操作命令接受的语法：

```
@32 link "English 7,189,000+ articles" href="https://en.wikipedia.org/"
@1 input "Search Wikipedia" type="search"
```

只要元素还在，`@N` 引用就一直有效，所以你可以先读地图、再决定、再用单独的命令执行。执行一个操作后，CLI 只打印页面上发生了变化的部分；如果这个操作触发了导航，就改为打印新页面的完整地图。写脚本时，`--json` 输出原始 JSON，`--quiet` 则省略摘要。

运行 `phi help` 查看完整命令列表（导航、快照、截图和 PDF、Cookie 和存储、等待、标签页组、下载等等），运行 `phi help <command>` 查看单个命令的选项。

## 会话

一个会话对应一项任务和它的智能体空间。默认会话叫 `cli`；用 `-s` 给每个独立目标开一个自己的会话：

```bash
phi -s checkout open https://shop.example
phi -s checkout click @14
phi sessions                        # list agent Spaces; * marks yours
phi -s checkout close               # finish the task, close the Space
```

和所有智能体空间一样，会话的空间默认是临时的，任务停下来一段时间后会自动关闭。想把它留作长期工作区，就加上 `--persistent`。

## 命令在哪里运行

默认情况下，一切都发生在会话的隐藏智能体空间里。有两件事能把范围扩大：

- **你的真实窗口。** `phi -U "Work" goto …`（`click`、`fill`、`snapshot` 等命令同理）会驱动你自己某个空间的可见窗口，而不是隐藏窗口。你的点按和 CLI 的操作会在同一个窗口里交错进行，所以它会小步执行，每步之间重新读取页面。
- **浏览器管理。** `space-list`、`bookmark-add`、`rules`、`pins`、`downloads` 这类命令在整个浏览器范围内操作你的真实数据，和 phi-browser skill 能做的一样。

这两项都受**设置 → 开发者 → 「允许智能体操作你的空间」**（默认关闭）把守，规则和编程智能体完全一样。在你开启之前，CLI 只能待在它自己的智能体空间里。

## 登录

CLI 从不要求你把密码粘贴进终端。登录走的是[智能体密码管理器](/zh-Hans/agent-passwords/)：`phi cred-fill` 让 Phi 直接用你密码库里的登录项填写登录字段，秘密从应用直达页面，不经过 CLI；而且每一次请求都会弹出 Phi 的批准或拒绝提示，写明是谁在请求、要什么。填充只对登录项所属的网站生效，两步验证码从不交给自动化，命令处理过的任何秘密都会从输出中抹掉。

## 你始终掌控

CLI 沿用 phi-browser skill 的协作规则。点按空间切换器里的机器人标记就能实时观看会话，随时可以**接管**。你握着方向盘的时候，CLI 的修改类命令会被拒绝，直到你交还控制权。轮到你出手的步骤（登录、人机验证、两步验证码）走的是 `phi handoff "Sign in, then hand back"`：Phi 提示你，你完成这一步，交还控制权后工作继续。

把自动化对准一个你在乎的账号之前，有件事要先知道：有些网站不欢迎智能体，而且会采取行动。Reddit 是最有名的例子，被认定为自动化的账号会被限制或封禁。CLI 按你的指令做的事由你负责，这份风险也由你承担；我们无法替你申诉或撤销。

## 从终端安装 phi-browser skill

CLI 也能替你安装 [phi-browser skill](/zh-Hans/phi-browser-skill/)：

```bash
phi install skill                # link the skill into every coding agent present
phi install skill claude codex   # only these agents
```

这和**设置 → 开发者**里的**安装 phi-browser skill** 按钮做的是同一件事，只是不用离开终端：它把 Phi 内置的 phi-browser skill 链接到每个智能体的 skills 文件夹，所以会随 Phi 的每次更新保持最新。

::: tip 这不是浏览器 Skill
[浏览器 Skill](/zh-Hans/skills/) 是你在 Phi 里教给助手的工作流。`phi install skill` 装的是 phi-browser skill，也就是让外部编程智能体驱动 Phi 的那个软件包。
:::

## 下一步

- [phi-browser skill](/zh-Hans/phi-browser-skill/)：智能体空间、实时观看智能体，以及访问范围如何受限。这些全都适用于 CLI。
- [智能体密码管理器](/zh-Hans/agent-passwords/)：自动化如何用你的密码库登录，而不看到你的密码。
- [空间与个人资料](/zh-Hans/spaces/)：智能体空间赖以建立的工作区和登录身份。
