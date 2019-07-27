<template lang="pug">
  h1 Обо мне
  button(type="button" @click="login") Отправить

</template>

<script>

export default {
  methods: {
    login() {
      console.log("login")
    }
  }
}
</script>


<style lang="postcss">
h1{
  margin-top: 100px;
}
</style>

