import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/balloon',
    name: 'balloon',
    component: () => import('../views/animation/balloon/index.vue')
  },
  {
    path: '/loading1',
    name: 'loading1',
    component: () => import('../views/animation/heart-loading/index.vue')
  },
  {
    path: '/luck-draw',
    name: 'luck-draw',
    component: () => import('../views/others/luck-draw/index.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
