<template>
  <v-container class="">
    <div class="product-container">
      <router-link to="/" class="back"> 
        <v-icon>mdi-chevron-left</v-icon>
        Back
      </router-link>
    </div>
    <h3 class="text-h3" style="margin-top: 5%">Withdraw Balance</h3>
    <div class="vertical-center">
      <div class="bank">
        <h3 class="bank-title">Full Name</h3>
        <h3 class="bank-subtitle">Tax ID:  123.456.789-12</h3>
        <h3 class="bank-title">Bank Name (bank number code)</h3>
        <h3 class="bank-subtitle">Agency: 2544</h3>
        <h3 class="bank-subtitle">Checking Account number: 45848-4</h3>
      </div>
      <br /><br />
      <v-text-field
        label="Balance to Withdraw"
        outlined
        class="my-input saldo"
        placeholder="R$ 150,00"
      ></v-text-field>
      <span class="balance-info">
        <span class="balance-info-title">Available Balance <strong>R$ 200,00</strong></span> <br>
        <ul>
          <li>from reimbursements: R$ 45,00 </li>
          <li>from sales: R$ 155,00 </li>
        </ul>
        <p class="balance-info-sub">
          You are awaiting confirmation on the delivery of sales in the amount of: <strong>R$ 250,00</strong> 
        </p>
      </span>
     <v-row>
        <v-col > 
            <v-btn elevation="2" class="btn-pr">confirm</v-btn>
            <v-btn elevation="2" class="btn-pr2">cancel</v-btn>
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
  margin: 0;
  position: absolute;
  left: 50%;
  top: 40%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  margin-top: 10%;
}
.product-container {
  margin: 0 0 16px 10px;
}
.balance-info {
  color: #59bb77;
  margin: 0 auto;
  padding: 0 10px;
}
.balance-info ul {
  padding: 0 35px;
}
.balance-info-title {
  font-size: 17px;
}
.balance-info-sub {
  margin-top: 25px;
  color: #B8B8B8;
  padding: 0 8px;
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
.bank-subtitle {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  letter-spacing: -0.02em;
  /* margin-left: 20px; */
  color: #303030;
}
.bank-title {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: -0.02em;
  /* margin-left: 20px; */
  color: #303030;
}
.bank {
  padding: 10px;
  width: 300px;
  height: 113px;
  background: #F3F3F3;
  border-radius: 5px;
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
  width: 100%;
  height: 40px !important;
  background: #59bb77 !important;
  box-shadow: 0px 5px 20px rgba(28, 64, 39, 0.2);
  border-radius: 8px;
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
.btn-pr2 {
  width: 100%;
  height: 40px !important;
  background: #B8B8B8 !important;
  box-shadow: 0px 5px 20px rgba(28, 64, 39, 0.2);
  border-radius: 8px;
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