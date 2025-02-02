import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

import Request from "@/request";
Vue.use(Request);

import AwsomeMask from "awesome-mask";
Vue.directive("mask", AwsomeMask);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
