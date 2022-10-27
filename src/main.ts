import { createApp } from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";
import "@/assets/styles/antd.css";
import "@/assets/styles/custom.css";
import router from "./router";
import { createPinia } from "pinia";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(Antd);
app.mount("#app");
