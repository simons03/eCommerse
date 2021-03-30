<template>
  <div class="holder container my-5 py-3 z-depth-1 rounded">
  <!--Section: Content-->
  <section class="dark-grey-text">
    <!-- Shopping Cart table -->
    <div class="table-responsive">
      <table class="table product-table mb-0">
        <!-- Table head -->
        <thead class="mdb-color lighten-5">
          <tr>
            <th></th>
            <th class="font-weight-bold">
              <strong>Produkt</strong>
            </th>
            <th class="font-weight-bold">
              <strong>Storlek</strong>
            </th>
            <!-- <th></th> -->
            <!-- <th class="font-weight-bold">
              <strong>Price</strong>
            </th> -->
            <th class="font-weight-bold">
              <strong>Antal</strong>
            </th>
            <th>
              <strong>Beskrivning</strong>
            </th>
            <th class="font-weight-bold">
              <strong>Pris</strong>
            </th>
            <th>
              <!-- <button class="btn btn-primary btn-rounded">Spara Kundkorgen</button> -->
            </th>
          </tr>
        </thead>
        <!-- /.Table head -->
        <!-- Table body -->
        <tbody>


          <signout-card v-for="item in cart" :key="item._id" :item="item" />


          <tr>
            <td colspan="3"></td>
            <td>
              <h4 class="mt-2">
                <strong>Totalt</strong>
              </h4>
            </td>
            <td class="text-right">
              <h4 class="mt-2">
                <strong>{{cartPrice}} kr</strong>
              </h4>
            </td>
            <td colspan="3" class="text-right">
              <button type="button" class="btn btn-primary btn-rounded" @click="addOrdertoOrder" v-if="loggedIn">Beställ
                <i class="fas fa-angle-right right"></i>
              </button>
              <p v-else>Logga in om du vill lägga en beställning</p>
            </td>
          </tr>
          <!-- Fourth row -->
        </tbody>
        <!-- /.Table body -->
      </table>
      <p id="errorText" class="text-center h4 mt-4"></p>

    </div>
    <!-- /.Shopping Cart table -->
  </section>

  
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import signoutCard from '../components/signout/signoutCard.vue'



export default {
  data() {
    return {
      
    }
  },
  components: { 
    signoutCard 
  },
  methods: {
    ...mapActions(['addOrder', 'resetCart']),
    check() {
      // console.log(this.cart)
      // console.log(this.cartPrice)
      // console.log(this.loggedInUser)

      
    },
    addOrdertoOrder() {

      let errorText = document.querySelector('#errorText')

      if(this.cart.length > 0) {

        let data = {
          cart: this.cart,
          totalPrice: this.cartPrice,
          user: this.loggedInUser
        }

        this.addOrder(data)
        this.resetCart()

        this.$router.push({ path: 'ordercompleted' })
      errorText.innerText = ''

      }else {
      errorText.innerText = 'Du måste lägga till en produkt för att kunna beställa'
      }
    }
    


  },
  computed: {
    ...mapGetters(['cart', 'cartPrice', 'loggedInUser', 'loggedIn'])
  }

}
</script>

<style scoped>
  #errorText {
    color: red;
  }
  .holder {
    min-height: 64.4vh;
  }
</style>