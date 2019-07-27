<template lang="pug">
.main-wrapper 
  my-header
  works

    
      
    
</template>

<script>

import MyHeader from "@/components/header"
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
  .works__title {
    margin-bottom: 60px;;
  }
  .works__cards {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
  }
  .works__card {
    background: #555;
    width: 100%;
    height: 556px;
  }

  .works__form {
    width: 100%;
    background: #fff;
    margin-bottom: 80px;
  }

  .form__header {
    height: 75px;
    width: 100%;
    border-bottom: 2px solid #1f232d;
  }

  .form__body {
    display: flex;
    justify-content: space-between;
    padding: 40px;
  }

  .form__photo {
    width: 49%;

  }
  .form__photo-add {
    width: 100%;
    height: 276px;
    background-color: #dee4ed;
  }
  .form__data {
    width: 49%;

    input {
      width: 100%;
      border: none;
      border-bottom: 1px solid #000;
    }

 label {
   margin-bottom: 30px;
   display: block;
   }
 }
 </style>


