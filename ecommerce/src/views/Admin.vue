<template>
  <div class="holder">
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
// import axios from 'axios'
import AddProduct from '../components/Admin/addProduct.vue'
import AdminMenu from '../components/Navigation/AdminMenu.vue'



export default {
  components: { 
    AddProduct,
    AdminMenu,
  },


}
</script>

<style scoped>
.holder {
  min-height: 66.3vh;
}
</style>