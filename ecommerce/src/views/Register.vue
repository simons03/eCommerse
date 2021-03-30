<template>
  <div id="registerHolder" class="container">
    <h1 class="text-center mt-5">Registrara konto</h1>
    <div>
      <form id="registerForm" class="col-5 m-auto mt-5" @submit.prevent="onSubmit">
        <div class="row mb-4">
          <div class="col">
            <div>
              <input type="text" id="name" class="form-control" placeholder="Förnamn" v-model="user.firstname"/>
            </div>
          </div>
          <div class="col">
            <div>
              <input type="text" id="form3Example2" class="form-control" placeholder="Efternamn" v-model="user.lastname"/>
            </div>
          </div>
        </div>
        <div class="mb-4">
          <input type="email" id="form3Example3" class="form-control" placeholder="E-mail" v-model="user.email"/>
        </div>
        <div class="mb-4">
          <input type="password" id="form3Example4" class="form-control" placeholder="Lösenord" v-model="user.password"/>
        </div>
        <div class="col-4 mt-5 m-auto">
          <!-- <p id="registerError">Du får inte lämna nått fält tomt</p> -->
          <button type="submit" class="btn btn-primary btn-block mb-4">Sign up</button>
        </div>
      </form>
      <p id="registersucsess" class="text-center h2"></p>
      <p id="registererror" class="text-center h2"></p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
// import axios from 'axios'


export default {
  name: "Register",
  data() {
    return {
      user: {
        firstname: '',
        lastname: '',
        email: '', 
        password: '',
      }
    }
  },
  methods: {
    
    ...mapActions(['register']),
    onSubmit() {
      let sucsess = document.querySelector('#registersucsess')
      let error = document.querySelector('#registererror')
      if(this.user.firstname !== '' && this.user.lastname !== '' && this.user.email !== '' && this.user.password !== '') {
        // console.log(this.user)
        this.register(this.user)
        sucsess.innerText = 'Kontot är skapat!'
        error.innerText = ''
      } else {
        error.innerText = 'Du måste fylla i alla fälten!'
      }
    },

    // denna fungerar
    // createUser(user) {
    //   // this.createUser(this.user)
    //   this.$store.dispatch('createUser', user)
    // },




  }


}
</script>

<style scoped>
 #registerHolder {
   min-height: 65vh;
   width: 100%;
 }
 #registerForm {
   position: relative;
 }
 #registerError {
   position: absolute;
   bottom: 0;
   margin-bottom: 3rem;
   color: red;
   font-weight: bold;
 }
 #registersucsess {
   color: green;
 }
 #registererror {
   color: red;
 }
</style>