import { createStore } from "vuex";
import Auth from "./Modules/Auth";
import Library from "./Modules/Library";

export default createStore({
  state() {
    return {
      base_url: "http://localhost:8081",
    };
  },
  modules: {
    Auth,
    Library
  }
});
