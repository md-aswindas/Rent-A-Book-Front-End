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
      <h2 class="main-text">Register Your Library</h2>
      <p class="sub-text">Join our network of partner libraries and expand your reach</p>
      
      <!-- Progress Steps -->
      <div class="progress-steps">
        <div class="step" :class="{ 'active': currentStep >= 1 }">
          <div class="step-circle">
            {{ currentStep > 1 ? '✓' : '1' }}
          </div>
          <div class="step-label">Library Info</div>
          <div class="step-desc">Basic library information</div>
        </div>
        
        <div class="step" :class="{ 'active': currentStep >= 2 }">
          <div class="step-circle">
            {{ currentStep > 2 ? '✓' : '2' }}
          </div>
          <div class="step-label">Details</div>
          <div class="step-desc">Operating details</div>
        </div>
        
        <div class="step" :class="{ 'active': currentStep >= 3 }">
          <div class="step-circle">3</div>
          <div class="step-label">Account Setup</div>
          <div class="step-desc">Create your account</div>
        </div>
      </div>

      <!-- Step 1: Basic Information -->
      <div v-if="currentStep === 1" class="form-step">
        <input
          type="text"
          v-model="formData.library_reg_no"
          class="text-field"
          placeholder="Library Registration Number *"
        />
        <input
          type="text"
          v-model="formData.name"
          class="text-field"
          placeholder="Library Name *"
        />
        <input
          type="text"
          v-model="formData.est_year"
          class="text-field"
          placeholder="Established Year *"
        />
        <input
          type="email"
          v-model="formData.email"
          class="text-field"
          placeholder="Email Address *"
        />
      </div>

      <!-- Step 2: Operating Details -->
      <div v-if="currentStep === 2" class="form-step">
        <input
          type="text"
          v-model="formData.operating_hours"
          class="text-field"
          placeholder="Operating Hours (e.g., Mon-Fri: 9AM-8PM)"
        />
        <input
          type="text"
          v-model="formData.registration_fee"
          class="text-field"
          placeholder="Registration Fee *"
        />
        <input
          type="text"
          v-model="formData.monthly_fee"
          class="text-field"
          placeholder="Monthly Fee *"
        />
        <textarea
          v-model="formData.library_description"
          class="text-field textarea-field"
          placeholder="Library Description"
          rows="3"
        ></textarea>
        <textarea
          v-model="formData.address"
          class="text-field textarea-field"
          placeholder="Complete Address *"
          rows="3"
        ></textarea>
      </div>

      <!-- Step 3: Account Setup -->
      <div v-if="currentStep === 3" class="form-step">
        <input
          type="tel"
          v-model="formData.phone_number"
          class="text-field"
          placeholder="Phone Number *"
        />
        <input
          type="tel"
          v-model="formData.alt_phone_number"
          class="text-field"
          placeholder="Alternate Phone Number"
        />
        
        <div class="password-container">
          <input
            :type="showPassword ? 'text' : 'password'"
            v-model="formData.password"
            class="text-field password-field"
            placeholder="Password *"
          />
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

        <div class="password-container">
          <input
            :type="showConfirmPassword ? 'text' : 'password'"
            v-model="formData.confirm_password"
            class="text-field password-field"
            placeholder="Confirm Password *"
          />
          <button
            type="button"
            class="eye-icon"
            @click="toggleConfirmPassword"
          >
            <svg v-if="!showConfirmPassword" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
              <line x1="1" y1="1" x2="23" y2="23"></line>
            </svg>
          </button>
        </div>
      </div>

      <!-- Navigation Buttons -->
      <div class="button-group">
        <button v-if="currentStep > 1" @click="prevStep" class="nav-btn btn-secondary">
          ◁◀◁ &nbsp; Previous
        </button>
        <button v-if="currentStep < 3" @click="nextStep" class="nav-btn btn-primary">
          Next  &nbsp; ▶▷▶
        </button>
        <button v-if="currentStep === 3" @click="handleSubmit" class="nav-btn btn-primary confirm-btn">
          Confirm Registration
        </button>
      </div>

      <p class="signup">
        Already have an account? 
        <router-link to="/LibraryLogin" class="login-link">
          <span class="login-link">Sign In</span>
        </router-link>
      </p>
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
export default {
  name: 'LibraryRegistration',
  data() {
    return {
      currentStep: 1,
      showPassword: false,
      showConfirmPassword: false,
      isDarkMode: false,
      formData: {
        library_reg_no: '',
        name: '',
        est_year: '',
        email: '',
        operating_hours: '',
        registration_fee: '',
        monthly_fee: '',
        library_description: '',
        address: '',
        phone_number: '',
        alt_phone_number: '',
        password: '',
        confirm_password: ''
      }
    }
  },
  methods: {
    nextStep() {
      if (this.currentStep < 3) {
        this.currentStep++;
      }
    },
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    toggleConfirmPassword() {
      this.showConfirmPassword = !this.showConfirmPassword;
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
    handleSubmit() {
      console.log('Form submitted:', this.formData);
      // Add your API call here
      alert('Registration Successful!');
      // this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(239, 239, 239);
  position: relative;
  transition: background-color 0.3s ease;
  padding: 40px 20px;
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

.container.dark-mode .btn-primary {
  background-color: #e0e0e0;
  color: #1a1a1a;
}

/* .container.dark-mode .confirm-btn {
  background-color: #f72c2c;
  color: #ffffff;
} */

.container.dark-mode .btn-primary:hover {
  background-color: #ccc;
}

.container.dark-mode .btn-secondary {
  background-color: #3d3d3d;
  border-color: #555;
  color: #e0e0e0;
}

.container.dark-mode .btn-secondary:hover {
  background-color: #4d4d4d;
}

.container.dark-mode .step-circle {
  background-color: #3d3d3d;
  border-color: #555;
  color: #888;
}

.container.dark-mode .step.active .step-circle {
  background-color: #e0e0e0;
  color: #1a1a1a;
  border-color: #e0e0e0;
}

.container.dark-mode .step-label,
.container.dark-mode .step-desc {
  color: #888;
}

.container.dark-mode .step.active .step-label {
  color: #e0e0e0;
}

.container.dark-mode .footer-link,
.container.dark-mode .signup {
  color: #999;
}

.container.dark-mode .login-link {
  color: #ffffff;
}

.container.dark-mode .login-link:hover {
  color: #6bb0ff;
}

.container.dark-mode .eye-icon {
  color: #999;
}

.container.dark-mode .eye-icon:hover {
  color: #e0e0e0;
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
  background-image: url("D:\Vue.js\elarte\src\assets\elarte black.png");
  background-position: center;
  background-size: contain;
  width: 200px;
  height: 50px;
  transition: color 0.3s ease, background-image 0.3s ease;
}

.container.dark-mode .site-name {
  color: #e0e0e0;
  background-image: url("D:\Vue.js\elarte\src\assets\elarte white.png");
}

.main-text {
  width: 100%;
  margin-bottom: 5px;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
}

.sub-text {
  width: 100%;
  margin-bottom: 30px;
  color: rgb(113, 113, 113);
  text-align: center;
}

.form-section {
  max-width: 650px;
  width: 100%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.progress-steps {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;
  gap: 10px;
}

.step {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.step-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  border: 2px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 8px;
  transition: all 0.3s ease;
  color: #999;
}

.step.active .step-circle {
  background-color: black;
  border-color: black;
  color: white;
}

.step-label {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
  color: #999;
  transition: color 0.3s ease;
}

.step.active .step-label {
  color: #333;
}

.step-desc {
  font-size: 11px;
  color: #999;
}

.form-step {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
}

.text-field {
  border: 1px solid rgb(186, 186, 186);
  height: 45px;
  width: 100%;
  padding: 0 20px;
  border-radius: 10px;
  outline: none;
  transition: border-color 0.3s ease, background-color 0.3s ease, color 0.3s ease;
  font-size: 14px;
}

.textarea-field {
  height: auto;
  padding: 15px 20px;
  resize: vertical;
  font-family: inherit;
}

.text-field:focus {
  border-color: #333;
}

.text-field::placeholder {
  color: rgb(186, 186, 186);
  transition: color 0.3s ease;
}

.password-container {
  position: relative;
  width: 100%;
}

.password-field {
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

.button-group {
  display: flex;
  gap: 15px;
  width: 100%;
  margin-bottom: 20px;
}

.nav-btn {
  flex: 1;
  height: 45px;
  border-radius: 10px;
  border: none;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;
}

.btn-primary {
  background-color: black;
  color: white;
}

.btn-primary:hover {
  background-color: #333;
}

.btn-secondary {
  background-color: white;
  color: #333;
  border: 1px solid #ddd;
}

.btn-secondary:hover {
  background-color: #f5f5f5;
}

.signup {
  color: rgb(113, 113, 113);
  text-align: center;
  font-size: 14px;
  margin-top: 15px;
  margin-bottom: 0px;
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

.footer-links {
  position: absolute;
  bottom: 10px;
  display: flex;
  gap: 30px;
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

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 20px 15px;
  }

  .form-section {
    padding: 30px 20px;
    width: 95%;
    max-width: 500px;
  }

  .progress-steps {
    gap: 5px;
    margin-bottom: 30px;
  }

  .step-circle {
    width: 32px;
    height: 32px;
    font-size: 13px;
  }

  .step-label {
    font-size: 11px;
  }

  .step-desc {
    display: none;
  }

  .main-text {
    font-size: 22px;
  }

  .sub-text {
    font-size: 13px;
    margin-bottom: 25px;
  }

  .text-field {
    height: 42px;
    font-size: 14px;
  }

  .button-group {
    flex-direction: column;
    gap: 12px;
  }

  .nav-btn {
    height: 42px;
  }

  .site-header {
    left: 15px;
    top: 15px;
  }

  .site-name {
    width: 150px;
    height: 40px;
    font-size: 24px;
  }

  .theme-toggle {
    right: 15px;
    top: 15px;
  }

  .toggle-track {
    width: 50px;
    height: 26px;
  }

  .toggle-thumb {
    width: 22px;
    height: 22px;
  }

  .toggle-thumb.active {
    transform: translateX(24px);
  }

  .footer-links {
    bottom: 15px;
    padding: 0 15px;
    flex-wrap: wrap;
    gap: 15px;
  }

  .footer-link {
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .form-section {
    padding: 25px 15px;
    width: 100%;
    border-radius: 10px;
  }

  .progress-steps {
    gap: 2px;
  }

  .step-circle {
    width: 28px;
    height: 28px;
    font-size: 12px;
  }

  .step-label {
    font-size: 10px;
  }

  .main-text {
    font-size: 20px;
  }

  .sub-text {
    font-size: 12px;
  }

  .text-field {
    height: 40px;
    font-size: 13px;
    padding: 0 15px;
  }

  .password-field {
    padding-right: 45px;
  }

  .eye-icon {
    right: 12px;
  }

  .nav-btn {
    height: 40px;
    font-size: 13px;
  }

  .signup {
    font-size: 13px;
  }

  .footer-links {
    gap: 12px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .form-section {
    width: 80%;
    max-width: 600px;
  }
}
</style>