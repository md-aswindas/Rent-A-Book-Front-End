<template>
  <section class="erroP">
    <div class="erroC">
      <h3><span>403</span>Access Denied!</h3>

      <p>
        You don't have permission to view this page.
      </p>
      <a class="button" @click="goBack">Take me back</a>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    goBack() {
      // Go to previous page in history
      this.$router.back();

      // Optional safety fallback:
      // if there is no history, redirect to login
      if (window.history.length <= 1) {
        this.$router.push("/LibraryLogin");
      }
    },
  },
};
</script>
  
<style scoped>
/* Error Page  Error Page */
html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}
body {
  position: relative;
  margin: 0;
  padding: 0 !important;
  width: 100%;
  font-size: 14px;
  background: #fff;
  background-size: 80vw 80vw;
  background-repeat: no-repeat;
  font-family: "Sen", sans-serif;
  -webkit-font-smoothing: antialiased;
}
a {
  text-decoration: none;
}
a:hover {
  opacity: 0.9;
  transition: opacity 0.1s;
}
.erroP {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 0;
}
.erroC {
  width: calc(100% - 40px);
  max-width: 450px;
  margin: auto;
}
.erroC h3 {
  font-size: 1.414rem;
  font-family: inherit;
}
.erroC h3 span {
  display: block;
  font-size: 140px;
  line-height: 0.8;
  margin-bottom: -1rem;
  color: #ebebf0;
}
.erroC p {
  margin: 30px 5%;
  line-height: 1.6em;
  opacity: 0.7;
}
.erroC .button {
  margin: 0;
  padding-left: 2em;
  padding-right: 2em;
  font-size: 14px;
}
.button {
  display: inline-flex;
  align-items: center;
  margin: 10px 0;
  padding: 12px 15px;
  outline: 0;
  border: 0;
  border-radius: 3px;
  line-height: 20px;
  color: #fffdfc;
  background: #2e2e2f;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  max-width: 320px;
  cursor: pointer;
}
</style>