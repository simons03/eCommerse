import Vue from 'vue'
import Vuex from 'vuex'
import Products from './modules/Products'
import Carts from './modules/Carts'
import Users from './modules/Users'
import User from './modules/User'
import TotalPrice from './modules/TotalPrice'
import Orders from './modules/Orders'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Products,
    Carts,
    Users,
    User,
    TotalPrice,
    Orders
  }
})
