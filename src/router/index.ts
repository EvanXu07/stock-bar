import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'stock',
      component: () => import('@/views/stock.vue'),
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import('@/views/setting.vue'),
    },
  ],
})

export default router
