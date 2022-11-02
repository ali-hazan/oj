<template>
  <div>
    <h2 class="text-center text-white">Subscribe</h2>
    <div class="subscription-plan">

      <SubscriptionCard
        v-for="item in plans"
        :key="item.id"
        :data="item"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from "vue";
import SubscriptionCard from "./SubscriptionCard.vue";
// eslint-disable-next-line no-undef
const props = defineProps(["plans"])
const {plans} = toRefs(props)

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
