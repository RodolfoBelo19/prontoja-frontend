<template>
  <v-container class="vertical-center">
    <div class="sales-container">
      <a href="#" class="back"> 
        <v-icon>mdi-chevron-left</v-icon>
        Voltar
      </a>
    </div>
    <h3 class="text-h3">Minhas Vendas</h3>
    <div class="sale-details">
      <div style="display: flex; justify-content: space-between; width: 58%">
        <span class="bold date">dd/mm</span>
        <span>Produtooooooooooooooo</span>
      </div>
      <div class="condition">
        <span class="bold unsent">preparando envio</span>
        <button><v-icon>mdi-chevron-down</v-icon></button>
      </div>
    </div>
    <div class="sale-details">
      <div style="display: flex; justify-content: space-between; width: 58%">
        <span class="bold date">dd/mm</span>
        <span>Produtooooooooooooooo</span>
      </div>
      <div class="condition">
        <span class="bold sent">a caminho</span>
        <button><v-icon>mdi-chevron-down</v-icon></button>
      </div>
    </div>
    <div class="sale-details">
      <div style="display: flex; justify-content: space-between; width: 58%">
        <span class="bold date">dd/mm</span>
        <span>Produtooooooooooooooo</span>
      </div>
      <div class="condition">
        <span class="bold done">entregue</span>
        <button><v-icon>mdi-chevron-down</v-icon></button>
      </div>
    </div>
    <div class="sale-details">
      <div style="display: flex; justify-content: space-between; width: 58%">
        <span class="bold date">dd/mm</span>
        <span>Produtooooooooooooooo</span>
      </div>
      <div class="condition">
        <span class="bold done">entregue</span>
        <button><v-icon>mdi-chevron-down</v-icon></button>
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
.sales-container {
  margin: 0 0 16px 10px;
}
.sale-details {
  width: 90%;
  display: flex;
  margin-inline: auto;
  justify-content: space-between;
  text-align: center;
  align-items: center;
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
.condition {
  width: 40%;
  display: flex;
  justify-content: space-between;
}
.unsent {
  color: #FF4E02;
}
.sent {
  color: #FFD600;
}
.done {
  color: #59BB77;
}
.bold{
  font-weight: 900;
  font-family: "Poppins";
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
span {
  font-size: 13px;
}
</style>