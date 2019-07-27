<template lang="pug">
.main-wrapper 
  header.header
    .header__user
      .user__pic
        img(src="../../images/content/mini.png").user__pic-avatar
      .user__name Вероника Маникина            
      .header__title Панель администрирования
      .header__btn Выйти
    nav.nav
      ul.nav-list
        li.nav-item
          a.nav-link Обо мне
        li.nav-item
          a.nav-link Работы
        li.nav-item
          a.nav-link Отзывы
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
            input(type="text" placeholder="Дизайн сайта")
          label.form-info
            .form__label-text Ссылка
            input(type="text" placeholder="Ссылка")
          label.form-info
            .form__label-text Описание
            input(type="text" placeholder="Описание")

    .works__cards
      .works__card 1
        button.works__card-btn Добавить работу
      .works__card 2
        .works__card-pic
          img(src="../../images/content/").works__card-avatar
        .works__card-info
          h5.works__card-title Сайт школы образования
          .works__card-desc Эта девушка проходила обучение веб-разработке не где-то, а в Loftschool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
        a(href="#").works__card-link http:oftschool.ru
        span править
        span удалить
      .works__card 3
        .works__card-pic
          img(src="../../images/content/").works__card-avatar
        .works__card-info
          h5.works__card-title Сайт школы образования
          .works__card-desc Эта девушка проходила обучение веб-разработке не где-то, а в Loftschool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
        a(href="#").works__card-link http:oftschool.ru
        span править
        span удалить
      .works__card 4
        .works__card-pic
          img(src="../../images/content/").works__card-avatar
        .works__card-info
          h5.works__card-title Сайт школы образования
          .works__card-desc Эта девушка проходила обучение веб-разработке не где-то, а в Loftschool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
        a(href="#").works__card-link http:oftschool.ru
        span править
        span удалить
      .works__card 5
        .works__card-pic
          img(src="../../images/content/").works__card-avatar
        .works__card-info
          h5.works__card-title Сайт школы образования
          .works__card-desc Эта девушка проходила обучение веб-разработке не где-то, а в Loftschool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
        a(href="#").works__card-link http:oftschool.ru
        span править
        span удалить

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
            img(src="../../images/content/").comments__card-avatar
              .works__card-info
                .comments__name Владимир Сабанцев
                .comments__position.text Преподаватель
              .works__card-desc Этот код выдержит любые испытания
              buttons
                button править
                button удалить
        .comments__card 3
              .comments__card-pic
            img(src="../../images/content/").comments__card-avatar
              .works__card-info
                .comments__name Владимир Сабанцев
                .comments__position.text Преподаватель
              .works__card-desc Этот код выдержит любые испытания
              buttons
                button править
                button удалить
        .comments__card 4
              .comments__card-pic
            img(src="../../images/content/").comments__card-avatar
              .works__card-info
                .comments__name Владимир Сабанцев
                .comments__position.text Преподаватель
              .works__card-desc Этот код выдержит любые испытания
              buttons
                button править
                button удалить
        .comments__card 5
              .comments__card-pic
            img(src="../../images/content/").comments__card-avatar
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
  html, body {
    margin: 0;
    box-sizing: border-box;
  }
  * {
    box-sizing: border-box;
  }
  header {
    background-color: #3e3e59;
    width: 100%;
    height: 80px;
  }
  nav {
    width: 100%;
    height: 77px;
  }
  .main-content {
    width: 100%;
    background-color: #f8f9fe;
    padding: 80px;
  }
  .works__title {
    margin-bottom: 60px;;
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


