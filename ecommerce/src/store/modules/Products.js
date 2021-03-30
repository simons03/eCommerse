import axios from 'axios'

export default {

  state: {
    products: [],
    product: null

  },

  getters: {
    products: state => state.products,
    product: state => state.product
  },

  mutations: {
    GET_PRODUCTS: (state, prod) => {
      state.products = prod
      },
    
    GET_ONE_PRODUT: (state, oneProduct) => {
      state.product = oneProduct
    }
  },

  actions: {
    getProducts: async ({commit}) => {
      const res = await axios.get('http://localhost:9999/api/product')
      commit('GET_PRODUCTS', res.data)
    },
    getOneProduct: async ({commit}, id) => {
      const res = await axios.get('http://localhost:9999/api/product/' + id)
      commit('GET_ONE_PRODUT', res.data)
    },

  },





}