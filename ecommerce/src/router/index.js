import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/shop.vue'
import Admin from '../views/Admin.vue'
import Register from '../views/Register.vue'
import Myorders from '../views/Myorders.vue'
import OrderCompleted from '../views/OrderCompleted.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, 
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/myorders',
    name: 'Myorders',
    component: Myorders
  },
  {
    path: '/orderCompleted',
    name: 'OrderCompleted',
    component: OrderCompleted
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/dressingroom/:id',
    name: 'Dressingroom',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DressingRoom.vue')
  },
  {
    path: '/signout/',
    name: 'SignOut',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SignOut.vue')
  },
  {
    path: '/adminproducts',
    name: 'AdminProducts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminProducts.vue')
  },
  {
    path: '/adminorders',
    name: 'AdminOrders',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminOrders.vue')
  },
  {
    path: '/madetoyou',
    name: 'MadeToYou',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MadeToYou.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
