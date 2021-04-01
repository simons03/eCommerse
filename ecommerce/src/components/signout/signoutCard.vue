<template>
<tr >
  <th scope="row">
    <img :src="require('@/assets/images/plagg/' + item.product.img)" alt="" class="img-fluid z-depth-0">
    <!-- <img src="@/assets/images/plagg/AnnaDress.jpg" alt="" class="img-fluid z-depth-0"> -->
  </th>
  <td class="holderTitle">
    <h5>
      <strong>{{item.product.title}}</strong>
    </h5>
    <!-- <p class="text-muted">Apple</p> -->
  </td>
 
  <td>storlek</td>
  <!-- <td></td> -->
  <!-- <td>{{cart.price}}</td> -->
  <td>
    <p>{{item.quantity}} st</p>  
    <!-- <p>{{item.product._id}}</p> -->
  </td>
  <td>
    <p>{{item.product.description}}</p>  
  </td>
  <td class="font-weight-bold">
    <strong>{{item.product.price}} kr/st</strong>
  </td>
  <td>
    <button type="button" class="btn btn-sm btn-danger" data-toggle="tooltip" data-placement="top" title="Remove item" @click="deleteProduct(item, item.quantity)">
      <i class="fas fa-trash-alt"></i>
    </button>
  </td>
</tr>


</template>

<script>
import { mapActions } from 'vuex'


export default {
  props: ['item'],
  methods: {
    ...mapActions(['calcPrice', 'deleteProduct']),

    deleteProduct1(item) {
      console.log(item)
    }
  },

  computed: {
    // ...mapGetters(['user'])
  },
  mounted() {

  }

}
</script>

<style scoped>
 .holderTitle {
   width: 10rem;
 } 
 img {
   height: 12rem;
 }
</style>