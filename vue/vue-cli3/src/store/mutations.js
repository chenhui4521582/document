let mutaions = {
  /*
   * options
   *   state:当前作用域内的state
   *   data:用户传递过来的数据
   *   rootState: 全局作用局state
   */
  setUser: (state, data, rootState) => {
    state.user = data;
  },
  setAge: (state, data) => {
    state.age = data;
  },
  setFps: (state, data) => {
    state.FPS = data;
  }
};
export default mutaions;
