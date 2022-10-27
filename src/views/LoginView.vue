<template>
  <AuthLayout> <LoginForm /> </AuthLayout>
</template>

<script lang="ts" setup>
import AuthLayout from "@/layout/AuthLayout.vue";
import LoginForm from "@/components/login/LoginForm.vue";
import { useTitle } from "@vueuse/core";
useTitle("Login");
</script>
