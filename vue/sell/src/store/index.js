import Vuex from 'vuex'
import Vue from 'vue'
import state from './state'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

let Store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default Store
