import { createRouter, createWebHashHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "login" },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/userLogin.vue")
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
