<script setup>
import { ref } from 'vue';

const theimg=ref('');

const displayimge=(val)=>
{
    theimg.value=val
console.log(val);
}


</script>


<template>
    <section class="productdetailcon">
        <div class="productimage">
            <div class="mainimg">
                <!-- <img :src="theimg"/> -->
                {{ theimg }}
            </div>
            <div class="subimages">
                <button class="subimg" @click="displayimge('1')">1</button>
                <button class="subimg" @click="displayimge('2')">2</button>
                <button class="subimg" @click="displayimge('3')">3</button>
                <button class="subimg" @click="displayimge('4')">4</button>
            </div>
        </div>
        <div class="productdetail">
            product detail
        </div>
    </section>
</template>


<style scoped>
.productdetailcon{
    border: 2px solid red;
    height: 500px;
    display: flex;
}
.productimage{
    border: 2px solid green;
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
.mainimg{
    border: 2px solid red;
    height: 80%;
    width: 80%;
}
.subimages{
    border: 2px solid blue;
    width: 90%;
display: flex;
justify-content: space-evenly;
height: 15%;
}
.subimg{
    width: 20%;
    background: transparent;
    cursor: pointer;
    border: 2px solid rgba(0, 0, 0, 0.185);
}



.productdetail{
    border: 2px solid blue;
    width: 55%;
}
</style>
