<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const thecategory=ref({
  productname:''
});
const gottencategory=ref([]);

const submitcategory=async()=>
{
  // console.log(thecategory.value.productname);
try {
  if(thecategory.value.productname=="")
{
  console.log("empty");
}
else
{
  const responce=await axios.post("/api/admin/addcategory",thecategory.value);
  console.log(responce.data);
thecategory.value={
  productname:""
}
  if(responce.data)
{
  alert(responce.data.message);
  getcategory();
}

}


} catch (error) {
  console.log(error);
}
}



const getcategory=async()=>
{
  const getcateg=await axios.get("/api/admin/getcategory");
  gottencategory.value=getcateg.data;
  
  // console.log(gottencategory.value);
}
onMounted(()=>
{
  getcategory();
})
</script>

<template>
  <div class="categorycon">



    <form @submit.prevent="submitcategory"  class="addcategory">
      <input  v-model="thecategory.productname" type="text" name="" id="" />
      <button type="submit">Add Category</button>
    </form>

    <div class="alreadycategory">
      <table>
        <tr>
          <th>Category Id</th>
          <th>Category Name</th>
        </tr>
        <tr v-for="(item, index) in gottencategory" :key="item.category_id">
          <td>{{ item.category_id }}</td>
          <td>{{ item.category_name }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>
.categorycon {
  /* border: 2px solid yellow; */
  height: 90%;
}
.addcategory {
  /* border: 2px solid brown; */
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.addcategory input {
  width: 30%;
  height: 30%;
  font-size: 1rem;
  padding: 1px 10px;
  outline: none;
}

.addcategory button {
  width: 12%;
  font-size: 1rem;
  height: 30%;
}

.alreadycategory {
  /* border: 2px solid purple; */
  height: 70%;
  overflow-y: auto;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  overflow-y: auto;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
