<template>
  <div>
    <h2>Список задач</h2>

    <router-link to="/about">О приложении</router-link>

    <div id="todoBar">

      <AddTodo @add-todo="addTodo" />

      <div class="select-wrapper">
        <select v-model="filter">
          <option value="not-completed">Нужно выполнить</option>
          <option value="completed">Выполнено</option>
          <option value="all">Все</option>
        </select>
      </div>

    </div>

    <Loader v-if="loading" />

    <TodoList v-else v-bind:todos="filteredTodos" />

    <LoadMore />

  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
import Loader from '@/components/Loader'
import LoadMore from '@/components/LoadMore.vue'

export default {
  name: 'app',

  components: {
    TodoList,
    AddTodo,
    Loader,
    LoadMore
  },

  data() {
    return {
      loading: true,
      filter: 'not-completed'
    }
  },

  computed: {
    todos() {
      return this.$store.getters.allTodos
    },

    filteredTodos() {
      if (this.filter === 'all') {
        return this.todos
      }
      if (this.filter === 'completed') {
        return this.todos.filter(t => t.completed)
      }
      if (this.filter === 'not-completed') {
        return this.todos.filter(t => !t.completed)
      }
    }
  },

  watch: {
    todos(value) {
      value.length ? this.loading = false : this.loading = true
    }
  },

  mounted() {
    this.getTodos()
  },

  methods: {
    getTodos() {
      this.$store.dispatch('getTodos')
    },

    addTodo(todo) {
      this.todos.unshift(todo)
    }
  },
}
</script>

<style lang="sass" scoped>
#todoBar
  display: flex
  justify-content: space-around
  flex-wrap: wrap
  margin: 30px 0
  border: 1px solid #c8c8c8
  border-radius: 5px
  background-color: #eee
  &>*
    margin: 15px
select
  appearance: none
  padding-left: 10px
.select-wrapper
  position: relative
.select-wrapper::after
  content: "▼"
  font-size: 0.8rem
  top: 11px
  right: 10px
  position: absolute
</style>
  