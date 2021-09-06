import { createApp } from 'vue'
import App from './App.vue'

// Quill Text Editor Stuff:
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

// Tailwind stuff:
import './assets/styles/tailwind.css'

// Export components
export default {
    components: {
        quillEditor
    }
}

createApp(App).mount('#app')
