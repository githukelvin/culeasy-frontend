import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
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
    ],
    meta: {
      pageTitle: 'Home'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

//
// router.beforeEach((to,from,next)=>{
//   // current page view title
//   document.title = `${to.meta.pageTitle} - ${import.meta.env.VITE_APP_NAME}`;
// })

export default router
