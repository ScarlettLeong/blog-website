import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/pages/Login'
import Main from '@/components/pages/Main'
import BlogList from '@/components/BlogList'
import BlogDetail from '@/components/BlogDetail'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/blog',
      name: 'Main',
      component: Main,
      children: [
        {
          path: 'list',
          name: 'BlogList',
          component: BlogList,
        },
        {
          path: 'detail/:id',
          name: 'BlogDetail',
          component: BlogDetail,
        }
    ],
    }
  ]
})