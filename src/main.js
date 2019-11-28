import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// plugins
import "./plugins/bootstrap-vue";
import "./plugins/fontawesome";
import "./plugins/moment";
// font
// import "./styles/fonts.less";
// i18n
import i18n from "./plugins/i18n";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
