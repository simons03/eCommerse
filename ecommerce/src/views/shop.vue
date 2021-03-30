<template>
  <div>
    <div class="container ">
      <h1 class="my-4 text-center">Webbshop</h1>
    </div>

    <div class="container">
      <div id="output" class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        <ShopingCard v-for="product in products" :key="product._id" :product="product"/>
      </div>
    </div>

  </div>
</template>

<script>

import ShopingCard from '../components/ShopingCard'


import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'

export default {  
  components: {
    ShopingCard
  },
  
  methods: {
    ...mapActions(['getProducts']),

    kolla() {
      console.log(this.products)
    }
  },
  created() {

  },
  computed: {
    ...mapGetters(['products'])
  },
  mounted() {
    this.getProducts()
  }

}
</script>

<style>








</style>