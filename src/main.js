import { createApp } from 'vue'
import store from './store/store.js'
import App from './App.vue'
import router from './router/index.js'
import './index.css'

createApp(App).use(store).use(router).mount('#app')