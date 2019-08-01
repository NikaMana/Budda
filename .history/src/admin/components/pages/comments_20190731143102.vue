<template lang="pug">
  section.comments
    .container
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
            input(type="text" placeholder="Ковальчук Дмитрий")
          label.form-info
            .form__label-text Титул автора
            input(type="text" placeholder="Основатель")
          label.form-info
            .form__label-text Отзыв
            input(type="text" placeholder="Отзыв")
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
@import "../../../styles/mixins.pcss";

.comments{
  background: #fff;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  padding: 0 20px 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  &_plain {
    padding: 0;
  }
}

.comments__title{
  padding: 30px 2%;
  border-bottom: 1px solid rgba(#1f232d, 0.15);
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 30px;
}

</style>


