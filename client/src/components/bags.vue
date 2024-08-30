<template>

   <router-link :to="{name:'itemdetail',params:{id:productstuff.product_id}}" v-for="productstuff in productdata" :key="productstuff.product_id" class="products_card">
      <itemcard :productstuff="productstuff" />
</router-link>

</template>

<script setup>
import { onMounted, ref } from 'vue';
import itemcard from './itemcard.vue';
import axios from 'axios';
const productdata=ref([])
const getbags=async()=>
{
  try {
   const responce= await axios.get("/api/user/bags");
productdata.value=responce.data
  } catch (error) {
   console.log("error getting bags",error);
  }
}

onMounted(()=>
{
getbags();
})
</script>

<style scoped>

</style>