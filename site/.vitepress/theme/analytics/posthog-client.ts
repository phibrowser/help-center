import type { PostHog } from "posthog-js";
import { sanitizePostHogEvent } from "./posthog-sanitize";

// Public, write-only project key shared with philanding.
const POSTHOG_KEY = "phc_khD82ML7hPHCa9Br3QpjpD67GFXFGaLLrMDw8RAd3gZQ";

let posthogPromise: Promise<PostHog> | null = null;
let posthogInitializationPromise: Promise<PostHog> | null = null;
let initializedPostHog: PostHog | null = null;

export function loadPostHog(): Promise<PostHog> {
  posthogPromise ??= import("posthog-js").then((module) => module.default);
  return posthogPromise;
}

export function initializePostHog(): Promise<PostHog> {
  posthogInitializationPromise ??= loadPostHog().then((posthog) => {
    if (!posthog.__loaded) {
      posthog.init(POSTHOG_KEY, {
        api_host: "https://us.i.posthog.com",
        ui_host: "https://us.posthog.com",
        defaults: "2025-05-24",
        opt_out_capturing_by_default: true,
        disable_surveys: true,
        before_send: sanitizePostHogEvent,
      });
    }

    initializedPostHog = posthog;
    return posthog;
  });

  return posthogInitializationPromise;
}

export function getInitializedPostHog(): PostHog | null {
  return initializedPostHog;
}
