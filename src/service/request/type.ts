import {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from "axios"

export interface userInterceptors<T = AxiosResponse> {
  requestInterceptor?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig
  requestInterceptorErr?: (err: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorErr?: (err: any) => any
}

export interface userRequestConfig extends AxiosRequestConfig {
  interceptors?: userInterceptors
}
