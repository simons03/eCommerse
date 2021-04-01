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
    // oneuserorder: state => state.oneuserorder,
    oneuserorder: state => {
        if(state.oneuserorder) {

          let date = dateBuilder(new Date(state.oneuserorder.createdAt))
          let order = {
            ...state.oneuserorder,
            createdAt: date
          }
          // console.log(order)
          return order
        } else {
          return state.oneuserorder
        }


    },
    allorders: state => state.allorders,
    oneAdminOrder: state => {
      if(state.oneAdminOrder) {

        let date = dateBuilder(new Date(state.oneAdminOrder.createdAt))
        let order = {
          ...state.oneAdminOrder,
          createdAt: date
        }
        // console.log(order)
        return order
      } else {
        return state.oneAdminOrder
      }


  },
  },
  mutations: {
    SET_USER_ORDERS: (state, result) => {
      // state.userorders = result.reverse()
      let orders = result.map(order => {
        // let d = new Date(order.createdAt)
        // let year = d.getFullYear()
        // let month = d.getMonth()
        // let day = d.getDate()

        // order.createdAt = `${year}-${month}-${day}`
        order.createdAt = dateBuilder(new Date(order.createdAt))

        return order
      })

      state.userorders = orders
    },
    SET_ONE_USER_ORDER: (state, data) => {
      state.oneuserorder = data
    },
    SET_ALL_ORDERS: (state, data) => {

      let orders = data.map(order => {

        order.createdAt = dateBuilder(new Date(order.createdAt))

        return order

      })
      state.allorders = orders.reverse()
    },
    SET_ONE_ADMIN_ORDER: (state, data) => {
      state.oneAdminOrder = data
    },
    SET_ONE_ADMIN_ORDER_TO_NULL: (state) => {
      state.oneAdminOrder = null
    }
  },
  actions: {
    addOrder: async (context, data) => {
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
        else {
          console.log('nått gick fel')
        }
      })
      // commit('ORDER_PLACED')
      // console.log('--------------')
      // console.log(commit)
    },

    findUserOrders: async (context, id) => {

      const res = await axios.get('http://localhost:9999/api/orders')
      const result = await res.data.filter(order => order.userId == id)
      context.commit('SET_USER_ORDERS', result)
      // console.log(result)
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

const dateBuilder = (d) => {
  let year = d.getFullYear()
  let month = d.getMonth() + 1
  let day = d.getDate()

  let date = `${year}-${month}-${day}`
  return date
}