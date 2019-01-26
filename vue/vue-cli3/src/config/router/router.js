import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
Vue.use(Router)
const vueRouter = new Router({
  mode: 'hash',
  routes
})

export default vueRouter
