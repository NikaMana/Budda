<template lang="pug">
  .about-page-container
    .container
      .about-page__title
        h1.page-title Обо мне
        button.about-page__add-new(
          @click="showAddingForm = true"
          v-if="showAddingForm === false"
        ) Добавить группу

    .about-page__content
      .container.container--mobile-wide
        ul.skill-list
          li.skill-list__item
            button(type="button" @click="login") Отправить
            button(type="button" @click="createCategory(newcategory)") Создание категории
            input(type="text" placeholder="Новая категория" v-model="newcategory")
            //- h3(v-for="cat in categories") {{ cat.category }}
            p(v-for="category in categoriesForEdit")
              //- span {{ category.category }}
              input(type="text" placeholder="Новая категория" v-model="category.category")
              button(type="button" @click="deleteCategory(category.id)") Удаление категории
              button(type="button" @click="updateCategory({ title: category.category, id: category.id })") Обновить категорию 
              span {{ category.category }}
            button(type="button" @click="createSkill(newskill)") Создание скилла
            input(type="text" placeholder="Новый скилл" v-model="newskill")
            //- h3(v-for="cat in skills") {{ cat.title }}    
            p(v-for="skill in skills")
              span {{ skill.title }}
              button(type="button" @click="deleteSkill(skill.id)") Удаление скилла
              span {{ skill.id }}



</template>

<script>
import $axios from "@/requests.js"
import { mapActions, mapState } from "vuex";
export default {
  methods: {
    ...mapActions('skills', ['fetchSkills', 'createSkill', 'deleteSkill']),
    ...mapActions('categories', ['fetchCategories', 'createCategory', 'deleteCategory', 'updateCategory']),
    async login() {
     console.log("login")
     const { data: { token } } = await $axios.post("/login", { name: 'Nika-072019', password: 'Tornado' });
     localStorage.setItem("token", token);
     $axios.defaults.headers["Authorization"] = `Bearer ${token}`;
    }
  },
  data() {
    return{
      newcategory: '',
      newskill: '',
      
    }
  },
  created() {
    this.fetchCategories()
    this.fetchSkills()
  },
  computed: {
    ...mapState('skills', {
     skills: state => state.skills
   }),
    ...mapState('categories', {
     categories: state => state.categories
   }),
    categoriesForEdit() {
    return [...this.categories]
    }
  }
}
</script>


<style lang="postcss">
@import "../../../styles/mixins.pcss";
 .skill-container {
  border: 1px solid black;
  padding: 10px;
}
.about-page__title {
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  .page-title {
    margin-bottom: 0;
    margin-right: 60px;
    @include phones {
      margin-bottom: 28px;
    }
  }
  @include phones {
    flex-direction: column;
    align-items: flex-start;
  }
}
.about-page__add-new {
  color: $links-color;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  &:before {
    content: "+";
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-image: linear-gradient(to right, #006aed, #3f35cb);
    line-height: 20px;
    color: #fff;
    margin-right: 13px;
    flex-shrink: 0;
    flex-basis: 20px;
  }
}
.skill-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
  @include phones {
    margin-left: 0;
  }
}
.skill-list__item {
  width: calc(100% / 2 - 30px);
  margin-left: 30px;
  margin-bottom: 30px;
  &.loading {
    opacity: 0.5;
    pointer-events: none;
    filter: grayscale(100%);
  }
  @include phones {
    width: 100%;
    margin-left: 0;
    margin-bottom: 12px;
  }
}
</style>

