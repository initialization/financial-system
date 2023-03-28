import { RouteRecordRaw } from "vue-router"

export function mapMenusToRoutes(userMenus: any[]) {
  const routes: RouteRecordRaw[] = []

  const allRoutes: RouteRecordRaw[] = []
  // 默认加载所有routes
  const routeFiles = require.context("../router/main", true, /\.ts/)
  routeFiles.keys().forEach((item) => {
    const route = require("../router/main" + item.split(".")[1])
    allRoutes.push(route.default)
  })

  const _rescurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) {
          routes.push(route)
        }
      } else {
        _rescurseGetRoute(menu.children)
      }
    }
  }
  _rescurseGetRoute(userMenus)
  return routes
}
