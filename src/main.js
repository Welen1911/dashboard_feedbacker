import { createApp } from "vue";
import "animate.css";
import Toast, { POSITION } from "vue-toastification";

import router from "./router";
import "./style.css";
import "./assets/css/fonts.css";
import "vue-toastification/dist/index.css";

import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.use(Toast, { position: POSITION.BOTTOM_RIGHT, showCloseButtonOnHover: true });
app.mount("#app");
