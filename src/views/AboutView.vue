<template>
  <div class="about">
    <LayoutDefault>
      <div>
        <h2
          class="text-white text-center"
          style="
            max-width: 480px;
            margin: 28px auto;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
              sans-serif;
          "
        >
          OJ LIFESTYLE IS A DISRUPTIVE FORCE OF PASSION AND DRIVE; DESIGNED TO
          ENERGISE, THRILL AND INSPIRE.
        </h2>
      </div>
      <AppearedView />
    </LayoutDefault>
  </div>
</template>

<script lang="ts" setup>
import LayoutDefault from "@/layout/DefaultLayout.vue";
import AppearedView from "@/components/about/AppearedView.vue";
import { useTitle } from "@vueuse/core";
useTitle("About");
</script>

<style scoped>
.about {
  background-image: url("../assets/image/bg.jpeg");
  height: 100vh;
}
</style>
