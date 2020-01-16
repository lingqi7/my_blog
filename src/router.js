import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

const Tagarticle = r => require.ensure([], () => r(require('./views/Tagarticle')))
const Tags = r => require.ensure([], () => r(require('./views/Tags')))
const Archives = r => require.ensure([], () => r(require('./views/Archives')))
const Articles = r => require.ensure([], () => r(require('./views/Articles')))
const Admin = r => require.ensure([], () => r(require('./views/Admin')))
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/tags/:id',
      name: 'tagarticle',
      component: Tagarticle
    },
    {
      path: '/tags',
      name: 'tags',
      component: Tags
    },
    {
      path: '/archives',
      name: 'archives',
      component: Archives
    },
    {
      path: '/articles/:id',
      name: 'articles',
      component: Articles
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
