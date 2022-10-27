<template>
  <div>
    <h2 class="text-center text-white">Subscribe</h2>
    <div class="subscription-plan">
      <SubscriptionCard
        v-for="item in subscirptionData"
        :key="item.id"
        :data="item"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import SubscriptionCard from "./SubscriptionCard.vue";

const subscirptionData = [
  {
    id: 1,
    amount: 199,
    name: "WEEKLY",
  },
  {
    id: 2,
    amount: 499,
    name: "MONTHLY",
  },
  {
    id: 3,
    amount: 999,
    name: "ANNUAL",
  },
];
</script>

<style>
.subscription-plan {
  display: flex;
  background-color: #fff;
  margin-top: 12px;
  border-radius: 4px;
  padding: 68px;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
