import { createRouter, createWebHistory } from 'vue-router'
import LibraryDashboard from './components/Library/LibraryDashboard.vue';
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


    {
      path: "/libraryDashboard",
      component: LibraryDashboard,
      children: [
        {
          path: "/dashHome",
          name: "Dashboard",
          component: () => import("./components/Library/DashHome.vue"),
        },
        {
          path: "/dashBooks",
          name: "Books",
          component: () => import("./components/Library/DashBook.vue"),
        }, {
          path: "/dashUsers",
          name: "Users",
          component: () => import("./components/Library/DashUsers.vue"),
        }, {
          path: "/dashRentals",
          name: "Rentals",
          component: () => import("./components/Library/DashRentals.vue"),
        }, {
          path: "/dashFeedback",
          name: "Feedback",
          component: () => import("./components/Library/DashFeedback.vue"),
        }, {
          path: "/dashAnalytics",
          name: "Analytics",
          component: () => import("./components/Library/DashAnalytics.vue"),
        }
      ]
    },
  ],
});

export default router;