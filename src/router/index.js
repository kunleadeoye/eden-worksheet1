import { createRouter, createWebHistory } from "vue-router";
import TheHome from "@/views/TheHome.vue";
import DogShow from "@/views/DogShow.vue";

const routes = [
  { path: "/", name: "Home", component: TheHome },
  { path: "/dog/:image", name: "dog.show", component: DogShow },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
