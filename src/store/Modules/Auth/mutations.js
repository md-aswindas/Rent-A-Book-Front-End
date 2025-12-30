export default {
  SET_TOKEN(state, token) {
    state.token = token;
  },
  SET_USER(state, user) {
    state.user = user;
  },
  SET_ROLE(state, role) {
    state.role = role;
  },
  LOGOUT(state) {
    state.token = null;
    state.user = null;
    state.role = null;
  }
};
