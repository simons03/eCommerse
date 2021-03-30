<template>
 
    <tr>
      <td>{{order.product.title}}</td>
      <td>{{order.price}} kr</td>
      <td>{{order.quantity}} St</td>
    </tr>

</template>

<script>
export default {
  props: ['order']
}
</script>

<style scoped>
  table {
    width: 100%;
    text-align: left;
  }
</style>