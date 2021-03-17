<template>
  <div id="TableRow">
    <tr v-for="product in products">

    </tr>
  </div>
</template>

<script>
import axios from '@/axios/axios.js'

export default {
  data () {
    return {
      products: []
    }
  },
  methods: {
    getProducts () {
      axios.get('/products')
        .then(data => {
          this.products = data.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
</style>
