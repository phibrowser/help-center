<script setup lang="ts">
// Opens Phi Browser's own AI assistant sidebar.
//
// Phi does not (yet) expose a page-facing API to open its native sidebar, so
// this dispatches an agreed message that Phi's content script / native layer
// is expected to listen for and act on. The contract is documented in
// docs/initial-setup.md. In any other browser nothing is listening, so the
// click is a harmless no-op.
function openPhiSidebar() {
  window.postMessage(
    { source: "phi-help", type: "phi:open-sidebar" },
    window.location.origin,
  );
}
</script>

<template>
  <button
    type="button"
    class="phi-ai-button"
    aria-label="Ask Phi"
    title="Ask Phi"
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
  width: 20px;
  height: 20px;
}
</style>
