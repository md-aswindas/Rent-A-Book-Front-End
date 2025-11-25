<template>
  <div class="dash-container">
    <div class="card-container">
      <div class="card">
        <div class="card-content">
          <p class="card-title">Total Users</p>
          <p class="sub-title">1500</p>
        </div>
        <div class="card-icon">
          <v-icon size="40px">mdi-account-group</v-icon>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <p class="card-title">Active Rentals</p>
          <p class="sub-title">6564</p>
        </div>
        <div class="card-icon">
          <v-icon size="40px">mdi-book-open-variant</v-icon>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <p class="card-title">Libraries</p>
          <p class="sub-title">354</p>
        </div>
        <div class="card-icon">
          <v-icon size="40px">mdi-library-shelves</v-icon>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <p class="card-title">Revenue</p>
          <p class="sub-title">356</p>
        </div>
        <div class="card-icon">
          <v-icon size="40px">mdi-currency-inr</v-icon>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <p class="card-title">Delivery Partners</p>
          <p class="sub-title">3665</p>
        </div>
        <div class="card-icon">
          <v-icon size="40px">mdi-moped-outline</v-icon>
        </div>
      </div>
    </div>
    <Overview />
  </div>
</template>

<script>
import Overview from "./OverviewCards.vue";

export default {
  components: {
    Overview,
  },
};
</script>
<style scoped>
.dash-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.card-container {
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.card {
  width: 280px;
  height: 150px;
  border-radius: 10px;
  display: flex;
  background: linear-gradient(110deg, rgb(42, 41, 41), #141413);
  background: linear-gradient(145deg, #2b2a2a, #2c2c29, #1b1d19);

  backdrop-filter: blur(20px);

  border-radius: 30px;
  -webkit-backdrop-filter: blur(6px);
  border-radius: 20px;
  padding: 20px;
  color: #b9a892;
  transition: transform 0.3s ease;
  margin-right: 5px;
  /* box-shadow: 0 10px 20px rgb(0, 0, 0); */
  box-shadow: 0 10px 10px rgb(0, 0, 0);
}

.card:hover {
  background: linear-gradient(145deg, #dfdfdf, #6e6e69, #73776f);
  color: #000000;
}

.card-content {
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  justify-content: center;
  padding: 5px;
}
.card-icon {
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.v-icon {
  /* background-color: rgb(124, 124, 124); */
  border-radius: 5px;
  color: rgb(255, 255, 255);
}
.card-title {
  font-size: larger;
  font-weight: 600;
}

.sub-title {
  font-size: 40px;
  font-weight: 800;
}
</style>
