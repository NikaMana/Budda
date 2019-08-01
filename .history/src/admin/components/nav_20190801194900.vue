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
  /* margin: 0.875rem;
  white-space: nowrap;
  display: inline-block;
  vertical-align: middle;
  border: none; */
  height: 100%;
  margin-right: 30px;
  /* @include phones {
    margin-right: 3px;
  } */
  &:last-child {
    margin-right: 0;
  }
}

.nav-menu{
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
  /* @include phones() {
    width: 100px;
  } */
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


