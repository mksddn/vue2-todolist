import Vue from 'vue'
import Router from 'vue-router'
import Todos from '@/views/Todos'

Vue.use(Router)

const ghpRepoName = '/'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: `${ghpRepoName}/`,
      name: 'Home',
      component: Todos
    },
    {
      path: `${ghpRepoName}/about`,
      name: 'About',
      component: () => import('./views/About.vue')
    },
    {
      path: `${ghpRepoName}/todo/:id`,
      name: 'TodoPage',
      component: () => import('./views/TodoPage.vue')
    }
  ]
})