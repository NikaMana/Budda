import Vue from 'vue';

import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

// const skillsItem = {
//   template: "#skills-item",
//   props: ['item'],
//   components: {
//       swiperSlide
//   }
// }

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
          name: 'Workflow'
        }
      ]
    }
  }
  // components: {
  //   row
  // }
  
})
