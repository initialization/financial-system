import axios, { AxiosInstance } from "axios"
import { userRequestConfig, userInterceptors } from "./type"
class userRequest {
  instances: AxiosInstance
  interceptors?: userInterceptors
  constructor(config: userRequestConfig) {
    this.instances = axios.create(config)
    this.interceptors = config.interceptors

    // 配置传过来的拦截器
    this.instances.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorErr
    )
    this.instances.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorErr
    )
  }

  request<T>(config: userRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instances
        .request<any, T>(config)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => reject(err))
    })
  }
  get<T>(config: userRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "get" })
  }
  post<T>(config: userRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "post" })
  }
  delete<T>(config: userRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "delete" })
  }
  patch<T>(config: userRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "patch" })
  }
}

export default userRequest
