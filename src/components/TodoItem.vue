<template>
  <li>
    <span v-bind:class="{done: todo.completed}">
      <input type="checkbox" v-on:change="todo.completed = !todo.completed">
      {{todo.title | uppercase}}
      <router-link class="edittd" :to="{name: 'TodoPage', params: {id: todo.id}}">✍️</router-link>
    </span>
    <button v-on:click="$store.commit('removeTodo', todo.id)" class="deltd">🗑</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: Number
  },
  filters: {
    uppercase(value) {
      return value.toUpperCase()
    }
  }
}
</script>

<style lang="sass" scoped>
  li
    border: 1px solid #ccc
    display: flex
    justify-content: space-between
    align-items: center
    align-content: center
    padding: 1rem 2rem
    margin-bottom: 1rem

  input
    margin-right: 1rem

  .done
    text-decoration: line-through

  .edittd, .deltd
    cursor: pointer
  .edittd
    display: none
    font-size: 80%
    margin-left: 10px
    text-decoration: none
  .deltd
    margin: 0
    background: none
    padding: 0

  .list-item:hover .edittd
    display: inline
</style>