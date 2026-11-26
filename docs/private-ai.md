# Private AI and the Phi Sentinel rewrite

Status: written 2026-11-26 against the 2.19 release branches. Not yet checked on a packaged 2.19 build.

This is the source record for `site/private-ai/` and for the rewrite of `site/sentinel/`, plus the related edits made at the same time to `ai`, `automation`, `faq`, `privacy`, `tips-and-shortcuts`, `what-is-phi-browser`, and the sidebar. Read it before changing those passages.

## Why

A user asked, in a support ticket, what Phi Cloud is, whether it is an agent, how it relates to model providers, and whether Phi uses the custom provider they added. The Sentinel page could not answer: it still sent readers to Phi Sentinel's own settings for Private AI, which moved into Phi Chat's settings in 2.16, and it said Private AI work "never leaves your machine", which is false for cloud providers and for the default fallback.

## Sources

| Repository       | Ref                           | Used for                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `phi-ai`         | `release/2.19` at `a3f014523` | Phi Chat settings UI strings (`ai-extension/sidecar/src/locales/*.json`), `pages/settings/private-ai*.ts(x)` (switch, state, routing options per task, fallback policy, setup dialog), `provider-drafts.ts` (built-in providers and default addresses), `docs/sidecar-settings.md`, `docs/sidecar-tasks-page.md` (Task Manager), `docs/phi-memory.md` and `docs/phi-memory-guardrail-requirements.md`        |
| `sentinel`       | `release/2.19` at `89aac60`   | `docs/ai-gateway.md` (`private_ai_enabled`, `local_fallback_policy`, Security), `docs/llm-integration.md` (Local LLM models, the 20B bar), `Sources/SentinelApp/PrivateAI/PrivateAISetupPlan.swift` (16 GB memory, 10 GB disk plus 2 GB headroom, memory estimate), `docs/architecture-overview.md` (Runner role and its control-plane-only invariant), `docs/backup-and-restore.md`, `docs/ai-guardrail.md` |
| `phibrowser-mac` | `origin/release/2.19.0`       | **Settings → Phi & AI → Phi Sentinel**: the **Private AI** row and the two Sentinel toggles, with their localized labels in `Resources/Localizable.xcstrings`                                                                                                                                                                                                                                                |

## Decisions

- Private AI has its own page. Its settings live in Phi Chat and that UI never names Sentinel, so the Sentinel page now only explains what Sentinel does: the Runner, the background services, local data, backup, and status. The old Sentinel menu items and the Sentinel Dashboard are not described (owner, 2026-11-26).
- Phi Cloud is explained as an AI source, separate from the assistant (the agent) and from the model. The comparison table and the "When Phi uses your provider" section answer the ticket directly.
- Provider addresses: any `http` or `https` base URL is accepted and the API key is optional for every provider, as of phi-ai #737 and Sentinel `89aac60` (2026-11-24). The page warns that a key sent over `http` is unencrypted.
- The fallback setting covers local-scope sources only (Local LLM, Ollama, LM Studio, and custom providers on local or plain-`http` addresses). The page says so, and says the default sends content to Phi Cloud.
- "Chat and Web tasks stay on Phi Cloud" depends on the live model index: setup picks the strongest chat model and moves Chat and Web tasks only at 20B or more. The index has only the 4B Gemma today, so the page states the current result and says setup tells you which tasks moved.
- The Memory index (the `embedding` purpose) stays on Phi Cloud after setup and moves with a manual Data search choice. Kept on the page because it matters to privacy-minded readers.
- Recommended models and memory tiers are editorial guidance, approved for publication by the owner on 2026-11-26. They are not in any source. Model names are given as examples of a size class.
- AI Guardrail is described as what phi-memory uses it for: rejecting confirmed secrets before a Memory write. Its fail-open behavior is deliberately not described (owner, 2026-11-26).
- The automation page's "Tasks page in Phi Sentinel" now points to **Task Manager** in Phi Chat, which replaced it.

## Follow-up

- If the published Local LLM index gains a model of 20B or more, setup will move Chat and Web tasks too, and `site/private-ai/` "What setup installs" needs updating.
- Translations for all eight locales were added in the same pull request by i18n run `docs/i18n-runs/2026-11-26-private-ai/`.
