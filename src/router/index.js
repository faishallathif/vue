import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import seller from '@/components/seller'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/seller',
    name: 'seller',
    component: seller
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
