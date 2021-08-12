<template>
  <v-container class="">
    <div class="product-container">
      <router-link to="/" class="back"> 
        <v-icon>mdi-chevron-left</v-icon>
        Voltar
      </router-link>
    </div>
    <h3 class="text-h3" style="margin-top: 10%">Sacar Saldo</h3>
    <div class="vertical-center">
      <div class="bank">
        <h3 class="bank-title">Nome Completo do Titular da Conta</h3>
        <h3 class="bank-subtitle">CNPJ/CPF: 123.456.789-12</h3>
        <h3 class="bank-title">Banco algumacoisa (cod. banco)</h3>
        <h3 class="bank-subtitle">Agencia: 2544</h3>
        <h3 class="bank-subtitle">Conta Corrente: 45848-4</h3>
      </div>
      <br /><br />
      <v-text-field
        label="Saldo a Sacar"
        outlined
        class="my-input saldo"
      ></v-text-field>

     <v-row>
        <v-col cols="5" sm="5" md="5"> 
            <v-btn elevation="2" class="btn-pr2">Cancelar</v-btn>
        </v-col>
        <v-col cols="2" sm="2" md="2"> </v-col>
        <v-col cols="5" sm="5" md="5"> 
            <v-btn elevation="2" class="btn-pr">Sacar</v-btn>
        </v-col>

      </v-row>
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
  margin: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  margin-top: 10%;
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
.bank-subtitle {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  letter-spacing: -0.02em;
  /* margin-left: 20px; */
  color: #303030;
}
.bank-title {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: -0.02em;
  /* margin-left: 20px; */
  color: #303030;
}
.bank {
  padding: 10px;
  width: 300px;
  height: 113px;
  background: #d4eddc;
}
.text-h3 {
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 90%;
  letter-spacing: -0.02em;
  /* margin-left: 20px; */
  color: #303030;
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
  width: 100%;
  height: 40px !important;
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
.btn-pr2 {
  width: 100%;
  height: 40px !important;
  margin-left: 5%;
  background: #B8B8B8 !important;
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
</style>