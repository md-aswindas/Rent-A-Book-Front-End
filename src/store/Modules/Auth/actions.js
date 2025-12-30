import { decodeJwt } from "@/utils/jwt";
export default {
  handleLogin({ commit }, token) {
    console.log("HANDLE LOGIN RECEIVED TOKEN =", token);

    if (!token || typeof token !== "string") {
      throw new Error("Invalid token passed to handleLogin");
    }

    const decoded = decodeJwt(token);

    if (!decoded) {
      throw new Error("JWT decode failed");
    }
    sessionStorage.setItem("jwt", token);
    sessionStorage.setItem("role", decoded.role);

    commit("SET_TOKEN", token);
    commit("SET_ROLE", decoded.role);
    commit("SET_USER", {
      id: decoded.id,
      email: decoded.sub
    });
  },

  logout({ commit }) {
    sessionStorage.clear();
    commit("LOGOUT");
  }
};
