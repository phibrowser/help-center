import { getEffectiveConsent } from "../consent/consent";
import { initializePostHog } from "./posthog-client";

let started = false;

function onIdle(callback: () => void): void {
  const requestIdle = (
    window as {
      requestIdleCallback?: (
        callback: () => void,
        options?: { timeout: number },
      ) => number;
    }
  ).requestIdleCallback;

  if (requestIdle) {
    requestIdle(callback, { timeout: 2000 });
  } else {
    window.setTimeout(callback, 1);
  }
}

// Restore a returning visitor's Statistics grant without putting PostHog on
// the critical path. A first-time grant is initialized immediately by
// applyConsent(), while a denial never downloads the SDK at all.
export function initAnalytics(): void {
  if (started || typeof window === "undefined") return;
  started = true;

  onIdle(() => {
    if (getEffectiveConsent()?.statistics !== "granted") return;

    void initializePostHog()
      .then((posthog) => posthog.opt_in_capturing())
      .catch(() => undefined);
  });
}
