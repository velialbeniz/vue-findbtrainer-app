import './assets/main.css'
import App from './App.vue'
import router from './router'

import BaseModal from './components/ui/BaseModal.vue'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArN41YphQWMPRm8e8sJ2cKhd__wMrRxMo",
  authDomain: "vue-trainerapp.firebaseapp.com",
  projectId: "vue-trainerapp",
  storageBucket: "vue-trainerapp.appspot.com",
  messagingSenderId: "649944233386",
  appId: "1:649944233386:web:1c4e9376dd8a2a614227d3"
};

// Initialize Firebase
const fireApp = initializeApp(firebaseConfig);
const storage = getStorage(fireApp)



const app = createApp(App)
app.component("base-modal",BaseModal)
app.use(createPinia())
app.use(router)
app.mount('#app')

export { storage }
