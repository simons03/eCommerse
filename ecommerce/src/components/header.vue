<template>
  <div class="header d-flex align-items-center justify-content-center">
    <div class="img-holder animated fadeInRight" data-mdb-toggle="animation" data-mdb-animation-reset="true" data-mdb-animation="slide-out-right">
      <img src="@/assets/images/logga/logga-Transparant.png" alt="">
    </div>
  </div>
</template>

<script>

export default {
}
</script>






<style scoped>


 .header {
   /* background-image: url('../assets/images/header/header.png');
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center center; */
   height: 94vh;
   /* background: rgba(51, 51, 51, 0.219); */
 }
 img {
   height: 2.7rem;
 }

 @media (min-width: 768px) {
    img {
   height: 5rem;
  }
 }

  @media (min-width: 1200px) {
    img {
   height: 7rem;
  }
 }
</style>