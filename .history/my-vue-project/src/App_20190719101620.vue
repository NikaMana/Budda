<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template lang="pug">
  .container
    router-view
</template>

<script>
import todo from './component/todo';
export default {
  name: 'app',
  components: {
    todo
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
  body {
    font-family: "Helvetica Neue", Helvetica, sans-serif;
    font-size: 16px;
    line-height: 1.42;
    -webkit-font-smoothing: antialiased;
    font-weight: 300;
    background: #f5f5f5;
  }
  .container {
    width: 600px;
    margin: 0 auto;
  }
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
    }
  }
  * {
    box-sizing: border-box;
  }
</style>
