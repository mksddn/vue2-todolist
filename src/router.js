import Vue from 'vue'
import Router from 'vue-router'
import Todos from '@/views/Todos'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Todos
    },
    {
      path: '/about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/todo/:id',
      name: 'TodoPage',
      component: () => import('./views/TodoPage.vue')
    }
  ]
})