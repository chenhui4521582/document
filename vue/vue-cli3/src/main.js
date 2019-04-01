import Vue from "vue";
import App from "./App.vue";
import router from "@/router/router";
import store from "@/store/index";
// 引入全局 filters
import Common from "@/common/common.main";

// 引入 vee ui 库
import Vee from "vee-ui";
import "vee-ui/dist/vee-ui.css";

Vue.config.productionTip = false;

Vue.use(Common);

Vue.use(Vee);

window.app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
