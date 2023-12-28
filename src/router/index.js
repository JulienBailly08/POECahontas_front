import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";

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
  },
  {
    path: "/detailClient/:id",
    name: "ClientsDetail",

    component: () =>
      import(
        /* webpackChunkName: "ClientsDetail" */ "../views/DetailClientView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
