<script setup>
defineProps({
svg:String,
intro:String


})


</script>



<template>
    <div class="policycards">
<div class="svgcon">
<img :src="svg" alt="">
</div>
<h4>{{ intro }}</h4>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, veniam.</p>
</div>
</template>

<style scoped>

.policycards{
    /* border: 2px solid green; */
    width: 23%;
    height: 90%;
    padding: 10px 12px;
    flex-direction: column;
    display: flex;
   align-items: center;
   gap: 2%;
}
.policycards h4
{
    font-size: 1.4rem;
    font-family: var(--font);
    font-weight: 500;
    margin: 10px 0px;
}
.policycards p
{
    font-size: .9rem;
    font-family: var(--font);
    font-weight: 300;
    margin: 10px 0px; 
    text-align: center;
}
.svgcon{
    /* border: 2px solid blueviolet; */
    height: 40%;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;

}

</style>