<template>
  <div class="nav-container">
  <div class="nav">
    <div class="nav-contents">
      <div class="nav-icon">
        <v-icon size="30px">mdi-view-dashboard-outline </v-icon>
        </div>
        <div class="nav-title">
          <p class="title">Overview</p>
        </div>
      
    </div>
    <div class="nav-contents">
      <div class="nav-icon">
        <v-icon size="30px">mdi-account-group</v-icon>
      </div>
      <div class="nav-title">
        <p class="title">Users</p>
      </div>
    </div>
    <div class="nav-contents">
      <div class="nav-icon">
        <v-icon size="30px">mdi-library-shelves</v-icon>
      </div>
      <div class="nav-title">
        <p class="title">Libraries</p>
      </div>
    </div>
    <div class="nav-contents">
      <div class="nav-icon">
        <v-icon size="30px">mdi-moped-outline</v-icon>
      </div>
      <div class="nav-title">
        <p class="title">Delivery Partners</p>
      </div>
    </div>
    <div class="nav-contents">
      <div class="nav-icon">
        <v-icon size="30px">mdi-currency-inr</v-icon>
      </div>
      <div class="nav-title">
        <p class="title">Revenue</p>
      </div>
    </div>
    <div class="nav-contents">
      <div class="nav-icon">
        <v-icon size="30px">mdi-book-open-variant</v-icon>
      </div>
      <div class="nav-title">
        <p class="title">Rentals</p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-container{
  width: auto;
  height: 10%;
  padding-left: 5%;
  padding-right: 5%;

}
.nav{
  width: 100%;
  height: 100%;
  display: flex;
align-items: center;
  justify-content: center;
  flex-direction: row;
  
  border: 1px solid rgba(252, 252, 252, 0.08);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  /* padding: 20px;
  color: #949494; */
  transition: transform 0.3s ease;
    border-radius: 10px;
box-shadow: 0 0 30px rgba(0, 0, 0, 0.25);
  
}

.nav-contents {
  width: 15%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid transparent;
  
}
.nav-contents:hover {
  border-bottom-color: black;
}


</style>
