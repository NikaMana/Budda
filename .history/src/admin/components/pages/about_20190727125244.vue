<template lang="pug">
  section 
    h1 Обо мне
    button(type="button" @click="login") Отправить

</template>

<script>
import $axios from "@/requests.js"
export default {
  methods: {
    login() {
      console.log("login")
      let token=""
      localStorage.setItem("token", token);
      $axios.defaults.headers["Authorization"] = Bearer ${token};
    }
  }
}
</script>


<style lang="postcss">
h1{
  margin-top: 100px;
}
</style>

