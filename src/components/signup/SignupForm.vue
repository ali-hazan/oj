<template>
  <div class="flex-center">
    <TransparentCard>
      <h1 class="text-white">Sign Up</h1>
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

        <a-form-item
          label="Confirm Password"
          name="confirm_password"
          :rules="[
            { required: true, message: 'Please input your password!' },
            { validator: validatePass2, trigger: 'change' },
          ]"
        >
          <a-input-password v-model:value="formState.confirm_password" />
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button type="primary" html-type="submit">
            <span v-if="callApi">Creating...</span> <span v-else>Sign Up </span>
          </a-button>
        </a-form-item>
      </a-form>

      <div class="text-center">
        <router-link :to="{ name: 'login' }">Already Have Account?</router-link>
      </div>
    </TransparentCard>
  </div>
</template>

<script lang="ts" setup>
import TransparentCard from "../common/TransparentCard.vue";
import { reactive, ref } from "vue";
import type { Rule } from "ant-design-vue/es/form";
import { useRouter } from "vue-router";
import AuthServiceApi from "../../api/auth";
import Swal from "../../plugins/swal";

const router = useRouter();

interface FormState {
  username: string;
  password: string;
  confirm_password: string;
}

const formState = reactive<FormState>({
  username: "",
  password: "",
  confirm_password: "",
});

const validatePass2 = async (_rule: Rule, value: string) => {
  if (value === "") {
    return Promise.reject("Please input the password again");
  } else if (value !== formState.password) {
    return Promise.reject("Two inputs don't match!");
  } else {
    return Promise.resolve();
  }
};

const callApi = ref(false);

const onFinish = (values: any) => {
  console.log("Success:", values);
  const data = {
    username: values.username,
    password: values.password,
    password2: values.confirm_password,
  };
  callApi.value = true;
  AuthServiceApi.register(data)
    .then((res) => {
      console.log(res.data);
      router.push({ name: "login" });
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
