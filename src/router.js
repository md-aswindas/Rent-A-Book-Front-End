import { createRouter, createWebHistory } from 'vue-router'
import AdminDashboard from './components/Admin/AdminDashboard.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/AdminRegistration', component: () => import('./components/Admin/AdminRegister.vue') },
     { path: '/AdminLogin', component: () => import('./components/Admin/AdminLogin.vue') },


     {
      path: "/adminDashboard",
      component: AdminDashboard,
      children: [
        {
          path: "/overview",
          component: () => import("@/components/Admin/OverView.vue"),
        },
      ]},
    
  ] })

export default router;