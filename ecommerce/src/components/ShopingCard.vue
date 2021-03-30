<template>
<div class="card  my-2">
  <div class="view overlay ownborder">
      <img class="card-img-top" :src="require('@/assets/images/plagg/' + product.img)" alt="Card image cap">
  </div>
  <div class="card-body">
    <h4 class="card-title"> {{ product.title }}</h4>
    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
    <p class="card-text">{{product.description}}</p>
    <p>{{product.price}} Kr</p>
    <router-link class="btn btn-primary" :to="'/dressingroom/' + product._id" >
    <!-- <a href="#" class="btn btn-primary">Button</a> -->
    Try it
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  props: ['product']
}
</script>

<style scoped>
  .overlay {
    height: 31rem;
    overflow: hidden;
    object-fit: cover;
  }


</style>