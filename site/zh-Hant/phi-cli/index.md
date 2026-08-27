---
description: "用 phi 命令從終端機操控 Phi Browser：在重複使用你已登入網站的 AI 代理空間中開啟頁面、點擊、填寫表單、擷取螢幕截圖。"
---

# Phi CLI

**Phi CLI** 把 Phi 的瀏覽器自動化放上你的命令列，濃縮成一個命令：**`phi`**。任何能執行終端機命令的東西，都能用它操控你的瀏覽器：你本人、shell 指令碼、CI 工作，或程式開發代理。

```bash
phi open https://example.com        # open the page, print its element map
phi click @2                        # act on an element from the map
phi fill @1 "search term" --submit
phi screenshot shot.png
phi close
```

和那些啟動一個空白拋棄式瀏覽器的自動化工具不同，CLI 操控的是**你的** Phi。它是與 [phi-browser Skill](/zh-Hant/phi-browser-skill/) 同一個引擎的命令列前端，那一頁描述的一切在這裡同樣適用：工作在隱藏的 **AI 代理空間**中進行，帶著你已登入的網站；它會以機器人小圖示出現在你的空間切換器中；你可以即時觀看，也可以隨時接手控制。

## 安裝

```bash
npm install -g @phibrowser/cli          # npm
brew install phibrowser/tap/phi-cli     # Homebrew
```

兩種方式都會安裝 `phi` 命令，外加一個別名 `phibrowser`。它需要 macOS、Node 22 或更新版本，以及 Phi Browser 2.4.0 或更新版本，因為 CLI 是用戶端，不是瀏覽器。如果 Phi Browser 尚未安裝或版本太舊，CLI 會主動提議替你安裝或更新，來源是應用程式自我更新所用的同一個經簽章的發佈頻道；執行 `phi install browser` 則可直接進行，不另行詢問。

其他什麼都不用設定。Phi Browser 不必先開著，CLI 需要時會自行啟動它。CLI 第一次連線時，Phi 會顯示慣常的核准提示（「**允許一次**」、「**一律允許**」或「**拒絕**」），核准 CLI 的同時也會一併開啟 AI 代理控制。在較舊的 Phi 版本上，AI 代理存取則要在「**設定 → 開發者**」中手動開啟；碰到這種版本時，CLI 會告訴你。

## 元素地圖

每次導覽之後，CLI 會印出頁面標頭，並且每個可互動元素各佔一行，格式正是動作命令所接受的語法：

```
@32 link "English 7,189,000+ articles" href="https://en.wikipedia.org/"
@1 input "Search Wikipedia" type="search"
```

只要元素還存在，`@N` 參照就持續有效，所以你可以先讀地圖、再決定、再用另一個命令執行動作。動作完成後，CLI 只會印出頁面上發生變化的部分；如果動作觸發了導覽，則改印新頁面的完整地圖。撰寫指令碼時，`--json` 會輸出原始 JSON，`--quiet` 會省略摘要。

執行 `phi help` 可查看完整命令清單（導覽、快照、螢幕截圖與 PDF、cookie 與儲存資料、等待、分頁群組、下載等等），執行 `phi help <command>` 可查看各命令的旗標。

## 工作階段

一個工作階段對應一項任務和它的 AI 代理空間。預設工作階段名為 `cli`；用 `-s` 為每個不同的目標建立各自的工作階段：

```bash
phi -s checkout open https://shop.example
phi -s checkout click @14
phi sessions                        # list agent Spaces; * marks yours
phi -s checkout close               # finish the task, close the Space
```

和所有 AI 代理空間一樣，工作階段的空間預設是暫時性的，任務靜止一段時間後就會自行關閉。想把它保留成長期的工作空間，加上 `--persistent` 即可。

## 命令在哪裡執行

預設情況下，一切都發生在工作階段隱藏的 AI 代理空間裡。有兩件事可以把範圍放寬：

- **你自己的視窗**。`phi -U "Work" goto …`（`click`、`fill`、`snapshot` 等命令同理）操控的是你自己某個空間的可見視窗，而不是隱藏視窗。你的點擊和 CLI 的操作會交錯出現在同一個視窗裡，所以它會以小步驟行動，並在每一步之間重新讀取頁面。
- **瀏覽器管理**。`space-list`、`bookmark-add`、`rules`、`pins`、`downloads` 之類的命令會在整個應用程式範圍操作你真實的瀏覽器資料，能力與 phi-browser Skill 相同。

這兩者都由「**設定 → 開發者 →『允許 AI 代理操作你的空間』**」把關，預設關閉，與程式開發代理的規則完全相同。在你開啟之前，CLI 只能待在自己的 AI 代理空間裡。

## 登入

CLI 永遠不會要你把密碼貼進終端機。登入一律透過 [AI 代理密碼管理員](/zh-Hant/agent-passwords/)：`phi cred-fill` 會讓 Phi 直接從你的密碼庫填寫登入欄位，機密從應用程式到頁面的整段路程都不經過 CLI；每個要求都會跳出 Phi 的核准或拒絕提示，載明是誰、為了什麼提出要求。填入會綁定該登入項目所屬的網站，兩步驟驗證碼永遠不會釋出給自動化，命令經手過的任何機密也會從輸出中清除。

## 由你作主

CLI 繼承了這個 Skill 的協作規則。點一下空間切換器裡的機器人小圖示，就能即時觀看某個工作階段，並隨時「**接手控制**」。在你掌舵期間，CLI 帶有變更性質的命令都會被拒絕，直到你交還控制。當某個步驟屬於你（登入、CAPTCHA 人機驗證、兩步驟驗證碼），流程是 `phi handoff "Sign in, then hand back"`：Phi 會提示你，你完成這個需要人的步驟，交還控制後工作就會繼續。

把自動化指向你在乎的帳號之前，有件事必須知道：有些網站不歡迎 AI 代理，而且會實際採取行動。Reddit 是最著名的例子，被認定為自動化操作的帳號會遭到限制或封鎖。CLI 依你的指示所做的一切都屬於你，這個風險由你承擔；我們無法代你申訴或還原。

## 從終端機安裝 Skill

CLI 也可以自行設定好 [phi-browser Skill](/zh-Hant/phi-browser-skill/)：

```bash
phi install skill                # link the skill into every coding agent present
phi install skill claude codex   # only these agents
```

這和「**設定 → 開發者**」裡「**安裝 phi-browser Skill**」按鈕做的事完全相同，只是不用離開終端機：它會把 Phi 內建的 Skill 連結到每個代理的 Skill 資料夾，因此每次 Phi 更新都會保持在最新狀態。

::: tip 與瀏覽器 Skill 不是同一回事
[瀏覽器 Skill](/zh-Hant/skills/)（Browser Skills）是你教給 Phi 內建助理的工作流程。`phi install skill` 安裝的是 phi-browser Skill，也就是讓外部程式開發代理操控 Phi 的那個套件。
:::

## 下一步

- [phi-browser Skill](/zh-Hant/phi-browser-skill/)，AI 代理空間、即時觀看代理工作，以及存取如何受到限制。這些全都適用於 CLI。
- [AI 代理密碼管理員](/zh-Hant/agent-passwords/)，自動化如何用你的密碼庫登入，而不會看到你的密碼。
- [空間與設定檔](/zh-Hant/spaces/)，AI 代理空間所依賴的工作空間與登入身分。
