<template lang="pug">
header.header
  .header__user
    .user__pic
      img(src="../../images/content/mini.png").user__pic-avatar
    .user__name Вероника Маникина            
    .header__title Панель администрирования
    .header__btn Выйти
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
.header__user{
  display:inline-flex;
  padding: 15px 60px;
}
.user__pic-avatar{
  border-radius: 50%;
  overflow: hidden;
}
.user__name{
  display: inline-block;
  vertical-align: middle;
  color: #fff;
  text-decoration: none;
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 30px;
  border-bottom: 3px solid transparent;
}
.header__title{
  display: inline-block;
  vertical-align: middle;
  color: #fff;
  text-decoration: none;
  font-family: "Open Sans";
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: 30px;
  border-bottom: 3px solid transparent;
}
</style>


