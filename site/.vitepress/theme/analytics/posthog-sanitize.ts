import type { CaptureResult, Properties } from "posthog-js";

// Preserve campaign attribution while preventing arbitrary search text from
// entering PostHog's automatically captured URL properties.
const SENSITIVE_QUERY_PARAMETERS = new Set(["code", "q"]);
const URL_PROPERTY_NAMES = [
  "$current_url",
  "$referrer",
  "$initial_current_url",
  "$initial_referrer",
] as const;

export function redactSensitiveUrlQuery(value: string): string {
  let url: URL;

  try {
    url = new URL(value);
  } catch {
    return value;
  }

  let changed = false;

  for (const name of Array.from(url.searchParams.keys())) {
    if (SENSITIVE_QUERY_PARAMETERS.has(name.toLowerCase())) {
      url.searchParams.delete(name);
      changed = true;
    }
  }

  return changed ? url.toString() : value;
}

function sanitizeProperties(
  properties: Properties | undefined,
): Properties | undefined {
  if (!properties) return properties;

  let sanitized = properties;

  for (const name of URL_PROPERTY_NAMES) {
    const value = properties[name];
    if (typeof value !== "string") continue;

    const redacted = redactSensitiveUrlQuery(value);
    if (redacted !== value) {
      if (sanitized === properties) sanitized = { ...properties };
      sanitized[name] = redacted;
    }
  }

  return sanitized;
}

export function sanitizePostHogEvent(
  event: CaptureResult | null,
): CaptureResult | null {
  if (!event) return null;

  const properties = sanitizeProperties(event.properties);
  const $set = sanitizeProperties(event.$set);
  const $setOnce = sanitizeProperties(event.$set_once);

  if (
    properties === event.properties &&
    $set === event.$set &&
    $setOnce === event.$set_once
  ) {
    return event;
  }

  return {
    ...event,
    properties: properties ?? event.properties,
    $set,
    $set_once: $setOnce,
  };
}
