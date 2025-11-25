<template>
  <div class="activity-heading">
    <p class="subheading">Recent Activity</p>
    <p class="subheading">Quick Actions</p>
  </div>
  <div class="activity-container">
    <div class="request-container">
      <div class="request-card"></div>
      <div class="request-card"></div>
      <div class="request-card"></div>
    </div>
    <div class="quick-actions">
      <div class="quick-actions-heading"></div>
      <div class="quick-actions-cards">
        <div class="quick-actions-card">
          <v-icon size="50px">mdi-account-plus</v-icon>
          <p>Add User</p>
          <!-- <p>Platform Configuration</p> -->
        </div>
        <div class="quick-actions-card">
          <v-icon size="50px">mdi-office-building</v-icon>
          <p>Add Library</p>
          <!-- <p>Platform Configuration</p> -->
        </div>
        <div class="quick-actions-card">
          <v-icon size="50px">mdi-cog-outline</v-icon>
          <p>Settings</p>
          <!-- <p>Platform Configuration</p> -->
        </div>
        <div class="quick-actions-card">
          <v-icon size="50px">mdi-credit-card-outline</v-icon>
          <p>Payments</p>
          <!-- <p>Platform Configuration</p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.activity-heading {
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-around;
  padding-top: 15px;
}
.activity-container {
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
}
.request-container {
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* overflow-y: hidden;
  scroll-behavior: smooth; */
}
.quick-actions {
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.quick-actions-cards {
  display: flex;
  flex-wrap: wrap;
  padding-left: 10px;
}
.quick-actions-card {
  width: 340px;
  height: 140px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  background: linear-gradient(145deg, #403b35, #20201f, #1b1d19);
  background: linear-gradient(145deg, #6c6c6c79, #666663, #5f625db1);
  -webkit-backdrop-filter: blur(6px);
  color: #161616;
  box-shadow: 0 10px 10px rgb(17, 17, 17);
  transition: transform 0.3s ease;
  margin-right: 20px;
  margin-bottom: 10px;
  /* flex-direction: column; */
  /* justify-content: center; */
  padding-left: 30px;
}
.quick-actions-card p {
  font-size: large;
  font-weight: bold;
}
.v-icon{
  color: #242424;

}
.request-card {
  width: 90%;
  height: 80px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  background: linear-gradient(145deg, #2b2a2a, #2c2c29, #1b1d19);
  border-radius: 30px;
  -webkit-backdrop-filter: blur(6px);
  border-radius: 12px;
  padding: 20px;
  color: #181818;
  box-shadow: 0 10px 10px rgb(17, 17, 17);
}
.request-card:hover {
  background: linear-gradient(145deg, #dfdfdf, #6e6e69, #73776f);
  color: #000000;
}

.quick-actions-card:active {
  border: 1px solid rgba(252, 252, 252, 0.5);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  color: #fdfdfd;
    background: rgba(0, 0, 0, 0.481);

}
.subheading {
  font-size: larger;
  font-weight: bold;
  text-align: center;
  color: rgb(161, 161, 161);
}
</style>
