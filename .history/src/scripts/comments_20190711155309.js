import Vue from "vue";

// require styles
// import 'swiper/dist/css/swiper.css'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'

const commentItem = {
    template: "#comment-item",
    props: ['item'],
    components: {
        swiperSlide
    }
}

new Vue({
    el: "#comments-component",
    template: "#comments-list",
    components: {
        commentItem,
        swiper,
    },
    data: {
        comments: [
            {
                text: "Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!",
                photo: require(`images/content/photo0.png`),
                name: "Ковальчук Дмитрий",
                position: "Основатель Loftschool"
            },
            {
                text: "Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах",
                photo: require(`images/content/photo1.png`),
                name: "Владимир Сабанцев",
                position: "Преподаватель"
            },
            {
                text: "Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!",
                photo: require(`images/content/photo0.png`),
                name: "Петр Петров",
                position: "Frontend разработчик"
            },
            {
                text: "Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах",
                photo: require(`images/content/photo1.png`),
                name: "Иван Иванов",
                position: "Backend разработчик"
            }
        ],
        swiperOption: {
            slidesPerView: 2,
            navigation: {
                nextEl: '.comments__arrow--next',
                prevEl: '.comments__arrow--prev',
                disabledClass: 'comments__arrow--disabled',
            },
            breakpoints: {  
                // when window width is <= 480px     
                480: {       
                    slidesPerView: 1,  
                },
            } 
        }
    }
})