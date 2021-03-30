<template>
<!-- Footer -->
<footer class="page-footer font-small bg-dark pt-4">
  <div class="container-fluid text-center text-md-left">
    <div class="row d-flex align-items-center">
      <div class="col-md-6 mt-md-0 mt-3">
        <router-link to="/"> 
          <img class="img mb-3" src="@/assets/images/logga/logga-white.png" alt="">
        </router-link>
      </div>
      <!-- <hr class="clearfix w-100 d-md-none pb-3"> -->
      <div class="col-md-3 mb-md-0 mb-3">
        <h5 class="text-uppercase">Kontakt</h5>
        <ul class="list-unstyled">
          <li>
            <i class="fas fa-envelope"><a href="#!"> Info@tintomara.nu</a></i>
          </li>
          
          <li class="mt-3">
            <i class="fas fa-phone"><a href="#!"> 0705739724</a></i>
          </li>
        </ul>
      </div>
      <div class="col-md-3 mb-md-0 mb-3">
        <h5 class="text-uppercase">Links</h5>
        <ul class="list-unstyled">
          <li>
            <i class="fab fa-instagram"><a href="https://www.instagram.com/ateljetinto/"> ateljetimto</a></i>
            
          </li>
          <li>
            <a href="#!">Link 2</a>
          </li>
          <li>
            <a href="#!">Link 3</a>
          </li>
          <li>
            <a href="#!">Link 4</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="footer-copyright text-center py-3">© 2021 Copyright:
    <a class="tintomara text-gray" href="localhost:8080"> Tintomara</a>
  </div>
</footer>
<!-- Footer -->
</template>

<script>
export default {

}
</script>

<style scoped>
a {
  color: #fff;
}
.img {
  height: 1rem;
}
</style>