import Vue from 'vue';

import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

const skillsRow = {
  template: "#skills-row",
  props: ['item'],
  components: {
      swiperSlide
  }
}

new Vue({
  el: "#skills-component",
  template: "#skills-list",
  data() {
    return {
      skillRows: [
        {
          name: 'Frontend',
          skills: [
            {name: 'HTML5', val: 40},
            {name: 'CSS3', val: 55},
            {name: 'JavaScript', val: 70},
            {name: 'Vue.js', val: 90}
          ]
        },
        {
          name: 'Workflow',
          skills: [
            {name: 'GIT', val: 60},
            {name: 'Terminal', val: 80},
            {name: 'Gulp', val: 37},
            {name: 'Webpack', val: 64}
          ]
        }
      ]
    }
  }
  // components: {
  //   row
  // }
  
})
