<script setup>
import router from '@/router';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const gottenproducts=ref([]);
const pinfo=ref({
pid:''
});
const getproducts=async()=>
{
  try {
    const responce= await axios.get('/api/admin/getproduct')
    gottenproducts.value=responce.data;
    console.log(responce.data);
    
  } catch (error) {
    console.log(error);
  }
}

onMounted(()=>
{
  getproducts()
  
})

// deletion of product

const deleteproduct=async(id)=>
{
  // console.log(id);
  pinfo.value.pid=id
  console.log(pinfo.value.pid);
try {
  const responce=await axios.post('/api/admin/deleteproduct',pinfo.value)
  // console.log(responce);
  if(responce)
{
  alert(responce.data.message)
  getproducts()
}
  
} catch (error) {
  console.log("error in deleteing product",error);
}
}


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
    <td>
      <button @click="deleteproduct(products.product_id)" type="submit" style="width: 70%;height: 100%;" > Delete </button>
    </td>
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