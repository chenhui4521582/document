import axios from 'axios'
export default {
  GETSTOREDATA ({ commit, state, rootState }, data) {
    axios.get('./json/data.json').then(res => {
      res = res.data
      commit('SETSTOREDATA', res)
    })
  }
}
