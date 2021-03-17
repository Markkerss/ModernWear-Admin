<template>
  <div class="home">
    <Navbar />
    <h1 style="padding-top:3.5rem">Products</h1>
    <Table />
    <footer>
      <p id="footer-text">&copy; Copyright Marco Laju 2021</p>
    </footer>
  </div>
</template>

<script>
import Table from '@/components/Table'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Table,
    Navbar
  }
}
</script>

<style scoped>
  footer {
    text-align: center;
    padding: 5px;
    height: 5rem;
    background-color: grey;
  }

  #footer-text {
    vertical-align: middle;
    margin-top: 1.5rem;
    color: white;
  }
</style>
