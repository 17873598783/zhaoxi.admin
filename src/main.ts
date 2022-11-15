import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/css/global.scss'
import router from './router/index'

createApp(App)
.use(ElementPlus)
.use(router)
.mount('#app')