<script setup>
import { ref } from 'vue';

const prop = defineProps({
  productstuff: Object
});

const images = ref([]);

// Parse the product image JSON and format the paths correctly
images.value = JSON.parse(prop.productstuff.pimg1).map(image => {
  return {
    ...image,
    path: image.path.replace(/\\/g, '/') // Replace backslashes with forward slashes
  };
});

const mainimg= ref(images.value[0].path);
console.log(mainimg.value);
// console.log(images.value);
</script>

<template>

    <div  class="productimg">
      <!-- Dynamically bind the src attribute to the correct image path -->
      <img :src="`http://localhost:8000/${mainimg}`" alt="Product Image">
      <!-- {{ image.path }} -->
    </div>

    <h4>{{ prop.productstuff.product_name }}</h4>
    <h5>${{ prop.productstuff.product_price }}</h5>

</template>

<style>
.products_card {
  border: 2px solid rgba(0, 0, 0, 0.158);
  height: 300px;
}

.productimg {
  height: 70%;
}

.productimg img {
  width: 100%;
  height: 100%;
}

.products_card h4 {
  height: 15%;
  font-family: var(--font);
  font-weight: 300;
  font-size: 1.4rem;
  display: flex;
  padding: 5px 5px;
  align-items: center;
}

.products_card h5 {
  height: 15%;
  font-family: var(--font);
  font-weight: 300;
  color: var(--blue);
  font-size: 1.2rem;
  padding: 5px 5px;
}
</style>
