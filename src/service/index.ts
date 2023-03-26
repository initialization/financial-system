import { BASE_URL } from "./request/config"
import userRequest from "./request"

export const Request = new userRequest({
  baseURL: BASE_URL
})
