import * as z from "zod/mini";

// Not part of lib.dom yet, though it ships in Brave, DuckDuckGo and Firefox.
declare global {
  interface Navigator {
    globalPrivacyControl?: boolean;
  }
}

const ConsentDecisionSchema = z.enum(["granted", "denied"]);

export type ConsentDecision = z.infer<typeof ConsentDecisionSchema>;

export interface ConsentChoices {
  statistics: ConsentDecision;
  marketing: ConsentDecision;
}

const StoredConsentSchema = z.object({
  version: z.literal(2),
  statistics: ConsentDecisionSchema,
  marketing: ConsentDecisionSchema,
  updatedAt: z.number(),
  gpcActiveAtSave: z.boolean(),
});

export type StoredConsent = z.infer<typeof StoredConsentSchema>;

const LegacyConsentSchema = z.object({
  analytics: ConsentDecisionSchema,
});

// This key and record shape are shared with philanding. Both applications run
// on https://phibrowser.com, so localStorage is shared across / and /help/.
const CONSENT_STORAGE_KEY = "phi_cookie_consent";

export const ALL_DENIED: ConsentChoices = {
  statistics: "denied",
  marketing: "denied",
};

export const ALL_GRANTED: ConsentChoices = {
  statistics: "granted",
  marketing: "granted",
};

// localStorage can throw in private browsing. Keep the decision effective for
// the current page lifetime even when it cannot be persisted.
let memoryConsent: StoredConsent | null = null;

export function getStoredConsent(): StoredConsent | null {
  if (typeof window === "undefined") return null;
  if (memoryConsent) return memoryConsent;

  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;

    const parsed: unknown = JSON.parse(raw);
    const v2 = StoredConsentSchema.safeParse(parsed);
    if (v2.success) return v2.data;

    // A legacy denial refused all analytics and can safely migrate. A legacy
    // bundled grant was not informed per-category consent, so ask again.
    const legacy = LegacyConsentSchema.safeParse(parsed);
    if (legacy.success && legacy.data.analytics === "denied") {
      const migrated: StoredConsent = {
        version: 2,
        ...ALL_DENIED,
        updatedAt: Date.now(),
        gpcActiveAtSave: false,
      };

      try {
        localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(migrated));
      } catch {
        // Read-only storage: the migrated value still governs this read.
      }

      return migrated;
    }

    return null;
  } catch {
    return null;
  }
}

export function hasGlobalPrivacyControl(): boolean {
  if (typeof navigator === "undefined") return false;
  return navigator.globalPrivacyControl === true;
}

// Precedence matches philanding: a choice deliberately saved while GPC was
// visible overrides GPC; otherwise GPC overrides a prior stored choice.
export function getEffectiveConsent(): ConsentChoices | null {
  const stored = getStoredConsent();

  if (hasGlobalPrivacyControl()) {
    if (stored?.gpcActiveAtSave) {
      return {
        statistics: stored.statistics,
        marketing: stored.marketing,
      };
    }

    return ALL_DENIED;
  }

  if (!stored) return null;

  return {
    statistics: stored.statistics,
    marketing: stored.marketing,
  };
}

export function storeConsent(choices: ConsentChoices): void {
  if (typeof window === "undefined") return;

  const record: StoredConsent = {
    version: 2,
    statistics: choices.statistics,
    marketing: choices.marketing,
    updatedAt: Date.now(),
    gpcActiveAtSave: hasGlobalPrivacyControl(),
  };

  memoryConsent = record;

  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
  } catch {
    // The in-memory record still governs until the page is closed.
  }
}
