<template>
  <div id="app">
    <appNavbar :cart="cart"/>

    <router-view/>

    <appFooter />
  </div>
</template>

<script>
import appNavbar from './components/Navigation/Navbar'
import appFooter from './components/Navigation/Footer'

import {mapActions} from 'vuex'



export default {
  components: {
    appNavbar,
    appFooter
  },

  data() {
    return {
      cart: [],
    }
  },
  methods: {
    ...mapActions(['checkUser']),
  },
 
  created() {
    this.checkUser()
  },
  mounted() {
    // this.getProducts()

  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
