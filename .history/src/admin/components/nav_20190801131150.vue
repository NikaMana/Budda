<template lang="pug">
nav.nav
  ul.nav-list
    li.nav-item
      router-link(to="/") Обо мне
    li.nav-item
      router-link(to="/works") Работы
    li.nav-item
      router-link(to="/comments") Отзывы 
</template>
<script>
export default {
  
}
</script>
<style lang="postcss">
.nav-list{
  display: flex;

}
.nav-item{
  display: inline-block;
  vertical-align: middle;
  color: #414c63;
  text-decoration: none;
  font-family: "Open Sans";
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: 30px;
  border-bottom: 3px solid transparent;
}
</style>


