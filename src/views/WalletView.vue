<template>
  <div class="about">
    <LayoutDefault>
      <MyWallet />
      <SubscriptionPlan />
    </LayoutDefault>
  </div>
</template>

<script lang="ts" setup>
import LayoutDefault from "@/layout/DefaultLayout.vue";
import MyWallet from "@/components/user/MyWallet.vue";
import { useTitle } from "@vueuse/core";
import SubscriptionPlan from "@/components/subscription/SubscriptionPlan.vue";
useTitle("Wallet");
</script>

<style scoped>
.about {
  background-image: url("../assets/image/bg.jpeg");
  height: 100vh;
}
</style>
