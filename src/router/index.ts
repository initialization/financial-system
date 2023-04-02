import { createRouter, createWebHashHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"
const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "login" },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/userLogin.vue")
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/main/userMain.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/not-find/notFind.vue")
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  console.log(to)
})

export default router
