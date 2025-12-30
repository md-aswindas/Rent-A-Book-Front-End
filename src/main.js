import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import store from './store'
import axios from 'axios'

loadFonts()

// ✅ JWT interceptor (GLOBAL)
axios.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("jwt");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

createApp(App)
  .use(vuetify)
  .use(router)
  .use(store)
  .mount('#app')
