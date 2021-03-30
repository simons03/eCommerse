<template> 
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav m-auto">
        <li class="nav-item">
          <router-link class="nav-link active" to="/admin">Add Product</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" to="/adminproducts">All products</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" to="/adminorders">All Orders</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>

</style>