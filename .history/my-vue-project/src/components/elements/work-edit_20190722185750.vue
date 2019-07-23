<template lang="pug">
  .form-edit
    .form-edit__header Редактирование страницы
    form.form-edit__form.work-edit__form(@submit.prevent="submitForm")
      .work-edit__photo
        .work-edit__photo-text Перетащите или загрузите для загрузки изображения
        button.work-edit__photo-btn.btn--main Загрузить
      .work-edit__inputs
        form-input(
          :label="'Название'"
          v-model="editedWork.title"
          :error-text="validation.firstError('editedWork.title')"
        )
        form-input(
          :label="'Ссылка'"
          v-model="editedWork.link"
          :error-text="validation.firstError('editedWork.link')"
        )
        form-input(
          :label="'Описание'"
          :input-type="'textarea'"
          v-model="editedWork.description"
          :error-text="validation.firstError('editedWork.description')"
        )
        form-input(
          :label="'Добавление тега'"
          v-model="editedWork.techs"
        )

        .work-edit__tags
          .work-edit__tag(v-for="tag in editedWork.tags") {{ tag }}
        
        form-edit-btns(@cancel="cancel")
</template>

<script>
// import formInput from "@/components/elements/form-input"
// import formEditBtns from "@/components/elements/form-edit-btns"
// { Validator } from 'simple-vue-validator'
// $axios from "@/requests";

export default {
  props: {
    work: {
      type: Object,
      default() {
        return {
          title: "",
          link: "",
          description: "",
          techs: "",
          tags: [],
          photo: "11"
        }
      }
    },
    isNew: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    work(val) {
      if (val) {
        this.editedWork = {...val}
      }
    },
  },
  data() {
    return {
      editedWork: {...this.work},
      newTags: ''
    }
  },
  validators: {
    'editedWork.title': function (value) {
      return Validator.value(value).required('Заполните название');
    },
    'editedWork.link': function (value) {
      return Validator.value(value).required();
    },
    'editedWork.description': function (value) {
      return Validator.value(value).required();
  }
}
</script>

<style lang="postcss">

</style>