<script setup lang="ts">
import { useData } from "vitepress";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { applyConsent } from "./consent/apply-consent";
import {
  ALL_DENIED,
  ALL_GRANTED,
  getEffectiveConsent,
  hasGlobalPrivacyControl,
  storeConsent,
  type ConsentChoices,
} from "./consent/consent";
import type { HelpThemeConfig } from "../i18n/types.ts";

type PreferencesVariant = "settings" | "privacy-choices";

const bannerVisible = ref(false);
const preferencesVariant = ref<PreferencesVariant | null>(null);
const statisticsOn = ref(false);
const marketingOn = ref(false);
const gpcActive = ref(false);
const optedOut = ref(false);

const { theme } = useData<HelpThemeConfig>();
const copy = computed(() => theme.value.customThemeCopy);

let bannerTimer: number | undefined;

function persistChoices(choices: ConsentChoices): void {
  storeConsent(choices);
  applyConsent(choices);
  bannerVisible.value = false;
}

function openPreferences(variant: PreferencesVariant): void {
  const effective = getEffectiveConsent() ?? ALL_DENIED;
  statisticsOn.value = effective.statistics === "granted";
  marketingOn.value = effective.marketing === "granted";
  gpcActive.value = hasGlobalPrivacyControl();
  optedOut.value = false;
  preferencesVariant.value = variant;
}

function closePreferences(): void {
  preferencesVariant.value = null;
}

function savePreferences(): void {
  persistChoices({
    statistics: statisticsOn.value ? "granted" : "denied",
    marketing: marketingOn.value ? "granted" : "denied",
  });
  closePreferences();
}

function optOutOfSaleAndSharing(): void {
  const statistics = getEffectiveConsent()?.statistics ?? "denied";
  const choices: ConsentChoices = {
    statistics,
    marketing: "denied",
  };

  persistChoices(choices);
  statisticsOn.value = statistics === "granted";
  marketingOn.value = false;
  optedOut.value = true;
}

function handleKeydown(event: KeyboardEvent): void {
  if (event.key === "Escape" && preferencesVariant.value !== null) {
    closePreferences();
  }
}

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);

  // Stored choices, a migrated legacy denial, and GPC all suppress the banner.
  if (getEffectiveConsent() === null) {
    bannerTimer = window.setTimeout(() => {
      bannerVisible.value = true;
    }, 800);
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeydown);
  if (bannerTimer !== undefined) window.clearTimeout(bannerTimer);
});
</script>

<template>
  <footer class="phi-privacy-controls" :aria-label="copy.privacyControls">
    <button type="button" @click="openPreferences('settings')">
      {{ copy.cookieSettings }}
    </button>
    <button
      type="button"
      class="phi-privacy-choices-button"
      @click="openPreferences('privacy-choices')"
    >
      {{ copy.privacyChoices }}
      <svg viewBox="0 0 30 14" aria-hidden="true">
        <path
          d="M7.4 12.8h6.8l3.1-11.6H7.4C4.2 1.2 1.6 3.8 1.6 7s2.6 5.8 5.8 5.8z"
          fill="#fff"
        />
        <path
          d="M22.6 0H7.4c-3.9 0-7 3.1-7 7s3.1 7 7 7h15.2c3.9 0 7-3.1 7-7s-3.2-7-7-7zm-21 7c0-3.2 2.6-5.8 5.8-5.8h9.9l-3.1 11.6H7.4c-3.2 0-5.8-2.6-5.8-5.8z"
          fill="#06f"
        />
        <path
          d="M24.6 4c.2.2.2.6 0 .8L22.5 7l2.2 2.2c.2.2.2.6 0 .8-.2.2-.6.2-.8 0l-2.2-2.2-2.2 2.2c-.2.2-.6.2-.8 0-.2-.2-.2-.6 0-.8L20.8 7l-2.2-2.2c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0l2.2 2.2L23.8 4c.2-.2.6-.2.8 0z"
          fill="#fff"
        />
        <path
          d="M12.7 4.1c.2.2.3.6.1.8L8.6 9.8c-.1.1-.2.2-.3.2-.2.1-.5.1-.7-.1L5.4 7.7c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0L8 8.6l3.8-4.5c.2-.2.6-.3.9 0z"
          fill="#06f"
        />
      </svg>
    </button>
  </footer>

  <Teleport to="body">
    <Transition name="phi-consent-banner">
      <section
        v-if="bannerVisible && preferencesVariant === null"
        class="phi-consent-banner"
        :aria-label="copy.cookieConsent"
      >
        <div class="phi-consent-banner-content">
          <p>
            {{ copy.bannerBeforePolicy }}
            <a href="/privacy/">{{ copy.privacyPolicy }}</a>
            {{ copy.bannerAfterPolicy }}
          </p>

          <div class="phi-consent-banner-actions">
            <div>
              <button
                type="button"
                class="phi-consent-secondary-button"
                @click="persistChoices(ALL_DENIED)"
              >
                {{ copy.rejectAll }}
              </button>
              <button
                type="button"
                class="phi-consent-secondary-button"
                @click="persistChoices(ALL_GRANTED)"
              >
                {{ copy.acceptAll }}
              </button>
            </div>
            <button
              type="button"
              class="phi-consent-link-button"
              @click="openPreferences('settings')"
            >
              {{ copy.customizeSettings }}
            </button>
          </div>
        </div>
      </section>
    </Transition>

    <Transition name="phi-consent-dialog">
      <div
        v-if="preferencesVariant !== null"
        class="phi-consent-dialog-backdrop"
        @click.self="closePreferences"
      >
        <section
          class="phi-consent-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="phi-consent-dialog-title"
        >
          <div class="phi-consent-dialog-heading">
            <h2 id="phi-consent-dialog-title">
              {{ copy.cookiePreferences }}
            </h2>
            <button
              type="button"
              :aria-label="copy.close"
              class="phi-consent-close-button"
              @click="closePreferences"
            >
              ✕
            </button>
          </div>

          <p class="phi-consent-intro">
            {{ copy.preferencesBeforePolicy }}
            <a href="/privacy/">{{ copy.privacyPolicy }}</a>
            {{ copy.preferencesAfterPolicy }}
          </p>

          <div
            v-if="preferencesVariant === 'privacy-choices'"
            class="phi-consent-opt-out"
          >
            <p>{{ copy.saleAndSharingDescription }}</p>
            <p v-if="optedOut" class="phi-consent-status" role="status">
              {{ copy.optedOut }}
            </p>
            <button
              v-else
              type="button"
              class="phi-consent-secondary-button"
              @click="optOutOfSaleAndSharing"
            >
              {{ copy.optOutOfSaleAndSharing }}
            </button>
          </div>

          <div class="phi-consent-categories">
            <div class="phi-consent-category">
              <div>
                <h3>{{ copy.functional }}</h3>
                <p>{{ copy.functionalDescription }}</p>
              </div>
              <span>{{ copy.alwaysOn }}</span>
            </div>

            <div class="phi-consent-category">
              <div>
                <label for="phi-consent-statistics">
                  {{ copy.statistics }}
                </label>
                <p>{{ copy.statisticsDescription }}</p>
                <small v-if="gpcActive && !statisticsOn">
                  {{ copy.gpcDisabled }}
                </small>
              </div>
              <label class="phi-consent-switch">
                <input
                  id="phi-consent-statistics"
                  v-model="statisticsOn"
                  type="checkbox"
                />
                <span aria-hidden="true"></span>
              </label>
            </div>

            <div class="phi-consent-category">
              <div>
                <label for="phi-consent-marketing">
                  {{ copy.marketing }}
                </label>
                <p>{{ copy.marketingDescription }}</p>
                <small v-if="gpcActive && !marketingOn">
                  {{ copy.gpcDisabled }}
                </small>
              </div>
              <label class="phi-consent-switch">
                <input
                  id="phi-consent-marketing"
                  v-model="marketingOn"
                  type="checkbox"
                />
                <span aria-hidden="true"></span>
              </label>
            </div>
          </div>

          <div class="phi-consent-save-row">
            <button
              type="button"
              class="phi-consent-save-button"
              @click="savePreferences"
            >
              {{ copy.saveChoices }}
            </button>
          </div>
        </section>
      </div>
    </Transition>
  </Teleport>
</template>
