<script setup>
import { ref, watch } from "vue";

const paymentsucess = ref(false);
const paymentsdetails=ref({
  fname:'',
  lname:'',
  email:'',
  Cod:'',
  address:'',
  mobilenumber:''
})


const handlesubmiison = () => {
  console.log(paymentsdetails.value.Cod);
  paymentsucess.value = true;
};


</script>

<template>

  <div class="paymentform">
    <div :class="{ notdiaplyform: paymentsucess }" class="formheading">
      <h1>Make Payment</h1>
    </div>

    <div :class="{ notdiaplyform: paymentsucess }" class="paymentformcon">
      <form class="paymentforminput" @submit.prevent="handlesubmiison">
        <div class="leftpaymentforminput">
          <input
            class="leftpayinfo"
            placeholder="First Name"
            type="text"
            v-model="paymentsdetails.fname"
            name=""
            id=""
          />
          <input
            class="leftpayinfo"
            placeholder="Last Name"
            type="text"
            v-model="paymentsdetails.lname"
            name=""
            id=""
          />
          <input
            class="leftpayinfo"
            placeholder="Email Address"
            type="email"
               v-model="paymentsdetails.email"
            name=""
            id=""
          />

          <div class="checkbox-wrapper-24">
            <h3>Select Payment Method</h3>
            <input
              type="checkbox"
              id="check-24"
              required
                 v-model="paymentsdetails.Cod"
              name="check"
              value=""
            />
            <label for="check-24">
              <span
                ><!-- This span is needed to create the "checkbox" element --></span
              >Cash On Delievery
            </label>
          </div>
        </div>
        <div class="rightpaymentforminput">
          <textarea
            class="payaddress"
            type="text"
            name=""
               v-model="paymentsdetails.address"
            placeholder="Address"
            id=""
          ></textarea>
          <input
            class="leftpayinfo"
            placeholder="Mobile Number"
            type="text"
            name=""
            id=""
             v-model="paymentsdetails.mobilenumber"
          />
          <button type="submit">Place Order</button>
        </div>
      </form>
    </div>

    <div v-if="paymentsucess" class="sucessloadingconn">
      
        <div class="wrapper">
        <svg
          class="checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          <circle
            class="checkmark__circle"
            cx="26"
            cy="26"
            r="25"
            fill="none"
          />
          <path
            class="checkmark__check"
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          />
        </svg>
        <h1>Success</h1>

        <button  @click="$emit('successpayment')">Complete</button>
      </div>


    </div>



  </div>

</template>

<style scoped>
.formheading {
  /* border: 2px solid red; */
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.formheading h1 {
  font-size: 2.5rem;
  font-family: var(--font);
  font-weight: 400;
  color: var(--blue);
}
.paymentformcon {
  /* border: 2px solid green; */
  height: 85%;
}
.paymentforminput {
  /* border: 2px solid pink; */
  height: 100%;
  display: flex;
}
.leftpaymentforminput {
  /* border: 2px solid green; */
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
.leftpayinfo {
  height: 10%;
  width: 80%;
  font-size: 1rem;
  padding: 0px 5px;
  outline: none;
  background-color: #dfdede;
  border-radius: 5px;
  border: 2px solid rgba(0, 0, 0, 0.096);
}
.leftpaymentforminput h3 {
  color: var(--blue);
  font-size: 1.5rem;
  font-family: var(--font);
  font-weight: 400;
}
.checkbox-wrapper-24 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  /* gap: 5%; */
  /* border: 2px solid red; */
  height: 20%;
}
.checkbox-wrapper-24 .checkbox {
  display: table-cell;
  width: 100%;
  height: 100%;
  vertical-align: middle;
  text-align: center;
}

.checkbox-wrapper-24 label {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  cursor: pointer;
  position: relative;
  font-size: 1.3rem;
  font-family: var(--font);
}
.checkbox-wrapper-24 label span {
  display: inline-block;
  position: relative;
  background-color: transparent;
  width: 25px;
  height: 25px;
  transform-origin: center;
  border: 2px solid #333;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 10px;
  transition: background-color 150ms 200ms,
    transform 350ms cubic-bezier(0.78, -1.22, 0.17, 1.89);
}
.checkbox-wrapper-24 label span[data-v-fd4ade39]:before {
  content: "";
  width: 0px;
  height: 2px;
  border-radius: 2px;
  background: #333;
  position: absolute;
  transform: rotate(45deg);
  top: 9px;
  left: 7px;
  transition: width 50ms ease 50ms;
  transform-origin: 0% 0%;
}
.checkbox-wrapper-24 label span[data-v-fd4ade39]:after {
  content: "";
  width: 0;
  height: 2px;
  border-radius: 2px;
  background: #333;
  position: absolute;
  transform: rotate(305deg);
  top: 13px;
  left: 8px;
  transition: width 50ms ease;
  transform-origin: 0% 0%;
}
.checkbox-wrapper-24 label:hover span:before {
  width: 5px;
  transition: width 100ms ease;
}
.checkbox-wrapper-24 label:hover span:after {
  width: 10px;
  transition: width 150ms ease 100ms;
}

.checkbox-wrapper-24 input[type="checkbox"] {
  display: none;
}
.checkbox-wrapper-24 input[type="checkbox"]:checked + label span {
  background-color: #333;
  transform: scale(1.25);
}
.checkbox-wrapper-24 input[type="checkbox"]:checked + label span:after {
  width: 10px;
  background: #fff;
  transition: width 150ms ease 100ms;
}
.checkbox-wrapper-24 input[type="checkbox"]:checked + label span:before {
  width: 5px;
  background: #fff;
  transition: width 150ms ease 100ms;
}
.checkbox-wrapper-24 input[type="checkbox"]:checked + label:hover span {
  background-color: #333;
  transform: scale(1.25);
}
.checkbox-wrapper-24 input[type="checkbox"]:checked + label:hover span:after {
  width: 10px;
  background: #fff;
  transition: width 150ms ease 100ms;
}
.checkbox-wrapper-24 input[type="checkbox"]:checked + label:hover span:before {
  width: 5px;
  background: #fff;
  transition: width 150ms ease 100ms;
}

.rightpaymentforminput {
  /* border: 2px solid purple; */
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  /* gap: 5%; */
  justify-content: space-evenly;
}
.payaddress {
  height: 30%;
  width: 80%;
  padding: 5px 8px;
  outline: none;
  font-size: 1rem;
  background-color: #dfdede;
  border-radius: 5px;
  border: 2px solid rgba(0, 0, 0, 0.096);
}
.rightpaymentforminput button {
  height: 12%;
  width: 60%;
  background-color: var(--blue);
  border: none;
  color: white;
  font-size: 1.3rem;
  border-radius: 5px;
  cursor: pointer;
}

.notdiaplyform {
  display: none;
}
.sucessloadingconn {
  /* border: 2px solid red; */
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10%;
  border-radius: 10px;
  background-color: #fff;
}
.wrapper h1
{
    font-family: var(--font);
    font-size: 3rem;
    font-weight: 400;
    color: var(--blue);
}
.wrapper button
{
    height: 12%;
  width: 30%;
  background-color: var(--blue);
  border: none;
  color: white;
  font-size: 1.3rem;
  border-radius: 5px;
  cursor: pointer;
}
.checkmark__circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: var(--blue);
  fill: none;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}
.checkmark {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: block;
  stroke-width: 4;
  stroke: #fff;
  stroke-miterlimit: 10;
  margin: 5% auto;
  box-shadow: inset 0px 0px 0px var(--blue);
  animation: fill 0.4s ease-in-out 0.4s forwards,
    scale 0.3s ease-in-out 0.9s both;
}
.checkmark__check {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
}
@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes scale {
  0%,
  100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}
@keyframes fill {
  100% {
    box-shadow: inset 0px 0px 0px 30px var(--blue);
  }
}



</style>
