import Vue from 'vue';

import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

const row = {
  template: "#skills-row"
}

new Vue({
  el: "#skills-component",
  template: "#skills-list",
  components: {
    row
  }
  
})
