<template>
  <v-container class="vertical-center">
    <br /><br />
    <img src="../../assets/paysuccess.png" style="margin-left: 12%" />
    <br /><br />
    <h3 class="text-h3">Já está Pronto</h3>
    <p class="text-h4">Parabéns, a sua compra foi feita corretamente via</p>

    <hr>
    <br>
    <p class="text-p">Vai receber um email confirmando sua <br> compra e pagamento.</p>
    <p class="text-p">Pode conferir suas compras no <br> <span class="link">ProntoJá.com</span></p>

    <v-btn elevation="2" class="btn-pr2">Continuar Comprando</v-btn>
    <v-btn elevation="2" class="btn-pr">Ir para Pronto Já</v-btn>
  </v-container>
</template>

<script>
export default {
  data: () => ({}),
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
  margin-top: 10%;
}
.link {
  color:  #59BB77 !important;
}
.quadrado {
  margin-top: 40px;
  width: 100%;
  border: 1px solid #b8b8b8;
  box-sizing: border-box;
  border-radius: 10px;
}
.text-p-quadrado {
  font-family: "Poppins";
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 150%;
  /* or 15px */
  letter-spacing: -0.02em;
  margin-bottom: 0 !important;
  color: #666666;
  margin-left: 20px;
}
.img-style {
  margin-top: 10px;
}
.text-h3-quadrado-2 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 150%;
  /* or 22px */
  letter-spacing: -0.02em;
  margin-left: 20px;
  color: #666666;
}
.text-h3 {
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 110%;
  text-align: center;
  /* or 46px */
  letter-spacing: -0.02em;
  color: #59bb77;
}
.text-h4 {
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: bold;
  font-size: 27px;
  line-height: 110%;
  text-align: center;
  /* or 46px */
  letter-spacing: -0.02em;
  color: #59bb77;
}
.text-h3-quadrado {
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 90%;
  letter-spacing: -0.02em;
  /* margin-left: 20px; */
  color: #303030;
  padding: 20px;
}
.text-p {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  /* or 21px */
  text-align: center;
  letter-spacing: -0.02em;
  margin-left: 20px;
  color: #303030;
}
.text-p2 {
  font-family: "Poppins";
  text-align: left;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  /* identical to box height, or 21px */

  letter-spacing: -0.02em;

  color: #666666;
}
hr {
  width: 86%;
  margin: 0 auto;
  border: 1px solid #EDEDED;
}
.btn-pr {
  width: 85%;
  height: 55px !important;
  margin-left: 8%;
  background: #59bb77 !important;
  box-shadow: 0px 5px 20px rgba(28, 64, 39, 0.2);
  border-radius: 15px;
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
  width: 85%;
  height: 55px !important;
  margin-left: 8%;
  background: #ffffff !important;
  box-shadow: 0px 5px 20px rgba(28, 64, 39, 0.2);
  border-radius: 15px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  margin-bottom: 5%;
  letter-spacing: -0.02em;
  text-transform: capitalize;
  color: #59bb77 !important;
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