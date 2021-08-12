<template>
  <v-container class="vertical-center">
    <div class="product-container">
      <router-link to="/" class="back"> 
        <v-icon>mdi-chevron-left</v-icon>
        Voltar
      </router-link>
    </div>
    <div class="info-prod-notfound">
      <h2 class="gray-title">ups... este produto não existe mais</h2>
      <h2 class="green-title">pode contatar a loja <br> para mais informações</h2>
      <div class="store-info">
        <a href="#">telefone loja</a>
        <a href="#">email loja</a>
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
  margin: 0 0 20px 10px;
}
.v-content__wrap {
  padding: 0px 5px;
}
.info-prod-notfound {
  margin-top: 18vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 350px;
  justify-content: space-between;
  font-family: "Baloo 2";
  font-weight: 900;
  font-size: 20px;
  padding: 0 36px; 
  line-height: 130%; 
}
.store-info {
  display: flex;
  flex-direction: column;
}
.gray-title {
  color: #B8B8B8;
}
.green-title {
  color: #59BB77;
}
a {
  color: #666666 !important;
}
</style>