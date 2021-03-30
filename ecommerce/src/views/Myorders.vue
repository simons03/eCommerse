<template>
  <div class="container d-flex">
    <div class="box border pt-4">

      <myorders-card v-for="orders in userorders" :key="orders._id" :orders="orders"/>

    </div>
    <div class="box border">

      <!-- När kan tryckt på en order ska denna komma fram  -->
      <div class="myorderdetails p-4 border" v-if="oneuserorder">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <h2>Order Nr: </h2>
            <p>{{oneuserorder._id}}</p>
            <p class="h5">Email: {{oneuserorder.email}}</p>
          </div>
          <div>
            <h5  @click="asf">Datum: </h5>
            <p>{{oneuserorder.createdAt}}</p>
          </div>
        </div>
        <h3 class="mt-3">Producter:</h3>
        <table>
            <tr>
              <th>Title</th>
              <th>Pris</th>
              <th>Antal</th>
            </tr>
          <my-order-details-card v-for="order in oneuserorder.cart" :key="order._id" :order="order"/>

        </table>


          <h2 id="total">Totalt: {{oneuserorder.totalprice}} kr</h2>
      </div>
      <!-- När kan tryckt på en order ska denna komma fram  -->

      <!-- detta ska synas när man  kommer in på sidan-->
      <div class="myorderdetails p-5 d-flex justify-content-center align-items-center" v-else>
        <h2 class="text-center">Välj en order att inspektera från listan till vänster!</h2>
      </div>
      <!-- detta ska synas när man  kommer in på sidan -->

      <!-- Spinner medans det laddar -->
<!--       <div class="myorderdetails p-5 d-flex justify-content-center align-items-center">
        <h2>Laddar!! </h2>
      </div> -->
      <!-- Spinner medans det laddar -->

   

      <!-- <button @click="gsagsadg">gasgas</button> -->
    </div>
    
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import MyOrderDetailsCard from '../components/Myorders/MyOrderDetailsCard.vue'
import MyordersCard from '../components/Myorders/MyordersCard.vue'



export default {
  components: { 
    MyordersCard,
    MyOrderDetailsCard 
  },
  data() {
    return {

    }
  },
  methods: {
    ...mapActions(['findUserOrders']),
    asf() {
      console.log(this.oneuserorder.createdAt)
      let date = new Date(this.oneuserorder.createdAt)
      console.log(date.getFullYear())
    },


    gsagsadg() {
      console.log(this.loggedInUser)
    }
  }, 
  computed: {
    ...mapGetters(['loggedInUser', 'userorders', 'oneuserorder']),

  },
  created() {
    this.findUserOrders(this.loggedInUser._id)
  }
  


}
</script>























<style scoped>
.box {
  width: 50%;
  min-height: 69.4vh;
}
.myorderdetails {
  position: relative;
  min-height: inherit
}
#total {
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 2rem;
  margin-bottom: 1rem;
}
table {
  width: 100%;
}
</style>