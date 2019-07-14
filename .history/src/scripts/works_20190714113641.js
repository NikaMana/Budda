import Vue from 'vue';

const arrows = {
  template: "slider-arrows"
}

const thums = {
  template: "slider-thums"
}


const display = {
  template: "slider-display",
  props: {
    works: Array
  },
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
  },
  methods: {
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requirePic = require('../images/content/${item.photo}');
        item.photo = requirePic;
      })
    }
  },
  created() {
    const data = require('../data/works.json');

    this.works = data;
  }
});