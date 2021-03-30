<template>
  <div class=" holder d-flex justify-content-between align-items-center px-3 m-1 py-1 border" @click="findOrder">
    <div>
      <p>Order ID: {{orders._id}}</p>
      <p>Användar ID: {{orders.userId}}</p>    


    </div>    
    <div>
      <p>Email: <br>{{orders.email}}
      </p>
    </div>
    <div>
      <p>date: {{orders.createdAt}}</p>    
      <p>Pris: {{orders.totalprice}} kr</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['orders'],
  methods: {
    ...mapActions(['findOneUserOrder']),
    findOrder() {
      this.findOneUserOrder(this.orders._id)
    }
  }



}
</script>

<style scoped>
p {
  font-size: 0.8rem;
  margin: 0;
} 
.holder {
  cursor: pointer;
}
.holder:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>