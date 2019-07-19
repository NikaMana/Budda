import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import SimpleVueValidation from "simple-vue-validator";
import router from "./router";
import { store } from "./store";

Vue.use(SimpleVueValidation);

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
