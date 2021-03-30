import axios from 'axios'
import jwt from 'jsonwebtoken'

export default {
  state: {
    user: 1,
    newUser: null,

    userToken: null,
    loggedIn: false,
    loggedInUser: null,
    faildlogginmsg: null

  },
  getters: {
    user: state => state.user,
    loggedIn: state => state.loggedIn,
    loggedInUser: state => state.loggedInUser,
    faildlogginmsg: state => state.faildlogginmsg
  },
  mutations: {
    GET_ONE_USER: (state, user) => {
      state.user = user
    }, 

    SET_USER: (state, token) => {
      if(token) {
        state.userToken = token
        state.loggedIn = true
      } else {
        state.userToken = null
        state.loggedIn = false

        state.loggedInUser = null
      }
    },
    CHECK_USER: state => {
      try {
        let token = localStorage.getItem('token')
        // decodar min token så jag kan få ut användaren
        const user = jwt.decode(token)

        if(token) {


          // jwt.verify(token, 'tB7A0Blt0FdON1rds5MRvFpoAHCcdyvvXtVNU65Jz6lcWAdetPTMj61JEtMFP50CoKe7E7G43P6PfaRyNBbWv0uZj4vWZjmcTq9onDificSncyJQXIAiyU6FOrr', (err, decoded) => {
          //   if(err) {
          //     console.log(err);
          //   }
          //   console.log(decoded);
          // })
          

          // lägger in user ifrån token
          state.loggedInUser = user.user

          state.userToken = token
          state.loggedIn = true
        } else {
          state.userToken = null
          state.loggedIn = false

          // Om ingen token finns blir loggedInUser null
          state.loggedInUser = null
        }
      }
      catch(err) {
        console.log(err)
      }
    },
    FAILD_LOGGIN: state => {
      state.faildlogginmsg = 'Felaktig epost eller lösenord'
    },
    SUCESS_LOGGIN: state => {
      state.faildlogginmsg = null
    }

  },
  actions: {
    getOneUser: async ({commit}, id) => {
      const res = await axios.get('http://localhost:9999/api/users/' + id)
      commit('GET_ONE_USER', res.data)
    },

    register: async ({dispatch}, _user) => {

      // let user = {
      //   email: _user.email,
      //   password: _user.password
      // }
      
      await axios.post('http://localhost:9999/api/users/register', _user)

      // dispatch('login', {user})
      console.log(dispatch)
    },

    login: ({commit, dispatch}, paylode) => {

      // console.log(paylode.email)
      // console.log(commit)
      axios.post('http://localhost:9999/api/users/login', paylode)
      .then(res => {
        if(res.status === 200) {

          localStorage.setItem('token', res.data.token)

          commit('SET_USER', res.data.token)

          dispatch('checkUser')
          // laddar om sidan
          // location.reload()
          commit('SUCESS_LOGGIN')
        } else if (res.status == 404){
          console.log('Finns ingen användare med det namnet')
        }
      })
      .catch(res => {
        console.log(res)
        // console.log('Felaktig epost eller lösenord')
        commit('FAILD_LOGGIN')
      })
    },

    checkUser: ({commit}) => {
      commit('CHECK_USER')
    },


    logout: ({commit}) => {
      let token = localStorage.getItem('token')
      if(token) {
        localStorage.removeItem('token')

        commit('SET_USER', null)
      }
    }






  },
}