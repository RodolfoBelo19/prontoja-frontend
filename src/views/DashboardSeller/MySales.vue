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
        <span class="font">Produtooooooooooooooo</span>
      </div>
      <div class="condition">
        <span class="bold unsent">preparando envio</span>
        <button><v-icon>mdi-chevron-up</v-icon></button>
      </div>
    </div>
    <div class="status">
      <div class="status-details">
        <div class="content-center-status">
          <span class="bold font">Rua, Número, Complemento, CEP, Cidade</span>
          <div class="input-container">
            <label class="input-title">Estado da Entrega</label>
            <div class="select-wrapper">
              <span><v-icon>mdi-chevron-down</v-icon></span>
              <select
                type="text"
                id="place-1"
                class="rectangle-title-select bold unsent"
              >
                <option value="Preparando envio" selected class="bold unsent" id="unsent">preparando envio</option>
                <option value="Preparando envio" class="bold sent" id="sent">a caminho</option>
                <option value="Preparando envio" class="bold done" id="done">entregue</option>
              </select> 
            </div>
          </div>
          <div class="input-container">
            <label class="input-title">Nota sobre envio</label>
            <div class="sale-desc-wrapper">
              <span class="sale-correct-wrapper"><v-icon class="sale-correct">mdi-check</v-icon></span>
              <textarea
              type="text"
              id="place"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
              class="rectangle-title"
            ></textarea>
            </div>
          </div>
          <div class="content-center-status-field">
            <div class="status-content">
              <span class="bold font">Variante do Produto (2 unidades)</span>
              <button class="bt-small-green font-white">Editar</button>
            </div>
            <span class="font">Numero de Pedido: <strong class="font">154585</strong></span>
            <br>
            <span class="font">Valor da venda: <strong class="font">R$ total</strong></span>
            <span class="font">Pagamento: <img src="../../assets/visa.png" alt=""><strong class="font"> 8546</strong><span class="bold done"> confirmado</span></span>
            <br>
            <span class="font">Contato Cliente: <strong class="font" style="text-decoration: underline">(dd) 12345-1234, cliente@gmail.com</strong></span>
          </div>
        </div>
      </div>
    </div>
    <div class="sale-details gray opacity">
      <div style="display: flex; justify-content: space-between; width: 58%">
        <span class="bold date">dd/mm</span>
        <span class="font">Produtooooooooooooooo</span>
      </div>
      <div class="condition">
        <span class="bold sent">a caminho</span>
        <button><v-icon>mdi-chevron-down</v-icon></button>
      </div>
    </div>
    <div class="sale-details opacity">
      <div style="display: flex; justify-content: space-between; width: 58%">
        <span class="bold date">dd/mm</span>
        <span class="font">Produtooooooooooooooo</span>
      </div>
      <div class="condition">
        <span class="bold done">entregue</span>
        <button><v-icon>mdi-chevron-down</v-icon></button>
      </div>
    </div>
    <div class="sale-details gray opacity">
      <div style="display: flex; justify-content: space-between; width: 58%">
        <span class="bold date">dd/mm</span>
        <span class="font">Produtooooooooooooooo</span>
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
.gray {
  background: #DADADA;
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
  padding: 5px;
}
.sale-correct {
  color: #59BB77 !important; 
}
.sale-desc-wrapper {
  position: relative;
}
.sale-correct-wrapper {
  position: absolute;
  left: 320px;
  top: 45px;
}
.status-details {
  width: 351px;
  height: auto;
  background: rgba(89, 187, 119, 0.14);
  display: flex;
  width: 100%;
  margin-bottom: 15px;
}
.status {
  padding: 0 8px;
}
.select-wrapper {
  position: relative;
}
.select-wrapper span {
  position: absolute;
  z-index: 10;
  left: 190px;
  top: 18px;
}
label {
  background: #fff; 
  padding: 0px; 
  height: 12px;
  z-index: 10;
}
.opacity {
  opacity: 0.5;
}
.content-center-status {
  padding: 0 25px;
  min-width: 240px;
}
.content-center-status-field {
  min-width: 240px;
  width: 100% !important;

}
.status-content {
  display: flex;
  width: 100%;
  min-width: 240px;
  justify-content: space-between;
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
.font {
  color: #666666;
  font-family: "Poppins";
}
.font-white {
  color: #ffffff;
  font-family: "Poppins";
  text-align: center;
  font-size: 11.5px;
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
.input-container {
  display: flex;
  flex-direction: column;
  
  position: relative;
}
.input-title {
  position: absolute;
  left: 8px;
  top: 6.7px;
  font-size: 12px;
  font-family: "Poppins";
  border-radius: 5px ;
  font-style: normal;
  font-weight: normal;
  line-height: 150%;
  /* or 15px */
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;
  color: #B8B8B8;
}
.bt-small-green {
  width: 95px;
  background: #59BB77;
  box-shadow: 0px 5px 20px rgba(28, 64, 39, 0.2);
  border-radius: 20px;
}
.content-center-status-field {
  padding: 6px 5px;
  width: 380px;
  height: 150px;
  font-size: 13px;
  display: flex;
  flex-direction: column;
}
.input-tile label {
    -webkit-box-shadow: 5px 5px 10px #666;
    -moz-box-shadow: 5px 5px 10px #666;
    box-shadow: 5px 5px 10px #666;
}
.rectangle-title-select {
  width: 230px;
  height: 35px;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 0px 10px;
  margin-top: 12px;
  
}
.rectangle-title {
  width: 363px;
  height: 60px;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 10px;
  margin-top: 12px;
}
#place::placeholder {
  width: 252px;
  height: 23px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 150%;
  margin-left: 10px;
  /* identical to box height, or 22px */
  letter-spacing: -0.02em;
  color: #666666;
}
</style>