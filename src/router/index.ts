import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'stock',
      component: () => import('@/views/Stock.vue'),
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('@/views/Mine.vue'),
    },
  ],
})

export default router
