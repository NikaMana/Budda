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
      .comments__card-main 
        img.comments__card-pic(src="../../../images/content/vue/+.png")
        button.comments__card-btn Добавить отзыв
      .comments__card 
        .comments__card-pic
          img(src="../../../images/content/vue/Авто.png").comments__card-avatar
        .comments__about
          img.comments__photo(src="../../../images/content/photo0.png")
          .comments__info
              .comments__name Владимир Сабанцев
              .comments__position.text Преподаватель
        .comments__card-desc Этот код выдержит любые испытания. Только пожалуйста, не загружайте его на старых компьютерах!
        .comments__card__buttons
          button.comments__card-correct Править
          img(src="../../../images/content/vue/pencil-edit-button.png").comments__card-img
          button.comments__card-delete Удалить
          img(src="../../../images/content/vue/cancel.png").comments__card-img
      .comments__card 
        .comments__card-pic
          img(src="../../../images/content/vue/Карандаши.png").comments__card-avatar
        .comments__about
          img.comments__photo(src="../../../images/content/photo1.png")
          .comments__info
            .comments__name Владимир Сабанцев
            .comments__position.text Преподаватель
        .comments__card-desc Этот код выдержит любые испытания. Только пожалуйста, не загружайте его на старых компьютерах!
        .comments__card__buttons
          button.comments__card-correct Править
          img(src="../../../images/content/vue/pencil-edit-button.png").comments__card-img
          button.comments__card-delete Удалить
          img(src="../../../images/content/vue/cancel.png").comments__card-img
      .comments__card 
        .comments__card-pic
          img(src="../../../images/content/vue/Монета.png").comments__card-avatar
        .comments__about
          img.comments__photo(src="../../../images/content/photo0.png")
          .comments__info
            .comments__name Владимир Сабанцев
            .comments__position.text Преподаватель
        .comments__card-desc Этот код выдержит любые испытания. Только пожалуйста, не загружайте его на старых компьютерах!
        .comments__card__buttons
          button.comments__card-correct Править
          img(src="../../../images/content/vue/pencil-edit-button.png").comments__card-img
          button.comments__card-delete Удалить
          img(src="../../../images/content/vue/cancel.png").comments__card-img
      .comments__card 
        .comments__card-pic
          img(src="../../../images/content/vue/Инструмент.png").comments__card-avatar
        .comments__about
          img.comments__photo(src="../../../images/content/photo1.png")
          .comments__info
            .comments__name Владимир Сабанцев
            .comments__position.text Преподаватель
        .comments__card-desc Этот код выдержит любые испытания. Только пожалуйста, не загружайте его на старых компьютерах!
        .comments__card__buttons
          button.comments__card-correct Править
          img(src="../../../images/content/vue/pencil-edit-button.png").comments__card-imgpen
          button.comments__card-delete Удалить
          img(src="../../../images/content/vue/cancel.png").comments__card-img
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
    width: 336px;
    margin: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
  }
.comments__card {
  background: #fff;
  width: 336px;
  height: 556px;
}
.comments__card-avatar{
  width: 100%;
}
.comments__card-main{
  background: #3f35cb;
}
.comments__card-btn{
  color: #fff;
  background: none;
  border: none;
  font-size: 16px;
  font-weight: 400;
}
.comments__card-info{
  margin: 30px;
}
.comments__card-title{
  margin-bottom: 2.5rem;
}
.comments__card-desc{
  font-weight: 600;
  font-size: 1rem;
  color: rgba(65,76,99,.7);
  line-height: 1.875rem;
}
.comments__card-correct, .comments__card-delete{
  width: 68px;
  height: 16px;
  opacity: 0.5;
  color: #414c63;
  font-family: "Open Sans - Semibold";
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  background: none;
  border: none;
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
.form__photoadd-btn{
  background: none;
  border: none;
  font-size: 16px;
  font-weight: 700;
  color: #383bcf;
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
 .comments__about{
  display: flex;
  align-items: center;
}
.comments__name{
  font-size: 1.125rem;
  color: #414c63;
  font-weight: 700;
  white-space: nowrap;
  margin-bottom: 0.1875rem;
}
.comments__position{
  font-weight: 600;
  color: rgba(65,76,99,0.3);
  font-size: 0.875rem;
}
.comments__photo{
  display: inline-block;
  align-items: flex-start;
  flex: 0;
  border-radius: 50%;
  margin: 15px;
  width: 3.125rem;
  height: 3.125rem;
}
.comments__card-desc{
  margin: 25px;
}
.comments__card__buttons{
  margin: 15px;
}
.comments__card-imgpen{
  margin-right: 60px;
}
</style>


