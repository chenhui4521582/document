import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import state from "./state";
import mutations from "./mutations";
import getters from "./getters";

import demo from "./modules/demo";
import travel from "./modules/travel";
import sell from "./modules/sell";

Vue.use(Vuex);

let store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules: {
    demo,
    travel,
    sell
  }
});

export default store;
