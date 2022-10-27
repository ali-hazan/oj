<template>
  <div class="layout">
    <MobileMenu ref="mobileMenu" />

    <div
      style="
        margin-left: 80px;
        padding: 12px;
        overflow: scroll;
        height: calc(100vh - 74px);
      "
    >
      <slot />
    </div>
  </div>
</template>
<script lang="ts" setup>
import MobileMenu from "@/components/layout/MobileMenu.vue";
</script>
