export default {
  updateUser: (state, data, rootState) => {
    // 第一个参数  模块内部的 state值 ， 地三个参数是全局的rootState;
    state.user = data;
  },
  updateAge: (state, data, rootState) => {
    state.age = data;
  }
};
