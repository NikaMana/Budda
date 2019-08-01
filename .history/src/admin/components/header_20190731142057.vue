<template lang="pug">
header.header
  .header__user
      .user__pic
        img(src="../../images/content/mini.png").user__pic-avatar
      .user__name 
        span Вероника Маникина
        a.header__btn(@click="logout") Выйти

  .header__title Панель администрирования
    
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
.header {
  color: #fff;
}
.header__user{
  display: flex;
  align-items: center;
  margin-right: 20px;
}
.header.header__user{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.user__pic{
  margin-right: 20px;
  width: 45px;
  height: 45px;
  overflow: hidden;
  flex-shrink: 0;
  border-radius: 50%;
}
.user__name{
  font-size: 18px;
  font-weight: 600;

  .header__btn{
    display: none;
    /* @include phones() {
      display: block;
    } */
  }
}
.header__title{
  color: rgba(#fff, 0.5);
  /* @include phones() {
    display: none;
  } */
}

.header__btn{
  opacity: 0.7;
  text-decoration: underline;
  font-size: 14px;
  &:hover {
    text-decoration: none;
  }
  /* @include phones() {
    display: none;
  } */
}
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


