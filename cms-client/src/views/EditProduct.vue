<template>
  <div id="edit-page">
    <Navbar />
    <div class="masthead d-flex align-items-center justify-content-center" id="edit-page-css">
      <div id="edit-card" class="card shadow p-3 mb-5 bg-body rounded text-left" >
        <div class="card-body">
          <h1 class="text-center mb-3">Edit Product</h1>
          <form>
            <div class="form-floating mb-3">
              <label>Name</label>
              <input type="text" class="form-control" v-model= "product.name" placeholder="Blaster 1000">
            </div>
            <div class="form-floating mb-3">
              <label>Image URL</label>
              <input type="text" class="form-control" v-model= "product.image_url" placeholder="http://image.com">
            </div>
            <div class="form-floating mb-3">
              <label>Price</label>
              <input type="text" class="form-control" v-model= "product.price" placeholder="100000">
            </div>
            <div class="form-floating mb-3">
              <label>Stock</label>
              <input type="text" class="form-control" v-model= "product.stock" placeholder="100">
            </div>
            <div class="row d-flex justify-content-center" style="margin-top: 1px">
              <a class="btn mt-3 col-md-7" type="button" id="btn-edit-submit" @click.prevent="editProduct()">Edit Product</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'EditPage',
  components: {
    Navbar
  },
  methods: {
    editProduct () {
      const id = this.product.id
      this.$store.dispatch('editProduct', id)
      this.$router.push('/')
    }
  },
  computed: {
    ...mapState(['product'])
  }
}
</script>

<style scoped>
  #edit-page-css {
    height: 100vh;
    min-height: 500px;
  }

  #edit-card {
    min-width: 25rem !important;
  }

  #btn-edit-submit {
    color: #212121;
    padding: 5px 10px;
    border-color: #DDDDDD;
    border-radius: 4px;
    box-shadow: 1px 4px 9px -1px rgba(117,117,117,0.39);
  }

  #btn-edit-submit:hover {
    box-shadow: 1px 1px 9px 2px rgba(117,117,117,0.39);
  }
</style>
