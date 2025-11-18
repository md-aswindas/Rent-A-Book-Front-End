import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/AdminRegistration', component: () => import('./components/Admin/AdminRegister.vue') },
    { path: '/AdminLogin', component: () => import('./components/Admin/AdminLogin.vue') },
    { path: '/LibraryLogin', component: () => import('./components/Library/LibraryLogin.vue') },
    { path: '/LibraryRegistration', component: () => import('./components/Library/LibraryRegistration.vue') },
  ] })

export default router;