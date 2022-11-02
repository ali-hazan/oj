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
          <a-button type="primary" html-type="submit">
            <span v-if="callApi"> Login... </span>
            <span v-else> Login </span>
          </a-button>
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
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import AuthServiceApi from "../../api/auth";
import Swal from "../../plugins/swal";
import { useUserStore } from "../../store";

const userStore = useUserStore();

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
const callApi = ref(false);
const onFinish = (values: any) => {
  callApi.value = true;
  AuthServiceApi.login(values)
    .then((res) => {
      localStorage.setItem("token", res.data.access);

      userStore.get();

      router.push({ name: "home" });
    })
    .catch((err) => {
      const errorMsg = Object.values(err.response.data)[0];
      Swal.fire({
        title: "Error!",
        text: errorMsg ? errorMsg.toString() : "Something went wrong!",
        confirmButtonText: "Close",
      });
    })
    .finally(() => {
      callApi.value = false;
    });
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
</script>
