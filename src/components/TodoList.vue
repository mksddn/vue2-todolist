<template>
  <div>
    <ul>
      <transition-group name="list" tag="li">
        <TodoItem v-for="(todo, i) of todos" v-bind:todo="todo" v-bind:index="i" v-bind:key="todo.id"
          class="list-item" />
      </transition-group>
    </ul>

    <p v-if="!todos.length">Нет задач!</p>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'
export default {
  props: ['todos'],
  components: {
    TodoItem
  },
}
</script>

<style lang="sass" scoped>
ul
  list-style: none
  margin: 0
  padding: 0
.list-item
  background-color: #fcfcfc

.list-enter-active,
.list-leave-active
  transition: all 0.2s
.list-enter,
.list-leave-to
  opacity: 0
  transform: translatex(130px)
</style>