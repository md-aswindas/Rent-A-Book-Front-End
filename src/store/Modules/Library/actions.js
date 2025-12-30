import axios from "axios";

export default {
  async libraryLogin({ dispatch, rootState }, payload) {
    
    const res = await axios.post(
      `${rootState.base_url}/api/auth/library/login`,
      payload
    );
    // console.log("FULL LOGIN RESPONSE =", res.data);
    console.log("TOKEN FROM BACKEND =", res.data);
    // hand over auth responsibility
    dispatch("Auth/handleLogin", res.data, { root: true });

    return true;
  }
};
