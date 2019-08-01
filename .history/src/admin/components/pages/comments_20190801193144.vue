<template lang="pug">
  section.comments
    .comments__title Блок "Отзывы"
    form.comments__form
      .form__header Новый отзыв
      .form__body
        .commentsform__photo-add
          img.form__photo-avatar(src="../../../images/content/vue/man-user.png")
          button.form__photoadd-btn Добавить фото
        .form__data
          .form__data-name
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
            button.form__label-reset Отмена
            button.form__label-save Сохранить
    .comments__cards
      .comments__card 1
        img.comments__card-pic(src="../../../images/content/vue/+.png")
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
.comments{ 
  border: 1px solid black;
  padding: 10px;
  background: #f8fafe;
}
.comments__form {
  background: #fff;
  width: 1080px;
  height: 775px;
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  background-color: #ffffff;
  margin: 60px;
  margin-bottom: 80px;
}
.comments__title {
    margin: 3.75rem;
    font-size: 1.125rem;
    font-weight: 600;
    color: #414c63;
  }
  .comments__cards {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
  }
  .comments__card {
    background: #555;
    width: 100%;
    height: 556px;
  }

  
  .form__header {
    height: 75px;
    width: 100%;
    border-bottom: 2px solid #1f232d;
  }

  .form__body {
    display: flex;
    justify-content: space-between;
    padding: 40px;
  }

  .form__photo {
    width: 49%;
  }
  .form__data-name{
    display: flex;
  }
  .form-info{
    margin-right: 50px;
  }
  .form__data {
    width: 49%;

    input {
      width: 100%;
      border: none;
      border-bottom: 1px solid #000;
    }

 label {
   margin-bottom: 30px;
   display: block;
   }
 }
</style>


