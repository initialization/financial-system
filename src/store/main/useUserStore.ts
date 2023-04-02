import { defineStore } from "pinia"
import { userMenuRequest } from "@/service/main"
import { IResData } from "./types"
import { mapMenusToRoutes } from "@/utils/map-menus"
import router from "@/router"
import localCache from "@/utils/use-cache"
export const useUserStore = defineStore("userStore", {
  state: () => {
    return {
      userMenu: {} as any,
      menus: [] as any
    }
  },
  getters: {},
  actions: {
    async userMenuAction() {
      const list: IResData = (await userMenuRequest()) as IResData
      this.userMenu = list.data
      this.menus = mapMenusToRoutes(this.userMenu.data)
      localCache.setLocalCache("menus", this.menus)
      this.menus.forEach((route: any) => {
        router.addRoute("main", route)
      })
    },
    setupUserStore() {
      this.menus = localCache.getLocalCache("menus")
      this.menus.forEach((route: any) => {
        router.addRoute("main", route)
      })
    }
  }
})
