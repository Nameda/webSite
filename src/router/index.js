import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Scenery from '@/pages/scenery'
import Theme from '@/pages/theme'


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
      path: '/scenery',
      name: 'Scenery',
      component: Scenery
    },
    {
      path: '/theme',
      name: 'Theme',
      component: Theme
    }
  ]
})
