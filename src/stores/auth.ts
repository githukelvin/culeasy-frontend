import { defineStore } from 'pinia'
import { ref } from 'vue'
import JwtService from '@/core/servives/JwtService'
import ApiService from '@/core/servives/ApiService'

export interface User {
  username: string
  email: string
  password: string
  phoneNumber: string
  token: string
}

export const useAuthStore = defineStore('auth', () => {
  const errors = ref({})
  const user = ref<User>({} as User)
  const isAuthenticated = ref(!!JwtService.getToken())

  function setAuth(authUser: any) {
    isAuthenticated.value = true
    user.value = authUser.user
    errors.value = {}
    JwtService.saveToken(authUser.token)
  }
  function setError(error: any) {
    errors.value = { ...error }
  }

  function purgeAuth() {
    isAuthenticated.value = false
    JwtService.destroyToken()
    user.value = {} as User
    errors.value = {}
    window.localStorage.removeItem('id_user')
  }

  function login(credentials: User) {
    return ApiService.post('login', credentials)
      .then(({ data }) => {
        setAuth(data)
        window.localStorage.setItem('id_user', data.user.id)
      })
      .catch(({ response }) => {
        setError(response.data)
      })
  }

  function logout() {
    purgeAuth()
  }
  function register(credentials: User) {
    return ApiService.post('users', credentials)
      .then(({ data }) => {
        setAuth(data)
      })
      .catch(({ response }) => {
        setError(response.data)
      })
  }
  function verifyAuth() {
    if (JwtService.getToken()) {
      ApiService.setHeader()
      ApiService.post('verify-token', { api_token: JwtService.getToken() })
        .then(({ data }) => {
          setAuth(data)
        })
        .catch(({ response }) => {
          setError(response.data.errors)
          purgeAuth()
        })
    } else {
      purgeAuth()
    }
  }
  return {
    errors,
    user,
    login,
    logout,
    register,
    verifyAuth,
    isAuthenticated
  }
})
