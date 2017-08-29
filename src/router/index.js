import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import BlogIndex from '@/components/blog/BlogIndex'
import BlogNew from '@/components/blog/BlogNew'
import BlogEdit from '@/components/blog/BlogEdit'

import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/blogs',
      name: 'BlogIndex',
      component: BlogIndex
    },
    {
      path: '/blogs/new',
      name: 'BlogNew',
      component: BlogNew
    },
    {
      path: '/blogs/edit/:id',
      name: 'BlogEdit',
      component: BlogEdit
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ]
})
