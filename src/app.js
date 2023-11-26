import Vue from "vue";
import App from "./App.vue";
import isMobileStore from "@/stores/isMobileStore";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store: isMobileStore,
}).$mount("#app");
