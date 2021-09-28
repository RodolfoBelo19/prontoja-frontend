<template>
  <v-container class="vertical-center">
    <div class="product-container">
      <router-link to="/" class="back"> 
        <v-icon>mdi-chevron-left</v-icon>
        Voltar
      </router-link>
    </div>
    <h3 class="text-h3">Perfil</h3>
    <v-row>
      <v-col cols="12" sm="12" md="12">
        <input v-validate="'email'" data-vv-as="email" name="email_field" type="text">
        <v-text-field label="Nome" outlined class="my-input"></v-text-field>
        <v-text-field label="Email" outlined class="my-input"></v-text-field>
      </v-col>
    </v-row>
    <div class="otp">
      <p class="text-p">
        Informe o código de 6 dígitos que enviamos por e-mail
      </p>
      <v-row>
        <v-col cols="2" sm="2" md="2">
          <v-text-field outlined></v-text-field>
        </v-col>
        <v-col cols="2" sm="2" md="2">
          <v-text-field outlined></v-text-field>
        </v-col>
        <v-col cols="2" sm="2" md="2">
          <v-text-field outlined></v-text-field>
        </v-col>
        <v-col cols="2" sm="2" md="2">
          <v-text-field outlined></v-text-field>
        </v-col>
        <v-col cols="2" sm="2" md="2">
          <v-text-field outlined></v-text-field>
        </v-col>
        <v-col cols="2" sm="2" md="2">
          <v-text-field outlined></v-text-field>
        </v-col>
      </v-row>
    </div>
    <br>
    <v-row>
      <v-col cols="12" sm="12" md="12">
        <v-text-field label="Celular" outlined class="my-input"></v-text-field>
      </v-col>
    </v-row>

    <div class="otp">
      <p class="text-p">
        Informe o código de 6 dígitos que enviamos por SMS
      </p>
      <v-row>
        <v-col cols="2" sm="2" md="2">
          <v-text-field outlined></v-text-field>
        </v-col>
        <v-col cols="2" sm="2" md="2">
          <v-text-field outlined></v-text-field>
        </v-col>
        <v-col cols="2" sm="2" md="2">
          <v-text-field outlined></v-text-field>
        </v-col>
        <v-col cols="2" sm="2" md="2">
          <v-text-field outlined></v-text-field>
        </v-col>
        <v-col cols="2" sm="2" md="2">
          <v-text-field outlined></v-text-field>
        </v-col>
        <v-col cols="2" sm="2" md="2">
          <v-text-field outlined></v-text-field>
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
  /* margin-left: 20px; */
  color: #303030;
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
</style>