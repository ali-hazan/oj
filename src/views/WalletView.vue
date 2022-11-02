<template>
  <div class="about">
    <LayoutDefault>
      <MyWallet />
      <SubscriptionPlan :plans="plans" />
    </LayoutDefault>
  </div>
</template>

<script lang="ts" setup>
import planServiceApi from "../api/plan";
import LayoutDefault from "@/layout/DefaultLayout.vue";
import MyWallet from "@/components/user/MyWallet.vue";
import { useTitle } from "@vueuse/core";
import SubscriptionPlan from "@/components/subscription/SubscriptionPlan.vue";
import { onMounted, ref } from "vue";

const plans = ref([]);

onMounted(() => {
  loadAllPlan();
});

useTitle("Wallet");
const loadAllPlan = () => {
  planServiceApi.get().then((res) => {
    plans.value = res.data;
  });
};
</script>

<style scoped>
.about {
  background-image: url("../assets/image/bg.jpeg");
  height: 100vh;
}
</style>
