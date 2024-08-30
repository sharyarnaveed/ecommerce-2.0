<script setup>
import { onMounted, ref } from "vue";
import { usesizes } from "@/stores/sizes";
import axios from "axios";
const gottencategory = ref([]);
const shoessizes = usesizes();

const addproduct = ref({
  addedcategory: "1",
  productname: "",
  price: "",
  storesizes: [],
  description: "",
  images: []
});

const uploadfiles = (e) => {
  Array.from(e.target.files).forEach((file) => {
    addproduct.value.images.push(file);
    console.log(file);
  });
};

const handleproduct = async () => {
  // console.log(addproduct.value.addedcategory);/
  const formdata = new FormData();
  formdata.append("productname", addproduct.value.productname);
  formdata.append("price", addproduct.value.price);
  formdata.append("storesizes", JSON.stringify(addproduct.value.storesizes));
  // formdata.append('storesizes',addproduct.value.storesizes);

  formdata.append("description", addproduct.value.description);
  formdata.append("category", addproduct.value.addedcategory);
  addproduct.value.images.forEach((file) => {
    formdata.append("images", file);
  });

  // console.log(formdata.append());

  // console.log(addproduct.value);
  try {
    const responce = await axios.post("/api/admin/addproduct", formdata);
 if(responce.data)
 {
  alert(responce.data.message);
  location.reload();
 }
addproduct.value={
  addedcategory: "1",
  productname: "",
  price: "",
  storesizes: [],
  description: "",

}

  } catch (error) {
    console.log(error);
  }
};
const addsizes = (theval, ischecked) => {
  if (ischecked) {
    addproduct.value.storesizes.push(theval);
  } else {
    addproduct.value.storesizes = addproduct.value.storesizes.filter(
      (value) => value !== theval
    );
  }

  console.log(addproduct.value.storesizes);
};

const getcategory = async () => {
  const getcateg = await axios.get("/api/admin/getcategory");
  gottencategory.value = getcateg.data;

  // console.log(gottencategory.value);
};

onMounted(() => {
  getcategory();
});
</script>

<template>
  <main>
    <!-- <div v-if="ordersucess"  class="success_message">
                  <h1>{{ ordersucess }}</h1>
              </div>
   -->
    <form @submit.prevent="handleproduct" class="order_now_container">
      <h1>Add Product</h1>
      <div class="order_infocontainer">
        <div class="order_person_info">
          <input
            type="text"
            v-model="addproduct.productname"
            name=""
            required
            placeholder="Product Name"
            id=""
          />
          <input
            type="text"
            v-model="addproduct.price"
            name=""
            required
            placeholder="Product Price"
            id=""
          />
          <div class="ordersizescon">
            <label v-for="(size, index) in shoessizes.size" :key="index" for="">
              <input
                @change="
                  addsizes(shoessizes.size[index], $event.target.checked)
                "
                type="checkbox"
                name=""
                id=""
              />
              {{ size.name }}
            </label>
          </div>
        </div>

        <div class="order_info">
          <textarea
            name=""
            id=""
            required
            v-model="addproduct.description"
            placeholder="Write Description"
            cols="30"
            rows="10"
          ></textarea>

          <div class="imgescon">
            <input
              type="file"
              @change="uploadfiles"
              name=""
              placeholder="upload picture"
              id=""
            />
            <input
              type="file"
              @change="uploadfiles"
              name=""
              placeholder="upload picture"
              id=""
            />
            <input
              type="file"
              @change="uploadfiles"
              name=""
              placeholder="upload picture"
              id=""
            />
            <input
              type="file"
              @change="uploadfiles"
              name=""
              placeholder="upload picture"
              id=""
            />
            <input
              type="file"
              @change="uploadfiles"
              name=""
              placeholder="upload picture"
              id=""
            />
          </div>
        </div>
        <div class="category_ietm">
          <div>
            Category
            <select v-model="addproduct.addedcategory" name="" id="">
              <option
                v-for="(category, index) in gottencategory"
                :key="category.category_id"
                :value="category.category_id"
              >
                {{ category.category_name }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="order_submit_container">
        <button type="submit" class="order_submit">Submit</button>
      </div>
    </form>
  </main>
</template>

<style scoped>
.ordersizescon {
  /* border: 2px solid green; */
padding: 0px 5px;
  width: 40%;
  height: 100%;
  display: flex;
  /* grid-template-columns: repeat(4,auto); */
  justify-content: space-around;
  align-items: center;
}
.ordersizescon label {
  display: flex;
  /* grid-template-columns: repeat(4,auto); */
  justify-content: space-around;
  /* border: 2px solid red; */
  width: 20%;
  /* gap: ; */
  height: 80%;
  font-size: 1.2rem;
  font-family: var(--font);
  align-items: center;
}

.ordersizescon label input {
  width: 50%;
  /* width: 0%; */
  height: 50%;
  /* margin: 0px 9px; */
}
.imgescon {
  /* border: 2px solid red; */
  width: 50%;
  height: 70%;
  display: grid;
  grid-template-columns: repeat(2, auto);
}

.success_message {
  /* border: 2px solid purple; */
  width: 100%;
  height: 80px;
  position: absolute;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.success_message h1 {
  font-size: 50px;

  font-family: "Inter", sans-serif;
  font-weight: 300;
}

.order_now_container {
  /* border: 2px solid red; */
  height: 84%;
}
.order_now_container h1 {
  font-size: 3.5vw;
  margin: 15px 15px;
  font-family: "Inter";

  font-weight: 400;
}
.order_infocontainer {
  /* border: 2px solid blue; */
  height: 73%;
}
.order_person_info {
  /* border: 2px solid purple; */
  height: 17%;
  display: flex;
  justify-content: space-around;
}
.order_person_info input {
  width: 23%;
  height: 100%;
  font-size: 16px;
  font-family: "Inter";
  padding: 0px 5px;
  background-color: #d5d5d58e;
  border: 2px solid rgba(0, 0, 0, 0.199);
  outline: none;
}

.order_submit_container {
  /* border: 2px solid orange; */
  height: 18%;
  display: flex;
  align-items: center;
  padding: 10px 2%;
}

.order_info {
  /* border: 2px solid red; */
  height: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 10px;
}

.order_info textarea {
  width: 62%;
  height: 90%;
  font-size: 16px;
  font-family: "Inter";
  padding: 5px 5px;
  background-color: #d5d5d58e;
  border: 2px solid var(--brown);
  outline: none;
}

.order_info textarea::placeholder {
  color: var(--brown);
}

.order_info h4 {
  font-size: 2.5vw;
  margin: 5px 10px;
  font-family: "Inter";
}

.order_info input {
  display: inline-block;
  padding: 10px 10px;
  cursor: pointer;

  border-radius: 5px;

  font-size: 16px;
}

.order_submit {
  width: 16%;
  height: 80%;
  font-size: 1.5vw;

  border: 2px solid black;

  cursor: pointer;
}
.category_ietm {
  /* border: 2px solid red; */
  height: 15%;
  padding: 10px 10px;
  justify-content: space-around;
  display: flex;
  align-items: center;
}

.category_ietm div {
  /* border: 2px solid yellow; */
  width: 25%;
  height: 100%;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.category_ietm div select {
  width: 90px;
  height: 90%;
}

@media (max-width: 349px) {
  .success_message h1 {
    font-size: 1.2rem;
    color: var(--yellow);
    font-family: "Inter", sans-serif;
    font-weight: 300;
  }
  .order_now_container h1 {
    font-size: 2.5rem;
  }
  .order_person_info {
    /* border: 2px solid green; */
    flex-direction: column;
    height: 180px;
    justify-content: center;
    align-items: center;
    gap: 3%;
  }
  .order_person_info input {
    width: 95%;
  }

  .order_info {
    flex-direction: column;
  }
  .order_info textarea {
    width: 99%;
  }
  .order_info input {
    width: 96%;
  }
  .order_info h4 {
    font-size: 1.5rem;
  }
  .order_submit_container {
    height: 85px;
  }
  .order_submit_container button {
    width: 40%;
    font-size: 1rem;
  }
}

@media (min-width: 350px) {
  .success_message {
    /* border: 2px solid purple; */
    width: 100%;
    height: 80px;
    background-color: var(--brown);
    position: absolute;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .success_message h1 {
    font-size: 1.2rem;
    color: var(--yellow);
    font-family: "Inter", sans-serif;
    font-weight: 300;
  }

  .order_now_container h1 {
    font-size: 2.5rem;
  }
  .order_person_info {
    /* border: 2px solid green; */
    flex-direction: column;
    height: 180px;
    justify-content: center;
    align-items: center;
    gap: 3%;
  }
  .order_person_info input {
    width: 95%;
  }

  .order_info {
    flex-direction: column;
  }
  .order_info textarea {
    width: 99%;
  }
  .order_info input {
    width: 96%;
  }
  .order_info h4 {
    font-size: 1.5rem;
  }
  .order_submit_container {
    height: 85px;
  }
  .order_submit_container button {
    width: 40%;
    font-size: 1rem;
  }
}

@media (min-width: 1024px) {
  main {
    height: 100vh;
  }
  .order_now_container h1 {
    font-size: 3rem;
  }
  .success_message h1 {
    font-size: 1.5rem;
    color: var(--yellow);
    font-family: "Inter", sans-serif;
    font-weight: 300;
  }
  .order_person_info {
    /* border: 2px solid green; */
    flex-direction: row;
    height: 55px;
    justify-content: center;
    align-items: center;
    gap: 3%;
  }
  .order_person_info input {
    width: 26%;
  }
  .order_info {
    flex-direction: row;
    height: 70%;
  }
  .order_info textarea {
    width: 60%;
    height: 270px;
  }
  .order_info input[data-v-aef26c12] {
    width: 100%;
  }
  .order_info h4 {
    font-size: 1.5rem;
  }
  .order_submit_container {
    height: 103px;
  }
  .order_submit_container button {
    width: 16%;
    height: 80%;
    font-size: 1.4rem;
  }
}
</style>
