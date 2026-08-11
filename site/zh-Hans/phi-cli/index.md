---
description: "通过终端中的 phi 命令操控 Phi Browser：打开页面、单击、填写表单，以及在复用现有网站登录状态的智能体空间中截取屏幕。"
---

# Phi CLI

**Phi CLI** 将 Phi 的浏览器自动化能力带到命令行，并集中在一个 **`phi`** 命令中。任何能够运行终端命令的对象都可以用它操控浏览器，包括你自己、shell 脚本、CI 任务或编程智能体。

```bash
phi open https://example.com        # open the page, print its element map
phi click @2                        # act on an element from the map
phi fill @1 "search term" --submit
phi screenshot shot.png
phi close
```

与启动空白临时浏览器的自动化工具不同，CLI 操控的是**你自己的** Phi。它与 [phi-browser skill](/zh-Hans/phi-browser-skill/) 使用同一个引擎，只是提供了命令行前端，因此该页面介绍的机制同样适用：工作会在一个使用你现有网站登录状态的隐藏**智能体空间**中进行；空间切换器会显示对应的机器人圆点；你可以实时观看，并随时接管控制。

## 安装

```bash
npm install -g @phibrowser/cli          # npm
brew install phibrowser/tap/phi-cli     # Homebrew
```

两种方式都会安装 `phi` 命令，并同时提供 `phibrowser` 作为别名。它需要 macOS、Node 22 或更高版本，以及 Phi Browser 2.4.0 或更高版本，因为 CLI 是客户端，而不是浏览器。如果 Phi Browser 尚未安装或版本过旧，CLI 会提议通过应用自身使用的同一签名发布源安装或更新；运行 `phi install browser` 可以跳过询问，执行相同操作。

除此之外无需设置。Phi Browser 不必提前运行，因为 CLI 会在需要时将它启动。CLI 首次连接时，Phi 会显示常规批准提示，供你选择**允许一次**、**始终允许**或**拒绝**；批准 CLI 时也会一并开启智能体控制。在较旧的 Phi 版本中，智能体访问权限需要在**设置 → 开发者**中手动开启；遇到这种版本时，CLI 会给出说明。

## 元素地图

每次导航后，CLI 都会输出页面标题，并为每个可交互元素显示一行信息；其语法可以直接用于操作命令：

```
@32 link "English 7,189,000+ articles" href="https://en.wikipedia.org/"
@1 input "Search Wikipedia" type="search"
```

只要对应元素仍然存在，`@N` 引用就会保持有效，因此你可以先阅读地图、作出决定，再通过另一条命令操作。执行操作后，CLI 只会输出页面中发生变化的部分；如果操作触发了导航，则会改为输出新页面的完整地图。编写脚本时，可以用 `--json` 输出原始 JSON，也可以用 `--quiet` 隐藏摘要。

运行 `phi help` 可以查看完整命令列表，包括导航、快照、屏幕截图和 PDF、Cookie 与存储、等待、标签页组和下载等；运行 `phi help <command>` 可以查看某条命令的参数。

## 会话

一个会话代表一项任务及其智能体空间。默认会话名为 `cli`；可以用 `-s` 为每个独立目标指定不同名称：

```bash
phi -s checkout open https://shop.example
phi -s checkout click @14
phi sessions                        # list agent Spaces; * marks yours
phi -s checkout close               # finish the task, close the Space
```

与其他智能体空间一样，会话空间默认是临时的，任务停止活动一段时间后会自行关闭。需要将它保留为长期工作区时，请添加 `--persistent`。

## 命令在哪里运行

默认情况下，所有操作都发生在当前会话的隐藏智能体空间中。以下两类操作会扩大范围：

- <strong>你的真实窗口。</strong>`phi -U "Work" goto …`（`click`、`fill`、`snapshot` 等命令同样适用）会操控你某个空间的可见窗口，而不是隐藏窗口。你的单击与 CLI 操作会在同一窗口中交错发生，因此 CLI 会采用小步操作，并在每一步之间重新读取页面。
- <strong>浏览器管理。</strong>`space-list`、`bookmark-add`、`rules`、`pins` 和 `downloads` 等命令会操作整个应用中的真实浏览器数据，与 phi-browser skill 的能力一致。

两类操作都受<strong>设置 → 开发者 →“允许智能体操作你的空间”</strong>控制。该权限默认关闭，与编程智能体的规则完全相同。开启之前，CLI 只能使用自己的智能体空间。

## 登录

CLI 绝不会要求你将密码粘贴到终端中。登录通过[智能体密码管理器](/zh-Hans/agent-passwords/)完成：`phi cred-fill` 会让 Phi 直接把密码库中的登录信息填入页面，因此机密会从应用进入页面，而不会经过 CLI。每次请求都会在 Phi 中显示批准或拒绝提示，并说明请求方及用途。填充操作与登录信息所属网站绑定；双重验证码绝不会释放给自动化；命令接触过的任何机密也会从输出中清除。

## 控制权始终属于你

CLI 继承 phi-browser skill 的协作规则。单击空间切换器中的机器人圆点即可实时观看会话，并可以随时选择**接管控制**。由你操控时，CLI 的修改类命令会被拒绝，直到你交还控制权。如果某个步骤必须由你完成，例如登录、验证码或双重验证码，可以运行 `phi handoff "Sign in, then hand back"`：Phi 会提示你接手，你完成人工步骤并交还控制权后，任务会继续。

在让自动化操作重要账户之前，需要了解一件事：有些网站不接受智能体，并会对此采取措施。Reddit 是一个广为人知的例子，被识别为自动化操作的账户可能受到限制或封禁。CLI 按照你的指示执行操作，相应责任和风险由你承担；我们无法代替你申诉或撤销后果。

## 从终端安装 skill

CLI 也可以安装 [phi-browser skill](/zh-Hans/phi-browser-skill/)：

```bash
phi install skill                # link the skill into every coding agent present
phi install skill claude codex   # only these agents
```

这与**设置 → 开发者**中的**安装 phi-browser skill**按钮执行的是同一操作，只是无需离开终端：它会把 Phi 内置的 skill 链接到各个智能体的 skills 文件夹，使其随每次 Phi 更新保持最新。

::: tip 与浏览器技能不是同一回事
[浏览器技能](/zh-Hans/skills/)是你教给 Phi 内部助理的工作流程。`phi install skill` 安装的是 phi-browser skill，也就是让外部编程智能体操控 Phi 的软件包。
:::

## 接下来

- [phi-browser skill](/zh-Hans/phi-browser-skill/)：了解智能体空间、实时观看智能体和访问限制；这些机制同样适用于 CLI。
- [智能体密码管理器](/zh-Hans/agent-passwords/)：自动化如何使用密码库登录，同时看不到你的密码。
- [空间与个人资料](/zh-Hans/spaces/)：智能体空间所依赖的工作区和登录身份。
