import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home.vue'
import Odther from '../pages/Odther/Odther.vue'
import Seacher from '../pages/Seacher/Seacher.vue'
import Personal from '../pages/Personal/Personal.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
    path:'/msite',
    component:Home
    },
    {
      path:'/odther',
      component:Odther
    },
    {
      path:'/seacher',
      component:Seacher
    },
    {
      path:'/personal',
      component:Personal
    },
    {
      path:'/',
      redirect: '/msite'
    }
  ]
})