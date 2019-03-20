import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import Axios from 'axios'
import '@/assets/css/iconfont.css'

Vue.prototype.$http = Axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
