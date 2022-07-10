import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './index.css'

import axios from 'axios'
import App from './App.vue'
import router from './router'

const app = createApp(App)

axios.defaults.baseURL = 'http://127.0.0.1:8000/'

app.use(createPinia())
app.use(router)

app.mount('#app')
