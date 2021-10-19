import { createApp } from 'vue'
import { router } from './router'
import GloablComponents from './components/global'
import App from './App.vue'
import './style/index.less'

const app = createApp(App)
app.use(router)
app.use(GloablComponents)
app.mount('#app')
