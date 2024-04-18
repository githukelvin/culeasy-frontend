import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

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

//
// router.beforeEach((to,from,next)=>{
//   // current page view title
//   document.title = `${to.meta.pageTitle} - ${import.meta.env.VITE_APP_NAME}`;
// })

export default router
