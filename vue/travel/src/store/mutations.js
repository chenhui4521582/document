import { LocalStorage } from "@util/util";

let mutations = {
  changeCity(state, city) {
    state.city = city;
    LocalStorage.set("city", city);
  }
};

export default mutations;
