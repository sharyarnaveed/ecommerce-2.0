<script setup>
import addesign from '../components/theadddesign.vue';
import { RouterLink,RouterView } from 'vue-router';
import itemcard from '../components/itemcard.vue';
</script>


<template>
   <main class="productdisplayconn">
    <aside class="productaside">aside panel</aside>
<section class="productdisplay">
<addesign/>


   
<div class="resultproducts">
    <RouterView/>
</div>



</section>





</main>
</template>

<style scoped>

.productdisplayconn{
    /* border: 2px solid red; */
height: auto;
    display: flex;
}
.productaside{
    /* border: 2px solid green; */
    width: 25%;
}
.productdisplay{
    /* border: 2px solid blue; */
    width: 75%;
    /* height: auto; */
    /* min-height: 100px; */
    /* padding: 10px 10px; */
}





.resultproducts{
/* border: 2px solid brown; */
/* height:100%; */
display: grid;
/* height: auto; */
padding: 1.2% 10px;
grid-template-columns: repeat(4,20%);
/* grid-template-columns: 200px 200px; */
justify-content: space-around;
gap: 30px;
}



</style>