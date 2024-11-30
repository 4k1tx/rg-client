import { createRouter, createWebHistory } from "vue-router";
import AuthorizationPage from "./pages/AuthorizationPage.vue";
import GeneralDetailsPage from "./pages/GeneralDetailsPage.vue";
import CombatDetailsPage from "./pages/CombatDetailsPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/authorization",
    },
    {
      name: "Authorization",
      path: "/authorization",
      meta: { auth: false },
      component: AuthorizationPage,
    },
    {
      name: "GeneralDetails",
      path: "/characters/:uuid/general",
      meta: { auth: true },
      component: GeneralDetailsPage,
    },
    {
      name: "CombatDetails",
      path: "/characters/:uuid/combat",
      meta: { auth: true },
      component: CombatDetailsPage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && sessionStorage.getItem("auth") !== "true") {
    next("/authorization");
  } else if (!to.meta.auth && sessionStorage.getItem("auth") === "true") {
    next(`/characters/${sessionStorage.getItem("uuid")}/general`);
  } else {
    next();
  }
});

export default router;
