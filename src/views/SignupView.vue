<template>
  <AuthLayout> <SignupForm /> </AuthLayout>
</template>

<script lang="ts" setup>
import AuthLayout from "@/layout/AuthLayout.vue";
import SignupForm from "@/components/signup/SignupForm.vue";
import { useTitle } from "@vueuse/core";
useTitle("Sign Up");
</script>
