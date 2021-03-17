<template>
  <div class="home">
    <h1>Products</h1>
    <Table />
  </div>
</template>

<script>
import Table from '@/components/Table'

export default {
  name: 'Home',
  components: {
    Table
  }
}
</script>

<style scoped>
  .home{
    padding-top: 3.5rem
  }
</style>
