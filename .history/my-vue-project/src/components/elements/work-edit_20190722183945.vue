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
</template>

<script>
// import workCard from "@/components/elements/work-card"
// import workCard from "@/components/elements/work-card"

export default {
  components: {
    
  },
  data() {
    return {
      
    }
  },
  computed: {
    
  },
  methods: {
    
    
    
  }
}
</script>

<style lang="postcss">

</style>