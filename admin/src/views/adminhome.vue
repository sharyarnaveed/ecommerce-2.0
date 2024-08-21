<script setup>
    
    // import adminhome from './adminhome.vue';
</script>

<template>

<div class="bottomdashboard">
<h1>Dashboard</h1>
<div class="ordercards">
    <div class="ordercardconn">
<h3>Total Orders</h3>
<div class="orderdetail">
    <img src="/src/assets/order-history.svg" alt="">

    <h4>orderdone </h4>
</div>
    </div>
</div>
</div>

</template>

<style scoped>
.bottomdashboard{
    border: 2px solid blue;
    height: 90%;
    background-color: #dfdede;
    padding: 10px 10px;
}
.bottomdashboard h1
{
    font-size: 2rem;
    margin: 5px 10px;
    font-family: var(--font);
}
.ordercards{
    /* border: 2px solid yellow; */
    height: 30%;
    padding: 10px 10px;
}
.ordercardconn{
    /* border: 2px solid red; */
    width: 30%;
    height: 100%;
    border-radius: 10px;
    background-color: white;
  
}
.ordercardconn h3
{
    /* border: 2px solid green; */
    height: 30%;
    /* justify-content: center;/ */
    align-items: center;
    margin: 5px 20px;
    font-family: var(--font);
    display: flex;
}
.orderdetail{
    /* border: 2px solid brown; */
    padding: 10px 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.orderdetail img
{
    width: 20%;
    height: 20%;
}
.orderdetail{
    font-size: 1.3rem;
    font-family: var(--font);
}
</style>

