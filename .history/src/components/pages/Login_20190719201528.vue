<template lang="pug">
  section.login
    form.login__form(@submit.prevent="login")
      .login__title Авторизация
      form-input(
        :label="'Логин'"
        :icon="'user'"
        v-model="formData.name"
        :error-text="validation.firstError('formData.name')"
      )
      form-input(
        :label="'Пароль'"
        :icon="'key'"
        :input-type="'password'"
        v-model="formData.password"
        :error-text="validation.firstError('formData.password')"
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
    async login() {
      const success = await this.$validate()
      console.log("res", success)
      if (success) {
        console.log("hhh", this.formData)
        const { data: { token } } = await $axios.post("")
      }
    }
  },
}
</script>

<style lang="postcss">
.login {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.login__button, .login__form{
  display: flex;
}
.login__form{
  padding: 3.75rem 5rem;
  background: #fff;
  z-index: 3;
}
.form__element input.icon--user {
  background-image: url();
}
.form__element input.form__input-icon {
  padding-left: 2.8125rem;
  background-repeat: no-repeat;
}
  // @import "../styles/blocks/admin.pcss"
</style>

