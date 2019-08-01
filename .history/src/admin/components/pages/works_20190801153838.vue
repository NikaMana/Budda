<template lang="pug">
  
section.works
    .works__title Блок "Работы"
    form.works__form
      .form__header Редактирование работы
      .form__body
        .form__photo-add
          .form__photo-text Перетащите или загрузите для загрузки изображения
          button.form__photo-add-btn Загрузить
        .form__data
          label.form-info
            .form__label-text Название
            input.form__label-input(type="text" required placeholder="Дизайн сайта")
          label.form-info
            .form__label-text Ссылка
            input.form__label-input(type="text" required placeholder="Ссылка")
          label.form-info
            .form__label-text Описание
            input.form__label-input(type="text" required placeholder="Описание")
          label.form-info
            .form__label-text Добавление тега
            input.form__label-input(type="text" required placeholder="Vue.js")
          .form__description-tags
            .form__description-tag.text Vue.js
          .form__buttons
            button.form__label-reset Отмена
            button.form__label-save Сохранить
          
    .works__cards
      .works__card-main
        img.comments__card-pic(src="../../../images/content/vue/+.png")
        button.works__card-btn Добавить работу
      .works__card
        .works__card-pic
          img(src="../../../images/content/vue/Авто.png").works__card-avatar
        .works__card-info
          h4.works__card-title Сайт школы образования
          .works__card-desc Эта девушка проходила обучение веб-разработке не где-то, а в Loftschool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
          a(href="#").works__card-link http:loftschool.ru
          .works__card__buttons
            button.works__card-correct Править
            button.works__card-delete Удалить
      .works__card
        .works__card-pic
          img(src="../../../images/content/vue/Карандаши.png").works__card-avatar
        .works__card-info
          h4.works__card-title Сайт школы образования
          .works__card-desc Эта девушка проходила обучение веб-разработке не где-то, а в Loftschool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
        a(href="#").works__card-link http:loftschool.ru
        .works__card__buttons
            button.works__card-correct Править
            button.works__card-delete Удалить
      .works__card
        .works__card-pic
          img(src="../../../images/content/vue/Монета.png").works__card-avatar
        .works__card-info
          h4.works__card-title Сайт школы образования
          .works__card-desc Эта девушка проходила обучение веб-разработке не где-то, а в Loftschool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
        a(href="#").works__card-link http:loftschool.ru
        .works__card__buttons
            button.works__card-correct Править
            button.works__card-delete Удалить
      .works__card
        .works__card-pic
          img(src="../../../images/content/vue/Инструмент.png").works__card-avatar
        .works__card-info
          h4.works__card-title Сайт школы образования
          .works__card-desc Эта девушка проходила обучение веб-разработке не где-то, а в Loftschool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
        a(href="#").works__card-link http:loftschool.ru
        .works__card__buttons
            button.works__card-correct Править
            button.works__card-delete Удалить
</template>

<script>
export default {
  
}
</script>

<style lang="postcss">
  .works{
    border: 1px solid black;
    padding: 10px;
    background: #f8fafe;
  }
  .works__form{
    background: #fff;
    width: 1080px;
    height: 775px;
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
    margin: 60px;
    margin-bottom: 80px;
  }
  .works__title {
    margin-bottom: 60px;
    font-size: 1.125rem;
    font-weight: 600;
    color: #414c63;
  }
  .works__cards {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
  }
  .works__card {
    background: #fff;
    width: 100%;
    height: 556px;
  }
  .works__card-avatar{
    width: 100%;
  }
  .works__card-main{
    background: #3f35cb;
  }
  .works__card-btn{
    color: #fff;
    background: none;
    border: none;
    font-size: 16px;
    font-weight: 400;
  }
  .works__card-info{
    margin: 30px;
  }
  .works__card-title{
    margin-bottom: 2.5rem;
  }
  .works__card-desc{
    font-weight: 600;
    font-size: 1rem;
    color: rgba(65,76,99,.7);
    line-height: 1.875rem;
  }
  .works__card-link{
    font-size: 1.125rem;
    font-weight: 700;
    color: #4b6fd7;
    border-bottom: 1px solid transparent;
  }
  .form__header {
    border-bottom: 2px solid #1f232d;
    width: 231px;
    height: 19px;
    color: #414c63;
    font-family: "Open Sans";
    font-size: 18px;
    font-weight: 700;
    line-height: 34px;
    padding: 30px;
  }

  .form__body {
    display: flex;
    justify-content: space-between;
    padding: 40px;
  }

  .form__photo {
    width: 49%;
  }
  .form__photo-add {
    width: 494px;
    height: 276px;
    border: 1px dashed #a1a1a1;
    background-color: #dee4ed;
  }
  .form__photo-add-btn{
    width: 92px;
    height: 12px;
    color: #ffffff;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 700;
    line-height: 48px;
    text-transform: uppercase;
    width: 181px;
    height: 50px;
    border-radius: 25px;
    background-color: #ffffff;
    margin-left: 220px;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  }
  .form__photo-text{
    width: 219px;
    height: 49px;
    opacity: 0.5;
    color: #414c63;
    font-family: "Open Sans - Semibold";
    font-size: 16px;
    font-weight: 400;
    line-height: 33.89px;
    margin: 3.25rem 13.625rem;
  }
  .form__data {
    width: 49%;
    margin: 20px;

    input {
      width: 100%;
      border: none;
      border-bottom: 1px solid #000;
    }
  }

 label {
   margin-bottom: 30px;
   display: block;
   }
 .form__label-text{
   width: 77px;
    height: 12px;
    opacity: 0.5;
    color: #414c63;
    font-family: "Open Sans - Semibold";
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    margin-bottom: 20px;
 }
  .form__label-input{
    width: 311px;
    height: 16px;
    color: #414c63;
    font-family: "Open Sans - Semibold";
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
  .form__description-tags{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .form__description-tag{
    background-color: rgba(122,160,197,.1);
    border-radius: 22.5px;
    padding: 0 1.375rem;
    margin-right: 2%;
    margin-bottom: .625rem;
    text-align: center;
    font-weight: 600;
    font-size: .9375rem;
    line-height: 3rem;
    color: rgba(65,76,99,.7)
  }
  .form__buttons{
    display: flex;
    justify-content: flex-end;
    margin-top: 50px;
  }
  .form__label-reset{
    background: none;
    border: none;
    font-size: 16px;
    font-weight: 700;
    color: #383bcf;
  }
  .form__label-save{
    width: 92px;
    height: 12px;
    color: #ffffff;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 700;
    line-height: 48px;
    text-transform: uppercase;
    width: 181px;
    height: 50px;
    border-radius: 25px;
    background-color: #ffffff;
    margin-left: 20px;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  }
</style>

