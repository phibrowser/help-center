# Nebula Memory naming refresh

## Requirement

The owner clarified that the user-facing **Memory Galaxy** name is deprecated and replaced by **Nebula**. Help-center content should use Nebula for the visible Memory map, while internal implementation notes may still refer to the legacy `memory-galaxy` graph where that remains technically accurate.

Work timestamp: 2026-07-09 14:28:39 CST.

## How

`site/memory/index.md` now describes **Nebula** as the current visual Memory view and notes that it replaces the older Memory Galaxy experience. The page metadata was updated from "powers Memory Galaxy" to "powers Nebula".

`docs/initial-setup.md` is now marked archived at the top. Future handoff notes should be written as focused documents under `docs/` instead of appending to that initial setup log.

## Validation

The change was validated with:

```sh
pnpm format:check
pnpm build
```

Both commands passed.

## Open issues

The `../phi-ai` technical docs still describe Nebula as a view/data path alongside the legacy `memory-galaxy` semantic skeleton. That appears intentional for implementation documentation. If the underlying technical architecture has also fully replaced the legacy graph rather than only deprecating the user-facing name, update the phi-ai architecture and memory docs separately.
