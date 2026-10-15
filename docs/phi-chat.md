# Phi Chat and the 2.13 assistant updates

Status: written 2026-10-14 against the 2.13 release, Chromium-side claims checked against source on 2026-10-15. Not yet checked on a packaged 2.13 build.

This is the source record for `site/phi-chat/` and for the related edits made at the same time to `ai`, `automation`, `skills`, `faq`, `what-is-phi-browser`, `sentinel`, `tips-and-shortcuts`, `get-started`, `privacy` and the home page. Read it before changing those passages, so you know where each claim came from and what was left out on purpose.

## Sources

| Repository             | Ref                                                                                    | Used for                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `phi-ai`               | `release/2.13` at `436f24a5d`                                                          | Sidecar UI strings (`ai-extension/sidecar/src/locales/en.json`), behaviour, and the design docs `docs/sidecar-chat-workspace.md`, `docs/chat-profile-isolation.md`, `docs/chat-metadata-store.md`, `docs/sidecar-ai-quota.md`, `docs/business_logic.md` §4                                                                                                          |
| `phibrowser-mac`       | `origin/release/2.13.0` at `f6e13a27`                                                  | Settings labels: the pane is **Phi & AI**, not "Phi AI"; the **Summon Phi Chat with Shift Shift Shift** toggle in the Phi Sentinel section                                                                                                                                                                                                                          |
| `sentinel`             | `origin/release/2.13` at `adbc7c8`                                                     | **Open Phi Chat** menu item and its toggle behaviour, the Shift-Shift-Shift monitor (Accessibility permission, fixed keys, off by default: `PhiChatHotkeyPreference.swift` carries over only an earlier explicit setting), the **Tasks** page title                                                                                                                 |
| `chromium-phibrowser`  | `release/2.13.0` at `27b64040` (gitlab.fydeos.xyz/chromium-source/chromium-phibrowser) | `phi_chat_web_app.cc`: an open Phi Chat window is reused for **Open in Phi Chat**; turning AI off closes the window and uninstalls the app. `apps_folder_support.mm`: the `Phi Apps` folder sits in the user's Applications folder. `phi_chat_app_navigation_throttle.cc`: links open in the last-used Profile through the external-link path, with Space URL rules |
| Company knowledge base | `30-projects/phinomenon/chromium-phibrowser/README.md`, "Phi Chat web app"             | Cmd+Q coupling between Phi Chat and the browser, recorded there as verified on a build on 2026-09-03; not re-read from source                                                                                                                                                                                                                                       |

Linear issues covered (assigned to Jiadong, updated since 2026-09-01): PHI-1545, PHI-1564, PHI-1639, PHI-1643, PHI-1585, PHI-1584, PHI-1587, PHI-1478, PHI-1457, PHI-1630, PHI-1638, PHI-1695, PHI-1659, PHI-1658, PHI-1647, PHI-1501, PHI-1583.

## Decisions

- Phi Chat has its own page instead of a section in `ai`. The sidebar keeps a partial history (ten recent conversations and a title search), so the pages describe Phi Chat as the recommended place for all conversations, not the only one.
- Only 2.13 behaviour is described. Left out on purpose:
  - the Sentinel Dashboard moving into Phi Chat (designed 2026-10-13, not shipped);
  - the Canary-only **Check for updates** item in Phi Chat;
  - PHI-1586 and PHI-1712, still in review when this was written.
- `automation` was partly rewritten because it contradicted 2.13: task results now report into their conversation, "Shadow Task" is no longer a user-facing name (the Shadow Tasks page is a developer view), Sentinel's page is called **Tasks**, and Phi Link pushes completed runs only, not failures. The automation risk warning required by the writing guide was added at the same time.
- "Settings → Phi AI" was corrected to **Settings → Phi & AI** everywhere in the English pages.
- Unloaded tabs in Chat with Tabs are described as best effort, because the background reload has an 8 second limit and an unreadable page is skipped without an error.

## Confirmed by the product owner (2026-10-15)

- Quitting Phi Chat with Cmd+Q does not affect Phi Browser. The knowledge base also notes that it ends a browser process started only for Phi Chat; that process has no windows, so the pages leave the case out.
- The task notification card is Phi Browser's own notification mechanism, not a macOS notification.

## Unverified, check on a 2.13 build

- Quitting the browser closing Phi Chat as well. It comes from the knowledge base, which records it as checked on a build in September 2026.
- Cancelling a task run that is in progress. The product owner expects it to be possible but has not tried it, and no cancel path was found in the sources, so the pages do not describe one.

## Follow-up

- When the Sentinel Dashboard moves into Phi Chat, update `site/phi-chat/` and `site/sentinel/`, and replace the "Tasks page in Phi Sentinel" references in `automation`.
- Translations for all eight locales were added in the same pull request by i18n run `docs/i18n-runs/2026-10-15-phi-chat/`, which also lists the coined renderings awaiting an owner's ruling.
