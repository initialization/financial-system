import { Request } from "../index"
enum userAPI {
  userMenu = "/user/menu"
}

export function userMenuRequest() {
  return Request.get({
    url: userAPI.userMenu
  })
}
