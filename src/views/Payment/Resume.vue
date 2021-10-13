<template>
  <v-container class="vertical-center">
    <h3 class="text-h3">Resumo</h3>

    <br>
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
    <br><br>
    <p class="text-p2">
      Seus dados para compra:
    </p>

    <div class="quadrado">
      <v-row>
        <v-col cols="10" sm="10" md="10">
          <p class="text-p-quadrado">Endereço de Entrega</p>
          <h3 class="text-h3-quadrado-2">Lorem Ipsum 1234, RJ</h3>
        </v-col>
        <v-col cols="2" sm="2" md="2">
          <img src="../../assets/more.png" width="15%" class="img-style"/>
        </v-col>
      </v-row>
    </div>

     <div class="quadrado">
      <v-row>
        <v-col cols="10" sm="10" md="10">
          <p class="text-p-quadrado">Método de Pagamento</p>
          <h3 class="text-h3-quadrado-2">Boleto</h3>
        </v-col>
        <v-col cols="2" sm="2" md="2">
          <img src="../../assets/more.png" width="15%" class="img-style"/>
        </v-col>
      </v-row>
    </div>
    <br>
    

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
    items: ["Boleto", "Cartão de Crédito", "Pix"],
  }),
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

.quadrado {
  margin-top: 40px;
  width: 100%;
  border: 1px solid #b8b8b8;
  box-sizing: border-box;
  border-radius: 10px;
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
.img-style{
  margin-top: 10px;
}
.row-product {
  margin-inline: inherit;
  padding: 0 10px;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
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
  font-size: 24px;
  line-height: 90%;
  letter-spacing: -0.02em;
  /* margin-left: 20px; */
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
</style>