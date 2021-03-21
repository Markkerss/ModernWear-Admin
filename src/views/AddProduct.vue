<template>
  <div id="add-page">
    <Navbar />
    <div class="masthead d-flex align-items-center justify-content-center" id="add-page-css">
      <div id="add-card" class="card shadow p-3 mb-5 bg-body rounded text-left" >
        <div class="card-body">
          <h1 class="text-center mb-3">Add Product</h1>
          <form>
            <div class="form-floating mb-3">
              <label>Name</label>
              <input type="text" class="form-control" v-model= "name" placeholder="Blaster 1000">
            </div>
            <div class="form-floating mb-3">
              <label>Image URL</label>
              <input type="text" class="form-control" v-model= "image_url" placeholder="http://image.com">
            </div>
            <div class="form-floating mb-3">
              <label>Price</label>
              <input type="text" class="form-control" v-model= "price" placeholder="100000">
            </div>
            <div class="form-floating mb-3">
              <label>Stock</label>
              <input type="text" class="form-control" v-model= "stock" placeholder="100">
            </div>
            <div class="row d-flex justify-content-center" style="margin-top: 1px">
              <a class="btn mt-3 col-md-7" type="button" id="btn-add-submit" @click.prevent="addProduct()">Add Product</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'AddPage',
  components: {
    Navbar
  },
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    addProduct () {
      const product = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('addProduct', product)
    }
  }
}
</script>

<style scoped>
  #add-page-css {
    height: 100vh;
    min-height: 500px;
  }

  #add-card {
    min-width: 25rem !important;
  }

  #btn-add-submit {
    color: #212121;
    padding: 5px 10px;
    border-color: #DDDDDD;
    border-radius: 4px;
    box-shadow: 1px 4px 9px -1px rgba(117,117,117,0.39);
  }

  #btn-add-submit:hover {
    box-shadow: 1px 1px 9px 2px rgba(117,117,117,0.39);
  }
</style>
