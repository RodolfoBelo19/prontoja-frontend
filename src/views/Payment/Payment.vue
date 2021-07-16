<template>
  <v-container class="vertical-center">
    <h3 class="text-h3">Pagamento</h3>
    <p class="text-p">Necesitamos algums detalhes pra procesar o pagamento.</p>
    <v-row>
      <v-col cols="12" sm="12" md="12">
        <v-select :items="items" outlined class="my-input"></v-select>

        <!-- boleto -->
        <!-- <div>
        <v-text-field label="Nome Completo" outlined class="my-input"></v-text-field>
        <v-text-field label="CPF/CNPJ" outlined class="my-input"></v-text-field>
        </div> -->

        <!-- cartao -->
        <!-- <div>
          <v-text-field
            label="Número do cartão"
            outlined
            class="my-input"
          ></v-text-field>
          <v-text-field
            label="Nome como aparece no cartão"
            outlined
            class="my-input"
          ></v-text-field>
          <v-text-field
            label="CPF/CNPJ do cartão"
            outlined
            class="my-input"
          ></v-text-field>
          <v-text-field
            label="Data de vencimento do cartão"
            outlined
            class="my-input"
          ></v-text-field>
          <v-text-field
            label="Código de Segurança 3 digitos"
            outlined
            class="my-input"
          ></v-text-field>
          <v-text-field
            label="Data de Nascimento dd/mm/aa"
            outlined
            class="my-input"
          ></v-text-field>
          <v-text-field
            label="Data de Nascimento dd/mm/aa"
            outlined
            class="my-input"
          ></v-text-field>
        </div> -->

        <!-- PIX -->
        <v-select
          :items="items"
          outlined
          label="Tipo de Chave"
          class="my-input"
        ></v-select>

        <v-text-field
          label="Qual é sua chave PIX?"
          outlined
          class="my-input"
        ></v-text-field>
      </v-col>
    </v-row>
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