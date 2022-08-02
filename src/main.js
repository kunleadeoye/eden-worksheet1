import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import store from "./store";
import VueLazyload from "vue-lazyload";

const app = createApp(App);
app.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1,
});
app.use(store).mount("#app");
