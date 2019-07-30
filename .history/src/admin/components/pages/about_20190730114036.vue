<template lang="pug">
  .about-page-container
    .container
      .about-page__title
        h1.page-title Обо мне
        button.about-page__add-new() Добавить группу
    button(type="button" @click="login") Отправить
    button(type="button" @click="createCategory") Создание категории
    input(type="text" placeholder="Новая категория" v-model="newcategory")
    h3(v-for="cat in categories") {{ cat.category }}
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
    login() {
      console.log("login")
      let token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjE0NSwiaXNzIjoiaHR0cDovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vbG9naW4iLCJpYXQiOjE1NjQyMTUwODMsImV4cCI6MTU2NDIzMzA4MywibmJmIjoxNTY0MjE1MDgzLCJqdGkiOiIzcDJ0UFFZcFpTSkxZRzJ5In0.SOKxXNO2IcvQQ_eCOKpYeL0t2AjX5FYFUCy6_QJ76zk"
      localStorage.setItem("token", token);
      $axios.defaults.headers["Authorization"] = `Bearer ${token}`;
    },
    createCategory() {
      $axios.post("/categories", { title: this.newcategory })
    },
    async fetchCategories() {
      const { data } = await $axios.get("/categories")
      this.categories = data
    },
    
    
    
  },
  data() {
    return{
      newcategory: '',
      categories: [],
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
   })
  }
}

</script>


<style lang="postcss">
.page-title{
  margin-top: 100px;
}
</style>

