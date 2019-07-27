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
          img(src="../../images/content/mini.png").works__card-avatar
        .works__card-info
          h5.works__card-title Сайт школы образования
          .works__card-desc Эта девушка проходила обучение веб-разработке не где-то, а в Loftschool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
        a(href="#").works__card-link http:oftschool.ru
        span править
        span удалить
      .works__card 3
        .works__card-pic
          img(src="../images/content/mini.png").works__card-avatar
        .works__card-info
          h5.works__card-title Сайт школы образования
          .works__card-desc Эта девушка проходила обучение веб-разработке не где-то, а в Loftschool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
        a(href="#").works__card-link http:oftschool.ru
        span править
        span удалить
      .works__card 4
        .works__card-pic
          img(src="../images/content/mini.png").works__card-avatar
        .works__card-info
          h5.works__card-title Сайт школы образования
          .works__card-desc Эта девушка проходила обучение веб-разработке не где-то, а в Loftschool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
        a(href="#").works__card-link http:oftschool.ru
        span править
        span удалить
      .works__card 5
        .works__card-pic
          img(src="../images/content/mini.png").works__card-avatar
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

</style>

