<template>
  <div class="input-container">
    <label class="input-title">Nota sobre envio</label>
    <div class="sale-desc-wrapper">
      <span class="sale-correct-wrapper"
        ><v-icon class="sale-correct">mdi-check</v-icon></span
      >
      <input type="text" id="place" placeholder="" class="rectangle-title" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Correct",
};
</script>

<style >
@import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap");

.sales-container {
  margin: 0 0 16px 10px;
}
.sale-correct {
  color: #59bb77 !important;
}
.sale-desc-wrapper {
  position: relative;
}
.sale-correct-wrapper {
  position: absolute;
  left: 320px;
  top: 23px;
}
label {
  background: #fff;
  padding: 0px;
  height: 12px;
  z-index: 10;
}
span {
  font-size: 13px;
}
.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.input-title {
  position: absolute;
  left: 210px;
  top: 6.7px;
  font-size: 12px;
  font-family: "Poppins";
  border-radius: 5px;
  font-style: normal;
  font-weight: normal;
  line-height: 150%;
  /* or 15px */
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;
  color: #b8b8b8;
}
.rectangle-title {
  width: 363px;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 10px;
  margin-top: 12px;
}
</style>