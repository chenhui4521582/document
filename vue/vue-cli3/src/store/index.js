import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import state from './state'
import mutations from './mutations'
import getters from './getters'

import demo from './modules/demo'
import travel from './modules/travel'

Vue.use(Vuex)

let store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules: {
    demo,
    travel
  }
})

export default store
