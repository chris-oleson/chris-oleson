import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// Vuetify
import vuetify from './vuetify'
app.use(vuetify)

app.mount('#app')