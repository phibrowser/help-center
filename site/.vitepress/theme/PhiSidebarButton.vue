<script setup lang="ts">
import { useData } from "vitepress";
import { computed, onMounted, ref } from "vue";
import type { HelpThemeConfig } from "../i18n/types.ts";

// Opens Phi Browser's own AI assistant sidebar.
//
// Phi's AI sidebar is the "Sidecar" extension (id below). It declares this
// origin in externally_connectable, and its background script answers our
// messages via chrome.runtime.onMessageExternal. So we talk to it directly
// with chrome.runtime.sendMessage — there is no native/postMessage hop.
//
// The button is hidden unless we can confirm we are inside Phi with the Sidecar
// installed: on mount we send a "phi:ping" probe and only render once it
// resolves. In a normal Chrome (extension absent) the callback carries
// chrome.runtime.lastError; in Firefox/Safari window.chrome is undefined. Both
// leave the button hidden. Contract documented in docs/initial-setup.md.
const EXT_ID = "fenmfiepnpdlhplemgijlimpbebebljo";

const isPhi = ref(false);
const { theme } = useData<HelpThemeConfig>();
const copy = computed(() => theme.value.customThemeCopy);

function sendToExt(msg: unknown, cb?: (resp: unknown) => void): boolean {
  const rt = (window as unknown as { chrome?: any }).chrome?.runtime;
  if (!rt?.sendMessage) return false;
  try {
    rt.sendMessage(EXT_ID, msg, (resp: unknown) => {
      // Read lastError to swallow "Could not establish connection" noise.
      const err = rt.lastError;
      cb?.(err ? undefined : resp);
    });
    return true;
  } catch {
    return false;
  }
}

onMounted(() => {
  sendToExt({ source: "phi-help", type: "phi:ping" }, (resp: unknown) => {
    if ((resp as { ok?: boolean } | undefined)?.ok) isPhi.value = true;
  });
});

function openPhiSidebar() {
  sendToExt({ source: "phi-help", type: "phi:open-sidebar" });
}
</script>

<template>
  <button
    v-if="isPhi"
    type="button"
    class="phi-ai-button"
    :aria-label="copy.askPhi"
    :title="copy.askPhi"
    @click="openPhiSidebar"
  >
    <svg
      class="phi-ai-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path
        d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
      />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
      <path d="M4 17v2" />
      <path d="M5 18H3" />
    </svg>
  </button>
</template>

<style scoped>
.phi-ai-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-left: 8px;
  /* Match the search box: same background, radius, and border treatment. */
  border: 1px solid transparent;
  border-radius: 8px;
  background-color: var(--vp-c-bg-alt);
  color: var(--vp-c-text-2);
  transition:
    border-color 0.25s,
    color 0.25s;
}

.phi-ai-button:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.phi-ai-icon {
  width: 16px;
  height: 16px;
}
</style>
