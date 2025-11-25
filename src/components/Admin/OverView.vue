<template>
  <div class="activity-container">
    <div class="request-container">
      <p>Recent Activity</p>
      <div class="request-card"></div>
      <div class="request-card"></div>
      <div class="request-card"></div>
      
    </div>
    <div class="quick-actions">
      <div class="quick-actions-heading">
        <p>Quick Actions</p>
      </div>
      <div class="quick-actions-cards">
        <div class="quick-actions-card">
          <v-icon size="50px">mdi-cog-outline</v-icon>
          <p>Add User</p>
          <p>Platform Configuration</p>
        </div>
        <div class="quick-actions-card">
          <v-icon size="50px">mdi-cog-outline</v-icon>
          <p>Add Library</p>
          <p>Platform Configuration</p>
        </div>
        <div class="quick-actions-card">
          <v-icon size="50px">mdi-cog-outline</v-icon>
          <p>Settings</p>
          <p>Platform Configuration</p>
        </div>
        <div class="quick-actions-card">
          <v-icon size="50px">mdi-cog-outline</v-icon>
          <p>Settings</p>
          <p>Platform Configuration</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.activity-container {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  padding-left: 5%;
  padding-right: 5%;
  margin-top: 50px;
}
.request-container {
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  scroll-behavior: smooth;
}
.quick-actions {
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
}
.quick-actions-cards {
  display: flex;
  flex-wrap: wrap;
}
.quick-actions-card {
  width: 320px;
  height: 120px;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  display: flex;
  background: rgb(166, 166, 166);
  border: 1px solid rgba(252, 252, 252, 0.08);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-radius: 12px;
  padding: 10px;
  color: #000000;
  /* box-shadow: 0 6px 10px rgba(0, 0, 0, 0.449); */
  /* box-shadow: 0 0 30px rgba(0, 0, 0, 0.615); */
  box-shadow: 0 0 30px rgba(126, 126, 126, 0.615);

  transition: transform 0.3s ease;
  margin-left: 20px;
  margin-bottom: 10px;
  flex-direction: column;
}
.quick-actions-card p {
  font-size: medium;
  font-weight: bold;
}
.request-card {
  width: 100%;
  height: 80px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
  background: rgb(139, 139, 139);
  border: 1px solid rgba(252, 252, 252, 0.08);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-radius: 12px;
  padding: 20px;
  color: #949494;
  box-shadow: 0 0 30px rgba(126, 126, 126, 0.615);
}
</style>
