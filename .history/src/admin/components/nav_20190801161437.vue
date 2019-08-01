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
  display: inline-flex;
}
.nav-item{
  margin: 1.875rem;
  white-space: nowrap;
  display: inline-block;
  vertical-align: middle;
}
</style>


