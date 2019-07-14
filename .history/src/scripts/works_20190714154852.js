import Vue from 'vue';

const arrows = {
  template: "slider-arrows"
  // methods: {
  //   slide(direction) {
  //     this.$emit('slide', direction);
  //   }
  // }
};

const thums = {
  template: "slider-thums",
  props: {
    works: Array,
    currentWork: Object
  }
};


const display = {
  template: "slider-display",
  props: {
    works: Array,
    currentWork: Object
  },
  computed: {
    reversedWorks() {
      return [...this.works].reverse()
    }
  },
  // methods: {
  //   handleSlide(direction) {
  //     this.$emit('slide', direction)
  //   }
  // },
  components: {
    arrows, thums
  }
}

const tags = {
  template: "slider-tags"
};

const info = {
  template: "slider-info",
  props: {
    currentWork: Object,
  },
  computed: {
    tagsArray() {
      return this.currentWork
    }
  },
  components: {tags}
};

new Vue({
  el: "#slider-component",
  template: "#slider-container",
  components: {
    display, info
  },
  data() {
    return {
      works: [],
      currentIndex: 0
    };
  },
  computed: {
    currentWork() {
      return this.works[this.currentIndex];
    }
  },
  watch: {
    currentIndex(value) {
      const worksLengthFromZero = this.works.length - 1;
      if (value < 0) this.currentIndex = worksLengthFromZero;
      if (value > worksLengthFromZero) this.currentIndex = 0;
    }
  },
  methods: {
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requirePic = require('../images/content/${item.photo}');
        item.photo = requirePic;
        return item
      });
    },
    handleSlide(direction) {
      switch(direction) {
        case 'next':
          this.currentIndex++;
          break;
        case 'previous':
          this.currentIndex--;
          break;
      }
    }
  },
  created() {
    const data = require('../data/works.json');

    this.works = this.makeArrWithRequiredImages(data);
  }
});