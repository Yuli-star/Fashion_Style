import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Principal",
    component: () => import("../views/Principal.vue"),
  },
  {
    path: "*",
    name: "Not-found",
    component: () => import("../views/Not-found.vue"),
  },
  {
    path: "/tarea",
    name: "Tarea",
    component: () => import("../views/Tarea.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/ropa/invierno",
    name: "Ropa de invierno",
    component: () => import("../views/Ropa de invierno.vue"),
  },
  {
    path: "/ropa/primavera",
    name: "Ropa de primavera",
    component: () => import("../views/Ropa de primavera.vue"),
  },
  {
    path: "/ropa/otoño",
    name: "Ropa de otoño",
    component: () => import("../views/Ropa de otoño.vue"),
  },
  {
    path: "/ropa/verano",
    name: "Ropa de verano",
    component: () => import("../views/Ropa de verano.vue"),
  },
  {
    path: "/tiendas",
    name: "Tiendas",
    component: () => import("../views/Tiendas.vue"),
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
