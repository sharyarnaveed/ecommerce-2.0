<script setup>

</script>

<template>
   
      
<div class="ordersdisplay">

    <table>
  <tr>
    <th>Product</th>
    <th>Quantity</th>
    <th>Date</th>
    <th>Customer Name</th>
    <th>Amount</th>
    
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td>Germany</td>
    <td>Germany</td>
    <td><router-link target="_blank" to="/orderdetail" > view details </router-link></td>
  </tr>

  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td>Germany</td>
    <td>Germany</td>
    <td>view details</td>
  </tr>

  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td>Germany</td>
    <td>Germany</td>
    <td>view details</td>
  </tr>


  </table>
  
</div>




</template>



<style scoped>

.ordersdisplay{
    border: 2px solid purple;
    height: 87%;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>