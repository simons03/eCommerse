<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <!-- <a class="navbar-brand" href="#">Navbar</a> -->
    <router-link to="/"> 
      <img navbar-brand src="@/assets/images/logga/logga-white.png" alt="">
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/shop">Shop</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/madetoyou" class="nav-link">Made to you</router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/SignOut"> <i class="fas fa-shopping-cart"></i><span class="badge rounded-pill badge-notification bg-danger" v-if="cart.length > 0">{{cartItemCount}}</span></router-link>
        </li>
        <div class="nav-item dropdown mx-3">
              <a
                class="nav-link dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fas fa-user fa-lg" ></i>
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                <!-- <li><a class="dropdown-item" href="#">My profile</a></li> -->
                <!-- <li><a class="dropdown-item" href="#">Settings</a></li> -->
                <li class="">
                  <div>

                    <!-- <a class="dropdown-item" href="#">Logga in</a> -->



                    <div id="userLogin" class="dropdown-item" v-if="!loggedIn">
                      <h1 class="text-center">Logga in</h1>
                      <div  >
                        <form id="loginHolder" class="d-flex mt-4" @submit.prevent="validateIfEmty">
                          <input type="text" placeholder="E-mail" class="p-2 mt-2" v-model="email">
                          <input type="Password" placeholder="Lösenord" class="p-2 my-1" v-model="password">
                          <button class="btn btn-dark" type="submit">Logga in</button>
                          <p class="mt-3">Inte medlem? <router-link to="/register"> Registrera här! </router-link></p>
                          <p class="errorLoggin"></p>
                          <p class="errorLoggin">{{faildlogginmsg}}</p>
                        </form>
                      </div>
                    </div>

                    <div id="userLoggedIn" v-else>
                        <h4 class="text-center pt-3">Välkommen {{loggedInUser.firstname}} </h4>
                      <div class="btn-holder d-flex mt-5 col-10 m-auto">
                        <router-link to="/signout" class="btn btn-light mb-2">Min Kundkorg <i class="fas fa-shopping-cart"></i></router-link>
                        <router-link to="/myorders" class="btn btn-light mb-2 router">Mina Ordrar </router-link>
                          <!-- <button class="btn btn-light mb-2"> <router-link to="/myorders" class="Router">Mina Ordrar </router-link></button> -->
                        
                        <!-- <button class="btn btn-light">Mitt Konto</button> -->
                        <router-link to="/" class="btn btn-light mb-2 router">Mitt Konto </router-link>

                        <router-link to="/admin" class="btn btn-light mb-2 router" v-if="loggedInUser.admin">Admin panel </router-link>

                      </div>
                      <button class="btn btn-dark" id="signOut" @click.stop="LetsLoggOut">Logga ut</button>
                    </div>





                  </div>
                </li>
              </ul>
            </div>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      
      email: '',
      password: '',

      

    }
  },
  methods: {
    ...mapActions(['login', 'logout']),

    validateIfEmty() {
      let error = document.querySelector('.errorLoggin')
      if(this.email !== '' && this.password !== '') {
        error.innerText = ''

        let user = {
          email: this.email,
          password: this.password
        }

        let tomVariabel = ''
        this.login( {user,tomVariabel} )

      } else {
        error.innerText = 'Du måste fylla i dina uppgifter'
      }
    },
    LetsLoggOut() {

      this.$router.push({ path: '/' })
      this.logout()
    }

    

  }, 
  computed: {
    ...mapGetters(['users', 'user', 'cart', 'cartItemCount', 'loggedIn', 'loggedInUser', 'faildlogginmsg'])
  }

}
</script>
















<style scoped>
  nav {
    position: sticky;
    top: 0;
    z-index: 999;
  }
  img {
    height: 2rem;
  }
  .router-link-exact-active {
    text-decoration: underline;
    color: #fff !important;
  }
  #userLogin {
    position: relative;
    width: 15rem;
    height: 20rem;
    background: rgba(34, 34, 34, 0.185);
    flex-direction: column;
  }
  .errorLoggin {
    position: absolute;
    top: 0;  
    left: 0;
    right: 0;
    margin-top: 4rem;
    margin-left: 1.2rem;
    color: red;
    }


  #userLoggedIn {
    width: 15rem;
    height: 20rem;
    background: rgba(34, 34, 34, 0.185);
    position: relative;
  } 

  #loginHolder {
    flex-direction: column;
  }
  .btn-holder {
    flex-direction: column;
  }



  #signOut {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    margin-bottom: 1rem;
  }
  .router {
    text-decoration: none;
    color: #333 !important;
  }
</style>