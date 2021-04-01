<template>
  <div class="holder" v-if="loggedInUser.admin">
    <admin-menu />
    <div class="container">
      <h4 class="text-center mt-4">Sök efter ordrar</h4>
      <div class="row input-grou my-4" >
        <!-- <div class="col-3">
          <input type="text" class="form-control " placeholder="Id" v-model="searchId">
        </div> -->
        <div class="col-12">
          <input type="text" class="form-control " placeholder="Mail" v-model="searchMail">
        </div>
        <!-- <div class="col-3">
          <input type="text" class="form-control " placeholder="Pris" v-model="searchPrice">
        </div>
        <div class="col-3">
          <input type="text" class="form-control " placeholder="Datum" v-model="searchDate">
        </div> -->

      </div>

      <div v-if="allorders.length">
        <table class="border table">
          <tr>
            <th scope="col"> Id</th>
            <th scope="col"> Email</th>
            <th scope="col"> Pris</th>
            <th scope="col"> Datum</th>
          </tr>

          <all-orders-card v-for="order in filterOrders" :key="order._id" :order="order"/>
        </table>
      </div>

      <!-- Här ska ordern listas ut -->
      <div v-if="oneAdminOrder">
        <div id="adminOrderDetails" >
          <div id="orderDetails">
          
              <h1 class="text-center mt-2">Order details</h1>
              <h4 class="text-center">Email: {{oneAdminOrder.email}} </h4>
              <h5 class="text-center">Skapad: {{oneAdminOrder.createdAt}} </h5>
            
            <i class="fas fa-times" @click="clodeAdminOrderDetails"></i>
          </div>
          <h4 class="text-center my-5">Produkter</h4>
          <div id="adminproductdetails" class="border">
            <table>
              <tr>
                <th>Product:</th>
                <th>Antal:</th> 
                <th>Pris:</th>
              </tr>
              <admin-products-details-card v-for="product in oneAdminOrder.cart" :key="product._id" :product="product"/>


            </table>
          </div>
          <div class="Detailstotal">
            <h4 class="totalPrice mt-3">Total: {{oneAdminOrder.totalprice}} kr </h4>
          </div>
        </div>
      </div>








    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AdminProductsDetailsCard from '../components/Admin/AdminProductsDetailsCard.vue'
import AllOrdersCard from '../components/Admin/AllOrdersCard.vue'
import AdminMenu from '../components/Navigation/AdminMenu.vue'
export default {
  data() {
    return {
      searchId: '',
      searchMail: '',
      searchPrice: '',
      searchDate: '',


      showDetails: true
    }
  
  },
  components: { 
    AdminMenu,
    AllOrdersCard,
    AdminProductsDetailsCard 
  },
  methods: {
    ...mapActions(['getAllOrders', 'clodeAdminOrderDetails']),

  },
  computed: {
    ...mapGetters(['allorders', 'oneAdminOrder', 'loggedInUser']),
    filterOrders() {

      return this.allorders.filter(order => order.email.match(this.searchMail))
    }
  },
  created() {
    this.getAllOrders()
  }

}
</script>

<style scoped>
.container {
  position: relative;
}
.holder {
  min-height: 66.3vh;
}
table {
  width: 100%;
}
th {
  font-size: 1.4rem;
}



#adminOrderDetails {
  width: 1000px;
  height: 800px;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: 2px solid #333;
  border-radius: 1rem;
}
#orderDetails {
  position: relative;
}
i {
  position: absolute;
  right: 0;
  top: 0;
  font-size: 3rem;
  color: red;
  padding-right: 1.4rem;
  cursor: pointer;
}
#adminproductdetails {
  width: 80%;
  margin: auto;
  height: 30rem;
}
table {
  width: 100%;

}
.Detailstotal {
  width: 80%;
  margin: auto;
  position: relative;
}
.totalPrice {
  position: absolute;
  right: 0;
}


</style>