<template lang="pug">
  section 
    h1 Обо мне
    button(type="button" @click="login") Отправить
    button(type="button" @click="createCategory") Создание категории
    input(type="text" placeholder="Новая категория" v-model="newcategory")
    h3(v-for="cat in categories") {{ cat.category }}
    button(type="button" @click="createSkill") Создание скилла
    input(type="text" placeholder="Новый скилл" v-model="newskill")
    h3(v-for="cat in skills") {{ cat.title }}
    button(type="button" @click="deleteSkill") Удаление скилла

</template>

<script>
import $axios from "@/requests.js"
export default {
  methods: {
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
    createSkill() {
      $axios.post("/skills", { title: this.newskill, percent: 55,  category: 948 })
    },
    async fetchSkills() {
      const { data } = await $axios.get("/skills/145")
      this.skills = data
    },
    
    async deleteSkill() {
      const { data } = await $axios.delete("/skills/2586")
    }
  },
  data() {
    return{
      newcategory: '',
      categories: [],
      newskill: '',
      skills: []
    }
  },
  created() {
    this.fetchCategories()
    this.fetchSkills()
  }
}

</script>


<style lang="postcss">
h1{
  margin-top: 100px;
}
</style>

