import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'
import router from './router'

Vue.use(Vuetify)

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

