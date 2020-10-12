import Vue from 'vue'
import VueRouter from 'vue-router'
import Orders from '../components/Orders.vue'
import Details from '../components/Details.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Orders',
    component: Orders
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: Details
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
