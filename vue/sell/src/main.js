<<<<<<< HEAD
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
=======
import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import Axios from 'axios'
import '@/assets/css/iconfont.css'

Vue.prototype.$http = Axios

Vue.config.productionTip = false
>>>>>>> d50bfcc43746ea5ba9f1c88b0027120274183604

new Vue({
  router,
  store,
  render: h => h(App)
<<<<<<< HEAD
}).$mount("#app");
=======
}).$mount('#app')
>>>>>>> d50bfcc43746ea5ba9f1c88b0027120274183604
