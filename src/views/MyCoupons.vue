<template>
  <div class="about">
    <LayoutDefault>
      <CouponTable :data="coupons" />
    </LayoutDefault>
  </div>
</template>

<script lang="ts" setup>
import LayoutDefault from "@/layout/DefaultLayout.vue";
import { useTitle } from "@vueuse/core";
import { onMounted, ref } from "vue";
import couponServiceApi from "../api/coupon";
import CouponTable from "../components/myCoupon/CouponTable.vue";
useTitle("My Coupons");

const coupons = ref([]);
const loadAllCoupon = () => {
  couponServiceApi.myCoupon().then((res) => {
    coupons.value = res.data;
  });
};

onMounted(() => {
  loadAllCoupon();
});
</script>

<style scoped></style>
