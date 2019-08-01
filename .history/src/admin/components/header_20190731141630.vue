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
  display:inline-flex;
  padding: 15px 60px;
}
.header.header__user{
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  color: rgba(#fff, 0.5);
  @include phones {
    display: none;
  }
}

.header__btn{
  display: flex;
  align-items: center;
  padding-top: 4.3rem;
  padding-right: 1.375rem;
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


