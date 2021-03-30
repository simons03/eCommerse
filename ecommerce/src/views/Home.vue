<template>
  <div>
    <appHeader />

    <appContent />
    <!-- <skiss /> -->
  </div>
</template>

<script>
import appHeader from '../components/header.vue'
import appContent from '../components/Home/Content'
// import skiss from '../components/Home/Skiss'

export default {
  name: 'Home',
  components: {
    appHeader,
    appContent,
    // skiss
    
  },
  methods: {
    // ...mapActions(['getProducts']),
  },
  computed: {

  }
}
</script>
