import Vue from 'vue'
import App from './App.vue'
import MessageComponent from "@/components/MessageComponent.vue";
import router from './router'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import {store} from './store'
Vue.config.productionTip = false
Vue.component("app-message", MessageComponent);

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
