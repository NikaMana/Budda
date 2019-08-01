<template lang="pug">
.main-wrapper 
  my-header
  nav
  router-view

    
      
    
</template>

<script>

import MyHeader from "@/components/header"
import nav from "@/components/nav"
import works from "@/components/pages/works"
import comments from "@/components/pages/comments"

export default {
 components: {
   MyHeader,
   works,
   comments
 }
}
</script>

<style lang="postcss">
  html, body {
    margin: 0;
    box-sizing: border-box;
  }
  * {
    box-sizing: border-box;
  }
  header {
    background-color: #3e3e59;
    width: 100%;
    height: 80px;
  }
  nav {
    width: 100%;
    height: 77px;
  }
  .main-content {
    width: 100%;
    background-color: #f8f9fe;
    padding: 80px;
  }
  
 </style>


