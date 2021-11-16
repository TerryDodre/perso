import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VOffline from 'v-offline';

createApp(App).use(store).use(router).use(VOffline).mount('#app')
