import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import serviceItem from '@/pages/serviceItem'
import serviceProcess from '@/pages/serviceProcess'
import exhibition from '@/pages/exhibition'
import contract from '@/pages/contract'
import detail from '@/pages/detail'


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
    },{
      path: '/detail',
      name: 'detail',
      component: detail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition  //游览器返回记住位置
    } else {
      return { x: 0, y: 0 } //滚动到顶
    }
  }
})
