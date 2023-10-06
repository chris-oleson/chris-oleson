import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// Vuetify
import vuetify from './vuetify'
app.use(vuetify)

// Vue Router
import router from './router'
app.use(router)

app.mount('#app')