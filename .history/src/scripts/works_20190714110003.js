import Vue from 'vue';

const arrows = {
  template: "slider-arrows"
}

const display = {
  template: "slider-display"
}

const info = {
  template: "slider-info"
}

new Vue({
  el: "#slider-component",
  template: "#slider-container",
  components: {
    display, info
  }
});