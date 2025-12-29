<template>
  <div class="dashboard-layout">
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-content">
          <p class="stat-title">Total Users</p>
          <p class="stat-value">1500</p>
        </div>
        <div class="stat-icon">
          <v-icon size="40px">mdi-account-group</v-icon>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-content">
          <p class="stat-title">Active Rentals</p>
          <p class="stat-value">6564</p>
        </div>
        <div class="stat-icon">
          <v-icon size="40px">mdi-book-open-variant</v-icon>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-content">
          <p class="stat-title">Libraries</p>
          <p class="stat-value">354</p>
        </div>
        <div class="stat-icon">
          <v-icon size="40px">mdi-library-shelves</v-icon>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-content">
          <p class="stat-title">Revenue</p>
          <p class="stat-value">356</p>
        </div>
        <div class="stat-icon">
          <v-icon size="40px">mdi-currency-inr</v-icon>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-content">
          <p class="stat-title">Delivery Partners</p>
          <p class="stat-value">3665</p>
        </div>
        <div class="stat-icon">
          <v-icon size="40px">mdi-moped-outline</v-icon>
        </div>
      </div>
    </div>
    <div class="dashboard-widgets">
      <!-- <div class="config-widget">
        <p class="stat-title">Platform Configuration</p>

        <v-icon size="50px" id="setting-icon">mdi-cog-outline</v-icon>

        <button id="settingsbtn">
          <router-link class="link" to="/platformconfig">Settings</router-link>
        </button>
      </div> -->

      <div class="chart-widget"></div>
      <div class="activity-widget">
        <div class="activity-header">
          <h2>Recent Activity</h2>
        </div>
        <div class="activity-list">
          <div class="activity-item">
            <v-icon size="35px">mdi-account-circle</v-icon>
            <p>name</p>
            <p>contact</p>
          </div>
          <div class="activity-item">
            <v-icon size="35px">mdi-account-circle</v-icon>
            <p>name</p>
            <p>contact</p>
          </div>
          <div class="activity-item">
            <v-icon size="35px">mdi-account-circle</v-icon>
            <p>name</p>
            <p>contact</p>
          </div>
          <div class="activity-item">
            <v-icon size="35px">mdi-account-circle</v-icon>
            <p>name</p>
            <p>contact</p>
          </div>
          <div class="activity-item">
            <v-icon size="35px">mdi-account-circle</v-icon>
            <p>name</p>
            <p>contact</p>
          </div>
          <div class="activity-item">
            <v-icon size="35px">mdi-account-circle</v-icon>
            <p>name</p>
            <p>contact</p>
          </div>
          <div class="activity-item">
            <v-icon size="35px">mdi-account-circle</v-icon>
            <p>name</p>
            <p>contact</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.dashboard-layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.stats-grid {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.stat-card {
  width: 280px;
  height: 150px;
  display: flex;
  background: #1e1e1e;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(6px);
  border-radius: 20px;
  padding: 20px;
  color: #a5a5a5;
  transition: transform 0.3s ease;
  margin-right: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.stat-card:hover {
  color: #848181;
  border: 1px solid #2222228a;
  transform: translateY(-6px) scale(1.02);
}

.stat-content {
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  justify-content: center;
  padding: 5px;
}
.stat-icon {
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.v-icon {
  border-radius: 5px;
  color: rgb(153, 255, 0);
}
.stat-title {
  font-size: larger;
  font-weight: 600;
}

.dashboard-widgets {
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}
.config-widget {
  width: 20%;
  height: 60%;
  border-radius: 20px;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(54, 54, 54);
  flex-direction: column;
  box-shadow: rgba(51, 51, 51, 0.16) 0px 1px 4px,
    rgb(95, 95, 95) 0px 0px 0px 3px;
  border: 1px solid#3b3b3b;
  justify-content: space-around;
  background: linear-gradient(145deg, #dcca00bd, #edae00bd, #c8ad00);
}
.settings {
  display: flex;
  width: 95%;
  height: 95%;
  align-items: center;
  color: rgb(2, 2, 2);
  flex-direction: column;
  border-radius: 2px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.747);
}
#settingsbtn {
  width: 80%;
  height: 40px;
  border: none;
  border-radius: 20px;
  background: linear-gradient(145deg, #131313bd, #262625bd, #141414);
  color: #dbdbdb;
  font-weight: 600;
  box-shadow: rgb(41, 41, 41) 0px 4px 10px -1px;
  cursor: pointer;
}
#setting-icon {
  color: #000000;
}
.chart-widget {
  width: 35%;
  height: 100%;
  background: rgba(66, 66, 66, 0.408);
  border-radius: 20px;
  margin-right: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  flex-direction: column;
  box-shadow: rgb(0, 0, 0) 0px 4px 10px -1px;
}
.activity-widget {
  width: 45%;
  height: 100%;
  background: rgba(66, 66, 66, 0.408);
  border-radius: 20px;
  margin-right: 2px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  justify-content: space-around;
  align-items: center;
  color: white;
  flex-direction: column;
  box-shadow: rgb(0, 0, 0) 0px 4px 10px -1px;
}

.activity-list {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
}

.activity-list::-webkit-scrollbar {
  display: none;
}
.activity-item {
  width: 90%;
  height: 70px;
  background-color: #1e1e1e;
  border-radius: 20px;
  margin-top: 15px;
  flex-shrink: 0;
  box-shadow: rgb(0, 0, 0) 0px 4px 10px -1px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: all 0.3s ease;

}
.activity-item:hover{
  transform: translateY(-6px) scale(1.02);
}

.request:hover {
  background: linear-gradient(#151515, #101010);
}

.config {
  margin-top: 2px;
  width: 100%;
  height: 25%;
  background: rgba(66, 66, 66, 0.408);
  border-radius: 2px;
  margin-right: 2px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  flex-direction: column;
  box-shadow: rgb(7, 7, 7) 0px 2px 0px 2px;
  border: 1px solid#3b3b3b;
}

.stat-value {
  font-size: 40px;
  font-weight: 800;
}

.activity-header {
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
}

.activity-container {
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
}

.activity {
  font-weight: bold;
  color: rgb(118, 118, 117);
  margin-right: 10px;
  width: 150px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid rgb(99, 99, 99);
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>
