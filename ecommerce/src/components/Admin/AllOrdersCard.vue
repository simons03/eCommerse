<template>
    <tr @click="findOrder">
      <td class="py-2"> {{order._id}} </td>
      <td> {{order.email}} </td>
      <td>{{order.totalprice}} kr</td>
      <td> {{order.createdAt}} </td>
    </tr>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  
  props: ['order'],

  methods: {
  ...mapActions(['fintOneAdminOrder']),
  findOrder() {
    // console.log(this.order._id)
    this.fintOneAdminOrder(this.order._id)
  }
}

}
</script>

<style scoped>
  tr {
    border-bottom: 1px solid #333;
    font-size: 1.2rem;
    cursor: pointer;
    margin: 1rem;
  }
  tr:hover {
    background: #333;
    color: #fff;
  }
</style>