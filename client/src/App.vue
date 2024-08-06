<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/navbar.vue'
import thefooter from './components/footer.vue';
</script>

<template>
<Navbar/>

  <RouterView />


<thefooter/>

</template>


