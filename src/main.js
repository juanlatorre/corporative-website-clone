import Vue from "vue";
import App from "./App.vue";
import Unicon from "vue-unicons";
import "./assets/styles/index.css";

import {
  uniFacebookF,
  uniLinkedin,
  uniYoutube,
  uniArrowRight,
  uniCopyright
} from "vue-unicons/src/icons";

import router from "./router";

Vue.config.productionTip = false;

Unicon.add([
  uniFacebookF,
  uniLinkedin,
  uniYoutube,
  uniArrowRight,
  uniCopyright
]);
Vue.use(Unicon);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
