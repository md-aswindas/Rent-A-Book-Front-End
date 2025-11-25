import { createRouter, createWebHistory } from 'vue-router'
import AdminDashboard from './components/Admin/HomePage.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/AdminRegistration', component: () => import('./components/Admin/AdminRegister.vue') },
     { path: '/AdminLogin', component: () => import('./components/Admin/AdminLogin.vue') },


     {
      path: "/homePage",
      component: AdminDashboard,
      children: [
        {
          path: "/dashboard",
          component: () => import("@/components/Admin/DashBoard.vue"),
        },
        
        {
          path: "/overview",
          component: () => import("@/components/Admin/OverviewCards.vue"),
        },
        {
          path: "/libraries",
          component: () => import("@/components/Admin/ViewLibraries.vue"),
        },
        {
          path: "/users",
          component: () => import("@/components/Admin/ViewUsers.vue"),
        },
        {
          path: "/rentals",
          component: () => import("@/components/Admin/ViewRentals.vue"),
        },
        {
          path: "/revenue",
          component: () => import("@/components/Admin/ViewRevenue.vue"),
        },
        {
          path: "/deliveryPartner",
          component: () => import("@/components/Admin/DeliveryPartners.vue"),
        },
      ]},
      // {
      //     path: "/homePage",
      //     component: () => import("@/components/Admin/HomePage.vue"),
      //   },
    
    { path: '/AdminLogin', component: () => import('./components/Admin/AdminLogin.vue') },
    { path: '/LibraryLogin', component: () => import('./components/Library/LibraryLogin.vue') },
    { path: '/LibraryRegistration', component: () => import('./components/Library/LibraryRegistration.vue') },
  ] })

export default router;