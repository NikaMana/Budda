<template lang="pug">
  section.login
    form.login__form(@submit.prevent="login")
      .login__title Авторизация
      form-input(
        :label="'Логин'"
      )
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

