import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "project",
    path: "/",
    component: () => import("@/views/ViewHome.vue"),
    meta: {},
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
