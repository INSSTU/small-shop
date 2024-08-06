import '@/assets/styles/index.scss'
import App from './App.vue'
import SvgIcon from '~virtual/svg-component'

const pinia = createPinia()
const app = createApp(App)
app.component(SvgIcon.name as string, SvgIcon)
app.use(pinia)
app.use(router)
app.mount('#app')
