import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import Toasted from "vue-toasted";

Vue.use(VueAxios, axios);
Vue.use(Toasted, {
  duration: 5000,
  keepOnHover: false,
  theme: "toasted-primary",
  position: "bottom-right"
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
