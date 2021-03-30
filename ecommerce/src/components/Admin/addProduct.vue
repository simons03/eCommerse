<template>
  <div class="d-flex style my-5"> 
    <input type="file" placeholder="ladda upp bilden">
    <input type="text" placeholder="Namn på produkten">
    <input type="text" placeholder="Vilken storlek är den? ">
    <input type="number" placeholder="Vad är priset">
    <button class="btn btn-primary">Lägg till produkt</button>


  </div>

</template>



<script>
export default {

}
</script>

<style scoped>
  .style {
    width: 20rem;
    margin: auto;
    flex-direction: column;
  }
</style>