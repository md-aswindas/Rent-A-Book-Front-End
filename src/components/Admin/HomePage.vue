<template>
  <div class="container">
    <div class="box">
      <div class="nav-container">
        <div class="logo"></div>
        <div class="nav">
          <div class="nav-contents">
            <router-link class="nav-link" to="/dashboard">
              <v-icon size="25px">mdi-view-dashboard-outline </v-icon>Dashboard
            </router-link>
          </div>
          <div class="nav-contents">
            <router-link class="nav-link" to="/users"
              ><v-icon size="25px">mdi-account-group</v-icon>Users</router-link
            >
          </div>
          <div class="nav-contents">
            <router-link class="nav-link" to="/libraries"
              ><v-icon size="25px">mdi-library-shelves</v-icon
              >Libraries</router-link
            >
          </div>
          <div class="nav-contents">
            <router-link class="nav-link" to="/deliveryPartner"
              ><v-icon size="25px">mdi-moped-outline</v-icon>Delivery
              Partners</router-link
            >
          </div>
          <div class="nav-contents">
            <router-link class="nav-link" to="/revenue"
              ><v-icon size="25px">mdi-currency-inr</v-icon>Revenue</router-link
            >
          </div>
          <div class="nav-contents">
            <router-link class="nav-link" to="/rentals"
              ><v-icon size="25px">mdi-book-open-variant</v-icon
              >Rentals</router-link
            >
          </div>
        </div>
        <div class="profile-management">
          <label class="switch">
            <input type="checkbox" />
            <span class="slider"></span>
          </label>

          <v-icon size="40px">mdi-bell-outline</v-icon>
          <v-icon size="40px">mdi-account-circle-outline</v-icon>
        </div>
      </div>
      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  width: 100%;
  height: 100%;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.box {
  width: 100%;
  height: 100%;
  display: flex;
  background: linear-gradient(145deg, #403b35, #20201f, #1b1d19);
  
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(6px);
  border-top-color: rgb(205, 205, 205);
  padding: 20px;
  flex-direction: column;
}

.nav-container {
  width: 100%;
  height: 10%;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}
.nav {
  width: 76%;
  height: 100%;
  display: flex;
  flex-direction: row;
  padding-left: 20px;
  background: rgba(0, 0, 0, 0.829);
  border-radius: 30px;
  -webkit-backdrop-filter: blur(6px);
  transition: transform 0.3s ease;
  border-radius: 40px;
  box-shadow: 0 10px 10px rgb(0, 0, 0);
}
.logo {
  width: 12%;
  height: 100%;
   display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgb(0, 0, 0);
  border-radius: 30px;
  box-shadow: 0 10px 10px rgb(0, 0, 0);
  color: #cccccc;
}

.nav-contents {
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  color: rgb(255, 255, 255);
}
.nav-contents:hover {
  background-color: rgb(40, 40, 40);
  border-radius: 30px;
  color: rgb(255, 255, 255);
}
/*  */

.nav-contents:active {
  background-color: rgba(35, 35, 35, 0.611);
  border: 1px solid rgba(252, 252, 252, 0.08);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

.profile-management {
  width: 12%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgb(0, 0, 0);
  border-radius: 30px;
  box-shadow: 0 10px 10px rgb(0, 0, 0);
  color: #cccccc;
}

.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #252525;
  transition: 0.4s;
  border-radius: 30px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  border-radius: 20px;
  left: 0.3em;
  bottom: 0.3em;
  background-color: black;
  box-shadow: inset 8px -4px 0 0 rgb(147, 147, 147);
  transition: 0.4s;
}

.switch input:checked + .slider {
  background-color: #0b0b0b;
}

.switch input:checked + .slider:before {
  transform: translateX(1.5em);
  background-color: rgb(237, 237, 237);
  box-shadow: none;
}

.nav-link {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  text-decoration: none;
  color: #d3d3d3;
  font-size: 15px;
  border-radius: 30px;
  transition: 0.3s ease;
}

/* Hover Style */
.nav-link:hover {
  /* background: rgba(155, 155, 155, 0.15); */
}

/* Active Route Style */
.router-link-active {
  background: #adfd00;
  color: #000000;
  font-weight: 600;
}
</style>
