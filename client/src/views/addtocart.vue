<script setup>
import { ref, onMounted } from 'vue';
import paymentform from '@/components/paymentform.vue'

const paymentformload = ref(false);
const closeform = ref(false);
const storecartitems = ref([]); // State to hold cart items
const totalcost=ref(0)
const productprice=(quanitity,price)=>
{
return quanitity*price
}


const closewhole = () => {
  closeform.value = true;
  console.log("close");
  paymentformload.value = false;
}

function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('cartDB', 1); // Increment the version if needed

    request.onupgradeneeded = function(event) {
      const db = event.target.result;
      // Check if the object store exists before creating it
      if (!db.objectStoreNames.contains('cartItems')) {
        db.createObjectStore('cartItems', { keyPath: 'id' });
      }
    };

    request.onsuccess = function(event) {
      resolve(event.target.result);
    };

    request.onerror = function(event) {
      reject(event.target.errorCode);
    };
  });
}
// get data from idex db
async function getData() {
  try {
    const db = await openDatabase();
    const transaction = db.transaction(['cartItems'], 'readonly');
    const objectStore = transaction.objectStore('cartItems');
    // console.log(objectStore);
    const request = objectStore.getAll(); // Retrieve all items
// console.log(request);
    request.onsuccess = function(event) {
      const data = event.target.result;
      storecartitems.value = data;
    // console.log(data);
      console.log('Data retrieved:', storecartitems.value);
      totalcost.value=storecartitems.value.map((i,index)=>{
        return i.quantity*i.product_price
        }).reduce((a,b)=>a+b,0)
      

      console.log(totalcost.value);
    };

    request.onerror = function(event) {
      console.error('Error retrieving data:', event.target.errorCode);
    };
  } catch (error) {
    console.error('Database error:', error);
  }
}


// Load data when component is mounted
onMounted(() => {
  getData();
});

// Load form at checkout
const checkout = () => {
  console.log("checkout");
  paymentformload.value = true;
}

// Remove item function
const removeItem = (id) => {
    const request=indexedDB.open('cartDB',1);
request.onerror=(event)=>
{
console.log(error);
}

request.onsuccess=(event)=>
{
    const db=event.target.result;

    const transaction=db.transaction(['cartItems'],'readwrite');

    const objectStore = transaction.objectStore('cartItems');

    const deleteRequest = objectStore.delete(id);
    
    deleteRequest.onsuccess = function(event) {
      console.log('Item deleted successfully');
      getData();
    };

    deleteRequest.onerror = function(event) {
      console.error('Error deleting item:', event.target.errorCode);
    };
    
    // Optionally handle the transaction's completion
    transaction.oncomplete = function() {
      console.log('Transaction completed');
    };
    
    transaction.onerror = function(event) {
      console.error('Transaction error:', event.target.errorCode);
    };


}

  console.log('Remove item:', id);
  // Implement item removal logic here
}
</script>

<template>
  <section class="cart_conn">
    <div  v-if="paymentformload" class="payment_conn">
      <paymentform @successpayment="closewhole" />
    </div>

    <div class="items">
      <table>
        <tr class="tabletop">
          <th style="font-weight: 600;">PRODUCT</th>
          <th style="font-weight: 600;">PRICE</th>
          <th style="font-weight: 600;">QTY</th>
          <th style="font-weight: 600;">UNIT PRICE</th>
        </tr>
        <tr v-for="item in storecartitems" :key="item.id" class="productdetail">
          <th class="product_related">

            <div class="product_img">
              <img :src="`http://localhost:8000/${item.product_img}`" alt="" />
            </div>
            <h3 style="font-weight: 300;">{{ item.product_name }}</h3>
          </th>
          <th style="font-weight: 300;">${{ productprice(item.quantity,item.product_price) }}</th>
          <th style="font-weight: 300;">{{ item.quantity }}</th>
          <th style="font-weight: 300;">${{ item.product_price }}</th>
          <th style="font-weight: 300;">
            <button class="delete_btn" @click="removeItem(item.id)">
                <svg width="22" height="22" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.5" d="M18.2048 13.2216L25.3071 20.3238C25.7332 20.75 25.9463 21.3181 25.9463 21.8863C25.9463 22.5255 25.7332 23.0937 25.3071 23.5199L23.7446 25.0824C23.2474 25.5085 22.6792 25.7216 22.1111 25.7216C21.4719 25.7216 20.9747 25.5085 20.5486 25.0824L13.4463 17.9801L6.34402 25.0824C5.91788 25.5085 5.3497 25.7216 4.78152 25.7216C4.14231 25.7216 3.57413 25.5085 3.14799 25.0824L1.58549 23.5199C1.15936 23.0937 0.946289 22.5255 0.946289 21.8863C0.946289 21.3181 1.15936 20.75 1.58549 20.3238L8.68777 13.2216L1.58549 6.11929C1.15936 5.69315 0.946289 5.19599 0.946289 4.55679C0.946289 3.9886 1.15936 3.42042 1.58549 2.92326L3.14799 1.36076C3.57413 0.934626 4.14231 0.721558 4.78152 0.721558C5.3497 0.721558 5.91788 0.934626 6.34402 1.36076L13.4463 8.46304L20.5486 1.36076C20.9747 0.934626 21.4719 0.721558 22.1111 0.721558C22.6792 0.721558 23.2474 0.934626 23.7446 1.36076L25.3071 2.92326C25.7332 3.42042 25.9463 3.9886 25.9463 4.55679C25.9463 5.19599 25.7332 5.69315 25.3071 6.11929L18.2048 13.2216Z" fill="#40BFFF"/>
</svg>
            </button>
          </th>
        </tr>

      </table>
    </div>

    <div class="total_cost_con">
      <div  class="cost_conn">
        <h4>Delievery <span>$10</span></h4>
        <h4> Products Cost<span>${{ totalcost }}</span></h4>
        
        <h2>Total <span>${{totalcost+10}}</span></h2>

        <button @click="checkout">Check out</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
*{
    scroll-behavior: smooth;
}
.disapperwhole{
    display: none;
}
.payment_conn{
    /* border: 2px solid red; */
    position: absolute;
    top:0;
    height: 100%;
width: 100%;
z-index: 1;
background-color: rgba(0, 0, 0, 0.233);
display: flex;
justify-content: center;
align-items: center;
}
.paymentform{
    /* border: 2px solid blue; */
    width: 60%;
    height: 90%;
    background-color: white;
    border-radius: 10px;
}
.cart_conn{
    /* border: 2px solid red; */
    height: 95vh;
    position: relative;
}
.items
{
    /* border:2px solid blue; */
height: 60%;
padding: 10px 0px;
overflow-y: auto;
}

table {
  /* font-family: arial, sans-serif;
   */
   font-family: var(--font);
  border-collapse: collapse;
  width: 100%;
  padding: 10px 0px;
}

td, th {
  /* border: 1px solid #dddddd; */
  text-align: left;
  padding: 8px;
}
.tabletop{
height: 50px;
}
.productdetail
{
    /* background-color: aqua; */
    height: 100px;
    font-family: var(--font);
    
    font-size: 15px;
    /* margin: 5px 0px; */
    /* padding: 10px 0px; */
}
.productdetail th
{
    font-size: 1rem;
}
.product_img{
    /* border: 2px solid red; */
    margin: 5px 10px;
}
.product_img img
{
    width: 13%;
    height: 100%;
}
.product_related{
/* border: 2px solid orange; */
display: flex;
justify-content: start;
align-items: center;
gap:15px;
width: 90%;
}
.delete_btn{
    background-color: transparent;
    border: none;
    cursor: pointer;
}




.total_cost_con{
    /* border: 2px solid green; */
    height: 40%;
    padding: 10px 4%;
    display: flex;
    justify-content: end;
    align-items: center;
}

.cost_conn{
    border: 2px solid rgba(0, 0, 0, 0.295);
    width: 25%;
    height: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
}
.cost_conn h4
{
    font-size: 1rem;
    font-family: var(--font);
    font-weight: 400;
    /* border: 2px solid red; */
    width: 100%;
    display: flex;
    justify-content: space-around;
}
.cost_conn h2
{
    font-size: 25px;
    font-family: var(--font);
    font-weight: 400;
    width: 100%;
    display: flex;
    justify-content: space-around;
}
.cost_conn button
{
    width: 70%;
    background-color: var(--blue);
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    font-family: var(--font);
    height: 40px;
    cursor: pointer;
}

</style>