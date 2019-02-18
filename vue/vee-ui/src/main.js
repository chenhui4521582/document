import Vue from 'vue'
import App from './App.vue'
import router from './config/router/router'
import store from './config/store'
import Vee from './components/'

Vue.config.productionTip = false;

Vue.use(Vee);

new Vue({
  router,
  store,
  render: h => h(App)
/*  render: function (h) {
    return h(
      'div',
      {
        attrs:{
          'id': 'app'
        }
      },
      [
        h(
          'router-view'
        )
      ]
    )
  }*/


}).$mount('#app');
