import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import state from './state'
import mutations from './mutations'
import getters from './getters'

import module from './module/'
Vue.use(Vuex)

let store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules: {
    module
  }
})

export default store
