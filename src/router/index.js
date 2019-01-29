import Vue from 'vue'
import Router from 'vue-router'
import Ceshi from '@/components/Ceshi'

Vue.use(Router)

const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },

  {
    path: '/',
    name: 'Ceshi',
    component: Ceshi
  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
