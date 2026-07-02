# Content accuracy audit against source code

## Why

The site content under `site/` makes many concrete claims about Phi Browser's behavior (menu wording, settings paths, feature mechanics, data handling). This audit verified those claims against the actual source code and corrected the ones that did not match, so the help center does not mislead users or contradict the product.

## When

2026-07-02 (audit and fixes performed the same day).

## How

Every user-verifiable claim in the 17 pages under `site/` was checked against the source repositories:

- `phibrowser-mac` — native browser UI (layouts, sidebar, bookmarks, Spaces, themes, Time Machine, settings)
- `phi-ai` — AI monorepo (`ai-extension/sidecar`, `ai-extension/lexington`, `memory`, `phi-agent`, `browser-use-next`)
- `sentinel` — menubar app, Runner, Private AI (plus its `docs/` design documents)
- `philanding` — marketing site (URL existence checks)

Ambiguous findings were resolved with the team: "onboarding" in the docs refers to the in-browser conversational flow entered from the new-tab top banner (sidecar), not the native macOS first-run; the Space-deletion behavior was confirmed with colleagues.

## What was corrected

- **Turning AI off** (`privacy`, `memory`, `faq`): the Settings → Phi AI switch closes conversations and disconnects connectors; it does **not** erase Memory. The permanent-deletion copy belongs to the separate clear action on the Memory page (`AISettingView.swift`, memory management UI).
- **Deleting a Space** (`spaces`, `faq`): removes the Space's bookmarks and URL Rules only; pinned tabs are per-Profile and survive (`deleteSpaceCascade` matches `spaceId`; pinned tabs have `spaceId == nil`).
- **Space icons** (`spaces`): Phi's own icon set plus emoji, not SF Symbols (SF Symbols are a legacy fallback only).
- **URL Rules entry point** (`spaces`): the Spaces menu in the menu bar (and Spaces settings), not the sidebar.
- **Time Machine snapshots** (`time-machine`, `faq`): a snapshot stores the matching user data plus a version record; the previous app build is downloaded during restore, not stored in the snapshot.
- **Background (Shadow) tasks** (`automation`): no pre-start approval gate exists — tasks start when explicitly requested and pause for confirmation on risky steps; results appear on Phi Sentinel's Scheduled Tasks page (the docs previously said a "Shadow Tasks" page).
- **"Browser is closed" phrasing** (`automation`, `sentinel`, `faq`): aligned to "browser window is closed", matching the product's own copy — browser-driven tasks still need a live browser connection; only orchestration survives a full quit.
- **Assistant naming/avatar** (`ai`, `get-started`, `faq`): the user names the assistant in the new-tab banner onboarding flow; the avatar is generated automatically from the name (adjustable via chat), not picked by the user. `get-started` now distinguishes this flow from the native first-run steps.
- **Right-click assistant entry** (`ai`, `faq`): selection-only (`Ask <name> about…`, `sidecar/background.js`); there is no page- or link-level variant.
- Wording details: bookmark menu items with ellipses and in actual order; "Always Show Bookmark Bar" casing; the menu-bar Bookmarks menu exists in all layout modes; widget names "Image of the day" and "Currency converter"; Comfortable mode's sidebar role described accurately.

## Verified accurate (no change needed)

Theme presets and all sixteen accent hex values; Skills (built-in examples, library filters, Skill Creator); new-tab widgets and greeting; Chat with Tabs including whole-group and split-view context expansion (`features.ts` in sidecar); Private AI task coverage (Memory and Data search local by default, Chat and Web tasks on Phi Cloud), requirements, and BYO providers; Phi Link setup paths; MRU ctrl+tab cycling; system requirements; Homebrew cask command; the `/download/` and `/anamnesis/` pages on phibrowser.com.

## Open issues

- The in-app Space deletion alert still claims pinned tabs are removed (residual copy in `SpacesStripView.swift`); deferred at the team's request. When the product copy is updated, no help-center change should be needed — the docs now describe the actual behavior.
- Two claims remain reasonable inferences without direct code evidence and were left as-is: Time Machine snapshots being "not tied to your account" and "cannot be moved to another Mac".
- Internal drift noted in the sentinel repo (not a help-center issue): `docs/ai-gateway.md` describes six Private AI coverage tasks while the shipped UI shows four.
