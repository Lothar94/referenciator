import Vue from 'vue'
import Router from 'vue-router'
import referenciator from '@/components/tools/referenciator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'referenciator',
      component: referenciator
    }
  ]
})
