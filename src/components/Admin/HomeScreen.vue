<template>
  <div class="app-layout">
    <div class="app-sidebar">
      <div class="sidebar-nav">
        <router-link class="nav-link" to="/dashboard">
          <v-icon size="35px">mdi-view-dashboard</v-icon>Dashboard
        </router-link>
        <v-divider class="my-2" />
         <router-link class="nav-link" to="/allUsers"
          ><v-icon size="35px">mdi-account-group</v-icon>Users</router-link
        >
        <v-divider class="my-2" />
        <router-link class="nav-link" to="/libraries"
          ><v-icon size="35px">mdi-library</v-icon>Libraries</router-link
        >
        <v-divider class="my-2" />
        <router-link class="nav-link" to="/deliveryPartner"
          ><v-icon size="35px">mdi-moped-outline</v-icon>Delivery
          Partners</router-link
        >
        <v-divider class="my-2" />
        <router-link class="nav-link" to="/revenue"
          ><v-icon size="35px">mdi-currency-inr</v-icon>Revenue</router-link
        >
        <v-divider class="my-2" />
        <router-link class="nav-link" to="/allRentals"
          ><v-icon size="35px">mdi-book-open-variant</v-icon
          >Rentals</router-link
        >
        <v-divider class="my-2" />

        <router-link class="nav-link" to="/platformconfig"
          ><v-icon size="35px">mdi-cog-outline</v-icon
          >Configuration</router-link
        >
      </div>
    </div>
    <div class="app-main">
      <div class="app-header">
        <div class="page-title">
          <h2>{{ $route.name }}</h2>
        </div>
        <div class="header-search">
          <input type="text" id="search-input" placeholder="Search..." />
        </div>
        <div class="header-actions">
          <v-icon size="30px">mdi-bell</v-icon>
          <div>
            <!-- Side Menu -->
            <!-- Account Icon -->
            <v-icon size="30" class="cursor-pointer" @click="drawer = true">
              mdi-account-circle
            </v-icon>

            <!-- Right Drawer -->
            <v-navigation-drawer
              v-model="drawer"
              location="end"
              temporary
              width="320"
              class="admin-drawer"
            >
              <!-- Header -->
              <div class="drawer-header">
                <v-avatar size="64px">
                  <v-icon size="35px">mdi-shield-account</v-icon>
                </v-avatar>

                <div class="user-info">
                  <h3>Admin</h3>
                  <!-- <span>Administrator</span> -->
                </div>

                <v-btn
                  icon
                  variant="text"
                  class="close-btn"
                  @click="drawer = false"
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </div>

              <!-- Divider -->
              <v-divider />

              <!-- Menu Items -->
              <v-list density="comfortable" nav>
                <v-list-item
                  class="drawer-item"
                  prepend-icon="mdi-account"
                  title="Profile"
                />

                <v-list-item
                  prepend-icon="mdi-cog"
                  class="drawer-item"
                  title="Settings"
                />

                <v-list-item
                  class="drawer-item"
                  prepend-icon="mdi-bell-outline"
                  title="Notifications"
                />

                <v-divider class="my-2" />

                <v-list-item
                  prepend-icon="mdi-logout"
                  title="Logout"
                  class="logout"
                />
              </v-list>
            </v-navigation-drawer>
          </div>
        </div>
      </div>
      <div class="router-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.app-layout {
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #121212;
}
.app-sidebar {
  width: 250px;
  height: 100vh;
  background: linear-gradient(145deg, #fbfbfbbd, #e1dfdfbd, #adadab);
  color: rgb(0, 0, 0);
  top: 0;
  left: 0;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
}

.sidebar-nav {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70%;
}
.v-icon {
  margin-right: 20px;
}
.nav-link {
  display: flex;
  color: rgb(44, 44, 44);
  text-decoration: none;
  align-items: center;
  height: 50px;
  padding-left: 20px;
  border-radius: 10px;
}
.nav-link:hover {
  background-color: #d2d2d2;
  cursor: pointer;
  width: 100%;
  transition: width 0.8s;

}
.app-main {
  width: calc(100% - 250px);
  display: flex;
  flex-direction: column;
}
.app-header {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.page-title {
  width: 20%;
  height: 60px;
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  color: #8a8585;
}
.header-search {
  width: 50%;
  height: 50px;
  margin: 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;
}
#search-input[type="text"] {
  width: 90%;
  height: 90%;
  border: none;
  padding: 20px;
  font-size: 16px;
  border: none;
  outline: none;
  border-radius: 30px;
  color: #fff;
  background: linear-gradient(145deg, #303030, #504d4d, #494545);
}
.header-actions {
  width: 12%;
  height: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #88ff00;
  border: 1px solid #909090;
  color: #0c0c0c;
  border-radius: 20px;
}
.router-content {
  width: 100%;
  height: calc(100vh - 80px);
  padding: 20px;
  overflow-y: auto;
}
.router-content::-webkit-scrollbar {
  display: none;
  scroll-behavior: smooth;
}
.router-link-active {
  background: linear-gradient(145deg, #a6ff00, #8ad302, #80ce03);
  color: #000000;
  font-weight: 700;
  box-shadow: rgb(41, 41, 41) 0px 10px 30px -10px;
}

.profile-drawer {
  width: 250px;
  background-color: #1b1b1b;
}
.admin-drawer {
  background: #121212;
  color: rgb(221, 221, 221);
}

.drawer-header {
  position: relative;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
}

.user-info h3 {
  margin: 0;
  font-size: 18px;
}

.user-info span {
  font-size: 13px;
  color: #aaa;
}

.close-btn {
  position: absolute;
  right: 10px;
  top: 10px;
}

.logout {
  color: #ff5252;
  padding: 20px;
  background: #3b1212;
}
.logout:hover {
  background: #8d0f0f;
  color: #000;
}

.cursor-pointer {
  cursor: pointer;
}
.drawer-item {
  background: #1b1b1b;
  padding: 20px;
  border-radius: 20px;
  margin: 10px;
}
</style>
