<template>
  <div>

    <button @click="test">tasgas</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    test() {
      console.log(this.user)
    }
  },
  computed: {
    ...mapGetters(['user'])
  }
}
</script>

<style>

</style>