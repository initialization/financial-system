import { defineStore } from "pinia"
import { userMenuRequest } from "@/service/main"
import { IResData } from "./types"
import { mapMenusToRoutes } from "@/utils/map-menus"
import router from "@/router"
export const userStore = defineStore("userStore", {
  state: () => {
    return {
      userMenu: [] as any,
      menus: [] as any
    }
  },
  getters: {},
  actions: {
    async userMenuAction() {
      const list: IResData = (await userMenuRequest()) as IResData
      this.userMenu = list.data
      this.menus = mapMenusToRoutes(this.userMenu.data)
      this.menus.forEach((route: any) => {
        router.addRoute("main", route)
      })
    }
  }
})
