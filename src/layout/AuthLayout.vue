<template>
  <div class="auth-layout">
    <a-row>
      <a-col class="bg-left" :xs="0" :lg="12">
        <VideoPlayer />
      </a-col>
      <a-col :xs="24" :lg="12" style="height: 100vh">
        <div class="auth-logo-right">
          <img src="../assets/logo/logo.png" alt="" srcset="" />
        </div>

        <slot></slot>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import VideoPlayer from "@/components/layout/VideoPlayer.vue";
</script>

<style>
.auth-layout {
  background-image: url("../assets/image/bg.jpeg");
  min-height: 100vh;
  background-repeat: no-repeat;
  object-fit: cover;
  background-size: cover;
}
.bg-left {
  background-color: black;
  min-height: 100vh;
}
.auth-logo-right{
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;

}
.auth-logo-right img{
  max-width: 180px;
  
}
</style>
