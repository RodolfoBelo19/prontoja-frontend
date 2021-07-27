<template>
  <v-container class="vertical-center">
    <div class="product-container">
      <a href="#" class="back">
        <v-icon>mdi-chevron-left</v-icon>
        Voltar
      </a>
    </div>
    <h3 class="text-h3">Novo Produto ou Serviço</h3>
    <span class="bold" style="margin-left: 20px"
      >Informação do producto/serviço</span
    >
    <div class="info-product">
      <div class="input-container">
        <label class="input-title">Título</label>
        <input
          type="text"
          id="place"
          placeholder="Titulo do produto/serviço"
          class="rectangle-title"
        />
      </div>
      <div class="input-container">
        <label class="input-title">Descrição</label>
        <textarea
          name="desc"
          id="place"
          class="rectangle-desc"
          placeholder="Descrição do produto, tente ser o mais especifico e claro possivel"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <span class="bold" style="margin-left: 20px">Fotos (até 10 fotos)</span>
      <p>
        Quanto mais detalhes consigua mostrar ajuda no momento de converter a
        venda
      </p>
      <div class="photo">
        <img style="width: 35%" src="../../assets/shoes.png" alt="" />
        <div style="width: 35%; height: 111.7px" class="add-pic">
          <v-icon>mdi-plus</v-icon>
        </div>
      </div>

      <div class="options-container">
        <div class="option">
          <div class="option-title">
            <span style="margin-top: 20px">Vai cobrar envio do produto?</span>
          </div>
          <div class="choices-container">
            <span></span>
            <div class="option-choices">
              <input id="delivery-yes" class="option-input" type="radio" />
              <label for="delivery-yes">SIM</label>
              <input id="delivery-no" class="option-input" type="radio" />
              <label for="delivery-no">NÃO</label>
            </div>
          </div>
        </div>
        <div class="option">
          <div class="option-title">
            <span>Este produto/serviço tem variantes?</span>
          </div>
          <div class="choices-container">
            <span></span>
            <div class="option-choices">
              <input id="services-yes" class="option-input" type="radio" />
              <label for="services-yes">SIM</label>
              <input id="services-no" class="option-input" type="radio" />
              <label for="services-no">NÃO</label>
            </div>
          </div>
        </div>
      </div>
      <div class="buttons-container">
        <button class="green-button">configure a opção de envio</button>
        <button class="white-button">
          <v-icon class="button-plus">mdi-plus</v-icon
          ><span> adicionar variante</span>
        </button>
      </div>
      <div class="my-product">
        <div class="info-my-product">
          <div class="firstspans">
            <span style="margin-right: 40px">#1</span>
            <span class="bold">0/100(vendidos/total)</span>
          </div>
          <span>Color / Tamanho / Outro</span>
          <span>R$ 155,00</span>
        </div>
        <div class="icon-container" style="display: block">
          <br>
          <div class="icon-my-product">
            <v-icon class="icon-pencil">mdi-pencil</v-icon>
            <v-icon>mdi-trash-can-outline</v-icon>
          </div>
        </div>
      </div>
      <div class="my-product rectangle">
        <div class="info-my-product">
          <div class="firstspans">
            <span style="margin-right: 40px">#2</span>
            <span class="bold">0/100(vendidos/total)</span>
          </div>
          <span>Color / Tamanho / Outro</span>
          <span>R$ 155,50</span>
        </div>
        <div class="icon-container" style="display: block">
          <br>
          <div class="icon-my-product">
            <v-icon class="icon-pencil">mdi-pencil</v-icon>
            <v-icon>mdi-trash-can-outline</v-icon>
          </div>
        </div>
       
      </div>
      <div class="final-buttons">
        <button class="btn-white">Salvar</button>
        <button class="btn-green">Gerar Botão/Link</button>
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
.info-my-product {
  font-family: 'Poppins';
}
p {
  width: 252px;
  height: 23px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #666666;
  margin-left: 20px;
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
  margin: 0 0 10px 20px;
}
.product-container {
  margin: 0 0 16px 1px;
}
.back {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #c1c1c1 !important;
  text-decoration: none;
  margin: 0 0 20px 5px;
}
.v-content__wrap {
  padding: 0px 20px;
}
.content-bg {
  background-color: #fff;
}
.date {
  color: #a7a7a7 !important;
}
.font-normal {
  color: #666666;
  font-family: "Poppins";
}
.mdi-pencil {
  color: #59bb77 !important;
}
.mdi-trash-can-outline {
  color: #dadada !important;
}
.opacity {
  opacity: 0.55;
}
.mdi-plus {
  color: #cecece !important;
}

.mdi:before {
  font-size: 48px;
}

.photo {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
.add-pic {
  width: 119.45px;
  height: 95.55px;
  background: #f6f6f6;
  display: flex;
  justify-content: center;
  border-radius: 14px;
}
.button-wrapper {
  margin-top: 40px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.btn-white {
  margin: 50px 0 20px 0;
  padding: 10px;
  width: 243.5px;
  height: 47.72px;
  border: 1px solid #59bb77;
  box-sizing: border-box;
  border-radius: 40px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  align-items: center;
  letter-spacing: -0.02em;
  color: #59bb77;
}
.btn-green {
  padding: 10px;
  width: 243.5px;
  height: 47.72px;
  box-sizing: border-box;
  border-radius: 40px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;
  color: white;
  background-color: #59bb77;
}
.icon-plus {
  width: 19px;
  height: 19px;
}
.bold {
  font-weight: 900;
  font-family: "Poppins";
  color: #666666;
  margin-left: px;
}
input {
  margin-bottom: 12px;
}
.options-container {
  display: flex;
  flex-direction: column;
  padding: 0 16px;
}
.option-title {
  display: flex;
  font-family: "Poppins";
}
.info-product .options-container .option .option-title p {
  margin: 0 !important;
  font-size: 16px;
}
.choices-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.option-choices {
  justify-self: flex-end;
  display: flex;
  width: 130px;
  justify-content: space-between;
}
.option-choices .option-input {
  filter: hue-rotate(280deg);
  width: 20px;
  height: 20px;
}
.buttons-container {
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  height: 106px;
  justify-content: space-between;
}
.green-button {
  font-family: "Poppins";
  color: white;
  padding: 3px;
  background: #59bb77;
  box-shadow: 0px 5px 20px rgba(28, 64, 39, 0.2);
  border-radius: 20px;
}

.white-button {
  font-family: "Poppins";
  color: #59bb77;
  padding: 3px;
  background: white;
  box-shadow: 0px 5px 20px rgba(28, 64, 39, 0.2);
  border: 1px solid #59bb77;
  border-radius: 20px;
}
.white-button i:before {
  width: 16px;
  height: 16px;
  font-size: 16px;
  color: #59bb77;
}

.my-product {
  width: 100%;
  padding: 10px;
}

.my-product i:before {
  font-size: 28px;
}

.my-product .mdi-pencil {
  color: #59bb77 !important;
}
.mdi-trash-can-outline {
  color: #dadada !important;
}
.final-buttons {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.text-p {
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 150%;
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
.info-product {
  display: flex;
  flex-direction: column;
}
.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.input-title {
  position: absolute;
  left: 28px;
  top: 3.2px;
  font-size: 12px;
  font-family: "Poppins";
  padding: 0 5px;
  background-color: #fff;
}
.rectangle {
  background: #e8f5ec;
}
.rectangle-title {
  width: 363px;
  height: 46px;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 10px;
  margin-top: 12px;
}
.rectangle-desc {
  width: 363px;
  height: 111px;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 10px;
  margin-top: 12px;
  margin-bottom: 15px;
}
.font {
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
  border: none;
  color: #666666;
}
.icon-my-product {
  width: 66px;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
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