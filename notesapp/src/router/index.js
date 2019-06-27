import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/components/TodoList'
import NewTodoList from '@/components/NewTodoList'
import Home from '@/components/Home'

// Components
import Card from '../components/Card';

Vue.component('Card', Card);

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/posts',
      name: 'Home',
      component: Home
    },
    {
      path: '/posts/:index',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/posts-create',
      name: 'NewTodoList',
      component: NewTodoList
    },
    
  ]
})