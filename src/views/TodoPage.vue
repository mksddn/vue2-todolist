<template>
  <div v-if="!!todoById">
    <h2>Изменить задачу</h2>

    <form class="tdchange">
      <input type="text" v-model="todoById.title">
      <button @click.prevent="changeTodoTitle" :disabled="disableButton">Сохранить</button>
    </form>

    <p ref="discl" class="discl">Внесены изменения в состояние хранилища, но они сбросятся при возврате к задачам, так
      как мы не используем localStorage</p><br>

    <router-link :to="{name: 'Home'}">К задачам</router-link>
  </div>
</template>

<script>
export default {
  name: 'TodoPage',

  data() {
    return {
      freezeTodoTitle: '',
      disableButton: true
    }
  },

  computed: {
    todoById() {
      return this.$store.getters.todoById(this.$route.params.id)
    }
  },

  watch: {
    'todoById.title'(newVal, oldVal) {
      if (oldVal !== undefined) {
        this.disableButton = false
      } else {
        this.freezeTodoTitle = this.todoById.title
      }

      if (newVal === this.freezeTodoTitle) {
        this.disableButton = true
      }

    }
  },

  mounted() {
    this.getTodos()
  },

  methods: {
    getTodos() {
      if (!this.$store.state.todos.length) {
        this.$store.dispatch('getTodos')
      }
    },

    changeTodoTitle() {
      console.log('Изменения сохранены')
      this.$refs.discl.classList.add('show')
      setTimeout(() => {
        this.$refs.discl.classList.remove('show')
      }, 5000)

    },
  }
}
</script>

<style lang="sass" scoped>
.tdchange
  display: flex
  flex-direction: column
  max-width: 300px
  margin: 60px auto 0
  input
    margin-bottom: 15px
    text-transform: uppercase
button
  background-color: #4f68d8
  color: #fff
  border: none
button:hover
  background-color: #3a56d2
button:disabled
  background-color: lightgray
.discl
  display: inline-block
  border: 1px solid #666
  border-radius: 5px
  padding: 30px
  margin-bottom: 30px
  opacity: 0
  transition: 0.2s all
  &.show
    opacity: 1
</style>