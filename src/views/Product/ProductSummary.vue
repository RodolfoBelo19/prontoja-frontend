<template>
  <v-container class="vertical-center">
    <h3 class="text-h3-quadrado">Resumo</h3>
    
    <v-row class="row-product">
      <v-col>
        <h3><strong>Escultura wire</strong></h3>
        <h4 style="color: #666666; font-weight: normal;">Variante: Azul</h4>
        <h4 style="color: #666666; font-weight: normal;">Quantidade: 2</h4>
      </v-col>
      <v-col>
        <h4 style="color: #59BB77; text-align: right;"><strong>R$ 50,00</strong></h4>
        <br><br>
        <a href="#" style="color: #59BB77;"><span style="font-size: 14px; margin-left: 50%">Ver Detalhe</span></a>
      </v-col>
    </v-row>
    <br>
    <p style="margin-left: 3%">Seus dados para a compra:</p>
    <br>
    <v-col
      class="d-flex"
      cols="12"
      sm="6"
    >
      <v-select
        :items="items"
        label="Lorem Ipsum 1234, RJ"
        outlined
      ></v-select>
    </v-col>
    <v-col
      class="d-flex"
      cols="12"
      sm="6"
    >
      <v-select
        :items="items"
        label="**** **** **** 1234"
        outlined
      ></v-select>
    </v-col>
    <v-col
      class="d-flex"
      cols="12"
      sm="6"
    >
      <v-select
        :items="items"
        label="3 Parcelas"
        outlined
      ></v-select>
    </v-col>

    <p style="text-align: center; font-size: 12px;">Ao confirmar a compra <br>
      você aceita os <span style="color: #59BB77;">Termos de Serviço</span>
    </p>
    
   

    <v-btn class="btn-pr">
      Confirmar Compra
    </v-btn>

  </v-container>
</template>

<script>
export default {
  data: () => ({
    //
  })
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
  margin-top: 8%;
}
.product-container {
  margin: 0 0 16px 10px;
}
.v-application a {
  font-size: 18px !important;
  line-height: 2.4 !important;
}
.row-product {
  margin-inline: inherit;
  padding: 0 10px;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
}
.v-application p {
  margin-bottom: 1px;
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

.theme--light.v-sheet {
  height: 100%;
}
/* filter: hue-rotate(280deg); */

.v-text-field fieldset, .v-text-field .v-input__control, .v-text-field .v-input__slot {
  border-radius: 5px !important;
}

.font-gray {
  color: #BEBEBE;
  font-family: 'Baloo 2';
}

/*** Símbolo do já em borda 
**
*
 .eclipse {
  width: 23px;
  background: #FFFFFF;
  border-radius: 100px;
  margin-left: 3px;
  padding: 0 15px 0 0;
}

.eclipse-name {
  color: #59BB77;
  text-align: center;
} 
*
**
***/

.font-green {
  color:#59BB77;
  font-family: 'Baloo 2';
}
/* 
.v-btn__content {
  color: #d5d5d5;
} */

.btn-qdt {
  width: 48px;
  height: 45px;
  background: #FFFFFF;
  border: 1px solid #D3D3D3;
  box-sizing: border-box;
  border-radius: 8px;
}

.uni-qdt {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  justify-content: space-between;
  padding: 0 40px;
}

.uni-qdt-content {
  display: flex;
  flex-direction: column;
}

.v-application a {
  line-height: 1.4;
  text-align: center;
  color: #666666;
  font-size: 30px;
}

.border-variant {
  width: 373px;
  height: 0px;
  border: 1px solid #DBDBDB;
  margin-inline: inherit;
  margin-top: 90px;
}

.v-text-field {
  /* border: 0.5px solid #666666 !important; */
}

fieldset {
  border: 2px solid #c5c5c5 !important;
}

.qtd {
  display: flex;
  align-items: center;
}

.row-qtd {
  display: flex;
  flex-direction: column;
  align-items: flex-start;  
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
  font-size: 24px;
  line-height: 90%;
  letter-spacing: -0.02em;
  /* margin-left: 20px; */
  color: #303030;
}
.text-h3-quadrado {
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 90%;
  letter-spacing: -0.02em;
  margin-left: -15px;
  color: #303030;
  padding: 20px;
}
.text-p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  /* identical to box height, or 21px */
  margin-left: 20px;
  letter-spacing: -0.02em;
  margin-top: -15px;
  color: #666666;
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

.btn-pr {
  width: 85%;
  height: 55px !important;
  margin-left: 8%;
  background: #59bb77 !important;
  box-shadow: 0px 5px 20px rgba(28, 64, 39, 0.2);
  border-radius: 10px;
  margin-top: 5%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.02em;
  text-transform: capitalize;
  color: #FFFFFF !important;
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