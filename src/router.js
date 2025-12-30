import { createRouter, createWebHistory } from "vue-router";
import store from "./store";

import LibraryDashboard from "./components/Library/LibraryDashboard.vue";
import AdminDashboard from "./components/Admin/HomeScreen.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/AdminRegistration",
      component: () => import("./components/Admin/AdminRegister.vue"),
    },
    {
      path: "/AdminLogin",
      component: () => import("./components/Admin/AdminLogin.vue"),
    },
    
    {
      path: "/homePage",
      component: AdminDashboard,
      meta: {
        requiresAuth:true,
        role: "ROLE_ADMIN",
      },
      children: [
        {
          path: "/dashboard",
          name: "DashBoard",
          component: () =>
            import("@/components/Admin/HomeNavigation/DashBoard.vue"),
        },

        {
          path: "/libraries",
          name:"Libraries",
          component: () => import("@/components/Admin/HomeNavigation/ViewLibraries.vue"),
        },
        {
          path: "/allUsers",
          name: "AllUsers",
          component: () => import("@/components/Admin/HomeNavigation/AllUsers.vue"),
        },
        {
          path: "/allRentals",
          name: "Rentals",
          component: () => import("@/components/Admin/HomeNavigation/ViewRental.vue"),
        },
        {
          path: "/revenue",
          name: "Revenue",
          component: () => import("@/components/Admin/HomeNavigation/ViewRevenue.vue"),
        },
        {
          path: "/deliveryPartner",
          name: "DeliveryPartners",
          component: () => import("@/components/Admin/HomeNavigation/DeliveryPartners.vue"),
        },
        {
          path: "/platformconfig",
          name: "",
          component: () => import("@/components/Admin/PlatformConfig.vue"),
        },
      ],
    },
    {
      path: "/",
      component: () => import("./components/Library/LibraryLogin.vue"),
    },
    {
      path: "/LibraryRegistration",
      component: () => import("./components/Library/LibraryRegistration.vue"),
    },

    {
      path: "/libraryDashboard",
      component: LibraryDashboard,
      meta: {
        requiresAuth:true,
        role: "ROLE_LIBRARY",
      },
      children: [
        {
          path: "",
          redirect: "dashHome", // 👈 DEFAULT CHILD
        },
        {
          path: "dashHome",
          name: "Dashboard",
          component: () => import("./components/Library/DashHome.vue"),
        },
        {
          path: "dashBooks",
          name: "Books",
          component: () => import("./components/Library/DashBook.vue"),
        },
        {
          path: "dashUsers",
          name: "Users",
          component: () => import("./components/Library/DashUsers.vue"),
        },
        {
          path: "dashRentals",
          name: "Rentals",
          component: () => import("./components/Library/DashRentals.vue"),
        },
        {
          path: "dashFeedback",
          name: "Feedbacks",
          component: () => import("./components/Library/DashFeedback.vue"),
        },
        {
          path: "dashAnalytics",
          name: "Analytics",
          component: () => import("./components/Library/DashAnalytics.vue"),
        },
        
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("@/components/Library/NotFound.vue"),
    },
    {
      path: "/unauthorized",
      component: () => import("@/components/Library/UnauthorizedPage.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters["Auth/isAuthenticated"];
  const role = store.getters["Auth/getRole"];

  // Public route
  if (!to.meta.requiresAuth) {
    return next();
  }

  // Not logged in
  if (!isAuthenticated) {
    return next("/LibraryLogin");
  }

  // Role mismatch
  if (to.meta.role && to.meta.role !== role) {
    return next("/unauthorized"); // later: /unauthorized
  }

  next();
});

export default router;
