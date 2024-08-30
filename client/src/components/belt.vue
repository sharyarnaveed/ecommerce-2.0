<template>

    <router-link :to="{name:'itemdetail',params:{id:productstuff.product_id}}" 
    v-for="productstuff in productdata" :key="productstuff.product_id" class="products_card">
       <itemcard :productstuff="productstuff" />
 </router-link>
 
 </template>
 
 <script setup>
 import { onMounted, ref } from 'vue';
 import itemcard from './itemcard.vue';
 import axios from 'axios';
 const productdata=ref([])
 const getbelts=async()=>
 {
   try {
    const responce= await axios.get("/api/user/belts");
 productdata.value=responce.data
   } catch (error) {
    console.log("error getting shoes",error);
   }
 }
 
 onMounted(()=>
 {
    getbelts();
 })
 </script>
 
 <style scoped>
 
 </style>