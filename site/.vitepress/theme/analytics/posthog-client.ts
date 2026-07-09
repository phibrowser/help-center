import type { PostHog } from "posthog-js";

// Lazy loader for the posthog-js singleton. The library (~60 KiB) is kept off
// the initial VitePress bundle by importing it only through this dynamic
// `import()`; the shared promise guarantees every caller (idle init in
// analytics.ts, the consent opt-in/out in consent.ts) receives the same
// instance. `import type` above is erased at build time and does not pull
// posthog-js into the graph.
let posthogPromise: Promise<PostHog> | null = null;

export function loadPostHog(): Promise<PostHog> {
  posthogPromise ??= import("posthog-js").then((m) => m.default);
  return posthogPromise;
}
