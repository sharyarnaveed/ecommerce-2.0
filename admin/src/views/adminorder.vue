<script setup>
import orderstable from "@/components/orderstable.vue"
</script>

<template>
    <div class="orderscon">
        <form @submit.prevent class="toprder">
            <h2>All Orders</h2>
<input type="date" name="" id="">
            
<button type="submit">Search</button>
        </form>
       


        <orderstable />
    </div>
</template>



<style scoped>
.orderscon{
    border: 2px solid yellow;
    height: 90%;
}
.toprder{
    border: 2px solid green;
    height: 12%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.toprder input
{
    width: 20%;
    height: 80%;
    font-size: 1rem;
    font-family: var(--font);
}
.toprder button
{
    width: 10%;
    height: 65%;
    color: white;
    font-size: 1rem;
    font-family: var(--font);
    background-color: var(--blue);
    border: none;
    border-radius: 10px;
}
.toprder h2
{
    font-size: 2.2rem;
    font-family: var(--font);
    font-weight: 400;
    margin: 5px 10px;
}
</style>