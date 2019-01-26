import Api from '@/config/service/Api'
let host = process.env.VUE_APP_REQUESTHOST

let actions = {
  actionsSetUser: ({ commit }, params) => {
    commit('setUser', params)
  },
  actionsSetAge: ({ commit }, params) => {
    commit('setAge', params)
  },
  GET_USER_IP: ({ commit }) => {
    return Api.GET(`${host}/auction/api/auction/beginner.do`).then(r => {
      return r.data
    })
  },
  actionsSetFps: ({ state, commit, rootState }, fps) =>{
    commit('setFps',fps)
  }
}
export default actions
