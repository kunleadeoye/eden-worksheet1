import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import store from "./store";
import router from "@/router";
import VueLazyload from "vue-lazyload";

const app = createApp(App);

app.use(router);
app.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1,
});
app.use(store).mount("#app");
