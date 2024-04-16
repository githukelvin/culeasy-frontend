import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/AuthLayout.vue'),
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('@/views/Auth/LoginPage.vue')
        },
        {
          path: '/sign-up',
          name: 'sign-up',
          component: () => import('@/views/Auth/SignupPage.vue')
        }
      ]
    }
  ]
})

export default router
