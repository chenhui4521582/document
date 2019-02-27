import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";
import { Cookie } from "@util/util";

Vue.use(Router);
const vueRouter = new Router({
  mode: "hash",
  routes
});

vueRouter.beforeEach((to, from, next) => {
  let formWorld = to.path || "";
  let needLogin = to.meta.login ? to.meta.login : false;
  let isLogin = Cookie.get("user");
  if (needLogin) {
    if (isLogin) {
      next();
    } else {
      next({ path: "/examples/loginEnter/login", query: { formWorld } });
    }
  } else {
    next();
  }
});

export default vueRouter;
