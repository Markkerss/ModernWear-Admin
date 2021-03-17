<template>
  <div class="Table">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Image</th>
          <th scope="col">Price</th>
          <th scope="col">Stock</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <TableRow/>
      </tbody>
    </table>
  </div>
</template>

<script>
import TableRow from '@/components/TableRow.vue'

export default {
  name: 'Table',
  components: {
    TableRow
  },
  props: []
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .productsTable{
    padding-top: 2rem;
    padding-left: 150px;
    padding-right: 150px
  }
</style>
