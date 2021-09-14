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
          <!-- <v-icon>mdi-chevron-left</v-icon> -->
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
          <!-- <v-icon>mdi-chevron-right</v-icon> -->
        </v-btn>
      </v-card-actions>
    </v-card>

    <br />
    <v-select :items="items" outlined class="my-input test"></v-select>

    <v-row class="row-qtd">
      <span style="color: #B8B8B8; font-family: 'baloo 2">Quantity</span>
      <div class="qtd">
        <a class="btn-qdt" style="margin-left: 40px; border-radius: 6px;">-</a>
        <span style="padding: 0 20px; color: #B8B8B8;">1</span>
        <a class="btn-qdt" >+</a>
      </div>
    </v-row>

    <div class="border-variant"></div>
  
    <div class="uni-qdt">
      <div class="uni-qdt-content">
        <span class="font-gray">Units x Variant</span>
        <span class="font-gray"><strong>Total</strong></span>
      </div>
      <div class="uni-qdt-content">
        <span class="font-gray">2 x R$ 50,00</span>
        <span class="font-green"><strong>R$ 100,00</strong></span>
      </div>
    </div>

    <v-btn class="btn-pr">
      Comprar<span class="eclipse"><span class="eclipse-name"> Já</span></span>
    </v-btn>

  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: ["Blue", "Variants", "Variants"],
    length: 5,
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

/* filter: hue-rotate(280deg); */

.v-text-field fieldset, .v-text-field .v-input__control, .v-text-field .v-input__slot {
  border-radius: 5px !important;
}

.font-gray {
  color: #BEBEBE;
  font-family: 'Baloo 2';
}

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
  align-items: center;
  justify-content: center;
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