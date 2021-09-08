<template>
  <v-container class="vertical-center">
    <div class="product-container">
      <router-link to="/" class="back"> 
        <v-icon>mdi-chevron-left</v-icon>
        Back
      </router-link>
    </div>
    <h3 class="text-h3">New Credit Card</h3>
    <v-row>
      <v-col cols="12" sm="12" md="12">
        <v-text-field label="Number" outlined class="my-input" placeholder="Card Number"></v-text-field>
        <v-text-field label="Name" outlined class="my-input" placeholder="Name on the Card"></v-text-field>
        <v-text-field label="Tax ID" outlined class="my-input" placeholder="Tax ID related to the Card"></v-text-field>
        <v-text-field label="Expiration Date" outlined class="my-input" placeholder="Card Expiration Date"></v-text-field>
        <v-text-field label="Security Code" outlined class="my-input" placeholder="3 digits Card Security Code"></v-text-field>
        <v-text-field label="Date of Birth" outlined class="my-input" placeholder="Date of Birth"></v-text-field>
      </v-col>
    </v-row>
    <div class="option">
          <div class="option-title">
            <span style="margin: 0px auto 20px auto">Is the Delivery Address the Same as the Card Address?</span>
          </div>
          <div class="choices-container">
            <span></span>
            <div class="option-choices">
              <input id="delivery-yes" class="option-input" type="radio" />
              <label for="delivery-yes">Yes</label>
              <input id="delivery-no" class="option-input" type="radio" />
              <label for="delivery-no">No</label>
            </div>
          </div>
        </div>
    <v-row>
      <v-col cols="12" sm="12" md="12">
        <v-text-field label="Postal Code" outlined class="my-input" placeholder="01234-010"></v-text-field>
        <v-text-field label="Door Number" outlined class="my-input" placeholder="Door Number"></v-text-field>
        <v-text-field label="Complement (Optional)" outlined class="my-input" placeholder="Complement / Reference"></v-text-field>
      </v-col>
    </v-row>
   <div class="final-buttons">
        <button class="btn-green">save card</button>
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
.v-content__wrap{
  padding: 0 20px;
}
.final-buttons {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.btn-green {
  padding: 10px;
  width: 100%;
  height: 47.72px;
  box-sizing: border-box;
  border-radius: 10px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;
  color: white;
  background-color: #59bb77;
}
.option-title {
  display: flex;
  font-family: "Poppins";
}
.choices-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0 20px 0;
}
.option-choices {
  justify-self: flex-end;
  display: flex;
  width: 130px;
  justify-content: space-between;
}
.option-choices .option-input {
  filter: hue-rotate(280deg);
  width: 20px;
  height: 20px;
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
  margin-bottom: 20px;
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