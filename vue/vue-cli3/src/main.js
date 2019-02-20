import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router'
import store from '@/store/index'
// 引入全局 filters
import Common from '@/common/common.main'
// 引入 vee ui 库
import Vee from 'vee-ui'
import 'vee-ui/dist/vee-ui.css'
// 引入 axios
import Axios from 'axios'
// 引入 iconfont
import '@/assets/css/iconfont.css'
// 引入 fastClick
import fastClick from 'fastclick'
fastClick.attach(document.body)
// 引入 swiper
import swiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'


Vue.config.productionTip = false;
Vue.prototype.$http = Axios;

Vue.use(Common);

Vue.use(Vee);

Vue.use(swiper);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

