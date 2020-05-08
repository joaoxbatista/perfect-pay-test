import Vue from 'vue'
import VueRouter from 'vue-router'
import SimplePage from '../layouts/SimplePage'
import Store from '../pages/Store'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: SimplePage,
    children: [
      { path: '', name: 'store', component: Store },
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
