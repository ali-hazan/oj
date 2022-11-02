<template>
  <div class="offer-card">
    <h3>
      {{ deal.title }}
    </h3>
    <div>
      from {{ moment(deal.start_date).format("LL") }} to
      {{ moment(deal.end_date).format("LL") }}
    </div>
    <h4>Offer {{ deal.offer }}{{ deal.is_percentage ? "%" : "AED" }}</h4>
    <div class="company-info">
      <h4>Company info</h4>
      {{ deal.company.name }} | {{ deal.company.city }} |
      {{ deal.company.country }}
    </div>
    <button @click="getCoupon(deal)" class="purchase-btn">Get Coupon</button>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from "vue";
import moment from "moment";

// eslint-disable-next-line no-undef
const props = defineProps(["deal"]);
const { deal } = toRefs(props);
const getCoupon = (deal: any) => {
  console.log(deal);
};
</script>

<style scoped>
.offer-card {
  width: 240px;
  background-color: #fff;
  margin: 12px;
  box-shadow: 0px 0px 8px 1px rgb(190 189 189 / 75%);
  -webkit-box-shadow: 0px 0px 8px 1px rgb(190 189 189 / 75%);
  -moz-box-shadow: 0px 0px 8px 1px rgb(190 189 189 / 75%);
  padding: 12px;
  border-radius: 12px;
  text-align: center;
}
.company-info {
  background-color: #fafafa;
  border-radius: 8px;
  padding: 8px;
  margin: 4px;
}
</style>
