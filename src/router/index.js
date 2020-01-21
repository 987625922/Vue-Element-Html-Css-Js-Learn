import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/project/Login.vue'
import Home from '../views/project/Home.vue'
import Add from '../views/project/Add.vue'
import Learn from '../views/LearnNavigation'
import Basic from '../views/List'
import p2GetList from '../views/project2/GetList'
import p2Login from '../views/project2/Login'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios);
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'navigation',
      component: Learn
    },
    {
      path: '/p2/getlist',
      name: 'p2GetList',
      component: p2GetList
    },
    {
      path: '/p2/login',
      name: 'p2login',
      component: p2Login
    },
    {
      path: '/basic',
      name: 'basic',
      component: Basic
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'list',
          name: 'list',
          component: () => import(/* webpackChunkName: "list" */ '../views/project/List.vue')
        },
        {
          path: 'user',
          name: 'user',
          component: () => import(/* webpackChunkName: "user" */ '../views/project/User.vue')
        }
      ]
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    }
  ]
})

