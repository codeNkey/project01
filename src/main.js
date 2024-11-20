import App from './App.vue'
import { createApp } from 'vue'
import router from './router'
import store from './store'
import mixin from './mixin'
import i18n from './plugins/i18n'
import PageTitle from '@/components/flagment/PageTitle.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const app = createApp(App)
app.use(store)
app.use(router)
app.mixin(mixin)
app.use(i18n)
app.component('PageTitle',PageTitle)
app.mount('#app')

