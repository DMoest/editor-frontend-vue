// Vue stuff:
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Quill Text Editor Stuff:
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

// Tailwind stuff:
import './assets/styles/tailwind.css'
import TestingArea from "@/components/TestingArea";

// Export components
export default {
    components: {
        QuillEditor
    }
}



createApp(App).use(router).mount('#app')
App.component('TestingArea', TestingArea)
