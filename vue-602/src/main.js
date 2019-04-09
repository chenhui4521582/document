import Vue from 'vue';
import axios from 'axios';
import App from './App';
import store from './config/store.js';
import router from './config/router';
import toast from './components/public/toast/toast.js';
import element_ui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '../static/css/style.css'

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.use(toast);
Vue.use(element_ui);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});

