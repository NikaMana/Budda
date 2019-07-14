import Vue from 'vue';

const arrows = {
  template: "slider-arrows"
}

const thums = {
  template: "slider-thums",
  props: {
    works: Array
  }
}


const display = {
  template: "slider-display",
  props: {
    works: Array,
    currentWork: Object
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
  props: {
    currentWork: Object,
  },
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
      works: [],
      currentWork: {}
    }
  },
  methods: {
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requirePic = require('../images/content/${item.photo}');
        item.photo = requirePic;

        return item
      })
    }
  },
  created() {
    const data = require('../data/works.json');

    this.works = this.makeArrWithRequiredImages(data);

    this.currentWork = this.works[0];
  }
});