// Vue stuff:
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// Quill Text Editor Stuff:



// Tailwind stuff:
import './assets/styles/tailwind.css'
// import TestingArea from "@/components/TestingArea/TestingArea";
// import Addition from "@/components/TestingArea/Addition";


// Create Application
createApp(App).use(router).mount('#app')
