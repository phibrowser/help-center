# Phi product glossary (ratified renderings)

Generated from the shipped Phi i18n catalogs on 2026-08-26. These renderings are BINDING when the content names a product feature: reuse them verbatim so marketing and UI read as one product.

## Keep in English everywhere

Phi Browser, Phi, Phi Cloud, Phi Link, Phi Sentinel, Phinomenon, Sentinel, phi-agent, Phi Agent, Anamnesis, Chatbar, Memory Nebula, Memory Galaxy, OpenAI, ChatGPT, Codex, Hugging Face, Ollama, OpenRouter, MLX, Telegram, Bitwarden, Chrome, Chromium, Arc, Safari, RAG, Bifrost, Kiosk, Peek (window/panel mode brands).

Also: "Time Machine" stays English in ja/ko/de/fr/es/nl but is 时间机器 (zh-Hans) and 時光機 (zh-Hant), matching Apple's own UIs. When in doubt about an Apple brand, check Apple's support pages in that locale.

## Feature terms

| English      | zh-Hans      | zh-Hant      | ja               | ko            | de                | fr                 | es                      | nl                    |
| ------------ | ------------ | ------------ | ---------------- | ------------- | ----------------- | ------------------ | ----------------------- | --------------------- |
| Space        | 空间         | 空間         | スペース         | 스페이스      | Space             | Espace             | Espacio                 | Space                 |
| Spaces       | 空间         | 空間         | スペース         | 스페이스      | Spaces            | Espaces            | Espacios                | Spaces                |
| Profile      | 个人资料     | 設定檔       | プロファイル     | 프로필        | Profil            | Profil             | Perfil                  | Profiel               |
| Incognito    | 无痕         | 無痕模式     | シークレット     | 시크릿 모드   | Inkognito         | Navigation privée  | Incógnito               | Incognito             |
| Reader View  | 阅读模式     | 閱讀模式     | リーダー表示     | 읽기 모드     | Lesemodus         | Mode Lecture       | Lector                  | Reader-weergave       |
| AI Sidebar   | AI 侧边栏    | AI 側邊欄    | AIサイドバー     | AI 사이드바   | KI-Seitenleiste   | Barre latérale IA  | Barra lateral de IA     | AI-zijbalk            |
| New Tab Page | 新标签页     | 新分頁       | 新しいタブページ | 새 탭 페이지  | Seite „Neuer Tab“ | Page Nouvel onglet | Página de nueva pestaña | Nieuw tabblad         |
| Tab Group    | 标签页组     | 分頁群組     | タブグループ     | 탭 그룹       | Tab-Gruppe        | Groupe d'onglets   | Grupo de pestañas       | Tabbladgroep          |
| Split View   | 分屏视图     | 分割畫面     | 分割表示         | Split View    | Split View        | Split View         | Vista dividida          | Split View            |
| Settings     | 设置         | 設定         | 設定             | 설정          | Einstellungen     | Paramètres         | Configuración           | Instellingen          |
| Bookmarks    | 书签         | 書籤         | ブックマーク     | 북마크        | Lesezeichen       | Favoris            | Marcadores              | Bladwijzers           |
| Extensions   | 扩展程序     | 擴充功能     | 拡張機能         | 확장 프로그램 | Erweiterungen     | Extensions         | Extensiones             | Extensies             |
| URL Rules    | 网址规则     | 網址規則     | URLルール        | URL 규칙      | URL-Regeln        | Règles d'URL       | Reglas de URL           | URL-regels            |
| Pinned Tabs  | 固定的标签页 | 釘選分頁     | 固定タブ         | 고정된 탭     | Angeheftete Tabs  | Onglets épinglés   | Pestañas fijadas        | Vastgezette tabbladen |
| Comfortable  | 舒适         | 舒適         | ゆったり         | 여유          | Komfortabel       | Confortable        | Cómodo                  | Comfortabel           |
| Agent        | 智能体       | AI 代理      | エージェント     | 에이전트      | Agent             | Agent              | Agente                  | Agent                 |
| History      | 历史记录     | 歷史記錄     | 履歴             | 방문 기록     | Verlauf           | Historique         | Historial               | Geschiedenis          |
| Downloads    | 下载         | 下載項目     | ダウンロード     | 다운로드      | Downloads         | Téléchargements    | Descargas               | Downloads             |
| Skills       | Skill        | Skill        | Skill            | Skill         | Skills            | Skills             | Skills                  | Skills                |
| Memory       | 记忆         | 記憶         | メモリ           | 메모리        | Erinnerungen      | Mémoire            | Memoria                 | Geheugen              |
| Copy URL     | 拷贝网址     | 拷貝網址     | URLをコピー      | URL 복사      | URL kopieren      | Copier l'URL       | Copiar URL              | Kopieer URL           |
| Search       | 搜索         | 搜尋         | 検索             | 검색          | Suchen            | Rechercher         | Buscar                  | Zoeken                |
| New Tab      | 新标签页     | 新分頁       | 新しいタブ       | 새 탭         | Neuer Tab         | Nouvel onglet      | Nueva pestaña           | Nieuw tabblad         |
| Private AI   | 私有 AI      | 私有 AI      | プライベートAI   | 프라이빗 AI   | Private KI        | IA privée          | IA privada              | Privé-AI              |
| AI Guardrail | AI Guardrail | AI Guardrail | AI Guardrail     | AI Guardrail  | AI Guardrail      | AI Guardrail       | AI Guardrail            | AI Guardrail          |
| Greetings    | 问候语       | 問候語       | あいさつ         | 인사말        | Begrüßung         | message d'accueil  | saludo                  | Begroetingen          |

Decisions ratified by the i18n owner on 2026-08-27 (staging review follow-up):

- Skills keeps the English word in every locale (singular "Skill" in CJK, matching the shipped sidecar UI); the earlier 技能 / スキル / 스킬 / Habilidades renderings are retired even where a product catalog still ships them, until the product side is aligned.
- Private AI follows the shipped Sentinel/macOS product string per locale (`phi-i18n-internal/manifest/macos.json` `private_ai`).
- AI Guardrail stays English everywhere; do not translate or vary its spelling.
- Greetings (the new-tab greeting feature) follows the shipped `newtab.greeting*` strings in `manifest/sidecar.json`.
- Context ("AI and Context data" in the Privacy Policy) is an ordinary word, not a product name: 上下文 / コンテキスト / 컨텍스트 / Kontext / contexte / contexto / context.
- Memory has two registers on purpose: the marketing metaphor uses the language's "memory" word (记忆 / 記憶 / 기억 / Gedächtnis / mémoire), while references to the UI feature or its exportable data use the product word in the table above (メモリ / 메모리 / Erinnerungen). Chatbar vs. sidebar follows the English source per occurrence.

(Compiled from UI catalogs; when a term is missing here, check the live product UI in that locale or ask the i18n owner rather than inventing a rendering.)
