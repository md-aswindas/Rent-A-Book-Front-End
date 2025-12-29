<template>
  <div class="container">
    <div class="dashboard" :class="{ collapsed: isCollapsed }">
      <div class="dash-header" @click="toggleCollapse">
        <div  class="collapse-btn">
          <v-icon
            :icon="
              isCollapsed ? 'mdi-arrow-right-box' : 'mdi-arrow-left-box'
            "
          ></v-icon>
        </div>
        <h3 v-if="!isCollapsed">Name</h3>
      </div>
      <div class="dash-content">

        <v-tooltip text="Home" location="right" :disabled="!isCollapsed">
          <template v-slot:activator="{ props }">
            <router-link class="link" to="/dashHome" v-bind="props" exact-active-class="active-link">
              <h3>
                <v-icon
                  icon="mdi-view-dashboard"
                  :style="{ marginRight: isCollapsed ? '0' : '10px' }"
                  size="26"
                ></v-icon>
                <span v-if="!isCollapsed">Dashboard</span>
              </h3>
            </router-link>
          </template>
        </v-tooltip>

        <v-tooltip text="Books" location="right" :disabled="!isCollapsed">
          <template v-slot:activator="{ props }">
            <router-link class="link" to="/dashBooks" v-bind="props" exact-active-class="active-link">
              <h3>
                <v-icon
                  icon="mdi-book-outline"
                  :style="{ marginRight: isCollapsed ? '0' : '10px' }"
                  size="26"
                ></v-icon>
                <span v-if="!isCollapsed">Books</span>
              </h3>
            </router-link>
          </template>
        </v-tooltip>
        <v-tooltip text="Users" location="right" :disabled="!isCollapsed">
          <template v-slot:activator="{ props }">
            <router-link class="link" to="/dashUsers" v-bind="props" exact-active-class="active-link">
              <h3>
                <v-icon
                  icon="mdi-account-group-outline"
                  :style="{ marginRight: isCollapsed ? '0' : '10px' }"
                  size="26"
                ></v-icon>
                <span v-if="!isCollapsed">Users</span>
              </h3>
            </router-link>
          </template>
        </v-tooltip>
        <v-tooltip text="Rentals" location="right" :disabled="!isCollapsed">
          <template v-slot:activator="{ props }">
            <router-link class="link" to="/dashRentals" v-bind="props" exact-active-class="active-link">
              <h3>
                <v-icon
                  icon="mdi-book-account-outline"
                  :style="{ marginRight: isCollapsed ? '0' : '10px' }"
                  size="26"
                ></v-icon>
                <span v-if="!isCollapsed">Rentals</span>
              </h3>
            </router-link>
          </template>
        </v-tooltip>
        <v-tooltip text="Feedbacks" location="right" :disabled="!isCollapsed">
          <template v-slot:activator="{ props }">
            <router-link class="link" to="/dashFeedback" v-bind="props" exact-active-class="active-link">
              <h3>
                <v-icon
                  icon="mdi-forum-outline"
                  :style="{ marginRight: isCollapsed ? '0' : '10px' }"
                  size="26"
                ></v-icon>
                <span v-if="!isCollapsed">Feedbacks</span>
              </h3>
            </router-link>
          </template>
        </v-tooltip>
        <v-tooltip text="Analytics" location="right" :disabled="!isCollapsed">
          <template v-slot:activator="{ props }">
            <router-link class="link" to="/dashAnalytics" v-bind="props" exact-active-class="active-link">
              <h3>
                <v-icon
                  icon="mdi-poll"
                  :style="{ marginRight: isCollapsed ? '0' : '10px' }"
                  size="26"
                ></v-icon>
                <span v-if="!isCollapsed">Analytics</span>
              </h3>
            </router-link>
          </template>
        </v-tooltip>
      </div>
      <v-tooltip text="Logout" location="right" :disabled="!isCollapsed">
        <template v-slot:activator="{ props }">
          <div class="logout" v-bind="props">
            <h3>
              <v-icon
                icon="mdi-logout"
                :style="{ marginRight: isCollapsed ? '0' : '10px' }"
                size="26"
              ></v-icon>
              <span v-if="!isCollapsed">Logout</span>
            </h3>
          </div>
        </template>
      </v-tooltip>
    </div>
    <div class="content">
      <div class="header">
        <div class="nav">
          <div class="texts">
            <h3>{{ $route.name }}</h3>
            <!-- <h4>Books</h4>
            <h4>Feedbacks</h4> -->
          </div>
          <div class="search">
            <div class="group">
              <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
                <g>
                  <path
                    d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
                  ></path>
                </g>
              </svg>
              <input placeholder="Search Book" type="search" class="input" />
            </div>
          </div>
        </div>
        <div class="nav-right">
          <div class="icons">
            <!-- <v-badge location="top right" color="red" dot>
              <v-icon icon="mdi-bell-outline"></v-icon>
            </v-badge> -->

            <label class="switch">
              <input type="checkbox" />
              <span class="slider"> </span>
            </label>
            <v-badge location="top right" color="red" dot>
              <v-icon icon="mdi-email-outline" @click="toggleMessages"></v-icon>
            </v-badge>
          </div>
          <div class="profile" @click="toggleProfile">
            <h4>Library Name</h4>
            <v-avatar color="Black" size="40">
              <v-icon icon="mdi-account-circle"></v-icon>
            </v-avatar>
          </div>
        </div>
      </div>

      <div class="body">
        <router-view></router-view>
      </div>
    </div>
    <transition name="slide-right">
      <div v-if="showMessages" class="messages-panel">
        <div class="messages-header">
          <h3>Messages</h3>
          <v-icon
            icon="mdi-close"
            @click="toggleMessages"
            class="close-icon"
          ></v-icon>
        </div>
        <!-- Add message list here -->
        <p>No new messages.</p>
      </div>
    </transition>
    <transition name="slide-right">
      <div v-if="showProfile" class="profile-view">
        <div class="profile-header">
          <h3>Library Name</h3>
          <v-icon
            icon="mdi-close"
            @click="toggleProfile"
            class="close-icon"
          ></v-icon>
        </div>
        <div class="profile-content">
          <p>Profile details go here.</p>
        </div>
        <!-- Profile view content here -->
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMessages: false,
      showProfile: false,
      isCollapsed: false,
    };
  },
  methods: {
    toggleMessages() {
      this.showMessages = !this.showMessages;
    },
    toggleProfile() {
      this.showProfile = !this.showProfile;
    },
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
};
</script>

<style  scoped>
.container {
  background-color: rgb(0, 0, 0);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
}
.dashboard {
  background-color: rgb(56, 56, 56);
  height: 100%;
  width: 17%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  transition: width 0.3s ease;
}
.dashboard.collapsed {
  width: 100px;
}
.dash-content {
  color: white;
  padding: 20px;
  height: 380px;
  width: 190px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.link {
  text-decoration: none;
  color: white;
}
/* ACTIVE ROUTE */
.active-link h3 {
  background-color: rgb(239, 239, 239);
  color: rgb(56, 56, 56);
}
/* active + hover */
.active-link h3:hover {
  background-color: rgba(255, 255, 255, 0.24);
}

.dashboard.collapsed .active-link h3 {
  background-color: #383838;
  color: rgb(251, 252, 193);
}

.dashboard.collapsed .active-link h3:hover {
  background-color: #4a4a4a;
}

.dash-content h3 {
  cursor: pointer;
  padding: 8px;
  border-radius: 10px;
  display: flex;
  align-items: center;
}

.dash-content h3:hover {
  /* background-color: rgb(239, 239, 239); */
  color: rgb(199, 254, 163);
}
.dashboard.collapsed .dash-content h3 {
  justify-content: center;
}
.dashboard.collapsed .dash-content h3:hover {
  background-color: #383838;
  color: rgb(251, 252, 193);
}
.dash-header {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.dash-header h3 {
  cursor: pointer;
  padding: 8px;
  border-radius: 10px;
}
.logout {
  color: #ff0000;
  padding: 20px;
  /* background-color: #ff0000; */
  /* border: 1px solid white; */
  border-radius: 10px;
  cursor: pointer;
  height: 40px;
  width: 170px;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.dashboard.collapsed .logout {
  width: 50px;
}
.content {
  background-color: rgb(239, 239, 239);
  height: 100%;
  flex: 1;
  min-height: 100vh;
}
.header {
  /* background-color: rgb(255, 255, 255); */
  height: 11%;
  width: 100%;
  display: flex;
}
.nav {
  /* background-color: rgb(200, 200, 200); */
  height: 100%;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}
.texts {
  /* background-color: rgb(150, 150, 150); */
  height: 60%;
  width: 40%;
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
  padding-left: 15px;
}

/* From Uiverse.io by alexruix */
.group {
  display: flex;
  line-height: 28px;
  align-items: center;
  position: relative;
  max-width: 350px;
}

.input {
  width: 100%;
  height: 40px;
  line-height: 28px;
  padding: 0 1rem;
  padding-left: 3.5rem;
  border: 2px solid transparent;
  border-radius: 30px;
  outline: none;
  background-color: #ffffff;
  color: #0d0c22;
  transition: 0.3s ease;
}

.input::placeholder {
  color: #9e9ea7;
}

.input:focus,
input:hover {
  outline: none;
  border-color: rgba(0, 0, 0, 0.4);
  background-color: #fff;
  box-shadow: 0 0 0 4px rgba(49, 49, 49, 0.1);
}

.icon {
  position: absolute;
  left: 1rem;
  fill: #9e9ea7;
  width: 1rem;
  height: 1rem;
}
.nav-right {
  /* background-color: rgb(180, 180, 180); */
  height: 100%;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}
.icons {
  /* background-color: rgb(150, 150, 150); */
  height: 60%;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.profile {
  /* background-color: rgb(150, 150, 150); */
  height: 60%;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
}
.body {
  display: flex;
  height: 691px;
  width: 100%;
}

/* Switch container */
.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 1.6em;
}

/* Hide default checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* Slider background */
.slider {
  --background: #ffffff;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--background);
  transition: 0.5s;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6px;
  overflow: hidden;
}

/* Icons inside slider */
.slider .icon {
  position: absolute;
  font-size: 14px;
  opacity: 0.6;
  transition: 0.4s;
}

.slider .moon {
  left: 8px;
}

.slider .sun {
  right: 8px;
  opacity: 0; /* hidden in dark mode */
}

/* Circle knob */
.slider:before {
  content: "";
  position: absolute;
  height: 1.2em;
  width: 1.2em;
  border-radius: 50%;
  left: 4px;
  bottom: 0.2em;
  box-shadow: inset 8px -4px 0px 0px rgb(56, 56, 56);
  background: var(--background);
  transition: 0.5s;
}

/* When ON (checked) */
input:checked + .slider {
  background-color: rgb(56, 56, 56);
}

/* Move knob to the right */
input:checked + .slider:before {
  transform: translateX(1.8em);
  box-shadow: inset 15px -4px 0px 15px #ffffff;
}

/* Icon states toggle */
input:checked + .slider .moon {
  opacity: 0;
}

input:checked + .slider .sun {
  opacity: 0.9;
}
.messages-panel {
  position: absolute;
  right: 0;
  top: 0;
  width: 400px;
  height: 100vh;
  background-color: rgb(239, 239, 239);
  z-index: 10;
  padding: 20px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
}
.messages-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.profile-view {
  position: absolute;
  right: 0;
  top: 0;
  width: 500px;
  height: 100vh;
  background-color: rgb(239, 239, 239);
  z-index: 10;
  padding: 30px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
}
.profile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
}
.close-icon {
  cursor: pointer;
}
.collapse-btn {
  cursor: pointer;
}
.profile-content {
  font-size: 16px;
  color: #333;
}
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease;
}
.slide-right-enter-from {
  transform: translateX(100%);
}
.slide-right-leave-to {
  transform: translateX(100%);
}

/* -------------------------------------------------- */

</style>