import { useCookies } from "@vueuse/integrations/useCookies"
const cookie = useCookies()
export function getCookie(key: string) {
  return cookie.get(key)
}
export function setCookie(key: string, value: string) {
  cookie.set(key, value)
}
export function removeCookie(key: string) {
  cookie.remove(key)
}
