import { createApp } from "vue";
import App from "./App.vue";

import telescope from "../lib";

const app = createApp(App);

app.use(telescope);

app.mount("#app");
