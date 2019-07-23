<template lang="pug">
  section.login
    form.login__form
      .login__title Авторизация
      label.form__element
        .form__label Логин
        input(type="text").form__input.form__input-icon.icon--user
      label.form__element
        .form__label Пароль
        input(type="password").form__input.form__input-icon.icon--user
      button.login__button Отправить
</template>

<script>
// export default {
//   components: {
    
//   }
// }
</script>

<style lang="postcss">
  // @import "../styles/blocks/admin.pcss"
</style>

