import Vue from 'vue';

import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

const skillsCircle = {
  template: "#skills-circle",
  props: ['circle'],
  data() {
    return {
      dashLength: 377
    }
  },
  computed: {
    dashOffset() {
      return (100-this.circle.val)*this.dashLength/100
    },
    externalStyle() {
      return {
        strokeDashoffset: this.dashOffset,
        strokeDasharray: this.dashLength
      }
    }
  },
  components: {
      // swiperSlide
  }
}

const skillsRow = {
  template: "#skills-row",
  props: ['item'],
  components: {
    skillsCircle
      // swiperSlide
  }
}

new Vue({
  el: "#skills-component",
  template: "#skills-list",
  data() {
    return {
      skillRows: [
        // {
        //   name: 'Frontend',
        //   skills: [
        //     {name: 'HTML5', val: 40},
        //     {name: 'CSS3', val: 55},
        //     {name: 'JavaScript', val: 70},
        //     {name: 'Vue.js', val: 90}
        //   ]
        // },
        // {
        //   name: 'Workflow',
        //   skills: [
        //     {name: 'GIT', val: 60},
        //     {name: 'Terminal', val: 80},
        //     {name: 'Gulp', val: 37},
        //     {name: 'Webpack', val: 64}
        //   ]
        // }
      ]
    }
  },
  async created() {
    let userId = 
  },
  components: {
    skillsRow
  }
  
})
