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
import formInput from '@/components/elements/form-input'
import { Validator } from 'simple-vue-validator'
import @axios from '@/requests';
export default {
  data() {
    return {
      formData: {
        name: '',
        password: '',
      }
    }
  },
  components: {
    formInput
  },
  validators: {
    'formData.name': function (value) {
      return Validator.value(value).required();
    },
    'formData.password': function (value) {
      return Validator.value(value).required();
    }
  },
  methods: {
    // async login() 
  },
}
</script>

<style lang="postcss">
  // @import "../styles/blocks/admin.pcss"
</style>

