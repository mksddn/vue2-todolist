import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {
        async getTodos(context, count = 0) {
            const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_start=${count}&_limit=10`)
            const todos = await res.json()
            context.commit('setTodos', todos)
        },

        async loadMore(context, count) {
            const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_start=${count}&_limit=10`)
            const todos = await res.json()
            context.commit('updateTodos', todos)
        }

    },
    mutations: {
        addTodo(state, todo) {
            state.todos.push(todo);
        },
        removeTodo(state, todoId) {
            state.todos.splice(state.todos.findIndex(t => t.id == todoId), 1)
        },
        todoDone(state, todoId) {
            const todo = state.todos.find(t => t.id == todoId);
            todo.completed = !todo.completed;
        },
        setTodos(state, todos) {
            state.todos = todos;
        },
        updateTodos(state, todos) {
            state.todos.push(...todos);
        },
        changeTodo(state, toDo) {
            state.todos.find(todo => todo.id === toDo.id).title = toDo.title
        }
    },
    state: {
        todos: []
    },
    getters: {
        allTodos(state) {
            return state.todos
        },

        todoById: (state) => (id) => {
            return state.todos.find(todo => todo.id == id)
        }
    },
    modules: {
    }
})
