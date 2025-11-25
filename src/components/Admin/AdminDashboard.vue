<template>
  <div class="container">
    <!-- header section -->
    <div class="header">
      <div class="logo">
        <h1>Admin</h1>
      </div>

      <div class="title">
        <div class="page-inner">
      <h1 class="page-header">Dashboard</h1>
      
    </div>
      </div>

      <div class="profile">
        <!-- Dark Mode Switch Button --> 
<label class="switch">
  <input type="checkbox" />
  <span class="slider"></span>
</label>


        <v-icon>mdi-bell-outline</v-icon>
        <v-icon>mdi-account-circle-outline</v-icon>
        
      </div>
    </div>
    
    <DashCards />
    <DashNav/>
    <Overview/>
    <DeliveryPartners/><Libraries/><Rentals/><Revenue/><Users/>
  </div>
</template>

<script>
import DashCards from "./DashCards.vue";
import DashNav from "./DashNav.vue";
import Overview from "./OverView.vue";
import DeliveryPartners from "./DeliveryPartners.vue";
import Libraries from "./ViewLibraries.vue";
import Rentals from "./ViewRentals.vue";
import Users from "./ViewUsers.vue";
import Revenue from "./ViewRevenue.vue";
export default {
  components: { DashCards, DashNav,Overview,DeliveryPartners,Libraries,Rentals,Revenue,Users }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  color: #4e4e4e;
 

}
.container {
  background-color: rgba(243, 239, 239, 0.99);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.container .header {
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  border: 1px solid rgb(66, 66, 66);
  padding-left: 5%;
}

.container .header .logo {
  width: 10%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #a6a6a6;

}
.container .header .title {
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: row;
  font-weight: bolder;
  align-items: center;
}
.container .header .profile {
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-right: 5%;
}

.container .page-inner {
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: column;
  padding-left: 5%;
  margin-top: 5px;
  justify-content: center;
}
.container .page-inner p {
  /* color: #ffffff; */
}





/* DarKmode Switcher */ 
/* switch settings */
/* The switch - the box around the slider */
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

</style>
