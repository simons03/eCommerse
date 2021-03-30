<template>
  <div class="holder">
    <admin-menu />
    <div class="container mt-5">
      <h1 class="text-center">Alla produkter</h1>
      <div class="my-5">
        <appadmincard v-for="product in products" :key="product._id" :product="product"/>
      </div>

    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import appadmincard from '../components/Admin/AdminCard.vue'
import AdminMenu from '../components/Navigation/AdminMenu.vue'
export default {
  components: { 
    AdminMenu,
    appadmincard
  },
  methods: {
    ...mapActions(['getProducts']),

  },
  computed: {
    ...mapGetters(['products'])
  },
  created() {
    this.getProducts()
  }

}
</script>

<style scoped>
.holder {
  min-height: 66.3vh;
}
</style>