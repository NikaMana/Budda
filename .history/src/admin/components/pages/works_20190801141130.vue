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
      .works__card
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
    background: #555;
    width: 100%;
    height: 556px;
  }

  .works__form {
    width: 100%;
    background: #fff;
    margin-bottom: 80px;
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
  .form__photo-add {
    width: 100%;
    height: 276px;
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

