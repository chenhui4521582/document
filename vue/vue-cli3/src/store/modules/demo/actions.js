export default {
  updateUser: ({ state, commit, rootState }) => {
    /*
     *  options:
     *   state: 局部state,
     *   commit: 推送同步mutations语法糖
     *   rootState: 全局State
     */
    commit("updateUser", "陈大爷");
    console.log(rootState, "===user");
  },
  updateAge: ({ state, commit, rootState }) => {
    /*
     *  options:
     *   state: 局部state,
     *   commit: 推送同步mutations语法糖
     *   rootState: 全局State
     */
    commit("updateAge", "25我变年轻了");
    console.log(rootState, "===age");
  }
};
