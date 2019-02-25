import Router from "vue-router";
import Vue from "vue";
import routes from "./routes";
Vue.use(Router);
const vueRouter = new Router({ routes });
vueRouter.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});
export default vueRouter;
