<template>
  <div class="holder" v-if="loggedInUser.admin">
    <admin-menu />
    <div class="container my-5">
      <div>
        <h1 class="text-center">Lägg till produkt</h1>
        <div>
          <add-product />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import axios from 'axios'
import AddProduct from '../components/Admin/addProduct.vue'
import AdminMenu from '../components/Navigation/AdminMenu.vue'



export default {
  components: { 
    AddProduct,
    AdminMenu,
  },
  computed: {
    ...mapGetters(['loggedInUser'])
  }


}
</script>

<style scoped>
.holder {
  min-height: 66.3vh;
}
</style>