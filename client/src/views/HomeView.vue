<script setup>
import { ref } from 'vue';

const saleimg=ref('https://images.unsplash.com/photo-1578986175247-7d60c6df07c5?q=80&w=1494&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
// const category=ref('sale')

const saleset=ref('30')
const bestval=ref('*')

// function to get best sellers products from database
const getbestsellers=(thebuttonval)=>
{
bestval.value=thebuttonval;
// console.log(thebuttonval);
}



</script>

<template>
  
<div :style="{ backgroundImage:'url('+saleimg+')' }"  class="saleconn">
    <h1>Super Flash Sale <br>
        {{saleset}}% Off</h1>

        <router-link class="thesaleroute" to="/productdisplay">Shop Now</router-link>
</div>


<section class="bestsellerconn">
    <div class="heading">
        <h1>Best Sellers</h1>
    </div>

<div  class="displaycategory">
<button @click="getbestsellers('*')">All</button>
<button @click="getbestsellers('bags')" >Bags</button>
<button @click="getbestsellers('sneakers')">Snekers</button>
<button @click="getbestsellers('belts')" >Belt</button>
</div>

<div class="resultproducts">

<div class="products_card">
    <div class="productimg">
        <img src="../assets/Product Image (1).jpg" alt="">
    </div>
<h4>Lorem ipsum dolor sit amet.</h4>
<h5>$200</h5>
</div>

<div class="products_card">
    <div class="productimg">
        <img src="../assets/Product Image (1).jpg" alt="">
    </div>
<h4>Lorem ipsum dolor sit amet.</h4>
<h5>$200</h5>
</div>

<div class="products_card">
    <div class="productimg">
        <img src="../assets/Product Image (1).jpg" alt="">
    </div>
<h4>Lorem ipsum dolor sit amet.</h4>
<h5>$200</h5>
</div>

<div class="products_card">
    <div class="productimg">
        <img src="../assets/Product Image (1).jpg" alt="">
    </div>
<h4>Lorem ipsum dolor sit amet.</h4>
<h5>$200</h5>
</div>

<div class="products_card">
    <div class="productimg">
        <img src="../assets/Product Image (1).jpg" alt="">
    </div>
<h4>Lorem ipsum dolor sit amet.</h4>
<h5>$200</h5>
</div>

<div class="products_card">
    <div class="productimg">
        <img src="../assets/Product Image (1).jpg" alt="">
    </div>
<h4>Lorem ipsum dolor sit amet.</h4>
<h5>$200</h5>
</div>

<div class="products_card">
    <div class="productimg">
        <img src="../assets/Product Image (1).jpg" alt="">
    </div>
<h4>Lorem ipsum dolor sit amet.</h4>
<h5>$200</h5>
</div>

<div class="products_card">
    <div class="productimg">
        <img src="../assets/Product Image (1).jpg" alt="">
    </div>
<h4>Lorem ipsum dolor sit amet.</h4>
<h5>$200</h5>
</div>

</div>



</section>

</template>


<style scoped>

.saleconn
{
    /* border:2px solid green; */
    height: 70vh;
display: flex;
justify-content: center;
flex-direction: column;
padding: 5px 3%;
background-position: center;
background-size: cover;
}
.saleconn h1
{
    font-family: var(--font);
font-size: 5rem;
font-weight: 500;
color: white;
margin: 5px 10px;
}
.thesaleroute{
    /* border: 2px solid red; */
    width: 15%;
    margin: 5px 10px;
    color: white;
    font-family: var(--font);
    height: 10%;
    font-size: 2rem;
}

.bestsellerconn{
    /* border: 2px solid brown; */
    height: 800px;
}
.heading{
    /* border: 2px solid green; */
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.heading h1
{
    font-size: 2.5rem;
    font-family: var(--font);
    font-weight: 400;
}
.displaycategory{
    /* border: 2px solid purple; */
    height: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5%;
}

.displaycategory button
{
    font-size: 1.2rem;
    font-family: var(--font);
    background-color: transparent;
    border: none;
    cursor: pointer;
    text-decoration: underline;

}

.displaycategory button:hover
{
    color: var(--blue);
}

.resultproducts{
/* border: 2px solid brown; */
height: 85%;
display: grid;
padding: 1.2% 10px;
grid-template-columns: repeat(4,18%);
/* grid-template-rows: 200px 200px; */
justify-content: space-around;
gap: 3%;
}

.products_card{
    border: 2px solid rgba(0, 0, 0, 0.158);
    height: 300px;
}
.productimg{
    /* border: 2px solid red; */
    height: 70%;
}
.productimg img
{
    width: 100%;
    height: 100%;

}
.products_card h4
{
    /* border: 2px solid red; */
    height: 15%;
    font-family: var(--font);
    font-weight: 300;
    font-size: 1rem;
    display: flex;
    padding: 5px 5px;
    /* justify-content: center; */
    align-items: center;
}
.products_card h5
{
    /* border: 2px solid red; */
    height: 15%;
    font-family: var(--font);
    font-weight: 300;
    color: var(--blue);
    font-size: 1rem;
    padding: 5px 5px;
}



</style>