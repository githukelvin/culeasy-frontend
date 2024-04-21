import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const routes: Array<RouteRecordRaw> = [
  // Home routes
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomePage.vue'),
    meta: {
      pageTitle: 'Home'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutPage.vue'),
    meta: {
      pageTitle: 'About'
    }
  },
  // dashboard routes
  {
    path: '/',
    component: () => import('@/layouts/MainMenuLayout.vue'),
    meta:{
      middleware:"auth"
    },
    children: [
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/dashboards/ProfilePage.vue'),
        meta: {
          pageTitle: 'Profile'
        }
      }
    ]
  },

  // Auth Routes
  {
    path: '/',
    component: () => import('@/layouts/AuthLayout.vue'),
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Auth/LoginPage.vue'),
        meta: {
          pageTitle: 'Login'
        }
      },
      {
        path: '/sign-up',
        name: 'sign-up',
        component: () => import('@/views/Auth/SignupPage.vue'),
        meta: {
          pageTitle: 'Sign Up'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  linkActiveClass: 'text-light',
  linkExactActiveClass: 'text-light-700'
})


router.beforeEach((to,from,next)=>{
  const store = useAuthStore()

  // current page view title
  document.title = `${to.meta.pageTitle} - ${import.meta.env.VITE_APP_NAME}`;

  store.verifyAuth()

//   before page access check if page requires authentication

  if(to.meta.middleware =="auth"){
    if (store.isAuthenticated){
      next()
    }
    else{
      next({name:"login"})
    }
  }else{
    next()
  }

  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
  })

})



export default router
