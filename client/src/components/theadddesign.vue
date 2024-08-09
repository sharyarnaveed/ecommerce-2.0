<template>
    <section class="adcontainer">
<div class="adtext">
    <h1>Adidas Men Running <br>
        Sneakers</h1>
        <p>Performance and design. Taken right to the edge.</p>
        <router-link class="theshopnow" to="/shoes">Shop Now</router-link>
</div>
<div class="adimage">
    <img src="../assets/shoes-shoe-png-transparent-shoe-images-pluspng-17 1.png" alt="Shoe Image">
</div>
</section>
</template>

<style scoped>

.adcontainer{
    /* border: 2px solid red; */
    height: 65vh;
display: flex;
background-color: var(--blue);

}
.adtext{
    /* border: 2px solid green; */
    width: 50%;
    justify-content: center;
    padding: 0 3%;
    display: flex;
    flex-direction: column;
    gap: 2.5%;
}
.adtext h1{
    font-size: 3vw;
font-family: var(--font);
font-weight: 400;
color: white;
}
.adtext p{
    font-size: 1.2rem;
font-family: var(--font);
font-weight: 400;
color: white;
}

.theshopnow{
    font-size: 1.5rem;
    color: white;
    font-family: var(--font);
}

.adimage
{
    /* border: 2px solid blue; */
    width: 50%;
}
.adimage img
{
    width: 100%;
    height: 100%;
}
</style>