import { createRouter, createWebHistory } from "vue-router";

const FeedBacks = () => import("../views/FeedBacks/index.vue");
const Home = () => import("../views/Home/index.vue");
const Credencials = () => import("../views/Credencials/index.vue");

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/feedbacks",
    name: "FeedBacks",
    component: FeedBacks,
    meta: {
      hasAuth: true,
    },
  },
  {
    path: "/credencials",
    name: "Credencials",
    component: Credencials,
    meta: {
      hasAuth: true,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "Home" },
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
