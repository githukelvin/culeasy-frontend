import './assets/SCSS/main.css'
import './assets/index.css'
import '@sweetalert2/theme-dark/dark.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { InitVeeValidate } from './core/plugins/VeeValidate'

import App from './App.vue'
import router from './router'
import ApiService from '@/core/servives/ApiService'

const app = createApp(App)

InitVeeValidate()
app.use(createPinia())
app.use(router)
ApiService.init(app)

app.mount('#app')
