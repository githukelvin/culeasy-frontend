import { defineStore } from 'pinia'
import { ref } from 'vue'
import JwtService from '@/core/servives/JwtService'
import ApiService from '@/core/servives/ApiService'
import { useRouter } from 'vue-router'
import axios from 'axios'

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
  const router = useRouter()

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
    router.push({ name: 'Home' })

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
  async function verifyAuth() {
    if (JwtService.getToken()) {
      ApiService.setHeader()
      try {
        const { data } = await axios.get('/verify-token', {
          headers: {
            Authorization: `Bearer ${JwtService.getToken()}`
          }
        })
        // console.log(data)
        setAuth(data)
      } catch (error) {
        router.push({ name: 'login' })

        setError(error)
        purgeAuth()
      }

      //   ApiService.get('verify-token')
      //     .then(({ data }) => {
      //       console.log(data)
      //       setAuth(data)
      //     }).catch(({ response }) => {
      //       console.error(response);
      //       setError(error)
      //       purgeAuth()
      // router.push({name:"login"})

      //     })
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
