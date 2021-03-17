import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios/axios.js'
import router from '@/router/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    getProduct (state, payload) {
      state.products = payload
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
          console.log(data)
          context.commit('getProduct', data.data)
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
      axios
        .put('/products/' + payload.id, {
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
    }
  },
  modules: {
  }
})
