<template>
  <div class="cardHolder d-flex justify-content-between align-items-center p-3 my-1 rounded">
    <h3>id: {{product._id}} </h3>
    <h5>{{product.title}} </h5>
    <p>pris: {{product.price}} kr</p>
    <div>
    <button class="btn btn-primary">Eddit</button>
    <button class="btn btn-danger">Remove</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
  methods: {

  }
}
</script>


<style scoped>
 .cardHolder {
   background: #333;
   color: #fff;
 }

</style>