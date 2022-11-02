import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import AuthServiceApi from "../api/auth";

export const useUserStore = defineStore("user", {
  state: () => ({ user: useStorage("user", {}) }),
  actions: {
    get() {
      AuthServiceApi.whoami().then((res) => {
        this.user = res.data.data;
      });
    },
  },
  getters: {
    whoami(): any {
      return this.user;
    },
  },
});
