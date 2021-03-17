import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios/axios.js'
import router from '@/router/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: {}
  },
  mutations: {
    getProduct (state, payload) {
      state.products = payload
    },
    getProductInfo (state, payload) {
      state.product = payload
    }
  },
  actions: {
    login (context, payload) {
      axios
        .post('/login', payload)
        .then(data => {
          localStorage.access_token = data.data.access_token
          localStorage.email = data.data.email
          localStorage.id = data.data.id
          localStorage.role = data.data.role
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    getProducts (context, payload) {
      axios
        .get('/products', {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(data => {
          const products = data.data
          const sortedProducts = products.sort((a, b) => a.id - b.id)
          context.commit('getProduct', sortedProducts)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      axios
        .post('/products', payload, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(data => {
          console.log(data)
          context.dispatch('getProducts', data)
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteProduct (context, payload) {
      axios
        .delete('/products/' + payload, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(data => {
          console.log(data)
          context.dispatch('getProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    editProduct (context, payload) {
      const editedProductInfo = {
        name: context.state.product.name,
        image_url: context.state.product.image_url,
        price: context.state.product.price,
        stock: context.state.product.stock
      }
      axios
        .put('/products/' + payload, editedProductInfo, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(() => {
          context.dispatch('getProducts')
        })
        .catch(err => {
          console.log(err)
        })
    },
    getProduct (context, payload) {
      const productOne = this.state.products.filter(product => +product.id === +payload)
      context.commit('getProductInfo', productOne[0])
      router.push('/edit')
    }
  },
  modules: {
  }
})
