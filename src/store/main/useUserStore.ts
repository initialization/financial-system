import { defineStore } from "pinia"
import { userMenuRequest } from "@/service/main"
import { IResData } from "./types"
import { mapMenusToRoutes } from "@/utils/map-menus"
import router from "@/router"
import localCache from "@/utils/use-cache"
import { MonthDataRequest, shopDataRequest } from "@/service/main"
export const useUserStore = defineStore("userStore", {
  state: () => {
    return {
      userMenu: {} as any,
      menus: [] as any,
      cardData: [] as any,
      shopData: [] as any
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
    async cardDataAction() {
      const cardlist: any = await MonthDataRequest()
      this.cardData = cardlist.data.data
    },
    async shopDataAction() {
      const shoplist: any = await shopDataRequest()
      this.shopData = shoplist.data.data
      localCache.setLocalCache("shopData", this.shopData)
    },
    setupUserStore() {
      this.menus = localCache.getLocalCache("menus")
      if (this.menus) {
        this.menus.forEach((route: any) => {
          router.addRoute("main", route)
        })
      }
    }
  }
})
