<template>
  <v-container class="vertical-center">
    <h3 class="text-h3-quadrado">Tênis Nike Venture Runner Masculino</h3>
    <p class="text-p">3500 vendas realizadas pela loja</p>
    <br /><br />
    <v-card flat tile style="background: transparent">
      <v-window v-model="onboarding" reverse>
        <v-window-item v-for="n in length" :key="`card-${n}`">
          <img src="../../assets/tenis.png" width="100%" style="margin-top: -20px" />
        </v-window-item>
      </v-window>

      <v-card-actions class="justify-space-between">
        <v-btn text @click="prev">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-item-group v-model="onboarding" class="text-center" mandatory>
          <v-item
            v-for="n in length"
            :key="`btn-${n}`"
            v-slot="{ active, toggle }"
          >
            <v-btn :input-value="active" icon @click="toggle">
              <v-icon>mdi-record</v-icon>
            </v-btn>
          </v-item>
        </v-item-group>
        <v-btn text @click="next">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>

    <br />
    <v-select :items="items" outlined class="my-input"></v-select>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: ["Variantes", "Variantes", "Variantes"],
    length: 3,
    onboarding: 0,
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