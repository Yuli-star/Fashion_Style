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
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
