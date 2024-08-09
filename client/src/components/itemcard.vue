
<template>
    
    <div class="productimg">
        <img src="../assets/Product Image (1).jpg" alt="">
    </div>
<h4>Lorem ipsum dolor sit amet.</h4>
<h5>$200</h5>

</template>



<style>
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