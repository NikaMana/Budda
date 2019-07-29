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
  display: flex;
}
.user__pic-avatar{
  border-radius: 50%;
  overflow: hidden;
}
</style>


