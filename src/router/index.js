import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/clients",
    name: "ClientsList",
    // chargement du composant à l'activation => lazy loading
    component: () =>
      import(
        /* webpackChunkName: "ClientsList" */ "../views/ClientsListView.vue"
      ),
    //meta: { requireAuth: true, role: ["admin", "commercial"] },
  },
  {
    path: "/detailClient/:id",
    name: "ClientsDetail",

    component: () =>
      import(
        /* webpackChunkName: "ClientsDetail" */ "../views/DetailClientView.vue"
      ),
    //meta: { requireAuth: true, role: ["admin", "commercial"] },
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
      alert("pas les droits");
      next();
    }
  }
});

export default router;
