<template>
  <div class="subscription-card text-center">
    <h3>
      {{ data.name }}
    </h3>
    <h4>{{ data.amount }} AED</h4>
    <button class="purchase-btn">Purchase</button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
const props = defineProps(["data"]);
</script>

<style>
.subscription-card {
  box-shadow: 0px 0px 5px 0px rgb(186 186 186 / 49%);
  -webkit-box-shadow: 0px 0px 5px 0px rgb(186 186 186 / 49%);
  -moz-box-shadow: 0px 0px 5px 0px rgb(186 186 186 / 49%);
  width: 180px;
  min-height: 120px;
  padding: 12px;
  margin: 8px;
}
.purchase-btn {
  background-color: #db4134;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  margin: 8px;
}
</style>
