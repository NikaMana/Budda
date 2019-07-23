import Vue from 'vue';
import App from './App.vue'
// import router from '../components/router'
// import store from '../components/store'
import SimpleVueValidation from 'simple-vue-validator';
Vue.use(SimpleVueValidation);

new Vue({
  el: "#app-root",
  // router,
  // store,
  render: h => h(App)
});