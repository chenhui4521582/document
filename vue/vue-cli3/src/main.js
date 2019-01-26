import Vue from 'vue'
import App from './App.vue'
import router from '@/config/router/router'
import store from '@/config/store/index'
import '@/common/common.main'

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
