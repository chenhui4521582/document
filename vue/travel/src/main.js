import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
import Vee from 'vee-ui'
import Axios from 'axios'
import 'swiper/dist/css/swiper.css'
import '@assets/css/reset.css'
import '@assets/css/iconfont.css'
import 'vee-ui/dist/vee-ui.css'

Vue.config.productionTip = false
Vue.prototype.$http = Axios

Vue.use(Vee)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
