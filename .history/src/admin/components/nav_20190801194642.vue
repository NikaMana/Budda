<template lang="pug">
nav.nav
  ul.nav-list
    li.nav-item
      router-link.nav-menu(to="/") Обо мне
    li.nav-item
      router-link.nav-menu(to="/works") Работы
    li.nav-item
      router-link.nav-menu(to="/comments") Отзывы 
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
  margin: 0.875rem;
  white-space: nowrap;
  display: inline-block;
  vertical-align: middle;
  border: none;
}
.nav-menu{
  /* display: inline-block;
    vertical-align: middle;
    color: #414c63;
    text-decoration: none;
    font-family: Open Sans;
    font-size: 1rem;
    font-weight: 400;
    font-style: normal;
    line-height: 1.875rem;
    border-bottom: 3px solid transparent; */
    vertical-align: middle;
  white-space: nowrap;
  display: flex;
  height: 100%;
  align-items: center;
  cursor: pointer;
  width: 125px;
  justify-content: center;
  border-bottom: 3px solid transparent;
  text-decoration: none;
  @include phones {
    width: 100px;
  }
  &:before {
    content: attr(data-text);
  }
  &:hover,
  &.active {
    color: #383bcf;
    font-weight: 600;
    border-color: currentColor;
  }
}
</style>


