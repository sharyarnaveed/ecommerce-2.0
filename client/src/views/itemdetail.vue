<script setup>
import { ref } from "vue";

import Description from "@/components/productdetailreview.vue";
// import productdisplay from "./productdisplay.vue";
const currenttab = ref("Description");
const tabs = {
    Description,
  
};

const check=ref("Description text")
const theimg = ref("");
const quantity = ref(0);

const decrement = () => {
  if (quantity.value == 0) {
    quantity.value = 0;
  } else {
    quantity.value--;
  }
};

const displayimge = (val) => {
  theimg.value = val;
  console.log(val);
};
const cartsucess=ref(false)
const addtocart=()=>
{
cartsucess.value=true
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

    <div  class="productdetail">
        <div v-if="cartsucess" class="confiramtion_message">
            <h4>the message</h4>
        </div>

      <div class="productdetailconn">
        <h1>Product name</h1>
        <h3>Product Price</h3>
      </div>

      <div class="quantity_addcartconn">
        <div class="quantityconn">
          <button @click="decrement">-</button>
          <span>{{ quantity }}</span>
          <button @click="quantity++">+</button>
        </div>
        <div class="sizeoption"></div>
        <div class="addtocart">
          <button @click="addtocart">Add To Cart</button>
        </div>
      </div>

      <div class="reviewproduct">
        <button  :class="['optionactive',{active: currenttab===tab}]" v-for="(_, tab) in tabs" :key="tab" @click="currenttab = tab">

          {{ tab }}
        </button>
        <div class="reviewconn">
          <component :description="check" :is="tabs[currenttab]"></component>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>

.productdetailcon {
  border: 2px solid red;
  height: 500px;
  display: flex;
}
.productimage {
  /* border: 2px solid green; */
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.mainimg {
  border: 2px solid red;
  height: 80%;
  width: 80%;
}
.subimages {
  border: 2px solid blue;
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  height: 15%;
}
.subimg {
  width: 20%;
  background: transparent;
  cursor: pointer;
  border: 2px solid rgba(0, 0, 0, 0.185);
}
.confiramtion_message{
    /* border: 2px solid purple; */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    height: 15%;
    background-color: var(--light-blue);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-family: var(--font);

}
.productdetail {
  /* border: 2px solid blue; */
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* align-items: s; */
  position: relative;
  padding: 10px 20px;
}
.productdetailconn {
  /* border: 2px solid red; */
  border-bottom: 2px solid rgba(0, 0, 0, 0.123);
}
.productdetailconn h1 {
  font-size: 2rem;
  font-family: var(--font);
  font-weight: 400;
}
.productdetailconn h3 {
  font-size: 1.2rem;
  color: var(--blue);
  font-family: var(--font);
  margin: 10px 0px;
  font-weight: 400;
}

.quantity_addcartconn {
  /* border: 2px solid green; */
  border-bottom: 2px solid rgba(0, 0, 0, 0.096);
  height: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.quantityconn {
  /* border: 2px solid purple; */
  width: 20%;
  height: 55%;
  background-color: #d5d5d538;
  display: flex;
  justify-content: center;
}
.quantityconn button {
  width: 30%;
  font-size: 1.5rem;
  cursor: pointer;
  font-family: var(--font);
  color: var(--blue);
  background-color: transparent;
  border: 2px solid rgba(0, 0, 0, 0.055);
}
.quantityconn span {
  width: 40%;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 1.3rem;
  font-family: var(--font);
}
.addtocart {
  /* border: 2px solid pink; */
  height: 50%;
  width: 22%;
}
.addtocart button {
  width: 100%;
  cursor: pointer;
  border-radius: 3px;
  height: 100%;
  font-size: 1rem;
  background-color: #bcddfe52;
  border: none;
  color: var(--blue);
}

.reviewproduct {
  /* border: 2px solid orange; */
  height: 55%;
}
.reviewproduct button {
  height: 15%;
  width: 20%;
  font-size: 1rem;
  font-family: var(--font);
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
}
.reviewconn {
  /* border: 2px solid red; */
  height: 85%;
  padding: 15px 10px;
  font-size: 1rem;
  font-family: var(--font);
}

.optionactive.active
{
color: var(--blue);

border-bottom: 3px solid var(--blue);
border: left;
}


</style>
