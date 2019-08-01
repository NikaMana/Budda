<template lang="pug">
  section.comments
    .comments__title Блок "Отзывы"
    form.comments__form
      .form__header Новый отзыв
      .form__body
        .form__photo-add
            img.form__photo-avatar
            button.form__photo-add-btn Добавить фото
      .form__data
        label.form-info
          .form__label-text Имя автора
          input(type="text" required placeholder="Ковальчук Дмитрий")
        label.form-info
          .form__label-text Титул автора
          input(type="text" required placeholder="Основатель")
        label.form-info
          .form__label-text Отзыв
          input(type="text" required placeholder="Отзыв")
          .form__buttons
            button.form__btn-reset Удалить
            button.form__btn-save Сохранить
    .comments__cards
      .comments__card 1
        button.comments__card-btn Добавить отзыв
      .comments__card 2
        .comments__card-pic
          img(src="../../../images/content/mini.png").comments__card-avatar
        .works__card-info
          .comments__name Владимир Сабанцев
          .comments__position.text Преподаватель
        .works__card-desc Этот код выдержит любые испытания
        buttons
          button править
          button удалить
      .comments__card 3
        .comments__card-pic
          img(src="../../../images/content/mini.png").comments__card-avatar
        .works__card-info
          .comments__name Владимир Сабанцев
          .comments__position.text Преподаватель
        .works__card-desc Этот код выдержит любые испытания
        buttons
          button править
          button удалить
      .comments__card 4
        .comments__card-pic
          img(src="../../../images/content/mini.png").comments__card-avatar
        .works__card-info
          .comments__name Владимир Сабанцев
          .comments__position.text Преподаватель
        .works__card-desc Этот код выдержит любые испытания
        buttons
          button править
          button удалить
      .comments__card 5
        .comments__card-pic
          img(src="../../../images/content/mini.png").comments__card-avatar
        .works__card-info
          .comments__name Владимир Сабанцев
          .comments__position.text Преподаватель
        .works__card-desc Этот код выдержит любые испытания
        buttons
          button править
          button удалить
</template>
<script>
export default {
  
}
</script>
<style lang="postcss">

</style>


