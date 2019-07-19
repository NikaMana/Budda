import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/parallax";
import "./scripts/comments";
import "./scripts/skills";
import "./scripts/works";
import "./scripts/scroll";


import "./scripts/menu-mobile";

import Vue from "vue";
import App from "./App.vue";
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