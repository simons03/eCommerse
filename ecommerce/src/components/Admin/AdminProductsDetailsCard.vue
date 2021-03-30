<template>
  <tr>
    <td> {{product.product.title}} </td>
    <td> {{product.quantity}} st</td>
    <td> {{product.product.price}} Kr/st</td>
  </tr>
</template>

<script>
export default {
  props: ['product']
}
</script>

<style>

</style>