import "./style.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router.js";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import App from "./App.vue";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");
