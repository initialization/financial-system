let BASE_URL = ""
let BASE_NAME = ""

if (process.env.NODE_ENV === "production") {
  BASE_URL = "https://mock.apifox.cn/m1/2493839-0-default"
  BASE_NAME = "production"
} else if (process.env.NODE_ENV === "development") {
  BASE_URL = "/api"
  BASE_NAME = "development"
} else {
  BASE_URL = "/test"
  BASE_NAME = "test"
}

export { BASE_URL, BASE_NAME }
