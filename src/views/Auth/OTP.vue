<template>
  <v-container class="vertical-center">
    <img src="../../assets/drawing_pode_trocar.png" style="margin-left: 12%" />
    <h3 class="text-h3">Informe o código de 6 dígitos enviado por email</h3>
    <br />
    <br />
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
    <v-btn elevation="2" class="btn-pr">Entrar</v-btn>
    <br><br>
    <p class="p-end">
      Errou seu e-mail ou não recebeu o código? <a class="a-end">Clique aqui</a>
    </p>
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
  transform: translate(-50%, -50%);
}
.horizontal-center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.text-h3 {
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 100%;
  text-align: center;
  letter-spacing: -0.02em;

  color: #303030;
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

.a-end{
    color: #59BB77 !important;
}
</style>