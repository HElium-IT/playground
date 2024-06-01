import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Tres from '@tresjs/core'
import vuetify from './plugins/vuetify'

const app = createApp(App)

app.use(Tres)
app.use(vuetify)

app.mount('#app').$nextTick(() => {
  // Use contextBridge
  window.ipcRenderer.on('main-process-message', (_event, message) => {
    console.log(message)
  })
})



