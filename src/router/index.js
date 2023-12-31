import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import store from "@/store";
import envValues from "@/env";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/clients",
    name: "clientsList",
    // chargement du composant à l'activation => lazy loading
    component: () =>
      import(
        /* webpackChunkName: "ClientsList" */ "../views/ClientsListView.vue"
      ),
    meta: { requireAuth: true, role: `${envValues.role.commercial}` },
  },
  {
    path: "/detailClient/:id",
    name: "clientsDetail",

    component: () =>
      import(
        /* webpackChunkName: "ClientsDetail" */ "../views/DetailClientView.vue"
      ),
    meta: { requireAuth: true, role: `${envValues.role.commercial}` },
  },
  {
    path: "/gestion",
    name: "gestion",

    component: () =>
      import(/* webpackChunkName: "ClientsDetail" */ "../views/AdminView.vue"),
    meta: { requireAuth: true, role: `${envValues.role.admin}` },
  },
  {
    path: "/planning",
    name: "planning",

    component: () =>
      import(
        /* webpackChunkName: "ClientsDetail" */ "../views/PlanningView.vue"
      ),
    meta: { requireAuth: true, role: `${envValues.role.lanceur}` },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//@todo refacto via function et creation de page de redirection si droits non OK
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth && !store.state.user.token) {
    next({ name: "login" });
  } else {
    if (!to.meta.role) {
      next();
    } else if (to.meta.role && to.meta.role.includes(store.state.user.role)) {
      next();
    } else {
      alert("pas les droits mais on accède quand meme pour test");
      next();
    }
  }
});

export default router;
