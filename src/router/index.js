import Vue from 'vue'
import Router from 'vue-router'
import Ceshi from '@/components/Ceshi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Ceshi',
      component: Ceshi
    }
  ]
})
