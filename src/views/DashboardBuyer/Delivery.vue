<template>
  <v-container class="vertical-center">
    <div class="product-container">
      <router-link to="/" class="back"> 
        <v-icon>mdi-chevron-left</v-icon>
        Back
      </router-link>
    </div>
    <h3 class="text-h3">Delivery</h3>
    <v-row>
      <v-col cols="12" sm="6" md="4">
        <v-text-field label="Postal Code" placeholder="01234-010" outlined class="my-input"></v-text-field>
        <p class="p-info">
          City: São Paulo <br>
          Neigborhood: Santa Cecilia <br>
          Street: Rua Baronesa de Itu <br>
          <br>  
        </p> 
        <v-text-field
          label="Door Number"
          outlined
          class="my-input"
          placeholder="Door Number"
        ></v-text-field>
        <v-text-field
          label="Complement (opcional)"
          outlined
          class="my-input"
          placeholder="Complement / Reference"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-btn elevation="2" class="btn-pr">save address</v-btn>
    <br>
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
  transform: translate(-50%, -50%); 
  margin-top: 10%;
  */
}
.text-h3 {
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 90%;
  letter-spacing: -0.02em;
  margin-bottom: 17px;
  color: #303030;
}
.product-container {
  margin: 0 0 16px 10px;
}
.p-info {
  color: #C4C4C4; 
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
.text-p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  /* identical to box height, or 21px */
  /* margin-left: 20px; */
  letter-spacing: -0.02em;

  color: #666666;
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

.btn-pr {
  width: 85%;
  height: 55px !important;
  margin-left: 7%;
  background: #59bb77 !important;
  box-shadow: 0px 5px 20px rgba(28, 64, 39, 0.2);
  border-radius: 8px;
  margin-top: 50%;
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
</style>