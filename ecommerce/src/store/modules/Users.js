import axios from 'axios'


export default {
  state: {
    users: [],
  },
  getters: {
    users: state => state.users,

  },
  mutations: {
    GET_USERS: (state, user) => {
      state.users = user
      },

  },
  actions: {
    getUsers: async ({commit}) => {
      const res = await axios.get('http://localhost:9999/api/users')
      commit('GET_USERS', res.data)
    },
  },
}