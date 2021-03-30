


 export default {
  state: {
    TotalPrice: 0
  },
  getters: {
    TotalPrice: state => state.TotalPrice
  },
  mutations: {
    // ADD_TO_TOTAL_PRICE: (state, price) => {

    //   let total = 0
    //   total += price
    //   state.TotalPrice = total
      
    //   console.log(state.TotalPrice)
    //   return
    //   // console.log(total)
    // }

    ADD_TO_TOTAL_PRICE: (state, price) => {

      let total = 0
      total = state.TotalPrice

      total += price

      state.TotalPrice = total


      console.log(state.TotalPrice)
    }
  },
  actions: {
    calcPrice: ({commit}, price) => {
      commit('ADD_TO_TOTAL_PRICE', price)
    }
  },
}