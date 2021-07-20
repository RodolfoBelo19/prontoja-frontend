<template>
  <v-container class="vertical-center">
    <div class="product-container">
      <a href="#" class="back"> 
        <v-icon>mdi-chevron-left</v-icon>
        Voltar
      </a>
    </div>
    <h3 class="text-h3">Novo Produto ou Serviço</h3>
    <span class="bold" style="margin-left: 20px;">Informação do producto/serviço</span>
    <div class="input-container">
        <input type="text" id="place" placeholder="Titulo do produto/serviço" class="rectangle-title">
        <textarea name="desc" id="place" class="rectangle-desc" placeholder="Descrição do produto, tente ser o mais especifico e claro possivel" cols="30" rows="10"></textarea>    
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
.text-h3 {
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 90%;
  letter-spacing: -0.02em;
  /* margin-left: 20px; */
  color: #303030;
  margin: 0 0 10px 30px
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
  margin: 0 0 20px 5px;
}
.v-content__wrap {
  padding: 0px 20px;
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
  color: #DADADA !important;
}
.opacity {
  opacity: 0.55;
}
.mdi-plus {
  color: #59BB77 !important;
  width: 40px;
  font-size: 15px !important;
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
  margin-left: 180px;
  margin-top: 10px;
  padding: 10px;
  width: 239.5px;
  height: 43.72px;
  border: 1px solid #59BB77;
  box-sizing: border-box;
  border-radius: 40px;
  right: 80px;
  top: 50px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;
  color: #59BB77;
}
.icon-plus {
  width: 19px;
  height: 19px;
}
.bold{
  font-weight: 900;
  font-family: "Poppins";
  color: #666666;
  margin-left: 10px;
}
input {
    margin-bottom: 12px;
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
.input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}
.rectangle {
  background: #E8F5EC;
}
.rectangle-title {
    width: 303px;
    height: 46px;
    background: #FFFFFF;
    border: 1px solid #D3D3D3;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 10px;
}
.rectangle-desc {
    width: 303px;
    height: 111px;
    background: #FFFFFF;
    border: 1px solid #D3D3D3;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 10px;
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