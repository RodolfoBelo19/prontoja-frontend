<template>
  <v-container class="vertical-center">
    <h3 class="text-h3">
      Bem-vindo ao checkout <br />
      Pronto Já
    </h3>
    <p class="text-p">
      Última vez que preenche endereços ou como pagar para compras online.
    </p>
    <br />
    <p class="text-p2">
      Checkout num <span style="color: #59bb77">click</span>
    </p>
    <br />
    <v-row>
      <v-col cols="12" sm="6" md="4">
        <v-text-field label="Email" outlined></v-text-field>
      </v-col>
    </v-row>
    <v-btn elevation="2" class="btn-pr">Já vamos confirmar seu e-mail</v-btn>
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
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.text-h3 {
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 99.2%;
  text-align: center;
  letter-spacing: -0.02em;
  color: #59bb77;
}
.text-p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.02em;
  opacity: 0.3;
  color: #666666;
}
.text-p2 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.02em;
  opacity: 0.3;
  color: #666666;
}

.btn-pr {
  width: 85%;
  height: 55px !important;
  margin-left: 5%;
  background: #59bb77 !important;
  box-shadow: 0px 5px 20px rgba(28, 64, 39, 0.2);
  border-radius: 20px;
  margin-top: 15%;
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
</style>