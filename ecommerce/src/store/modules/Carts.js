// import axios from 'axios'


export default {
  state: {
    cart: [],
  },

  getters: {
    cart: state => state.cart,

    cartPrice: state=> {
      let Total = 0
      state.cart.forEach(sum => {
        Total += sum.price
      })
      return Total
    },

    cartItemCount: state => {
      let items = 0
      state.cart.forEach(item => {
        items += item.quantity
      })
      return items
    },
  },

  mutations: {
    ADD_PRODUCT_TO_CART: (state, {product, quantity, price}) => {
      let exists = state.cart.find(item => item.product._id === product._id)

      if(exists) {
        exists.quantity += quantity
        exists.price += price
        return
      }
      state.cart.push({product, quantity, price})
    },

    DELETE_PRODUCT_FROM_CART: (state, {product, quantity}) => {
      // console.log(state)
      // console.log(product._id)
      // console.log(quantity)

      let exists = state.cart.find(item => item.product._id === product._id)
      if(exists) {
        if(quantity < 2) {
          // console.log('det finns färre än 2 ')

            state.cart = state.cart.filter(item => {
              return item.product._id != product._id;
          });
        } 
        else {
          // här ska jag minska quantity på min produkt
          // console.log('Det finns fler än 1 produkt')
          exists.quantity -= 1        
          exists.price -= product.price
        }
      }
    },
    RESET_CART: (state) => {
      state.cart = []
    }
  },

  actions: {
    addToCart: ({commit}, {product, quantity, price}) => {
      commit('ADD_PRODUCT_TO_CART', {product, quantity, price})
    },

    deleteProduct: ({commit}, {product, quantity}) => {
      commit('DELETE_PRODUCT_FROM_CART', {product, quantity})
    },

    resetCart: ({commit}) => {
      commit('RESET_CART')
    }
  },
}