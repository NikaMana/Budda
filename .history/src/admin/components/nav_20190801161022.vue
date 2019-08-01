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
  width: 58px;
  height: 14px;
  color: #383bcf;
  font-family: "Open Sans - Semibold";
  font-size: 16px;
  font-weight: 400;
  line-height: 36.14px;
}
</style>


