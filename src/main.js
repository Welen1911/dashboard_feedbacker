import { createApp } from "vue";
import "animate.css";

import router from "./router";
import "./style.css";
import "./assets/css/fonts.css";
import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
