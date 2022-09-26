<template>
  <div>
    <h2>О приложении</h2>

    <p><strong>TODO LIST (Vue 2 + SASS)</strong></p>
    <br>
    <ul>
      <li>Получение данных с апи (json placeholder).</li>
      <li>Хранение списка todos в vuex. Создание новых, редактирование и удаление элементов списка также через vuex.
        Обновление страницы сбрасывает список до изначального.</li>
      <li>Вывод списка todo на экран.</li>
      <li>Дозагрузка 10 элементов списка по нажащию кнопки.</li>
      <li>Возможность просмотреть элемент списка на отдельной странице, используя vue router.</li>
      <li>Анимация элементов списка.</li>
    </ul>
    <br>

    <router-link to="/">К задачам</router-link>

  </div>
</template>

<style lang="sass" scoped>
ul
  max-width: 300px
  margin: 0 auto
  list-style: none
  text-align: center
  padding-left: 0
li
  margin-bottom: 10px
</style>
  