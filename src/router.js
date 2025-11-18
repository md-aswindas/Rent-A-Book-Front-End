import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/AdminRegistration', component: () => import('./components/Admin/AdminRegister.vue') },
     { path: '/AdminLogin', component: () => import('./components/Admin/AdminLogin.vue') },
  ] })

export default router;