<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const gottenproducts=ref([]);

const getproducts=async()=>
{
  try {
    const responce= await axios.get('/api/admin/getproduct')
    gottenproducts.value=responce.data;
    
  } catch (error) {
    
  }
}

onMounted(()=>
{
  getproducts()
})

</script>

<template>
<div class="viewproduct">
    <table>
  <tr>
    <th>Product Name</th>
    <th>Product Name</th>
    <th>Price</th>
    <th>Date</th>
    <th>Option</th>
    
    
  </tr>
  <tr v-for="products in gottenproducts" :key="products.product_id">
    <td>{{ products.product_name }}</td>
    <td>{{ products.category_name }}</td>
    <td>{{ products.product_price }}</td>
    <td>{{ products.date_time }}</td>
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