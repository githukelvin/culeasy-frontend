import './assets/SCSS/main.css'
import './assets/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { InitVeeValidate } from './core/plugins/VeeValidate'

import App from './App.vue'
import router from './router'

const app = createApp(App)

InitVeeValidate()
app.use(createPinia())
app.use(router)

app.mount('#app')
