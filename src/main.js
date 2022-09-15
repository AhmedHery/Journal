import { createApp } from 'vue'

import landing from './components/landing.vue'
import router from './routers/rout'
createApp(landing).use(router).mount('#app');
