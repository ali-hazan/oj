<template>
  <div class="subscription-card text-center">
    <h3>
      {{ data.name }}
    </h3>
    <h4>{{ data.price }} AED</h4>
    {{ data.points }} Points
    <p>{{ data.duration }} {{ data.duration_mode }}</p>
    <button @click="purchasePlan(data)" class="purchase-btn">Purchase</button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import Swal from "@/plugins/swal";
import planServiceApi from "../../api/plan";
import { useUserStore } from "../../store";

const userStore = useUserStore();

const props = defineProps(["data"]);

const purchasePlan = (data: any) => {
  Swal.fire({
    title: `Subscribe ${data.name} plan`,
    showCancelButton: true,
    confirmButtonText: "Purchase",
    showLoaderOnConfirm: true,
    preConfirm: () => {
      return planServiceApi
        .subscribe({ subscribed: data.id })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          const errorMsg = Object.values(error.response.data.error)[0];
          Swal.showValidationMessage(`Request failed: ${errorMsg}`);
        });
    },
    allowOutsideClick: () => !Swal.isLoading(),
  }).then((result: any) => {
    if (result.isConfirmed) {
      userStore.get();
      Swal.fire({
        title: "Subscribed successfully!",
      });
    }
  });
};
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

</style>
