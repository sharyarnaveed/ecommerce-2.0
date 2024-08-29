<script setup>
import { onMounted, ref } from "vue";
import Description from "@/components/productdetailreview.vue";
import axios from "axios";

const props = defineProps({
  id: String,
});

const mainimg = ref("");
const product_data = ref([]);
const images = ref([]);
const currenttab = ref("Description");
const tabs = { Description };
const quantity = ref(1);
const cartsucess = ref(false);

const getproductdetails = async (id) => {
  try {
    const response = await axios.get(`/api/user/productdetail/${id}`);
    product_data.value = response.data;

    // Parse the images if they are in JSON format
    const jsonImgs = JSON.parse(product_data.value[0].pimg1);
    images.value = jsonImgs.map((img, index) => {
      return {
        id: index,
        path: img.path.replace(/\\/g, "/"), // Fix path separators
      };
    });

    // Set the first image as the main image
    mainimg.value = images.value[0].path;
  } catch (error) {
    console.error("Error fetching product details:", error);
  }
};

// Call getproductdetails when the component is mounted
onMounted(async () => {
  await getproductdetails(props.id);
});

const decrement = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

// for add to cart

const dbPromise = indexedDB.open("cartDB", 1);

dbPromise.onupgradeneeded = (event) => {
  const db = event.target.result;
  // Create an object store for cart items
  if (!db.objectStoreNames.contains("cartItems")) {
    const objectStore = db.createObjectStore("cartItems", {
      keyPath: "id",
      autoIncrement: true,
    });
    objectStore.createIndex("productID", "product_id", { unique: false });
  }
};

dbPromise.onerror = (event) => {
  console.error("Error opening database:", event.target.errorCode);
};

const addtocart = () => {
  const dbRequest = indexedDB.open("cartDB", 1);

  dbRequest.onsuccess = (event) => {
    const db = event.target.result;
    const transaction = db.transaction(["cartItems"], "readwrite");
    const objectStore = transaction.objectStore("cartItems");
    const index = objectStore.index("productID");

    // Prepare the product data
    const product = {
      product_id: props.id,
      product_name: product_data.value[0].product_name,
      product_price: product_data.value[0].product_price,
      quantity: quantity.value,
      product_img:images.value[0].path
    };

    // Check if the product is already in the cart
    const getRequest = index.get(props.id);

    getRequest.onsuccess = () => {
      if (getRequest.result) {
        // Product exists, update quantity
        const updatedProduct = getRequest.result;
        updatedProduct.quantity += quantity.value;

        const updateRequest = objectStore.put(updatedProduct);

        updateRequest.onsuccess = () => {
          console.log("Product quantity updated successfully");
          cartsucess.value = true;
        };

        updateRequest.onerror = () => {
          console.error(
            "Error updating product quantity:",
            updateRequest.error
          );
        };
      } else {
        // Product does not exist, add as a new entry
        const addRequest = objectStore.add(product);

        addRequest.onsuccess = () => {
          console.log("Product added to cart successfully");
          cartsucess.value = true;
        };

        addRequest.onerror = () => {
          console.error("Error adding product to cart:", addRequest.error);
        };
      }
    };

    getRequest.onerror = () => {
      console.error("Error checking product existence:", getRequest.error);
    };
  };

  dbRequest.onerror = (event) => {
    console.error("Error opening database:", event.target.errorCode);
  };
};
</script>

<template>
  <section
    v-for="(product, index) in product_data"
    :key="index"
    class="productdetailcon"
  >
    <div class="productimage">
      <div class="mainimg">
        <img :src="`http://localhost:8000/${mainimg}`" alt="Product Image" />
      </div>

      <div class="subimages">
        <button
          v-for="(img, index) in images"
          :key="index"
          class="subimg"
          @click="mainimg = img.path"
        >
          <img
            :src="`http://localhost:8000/${img.path}`"
            alt="Product Sub Image"
            style="width: 100%; height: 100%"
          />
        </button>
      </div>
    </div>

    <div class="productdetail">
      <div v-if="cartsucess" class="confirmation_message">
        <h4>Item added to cart successfully!</h4>
      </div>

      <div class="productdetailconn">
        <h1>{{ product.product_name }}</h1>
        <h3>${{ product.product_price }}</h3>
      </div>

      <div class="quantity_addcartconn">
        <div class="quantityconn">
          <button @click="decrement">-</button>
          <span>{{ quantity }}</span>
          <button @click="quantity++">+</button>
        </div>
        <div class="addtocart">
          <button @click="addtocart">Add To Cart</button>
        </div>
      </div>

      <div class="reviewproduct">
        <button
          :class="['optionactive', { active: currenttab === tab }]"
          v-for="(_, tab) in tabs"
          :key="tab"
          @click="currenttab = tab"
        >
          {{ tab }}
        </button>
        <div class="reviewconn">
          <component
            :description="product.product_description"
            :is="tabs[currenttab]"
          ></component>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.productdetailcon {
  /* border: 2px solid red; */
  height: 550px;
  display: flex;
}

.productimage {
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.mainimg {
  /* border: 2px solid red; */
  height: 80%;
  width: 80%;
}
.mainimg img {
  width: 100%;
  height: 100%;
}
.subimages {
  /* border: 2px solid blue; */
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

.confirmation_message {
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
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
  padding: 10px 20px;
}

.productdetailconn {
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
  border-bottom: 2px solid rgba(0, 0, 0, 0.096);
  height: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.quantityconn {
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
  height: 85%;
  padding: 15px 10px;
  font-size: 1rem;
  font-family: var(--font);
}

.optionactive.active {
  color: var(--blue);
  border-bottom: 3px solid var(--blue);
  border: left;
}
</style>
