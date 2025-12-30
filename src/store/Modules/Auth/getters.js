export default {
  isAuthenticated: (state) => !!state.token,
  getUser: (state) => state.user,
  getRole: (state) => state.role
};
