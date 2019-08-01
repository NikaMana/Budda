<template lang="pug">
header.header
  .header__user
      .user__pic
        img(src="../../images/content/mini.png").user__pic-avatar
      .user__name 
        span Вероника Маникина
        a.header__btn(@click="logout") Выйти

  .header__title Панель администрирования
  
    
  
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("user", ["logout"])
  }
};
</script>

<style lang="postcss">
.header {
  color: #fff;
  display: flex;
  padding: 40px 60px;
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

</style>


