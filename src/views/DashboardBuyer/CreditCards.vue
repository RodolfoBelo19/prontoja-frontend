<template>
  <v-container class="vertical-center">
    <div class="product-container">
      <router-link to="/" class="back"> 
        <v-icon>mdi-chevron-left</v-icon>
        Back
      </router-link>
    </div>
    <h3 class="text-h3">Credit Cards </h3>
    <div class="button-wrapper">
      <router-link tag="button" class="btn-white" id="button" to="newproductorservice"><v-icon>mdi-plus</v-icon>Add Credit Card</router-link>
    </div>
    <div class="my-product rectangle">
      <div class="info-my-product">
        <span class="text-p">Visa - last 4 digits</span>
        <span class="text-p">mm/aa</span>
        <div class="switch">
          <span class="bold">Default</span>
          <v-switch
            v-model="switch1"
            inset>
          </v-switch>
        </div>
      </div>
      <div class="icon-my-product">
        <v-icon class="icon-pencil">mdi-pencil</v-icon>
      </div>
    </div>
    <div class="my-product rectangle">
      <div class="info-my-product">
        <span class="text-p">Visa - last 4 digits</span>
        <span class="text-p">mm/aa</span>
        <div class="switch">
          <span class="bold">Default</span>
          <v-switch
            v-model="switch2"
            inset>
          </v-switch>
        </div>
      </div>
      <div class="icon-my-product">
        <v-icon class="icon-pencil">mdi-pencil</v-icon>
      </div>
    </div>
    
  </v-container>
  
</template>

<script>
export default {
  components: {},
  data() {
    return {
      switch1: true,
      switch2: false,
      switch3: false
  
    };
  },

  mounted() {},
};
</script>

<style >
@import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap");
.vertical-center {
  /* margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%); */
  /* margin-top: 10%; */
}
.text-h3 {
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 90%;
  letter-spacing: -0.02em;
  /* margin-left: 20px; */
  color: #303030;
  margin: 0 0 10px 10px
}
.product-container {
  margin: 0 0 16px 10px;
}
.back {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #C1C1C1 !important;
  text-decoration: none;
  margin: 0 0 20px -10px;
}
.v-content__wrap {
  padding: 0px 20px;
}
.date {
  color: #a7a7a7 !important;
}
.font-normal {
  color: #666666;
  font-family: "Poppins";
}
.mdi-pencil {
  color: #B8B8B8 !important;
}
.mdi-trash-can-outline {
  color: #B8B8B8 !important;
}
.mdi-plus {
  color: #59BB77 !important;
  margin-right: 10px;
  font-size: 15px !important;
}
.my-product i:before {
  font-size: 28px;
}
.button-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
}
.btn-white {
  padding: 10px;
  width: 230px;
  height: 32.72px;
  box-sizing: border-box;
  border-radius: 40px;
  right: 80px;
  top: 50px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;
  color: #59BB77;
  justify-content: center;
}
.icon-plus {
  width: 19px;
  height: 19px;
}
.bold{
  font-weight: 900;
  font-family: "Poppins";
  color: #666666;
}
.text-p {
  font-weight: 900;
  font-family: "Poppins";
  color: #8a8989;
}
.text-p2 {
  font-family: "Poppins";
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  /* identical to box height, or 21px */

  letter-spacing: -0.02em;

  color: #666666;
}

.otp {
  height: 130px;
  width: 100%;
  background-color: #e9e9e9;
  padding: 10px;
}
.switch {
  display: flex;
  width: 130px;
  justify-items: center;
  align-items: center;
  justify-content: space-around;

}
.btn-pr {
  width: 85%;
  height: 55px !important;
  margin-left: 5%;
  background: #59bb77 !important;
  box-shadow: 0px 5px 20px rgba(28, 64, 39, 0.2);
  border-radius: 20px;
  margin-top: 5%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;

  text-align: center;
  letter-spacing: -0.02em;
  text-transform: capitalize;
  color: #ffffff !important;
}
.my-input.v-input .v-input__slot {
  border-radius: 8px;
}
.p-end {
  font-family: "Poppins";
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 150%;
  /* or 15px */

  text-align: center;
  letter-spacing: -0.02em;

  color: #b8b8b8;
}

.my-product {
  display: flex;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 4px 10px;
}
.info-my-product {
  display: flex;
  flex-direction: column;
  padding: 10px;
  z-index: 50;
}
.rectangle {
  background: #F3F3F3;
  margin: 30px 0 20px 0;
  border-radius: 10px;
}
.icon-my-product {
  margin-bottom: 46px;
}


</style>