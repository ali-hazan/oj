<template>
  <div class="home">
    <LayoutDefault>
      <div>Hello</div>
    </LayoutDefault>
  </div>
</template>

<script lang="ts" setup>
import LayoutDefault from "@/layout/DefaultLayout.vue";
import { useTitle } from "@vueuse/core";
useTitle("Home");
</script>
