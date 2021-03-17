<template>
  <div class="Table">
    <table class="table table-hover">
      <thead>
        <tr>
          <th id="id-head">ID</th>
          <th id="image-head">Image</th>
          <th id="name-head">Name</th>
          <th id="price-head">Price</th>
          <th id="stock-head">Stock</th>
          <th id="actions-head">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product,i) in products" :key="i">
          <th style="vertical-align:middle" scope="row">{{ product.id }}</th>
          <td style="vertical-align:middle"><img :src="product.image_url"></td>
          <td style="vertical-align:middle">{{ product.name }}</td>
          <td style="vertical-align:middle">{{ product.price }}</td>
          <td style="vertical-align:middle">{{ product.stock }}</td>
          <td style="vertical-align:middle">
            <router-link to="/edit"><button type="button" class="btn btn-primary" @click.prevent="editProduct(product.id)">Edit</button></router-link>
            <router-link to="/"><button type="button" class="btn btn-danger" @click.prevent="deleteProduct(product.id)">Delete</button></router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Table',
  methods: {
    getProducts () {
      this.$store.dispatch('getProducts')
    },
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
    },
    editProduct (productData) {

    }
  },
  created () {
    this.getProducts()
  },
  computed: {
    ...mapState(['products'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .btn {
    margin:7px
  }

  .Table{
    padding-top: 2rem;
    padding-left: 100px;
    padding-right: 100px;
    padding-bottom: 5rem;
  }

  img {
    max-height: 200px;
  }
</style>
