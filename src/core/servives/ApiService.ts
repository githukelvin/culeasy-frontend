import type { App } from 'vue'
import type { AxiosResponse } from 'axios'
import axios from 'axios'
import JwtService from '@/core/servives/JwtService'
import VueAxios from 'vue-axios'

//class service to call http request via axios

class ApiService {
  //   description property to share vue instance
  public static vueInstance: App

  //   initialize vue axios
  public static init(app: App<Element>) {
    ApiService.vueInstance = app
    ApiService.vueInstance.use(VueAxios, axios)
    ApiService.vueInstance.axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL
  }
  //  SET UP HEADERS
  public static setHeaders(): void {
    ApiService.vueInstance.axios.defaults.headers.common['Authorization'] =
      `Token ${JwtService.getToken()}`
    ApiService.vueInstance.axios.defaults.headers.common['Accept'] = 'application/json'
  }
  //   description send the Get HTTP request
  public static query(resource: string, params: any): Promise<AxiosResponse> {
    return ApiService.vueInstance.axios.get(resource, params)
  }

  public static get(resource: string, slug = '' as string): Promise<AxiosResponse> {
    return ApiService.vueInstance.axios.get(`${resource}/${slug}`)
  }
}
