import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      token: sessionStorage.getItem("jwt") || null,
      user: null,
      role: sessionStorage.getItem("role") || null
    };
  },
  actions,
  mutations,
  getters
};
