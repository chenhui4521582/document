import Vue from 'vue'
export default {
  UPDATEORDER (state, data, rootState) {
    if (!state.order[data.name]) {
      this._vm.$set(state.order, data.name, data)
    }
    state.order[data.name] = data
  },
  UPDATEMINPRICE (state, data) {
    state.minPrice = data
  },
  SETSTOREDATA (state, data) {
    state.goods = data.goods
    state.seller = data.seller
    state.ratings = data.ratings
  },
  RECEIVEEVENT (state, data) {
    state.event = data
  }
}
