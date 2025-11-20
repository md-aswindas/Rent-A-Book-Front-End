<template>
  <div class="container-box">
    <div class="card">
      <div class="card-content">
        <p class="card-title">Total Users</p>
        <p class="sub-title">1500</p>
      </div>
      <div class="card-icon">
        <v-icon size="40px">mdi-account-outline</v-icon>
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
</template>

<script>
export default {};
</script>

<style scoped>
.container-box {
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
  padding-left: 5%;
  padding-right: 5%;
  align-items: center;
  justify-content: space-between;
  color: #666666;

}
.card {
  width: 260px;
  height: 65%;
  border-radius: 10px;
  display: flex;
  background: rgb(13, 13, 13);
  border: 1px solid rgba(252, 252, 252, 0.08);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-radius: 12px;
  padding: 20px;
  color: #949494;
  /* box-shadow: 0 6px 10px rgba(0, 0, 0, 0.449); */
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.615);

  transition: transform 0.3s ease;
  margin-right: 5px;
}

.card:hover{
    background: rgba(255, 255, 255, 0.507);
      color: #000000;


}

.card-content {
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
justify-content: center;
padding: 5px;}
.card-icon {
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.v-icon{
  background-color: rgb(44, 44, 44);
  border-radius: 5px;
  color: black;
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
