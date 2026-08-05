import type { ConsentChoices } from "./consent";
import {
  getInitializedPostHog,
  initializePostHog,
} from "../analytics/posthog-client";

// Help only loads PostHog, but consent is shared across phibrowser.com. A
// denial here therefore also removes first-party GA and marketing cookies that
// may have been created on the main site.
const STATISTICS_COOKIE_PREFIXES = ["_ga", "ph_"];
const STATISTICS_STORAGE_PREFIXES = ["ph_"];
const MARKETING_COOKIE_PREFIXES = ["_twpid", "_twclid", "muc_ads"];

function listCookieNames(): string[] {
  return document.cookie
    .split(";")
    .map((pair) => pair.split("=")[0]?.trim() ?? "")
    .filter(Boolean);
}

function expireCookie(name: string): void {
  const attributes = "expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  const host = window.location.hostname;
  const domains: (string | undefined)[] = [undefined, host, `.${host}`];
  const parts = host.split(".");

  for (let start = 1; start < parts.length - 1; start++) {
    domains.push(`.${parts.slice(start).join(".")}`);
  }

  for (const domain of domains) {
    document.cookie = `${name}=; ${attributes}${domain ? `; domain=${domain}` : ""}`;
  }
}

function removeCookiesByPrefix(prefixes: string[]): void {
  for (const name of listCookieNames()) {
    if (prefixes.some((prefix) => name.startsWith(prefix))) {
      expireCookie(name);
    }
  }
}

function removeStorageByPrefix(prefixes: string[]): void {
  try {
    const keys: string[] = [];

    for (let index = 0; index < localStorage.length; index++) {
      const key = localStorage.key(index);
      if (key && prefixes.some((prefix) => key.startsWith(prefix))) {
        keys.push(key);
      }
    }

    for (const key of keys) localStorage.removeItem(key);
  } catch {
    // Storage is unavailable; there is nothing else to clean up here.
  }
}

function applyStatisticsConsent(choices: ConsentChoices): void {
  if (choices.statistics === "granted") {
    // Initialize immediately after an interaction so the first post-consent
    // navigation is not lost. Returning grants are initialized at idle.
    void initializePostHog()
      .then((posthog) => posthog.opt_in_capturing())
      .catch(() => undefined);
    return;
  }

  // Never download PostHog merely to record a denial.
  getInitializedPostHog()?.opt_out_capturing();
  removeCookiesByPrefix(STATISTICS_COOKIE_PREFIXES);
  removeStorageByPrefix(STATISTICS_STORAGE_PREFIXES);
}

export function applyConsent(choices: ConsentChoices): void {
  if (typeof window === "undefined") return;

  applyStatisticsConsent(choices);

  if (choices.marketing === "denied") {
    removeCookiesByPrefix(MARKETING_COOKIE_PREFIXES);
  }
}
