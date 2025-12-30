import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
  namespaced: true,
  state(){
    return {
      profile: null
    };
  },  
  mutations,
  actions,
  getters,
};