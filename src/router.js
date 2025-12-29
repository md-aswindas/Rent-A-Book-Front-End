import { createRouter, createWebHistory } from "vue-router";
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
      path: "/dash",
      component: () => import("@/components/Admin/HomeScreen.vue"),
    },

    {
      path: "/homePage",
      component: AdminDashboard,
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
          path: "/users",
          name: "Users",
          component: () => import("@/components/Admin/HomeNavigation/ViewUsers.vue"),
        },
        {
          path: "/rentals",
          name: "Rentals",
          component: () => import("@/components/Admin/HomeNavigation/ViewRentals.vue"),
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
      path: "/AdminLogin",
      component: () => import("./components/Admin/AdminLogin.vue"),
    },
    {
      path: "/LibraryLogin",
      component: () => import("./components/Library/LibraryLogin.vue"),
    },
    {
      path: "/LibraryRegistration",
      component: () => import("./components/Library/LibraryRegistration.vue"),
    },

    {
      path: "/libraryDashboard",
      component: LibraryDashboard,
      children: [
        {
          path: "/dashHome",
          name: "Home",
          component: () => import("./components/Library/DashHome.vue"),
        },
        {
          path: "/dashBooks",
          name: "Books",
          component: () => import("./components/Library/DashBook.vue"),
        },
        {
          path: "/dashUsers",
          name: "Users",
          component: () => import("./components/Library/DashUsers.vue"),
        },
        {
          path: "/dashRentals",
          name: "Rentals",
          component: () => import("./components/Library/DashRentals.vue"),
        },
        {
          path: "/dashFeedback",
          name: "Feedback",
          component: () => import("./components/Library/DashFeedback.vue"),
        },
        {
          path: "/dashAnalytics",
          name: "Analytics",
          component: () => import("./components/Library/DashAnalytics.vue"),
        },
      ],
    },
  ],
});

export default router;
