<template lang="pug">
  
section.works
    .works__title Блок "Работы"
    form.works__form
      .form__header Редактирование работы
      .form__body
        .form____photo-text Перетащите или загрузите для загрузки изображения
          .form__photo-add
                  button.form__photo-add-btn Загрузить
        .form__data
          label.form-info
            .form__label-text Название
            input(type="text" required placeholder="Дизайн сайта")
          label.form-info
            .form__label-text Ссылка
            input(type="text" required placeholder="Ссылка")
          label.form-info
            .form__label-text Описание
            input(type="text" required placeholder="Описание")

    .works__cards
      .works__card-main
        img.comments__card-pic(src="../../../images/content/vue/+.png")
        button.works__card-btn Добавить работу
      .works__card
        .works__card-pic
          img(src="../../../images/content/vue/Авто.png").works__card-avatar
        .works__card-info
          h5.works__card-title Сайт школы образования
          .works__card-desc Эта девушка проходила обучение веб-разработке не где-то, а в Loftschool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
        a(href="#").works__card-link http:oftschool.ru
        span править
        span удалить
      .works__card
        .works__card-pic
          img(src="../../../images/content/vue/Карандаши.png").works__card-avatar
        .works__card-info
          h5.works__card-title Сайт школы образования
          .works__card-desc Эта девушка проходила обучение веб-разработке не где-то, а в Loftschool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
        a(href="#").works__card-link http:oftschool.ru
        span править
        span удалить
      .works__card
        .works__card-pic
          img(src="../../../images/content/vue/Монета.png").works__card-avatar
        .works__card-info
          h5.works__card-title Сайт школы образования
          .works__card-desc Эта девушка проходила обучение веб-разработке не где-то, а в Loftschool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
        a(href="#").works__card-link http:oftschool.ru
        span править
        span удалить
      .works__card
        .works__card-pic
          img(src="../../../images/content/vue/Инструмент.png").works__card-avatar
        .works__card-info
          h5.works__card-title Сайт школы образования
          .works__card-desc Эта девушка проходила обучение веб-разработке не где-то, а в Loftschool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
        a(href="#").works__card-link http:oftschool.ru
        span править
        span удалить
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

