<template>
  <div class="home">
    <LayoutDefault>
    <div style="display: flex;justify-content: center;flex-wrap: wrap;">
      <OfferCard v-for="deal in deals" :deal="deal" :key="deal.id" />
    </div>

    </LayoutDefault>
  </div>
</template>

<script lang="ts" setup>
import LayoutDefault from "@/layout/DefaultLayout.vue";
import { useTitle } from "@vueuse/core";
import { onMounted, ref } from "vue";
import dealServiceApi from "../api/deals";
import OfferCard from "@/components/home/OfferCard.vue";
const deals = ref([]);
const loadAllDeals = () => {
  dealServiceApi.list().then((res) => {
    deals.value = res.data;
  });
};

onMounted(() => {
  loadAllDeals();
});

useTitle("Home");
</script>
