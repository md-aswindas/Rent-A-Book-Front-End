<template>
  <div class="container" :class="{ 'dark-mode': isDarkMode }">
    <div class="site-header">
      <h1 class="site-name"></h1>
    </div>
    
    <!-- Dark Mode Toggle -->
    <div class="theme-toggle">
      <button @click="toggleDarkMode" class="toggle-btn">
        <div class="toggle-track">
          <div class="toggle-thumb" :class="{ 'active': isDarkMode }">
            <svg v-if="!isDarkMode" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="5"></circle>
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
            </svg>
            <svg v-else width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </div>
        </div>
      </button>
    </div>
    
    <div class="form-section">
      <h2 class="main-text">Welcome back </h2>
      <p class="sub-text">Welcome back!   Please enter your details.</p>
      <input type="text" name="" class="text-field" placeholder="email@gmail.com" v-model="email" >
      
      <div class="password-container">
        <input 
          :type="showPassword ? 'text' : 'password'" 
          name="" 
          class="text-field password-field" 
          placeholder="Password"
          v-model="password"
        >
        <button 
          type="button" 
          class="eye-icon" 
          @click="togglePassword"
        >
          <svg v-if="!showPassword" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
            <line x1="1" y1="1" x2="23" y2="23"></line>
          </svg>
        </button>
      </div>
      
      <button class="text-field btn" @click="login">Login</button>
      <div class="divider">
        <div class="line"></div>
        <h5 class="grey-text">OR</h5>
        <div class="line"></div>
      </div>
      <button class="text-field btn btn-inverse">
        <svg class="google-icon" width="18" height="18" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        Sign in with Google
      </button>
      <p class="signup">Don't have an account ?<router-link to="/LibraryRegistration" class="login-link"><span class="login-link"> Sign up</span></router-link></p>
    </div>
    
    <div class="footer-links">
      <a href="#" class="footer-link">About Us</a>
      <a href="#" class="footer-link">Contact</a>
      <a href="#" class="footer-link">Privacy Policy</a>
      <a href="#" class="footer-link">Terms of Service</a>
    </div>
  </div>
</template>

<script>
  import { mapActions } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
      isDarkMode: false
    }
  },
  methods: {
    ...mapActions("Library", ["libraryLogin"]),
    async login() {
      try {
        const success= await this.libraryLogin({ email: this.email, password: this.password });
        if(success){
          this.$router.push('/libraryDashboard/DashHome');
        }else{
          alert("Invalid credentials. Please try again.");
        }
        
      } catch (error) {
        console.error("Login failed:", error);
        alert("Login failed. Please check your credentials and try again.");
      }
    },

    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    }
  }
}
</script>

<style scoped>
.container{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(239, 239, 239);
  position: relative;
  transition: background-color 0.3s ease;
}

/* Dark Mode Styles */
.container.dark-mode {
  background-color: #1a1a1a;
}

.container.dark-mode .form-section {
  background-color: #2d2d2d;
  color: #e0e0e0;
}



.container.dark-mode .text-field {
  background-color: #3d3d3d;
  border-color: #555;
  color: #e0e0e0;
}

.container.dark-mode .text-field:focus {
  border-color: #6d6d6d;
}

.container.dark-mode .text-field::placeholder {
  color: #888;
}

.container.dark-mode .btn {
  background-color: #e0e0e0;
  color: #1a1a1a;
}

.container.dark-mode .btn:hover {
  background-color: #ccc;
}

.container.dark-mode .btn-inverse {
  background-color: #2d2d2d;
  border-color: #555;
  color: #e0e0e0;
}

.container.dark-mode .btn-inverse:hover {
  background-color: #3d3d3d;
}

.container.dark-mode .grey-text {
  color: #999;
}

.container.dark-mode .line {
  background-color: #555;
}

.container.dark-mode .footer-link {
  color: #999;
}

.container.dark-mode .footer-link:hover {
  color: #e0e0e0;
}

.container.dark-mode .signup {
  color: #999;
}

.container.dark-mode .eye-icon {
  color: #999;
}

.container.dark-mode .eye-icon:hover {
  color: #e0e0e0;
}

.container.dark-mode .login-link {
  color: #ffffff;
}

.container.dark-mode .login-link:hover {
  color: #6bb0ff;
}
/* Theme Toggle Styles */
.theme-toggle {
  position: absolute;
  top: 15px;
  right: 30px;
  z-index: 10;
}

.toggle-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.toggle-track {
  width: 60px;
  height: 30px;
  background-color: #ddd;
  border-radius: 15px;
  position: relative;
  transition: background-color 0.3s ease;
}

.dark-mode .toggle-track {
  background-color: #4a4a4a;
}

.toggle-thumb {
  width: 26px;
  height: 26px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  transition: transform 0.3s ease, background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.toggle-thumb.active {
  transform: translateX(30px);
  background-color: #333;
  color: #fff;
}

.site-header {
  position: absolute;
  top: 15px;
  left: 30px;
}

.site-name {
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin: 0;
  /* background-image: url("D:\Vue.js\elarte\src\assets\elarte black.png");
  background-position: center;
  background-size: contain; */
  width: 200px;
  height: 50px;
  transition: color 0.3s ease, background-image 0.3s ease;
}

.container.dark-mode .site-name {
  color: #e0e0e0;
  /* background-image: url("D:\Vue.js\elarte\src\assets\elarte white.png"); */
}

.main-text{
  width: 90%;
  margin-bottom: 5px;
  margin-top: 10px;
}
.sub-text{
  width: 90%;
  margin-bottom: 25px;
  color: rgb(113, 113, 113);
}

.form-section{
  height: fit-content;
  width: 30%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  padding: 20px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.text-field{
  border: 1px solid rgb(186, 186, 186);
  height: 45px;
  width: 90%;
  margin-bottom: 20px;
  padding-left: 20px;
  border-radius: 10px;
  outline: none;
  transition: border-color 0.3s ease, background-color 0.3s ease, color 0.3s ease;
}

.text-field:focus {
  border-color: #333;
}

.password-container {
  position: relative;
  width: 90%;
  margin-bottom: 20px;
}

.password-field {
  width: 100%;
  margin-bottom: 0;
  padding-right: 50px;
}

.eye-icon {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: rgb(113, 113, 113);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  transition: color 0.3s ease;
}

.eye-icon:hover {
  color: #333;
}

.btn{
  padding: 0;
  background-color: black;
  color: white;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #333;
}

.btn-inverse{
  border: 1px solid black;
  color: black;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
}

.google-icon {
  flex-shrink: 0;
}

.btn-inverse:hover {
  background-color: #f5f5f5;
}

.text-field::placeholder{
  color: rgb(186, 186, 186);
  transition: color 0.3s ease;
}

.grey-text{
  color:rgb(113, 113, 113);
  transition: color 0.3s ease;
}

.divider{
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 20px;
}

.line{
  height: 1px;
  width: 150px;
  background-color: rgb(219, 219, 219);
  transition: background-color 0.3s ease;
}

.footer-links {
  position: absolute;
  bottom: 30px;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
}

.footer-link {
  color: rgb(113, 113, 113);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #333;
  text-decoration: underline;
}

.signup{
  color:rgb(113, 113, 113);
  margin-top: 15px;
  margin-bottom: 20px;
  transition: color 0.3s ease;
}
.login-link {
  color: #000000;
  cursor: pointer;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}


.login-link:hover {
  color: #0056b3;
}

@media (max-width: 768px) {
  .form-section {
    width: 80%;
    height: auto;
  }
  
  .footer-links {
    gap: 20px;
    padding: 0 20px;
  }
  
  .site-header {
    top: 20px;
    left: 20px;
  }
  
  .site-name {
    font-size: 24px;
  }
  
  .theme-toggle {
    top: 20px;
    right: 20px;
  }
}
</style>