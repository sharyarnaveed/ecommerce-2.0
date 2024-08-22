<script setup>

</script>

<template>
<div class="viewproduct">
    <table>
  <tr>
    <th>Product Name</th>
    <th>Product Name</th>
    <th>Price</th>
    <th>Date</th>
    
    
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
   
    <td><button style="width: 70%;height: 100%;"> Delete </button></td>
  </tr>

 

  


  </table>
</div>
</template>



<style scoped>
.viewproduct{
    border: 2px solid black;
    height: 90%;
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