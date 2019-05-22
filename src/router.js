import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: () => import('components/recommend/recommend'),
      children: [
        {
          path: ':id',
          component: () => import('components/disc/disc')
        }
      ]
    },
    {
      path: '/singer',
      name: 'singer',
      component: () => import('components/singer/singer')
    },
    {
      path: '/rank',
      name: 'rank',
      component: () => import('components/rank/rank')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('components/search/search')
    }
  ]
})
