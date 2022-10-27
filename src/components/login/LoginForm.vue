<template>
  <div class="flex-center">
    <TransparentCard>
      <h1 class="text-white">Sign In</h1>
      <a-form
        :model="formState"
        name="login"
        id="login"
        hideRequiredMark
        layout="vertical"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          label="Username"
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item
          label="Password"
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-form-item name="remember" :wrapper-col="{ offset: 6, span: 24 }">
          <a-checkbox v-model:checked="formState.remember"
            >Remember me</a-checkbox
          >
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button type="primary" html-type="submit">Login</a-button>
        </a-form-item>
      </a-form>

      <div class="text-center">
        <router-link :to="{ name: 'signup' }">Create Account</router-link>
      </div>
    </TransparentCard>
  </div>
</template>

<script lang="ts" setup>
import TransparentCard from "../common/TransparentCard.vue";
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

const formState = reactive<FormState>({
  username: "",
  password: "",
  remember: true,
});
const onFinish = (values: any) => {
  console.log("Success:", values);
  router.push({ name: "home" });
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
</script>
