<template>

<div class="container my-5 py-5 z-depth-1" v-if="product">
  <!--Section: Content-->
  <section class="text-center">
    <!-- Section heading -->
    <h3 class="font-weight-bold mb-5">Product Details</h3>
    <div class="row">
      <div class="col-lg-6">
        <!--Carousel Wrapper-->
          <!--Slides-->
          <img :src="require('../assets/images/plagg/' + product.img)"
            alt="Image" class="img-fluid">
          <!--/.Slides-->
        <!--/.Carousel Wrapper-->
      </div>
      <div class="col-lg-5 text-center text-md-left">
        <h2 class="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4">
          <strong>{{product.title}}</strong>
        </h2>
        <span class="badge badge-danger product mb-4 ml-xl-0 ml-4">bestseller</span>
        <h3 class="h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4">
          <span class="red-text font-weight-bold">
            <strong>{{product.price}} kr</strong>
            <br>
            <small class="text-muted">inkl. moms</small>
          </span>
          <span class="grey-text">
            <small>
              <!-- <s>$89</s> -->
            </small>
          </span>
        </h3>
        <!--Accordion wrapper-->
        <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
          <!-- Accordion card -->
          <div class="card">
            <!-- Card header -->
            <div class="card-header" role="tab" id="headingOne1">
              <a data-mdb-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                aria-controls="collapseOne1">
                <h5 class="mb-0">
                  Beskrivning
                  <i class="fas fa-angle-down rotate-icon"></i>
                </h5>
              </a>
            </div>
            <!-- Card body -->
            <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1"
              data-parent="#accordionEx">
              <div class="card-body">
                {{product.description}}
              </div>
            </div>
          </div>

        </div>
        <!--/.Accordion wrapper-->
        <!-- Add to Cart -->
        <section class="color">
          <div class="mt-5">

            <div class="row mt-3">
              <div class="col-md-12 text-center text-md-left text-md-right">
                <button class="btn btn-primary btn-rounded" @click="setPrice(); addToCart({product, quantity, price}); productAdded(); ">
                  <i class="fas fa-cart-plus mr-2" aria-hidden="true"></i> Add to cart</button>
              </div>
              <p id="ProductSuccess" class="mt-3 text-black"></p>
            </div>
          </div>
        </section>
        <!-- /.Add to Cart -->
      </div>

    </div>

  </section>
  <!--Section: Content-->

</div>



</template>

<script>
// import axios from 'axios'
import {mapGetters, mapActions} from 'vuex'
export default {
  data() {
    return {
      quantity: 1,
      price: 0
    }
  },
  props: ['id'],
    methods: {
    ...mapActions(['getOneProduct', 'addToCart', 'calcPrice']),
    // Den här funktionen lägger till min produkt ifrån computed till cart
    productAdded() {
      let succsess = document.querySelector('#ProductSuccess')

      succsess.innerText = 'Producten är tillagd i kundvagnen!'
    },
    setPrice() {
      this.price = this.product.price
      // console.log(this.product.price)
      // console.log(this.price)
    }
      
    
  },
  computed: {
    ...mapGetters(['product'])
  },
  created() {
    this.getOneProduct(this.id)
  }


}
</script>

<style scoped>
  img {
    height: 35rem;
  }
  /* #DressingRoomHolder {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

  } */
  @media(min-width: 1200px) {
      img {
    height: 40rem;
  }
  /* #DressingRoomHolder {
    display: flex;
    align-items: center;
    flex-direction: row;
  } */


  } 
</style>