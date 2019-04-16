import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import serviceItem from '@/pages/serviceItem'
import serviceProcess from '@/pages/serviceProcess'
import exhibition from '@/pages/exhibition'
import contract from '@/pages/contract'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/serviceItem',
      name: 'serviceItem',
      component: serviceItem
    },
    {
      path: '/serviceProcess',
      name: 'serviceProcess',
      component: serviceProcess
    },
    {
      path: '/exhibition',
      name: 'exhibition',
      component: exhibition
    },
    {
      path: '/contract',
      name: 'contract',
      component: contract
    }
  ]
})
