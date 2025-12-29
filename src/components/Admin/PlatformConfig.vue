<template>
  <div class="body">
    <h1>Platform Configuration</h1>
    <div class="config-options">
      <div class="option-card">
        <h2>Genre Settings</h2>
        <p>Manage Genre settings.</p>
        <button id="configbtn">Configure</button>
      </div>
      <div class="option-card">
        <h2>Location Settings</h2>
        <p>Configure Location radius.</p>
                <button id="configbtn">Configure</button>

      </div>
      <div class="option-card">
        <h2>Max Book/User</h2>
        <p>Configure maximum books and users allowed per library.</p>
                <button id="configbtn">Configure</button>

      </div>    
      <div class="option-card">
        <h2>Fee Management</h2>
        <p>Manage fee settings and configurations.</p>
                <button id="configbtn">Configure</button>

      </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.body {
  padding: 20px;
  background-color: #121212;
  color: #e0e0e0;
  display: flex;
  flex-direction: column;
}
.config-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
.option-card {
  background: #1e1e1e;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.option-card h2 {
  margin-bottom: 10px;
  color: #76ff03;
}
.option-card p {
  font-size: 14px;
  line-height: 1.5;
  color: #b0b0b0;
}
#configbtn {
  margin-top: 15px;
  padding: 10px 15px;
  background-color: #76ff03;
  border: none;
  border-radius: 5px;
  color: #121212;
  cursor: pointer;
  font-weight: bold;
}

</style>