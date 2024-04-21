// import type { App } from 'vue'
// import type { AxiosResponse } from 'axios'
// import axios from 'axios'
import JwtService from '@/core/servives/JwtService'
// import VueAxios from 'vue-axios'
//
// //class service to call http request via axios
//
// class ApiService {
//   //   description property to share vue instance
//   public static vueInstance: App
//
//   //   initialize vue axios
//   public static init(app: App<Element>) {
//     ApiService.vueInstance = app
//     ApiService.vueInstance.use(axios)
//     ApiService.vueInstance.axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL
//   }
//   //  SET UP HEADERS
//   public static setHeaders(): void {
//     ApiService.vueInstance.axios.defaults.headers.common['Authorization'] =
//       `Token ${JwtService.getToken()}`
//     ApiService.vueInstance.axios.defaults.headers.common['Accept'] = 'application/json'
//   }
//   //   description send the Get HTTP request
//   public static query(resource: string, params: any): Promise<AxiosResponse> {
//     return ApiService.vueInstance.axios.get(resource, params);
//   }
//   // send thr get request http request
//   public static get(
//     resource: string,
//     slug = "" as string
//   ): Promise<AxiosResponse> {
//     return ApiService.vueInstance.axios.get(`${resource}/${slug}`);
//   }
//   //   description set the post http
//   public static post(resource: string, params: any): Promise<AxiosResponse> {
//     return ApiService.vueInstance.axios.post(`${resource}`, params);
//   }
//
//   //   description set put HTTP
//   public static put(resource: string, params: any): Promise<AxiosResponse> {
//     return ApiService.vueInstance.axios.put(`${resource}`, params)
//   }
//   //   description set update HTTP
//   public static update(resource: string, slug: string, params: any): Promise<AxiosResponse> {
//     return ApiService.vueInstance.axios.put(`${resource}/${slug}`, params)
//   }
//
//   //   description send DELETE HTTP request
//   public static delete(resource: string): Promise<AxiosResponse> {
//     return ApiService.vueInstance.axios.delete(resource)
//   }
// }
//
// export default ApiService

import type { App } from 'vue'
import type { AxiosResponse } from 'axios'
import axios from 'axios'
import VueAxios from 'vue-axios'

/**
 * @description service to call HTTP request via Axios
 */
class ApiService {
  /**
   * @description property to share vue instance
   */
  public static vueInstance: App

  /**
   * @description initialize vue axios
   */
  public static init(app: App<Element>) {
    ApiService.vueInstance = app
    ApiService.vueInstance.use(VueAxios, axios)
    ApiService.vueInstance.axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL
  }

  /**
   * @description set the default HTTP request headers
   */
  public static setHeader(): void {
    ApiService.vueInstance.axios.defaults.headers.common['Authorization'] =
      `Token ${JwtService.getToken()}`
    ApiService.vueInstance.axios.defaults.headers.common['Accept'] = 'application/json'
  }

  /**
   * @description send the GET HTTP request
   * @returns Promise<AxiosResponse>
   * @param resource
   * @param params
   */
  public static query(resource: string, params: any): Promise<AxiosResponse> {
    return ApiService.vueInstance.axios.get(resource, params)
  }

  /**
   * @description send the GET HTTP request
   * @returns Promise<AxiosResponse>
   * @param resource
   * @param slug
   */
  public static get(resource: string, slug = '' as string): Promise<AxiosResponse> {
    return ApiService.vueInstance.axios.get(`${resource}/${slug}`)
  }

  /**
   * @description set the POST HTTP request
   * @returns Promise<AxiosResponse>
   * @param resource
   * @param params
   */
  public static post(resource: string, params: any): Promise<AxiosResponse> {
    return ApiService.vueInstance.axios.post(`${resource}`, params)
  }

  /**
   * @description send the UPDATE HTTP request
   * @returns Promise<AxiosResponse>
   * @param resource
   * @param slug
   * @param params
   */
  public static update(resource: string, slug: string, params: any): Promise<AxiosResponse> {
    return ApiService.vueInstance.axios.put(`${resource}/${slug}`, params)
  }

  /**
   * @description Send the PUT HTTP request
   * @returns Promise<AxiosResponse>
   * @param resource
   * @param params
   */
  public static put(resource: string, params: any): Promise<AxiosResponse> {
    return ApiService.vueInstance.axios.put(`${resource}`, params)
  }

  /**
   * @description Send the DELETE HTTP request
   * @returns Promise<AxiosResponse>
   * @param resource
   */
  public static delete(resource: string): Promise<AxiosResponse> {
    return ApiService.vueInstance.axios.delete(resource)
  }
}

export default ApiService
