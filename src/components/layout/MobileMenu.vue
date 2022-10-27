<template>
  <div style="position: sticky; top: 0px">
    <a-row
      style="background-color: #212121; padding: 2px 14px"
      type="flex"
      justify="space-between"
      align="middle"
    >
      <a-col>
        <a-button
          style="border-radius: 8px"
          type="primary"
          @click="toggleCollapsed"
        >
          <MenuUnfoldOutlined v-if="collapsed" />
          <MenuFoldOutlined v-else />
        </a-button>
      </a-col>
      <a-col>
        <LogoImage />
      </a-col>
    </a-row>

    <div class="mobile-nav">
      <a-menu
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        mode="inline"
        theme="light"
        style="height: 100vh"
        :inline-collapsed="collapsed"
      >
        <a-menu-item key="1">
          <template #icon>
            <HomeOutlined />
          </template>
          <span>Home</span>
        </a-menu-item>

        <a-sub-menu key="2">
          <template #icon>
            <UserOutlined />
          </template>
          <template #title>My Account</template>
          <a-menu-item key="3">My Wallet</a-menu-item>
          <a-menu-item key="4">Settings</a-menu-item>
          <a-menu-item key="5" @click="router.push({ name: 'login' })"
            >Logout</a-menu-item
          >
        </a-sub-menu>
        <a-menu-item key="6" @click="router.push({ name: 'about' })">
          <template #icon>
            <SketchOutlined />
          </template>
          <span>About </span>
        </a-menu-item>
      </a-menu>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from "vue";
import LogoImage from "@/components/LogoImage.vue";
import { useRouter } from "vue-router";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  SketchOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    HomeOutlined,
    SketchOutlined,
    LogoImage,
    UserOutlined,
  },
  setup() {
    const state = reactive({
      collapsed: true,
      selectedKeys: ["1"],
      openKeys: ["sub1"],
      preOpenKeys: ["sub1"],
    });
    const router = useRouter();

    watch(
      () => state.openKeys,
      (_val, oldVal) => {
        state.preOpenKeys = oldVal;
      }
    );
    const toggleCollapsed = () => {
      state.collapsed = !state.collapsed;
      state.openKeys = state.collapsed ? [] : state.preOpenKeys;
    };

    return {
      ...toRefs(state),
      toggleCollapsed,
      router,
    };
  },
});
</script>

<style>
.mobile-nav {
  width: 256px;
  position: absolute;
}
</style>
