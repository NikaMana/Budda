<template lang="pug">
  section 
    h1 Обо мне
    button(type="button" @click="login") Отправить
    button(type="button" @click="createCategory") Создание категории
    input(type="text" placeholder="Новая категория" v-model="newcategory")

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
    fetchCategories() {
      const { data } = await $axios.get("/categories")
    }
  },
  data() {
    return{
      newcategory: '',
      categories: []
    }
  }
}
</script>


<style lang="postcss">
h1{
  margin-top: 100px;
}
</style>

