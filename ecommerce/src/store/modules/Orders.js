import axios from 'axios'

export default {
  state: {
    allorders: [],
    userorders: [],
    oneuserorder: null,
    oneAdminOrder: null
  },
  getters: {
    userorders: state => state.userorders,
    oneuserorder: state => state.oneuserorder,
    allorders: state => state.allorders,
    oneAdminOrder: state => state.oneAdminOrder
  },
  mutations: {
    SET_USER_ORDERS: (state, result) => {
      state.userorders = result.reverse()
    },
    SET_ONE_USER_ORDER: (state, data) => {
      state.oneuserorder = data
    },
    SET_ALL_ORDERS: (state, data) => {
      state.allorders = data.reverse()
    },
    SET_ONE_ADMIN_ORDER: (state, data) => {
      state.oneAdminOrder = data
    },
    SET_ONE_ADMIN_ORDER_TO_NULL: (state) => {
      state.oneAdminOrder = null
    }
  },
  actions: {
    addOrder: async ({commit}, data) => {
      let newOrder = {
        userId: data.user._id,
        email: data.user.email,
        cart: data.cart,
        totalprice: data.totalPrice
      }
      await axios.post('http://localhost:9999/api/orders', newOrder)
      .then(res => {
        if(res.status === 201) {
          console.log('grattis din order är skickad')
        }
      })
      // commit('ORDER_PLACED')
      // console.log('--------------')
      console.log(commit)
    },

    findUserOrders: async ({commit}, id) => {

      const res = await axios.get('http://localhost:9999/api/orders')
      const result = await res.data.filter(order => order.userId == id)
      commit('SET_USER_ORDERS', result)
      console.log(result)
    },
    findOneUserOrder: async ({commit}, orderNr) => {
      const res = await axios.get('http://localhost:9999/api/orders/' + orderNr)

      commit('SET_ONE_USER_ORDER', res.data)
    },
    getAllOrders: async ({commit}) => {
      const res = await axios.get('http://localhost:9999/api/orders')
      commit('SET_ALL_ORDERS',res.data)
    },
    fintOneAdminOrder: async ({commit}, orderId) => {
      const res = await axios.get('http://localhost:9999/api/orders/' + orderId)
      commit('SET_ONE_ADMIN_ORDER', res.data)
    },
    clodeAdminOrderDetails: async ({commit}) => {
      commit('SET_ONE_ADMIN_ORDER_TO_NULL')
    }
  },
}