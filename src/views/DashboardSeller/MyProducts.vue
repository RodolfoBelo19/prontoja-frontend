<template>
  <v-container class="vertical-center">
    <div class="product-container">
      <a href="#" class="back"> 
        <v-icon>mdi-chevron-left</v-icon>
        Voltar
      </a>
    </div>
    <h3 class="text-h3">Meus Produtos</h3>
    <div class="my-product">
      <div class="info-my-product">
        <span class="font-normal">Produtoooooooooooooooo</span>
        <span class="bold">0/100 (3 variantes)</span>
      </div>
      <div class="icon-my-product">
        <v-icon>mdi-pencil</v-icon>
        <v-icon>mdi-trash-can-outline</v-icon>
      </div>
      
    </div>
  </v-container>
  
</template>

<script>
export default {
  data() {
    return {};
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
  margin: 0 0 30px 35px
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
  margin: 0 0 20px 10px;
}
.date {
  color: #a7a7a7 !important;
}
.font-normal{
  color: #666666;
  font-family: "Poppins";
}
.bold{
  font-weight: 900;
  font-family: "Poppins";
  color: #666666;
}
.text-p {
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 150%;
  /* identical to box height, or 21px */
  /* margin-left: 20px; */
  letter-spacing: -0.02em;
  margin-bottom: 0;

  color: #000000;
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
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
}

.info-my-product {
  display: flex;
  flex-direction: column;
}

.icon-my-product {
  display: flex;
  flex-direction: row;
  
}


</style>