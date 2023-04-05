import { Request } from "../index"
enum userAPI {
  userMenu = "/user/menu",
  monthData = "/user/monthdata",
  shopData = "/user/shopdate"
}

export function userMenuRequest() {
  return Request.get({
    url: userAPI.userMenu
  })
}

export function MonthDataRequest() {
  return Request.get({
    url: userAPI.monthData
  })
}
export function shopDataRequest() {
  return Request.get({
    url: userAPI.shopData
  })
}
