<template>
  <div class="appeared-in text-center">
    <div style="padding: 32px 8px">
      <h2>Wallet</h2>
      <h3>Use your credit point for unlocking offer</h3>
      <p>Available Credit point {{ user.available_loyality_point }} Point</p>
      <h3>Or Upgrade Your Subscription for more points</h3>
      <p>Upgrading the plan will result in the loss of your credit points</p>
      <div v-if="user.subscribed">
        <h3>Plan Details</h3> 
        <div>
          {{ user.subscribed.name }} | {{ user.subscribed.duration }}
          {{ user.subscribed.duration_mode }}
        </div>

        Duration from {{ moment(user.subscribedAt).format("LL") }} to
        {{ moment(user.subscribedExpire).format("LL") }} 
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useUserStore } from "../../store";
import moment from "moment";


const userStore = useUserStore();

const user = computed(() => userStore.whoami);

onMounted(() => {
  userStore.get()
})

</script>

<style>
.appeared-in::before {
  content: "";
  height: 12px;
  width: 100%;
  background: #7700f4;
  display: block;
}
.appeared-in {
  background-color: #fff;
}
.appeared-in h2 {
  color: #7700f4;
}
</style>
