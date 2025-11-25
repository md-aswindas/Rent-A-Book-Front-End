import { createRouter, createWebHistory } from 'vue-router'
import AdminDashboard from './components/Admin/AdminDashboard.vue';
import LibraryDashboard from './components/Library/LibraryDashboard.vue';

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
      ]
    },

    { path: '/AdminLogin', component: () => import('./components/Admin/AdminLogin.vue') },
    { path: '/LibraryLogin', component: () => import('./components/Library/LibraryLogin.vue') },
    { path: '/LibraryRegistration', component: () => import('./components/Library/LibraryRegistration.vue') },


    {
      path: "/libraryDashboard",
      component: LibraryDashboard,
      children: [
        {
          path: "/dashHome",
          component: () => import("./components/Library/DashHome.vue"),
        },
        {
          path: "/dashBooks",
          component: () => import("./components/Library/DashBook.vue"),
        }, {
          path: "/dashUsers",
          component: () => import("./components/Library/DashUsers.vue"),
        }, {
          path: "/dashRentals",
          component: () => import("./components/Library/DashRentals.vue"),
        }, {
          path: "/dashFeedback",
          component: () => import("./components/Library/DashFeedback.vue"),
        }, {
          path: "/dashAnalytics",
          component: () => import("./components/Library/DashAnalytics.vue"),
        }
      ]
    },
  ],
});

export default router;