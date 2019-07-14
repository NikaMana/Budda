import Vue from 'vue';

const arrows = {
  template: "slider-arrows"
}

const thums = {
  template: "slider-thums"
}


const display = {
  template: "slider-display",
  components: {
    arrows, thums
  }
}

const tags = {
  template: "slider-tags"
}

const info = {
  template: "slider-info",
  components: {tags}
}

new Vue({
  el: "#slider-component",
  template: "#slider-container",
  components: {
    display, info
  },
  data() {
    return {
      works: []
    }
  }
});