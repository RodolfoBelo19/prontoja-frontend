<template>
  <v-container class="vertical-center">
    <div class="sales-container">
      <router-link to="/" class="back">
        <v-icon>mdi-chevron-left</v-icon>
        Back
      </router-link>
    </div>
    <h3 class="text-h3">My Sales</h3>
    <h3 class="text-h4">Balance: R$ 250</h3>

    <div class="content">
      <v-expansion-panels class="theme--light">
        <v-expansion-panel>
          <v-expansion-panel-header>
            <div class="sale-details">
              <div class="sale-details-content">
                <span class="bold date">09/06</span>
                <span class="font">Produtooooooooooooooo</span>
              </div>
              <div class="condition">
                <span class="bold unsent">Being prepared</span>
                <!-- <button class="bt"><v-icon>mdi-chevron-up</v-icon></button> -->
              </div>
            </div>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="status">
              <div class="status-details">
                <div class="content-center-status">
                  <span class="bold font"
                    >Street, Number, Complement, Postal Code, City</span
                  >
                  <div class="input-container">
                    <label class="input-title">Delivery Status</label>
                    <div class="select-wrapper">
                      <span><v-icon>mdi-chevron-down</v-icon></span>
                      <select
                        type="text"
                        id="place-1"
                        class="rectangle-title-select bold unsent"
                      >
                        <option
                          value="Preparando envio"
                          selected
                          class="bold unsent"
                          id="unsent"
                        >
                          Being prepared
                        </option>
                        <option
                          value="Preparando envio"
                          class="bold sent"
                          id="sent"
                        >
                          a caminho
                        </option>
                        <option
                          value="Preparando envio"
                          class="bold done"
                          id="done"
                        >
                          entregue
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="input-container">
                    <label class="input-title">Delivery Note</label>
                    <div class="sale-desc-wrapper">
                      <span class="sale-correct-wrapper"
                        ><v-icon class="sale-correct">mdi-check</v-icon></span
                      >
                      <textarea
                        type="text"
                        id="place"
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                        class="rectangle-title"
                      ></textarea>
                    </div>
                  </div>
                  <div class="content-center-status-field">
                    <div class="status-content">
                      <span class="bold font">Product Variant (2 units)</span>
                      <!-- <button class="bt-small-green font-white">Editar</button> -->
                    </div>
                    <br />
                    <div class="status-content">
                      <span class="font">
                      <strong class="font">Order Number: </strong>154585
                      </span>
                      <img src="../../assets/visa.png" style="width: 28px; height: 11px;" alt="" /> 
                    </div>
                    <div class="status-content">
                      
                    <span class="font-bold"
                      >R$ total (2 units) </span>
                    
                       <span class="font">8546 ******* 233</span>  
                    </div>
                    <span class="bold done status-content">Order Confirmed</span>
                    <br />
                    <div class="status-content">
                      <span class="font" style="text-decoration: underline; font-size: 12px;"
                        ><strong class="font">Client Contact: </strong> (dd) 12345-1234, cliente@gmail.com</span
                      >
                    
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <div class="sale-details">
              <div class="sale-details-content">
                <span class="bold date">09/06</span>
                <span class="font">Produtooooooooooooooo</span>
              </div>
              <div class="condition">
                <span class="bold sent">On the way</span>
                <!-- <button class="bt"><v-icon>mdi-chevron-up</v-icon></button> -->
              </div>
            </div>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <div class="sale-details">
              <div class="sale-details-content">
                <span class="bold date">09/06</span>
                <span class="font">Produtooooooooooooooo</span>
              </div>
              <div class="condition">
                <span class="bold done">Delivered</span>
                <!-- <button class="bt"><v-icon>mdi-chevron-up</v-icon></button> -->
              </div>
            </div>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <div class="sale-details">
              <div class="sale-details-content">
                <span class="bold date">09/06</span>
                <span class="font">Produtooooooooooooooo</span>
              </div>
              <div class="condition">
                <span class="bold done">Delivered</span>
                <!-- <button class="bt"><v-icon>mdi-chevron-up</v-icon></button> -->
              </div>
            </div>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      
    </div>

    <!-- <div class="sale-details">
      <div class="sale-details-content">
        <span class="bold date">09/06</span>
        <span class="font">Produtooooooooooooooo</span>
      </div>
      <div class="condition">
        <span class="bold sent">On the way</span>
        <button class="bt"><v-icon>mdi-chevron-up</v-icon></button>
      </div>
    </div>
    <div class="sale-details">
      <div class="sale-details-content">
        <span class="bold date">09/06</span>
        <span class="font">Produtooooooooooooooo</span>
      </div>
      <div class="condition">
        <span class="bold done">Delivered</span>
        <button class="bt"><v-icon>mdi-chevron-up</v-icon></button>
      </div>
    </div>
    <div class="sale-details">
      <div class="sale-details-content">
        <span class="bold date">09/06</span>
        <span class="font">Produtooooooooooooooo</span>
      </div>
      <div class="condition">
        <span class="bold done">Delivered</span>
        <button class="bt"><v-icon>mdi-chevron-up</v-icon></button>
      </div>
    </div> -->

    <!-- <div class="sale-details gray opacity">
      <div style="display: flex; justify-content: space-between; width: 58%">
        <span class="bold date">dd/mm</span>
        <span class="font">Produtooooooooooooooo</span>
      </div>
      <div class="condition">
        <span class="bold sent">a caminho</span>
        <button class="bt"><v-icon>mdi-chevron-down</v-icon></button>
      </div>
    </div>
    <div class="sale-details opacity">
      <div style="display: flex; justify-content: space-between; width: 58%">
        <span class="bold date">dd/mm</span>
        <span class="font">Produtooooooooooooooo</span>
      </div>
      <div class="condition">
        <span class="bold done">entregue</span>
        <button><v-icon>mdi-chevron-down</v-icon></button>
      </div>
    </div>
    <div class="sale-details gray opacity">
      <div style="display: flex; justify-content: space-between; width: 58%">
        <span class="bold date">dd/mm</span>
        <span class="font">Produtooooooooooooooo</span>
      </div>
      <div class="condition">
        <span class="bold done">entregue</span>
        <button><v-icon>mdi-chevron-down</v-icon></button>
      </div>
    </div> -->
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
.gray {
  background: #dadada;
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
  margin: 0 0 10px 35px;
}
.text-h4 {
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 90%;
  letter-spacing: -0.02em;
  /* margin-left: 20px; */
  color: #303030;
  margin: 0 0 15px 35px;
}
.sales-container {
  margin: 0 0 16px 10px;
}
.sale-details {
  width: 100%;
  display: flex;
  margin-inline: auto;
  justify-content: space-between;
  text-align: center;
  padding: 5px;
  border-radius: 6px;
  padding: 10px 0 0 0;
}
.sale-details-content {
  display: flex;
  text-align: left;
  flex-direction: column !important;
  justify-content: space-between;
  width: 58%;
  margin: 0px 10px 0 10px;
}
.sale-correct {
  color: #59bb77 !important;
}
.sale-desc-wrapper {
  position: relative;
}
.sale-correct-wrapper {
  position: absolute;
  left: 285px;
  top: 45px;
}
.content {
  width: 90%;
  display: flex;
  margin-inline: auto;
  justify-content: space-between;
  text-align: center;
  padding: 5px;
  border-radius: 6px;
  padding: 10px 0 10px 0;
  margin-bottom: 20px;
  flex-direction: column;
}
.status-details {
  width: 100%;
  height: auto;
  display: flex;
  width: 100%;
  margin-bottom: 15px;
}
.status {
  padding: 0 8px;
}
.select-wrapper {
  position: relative;
}
.select-wrapper span {
  position: absolute;
  z-index: 10;
  left: 285px;
  top: 18px;
}
label {
  background: #fff;
  padding: 0px;
  height: 12px;
  z-index: 10;
}
.bt {
  height: 10%;
}
.opacity {
  opacity: 0.5;
}
.content-center-status {
  padding: 0 15px;
  min-width: 240px;
}
.content-center-status-field {
  min-width: 240px;
  width: 100% !important;
}
.status-content {
  display: flex;
  width: 100%;
  min-width: 240px;
  justify-content: space-between;
}
.back {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #c1c1c1 !important;
  text-decoration: none;
  margin: 0 0 20px 10px;
}
.date {
  color: #666666 !important;
  margin-bottom: 10px;
}
.condition {
  width: 40%;
  display: flex;
  justify-content: space-evenly;
}
.unsent {
  color: #ff4e02;
}
.sent {
  color: #ffd600;
}
.done {
  color: #59bb77;
}
.bold {
  font-weight: 900;
  font-family: "Poppins";
}
.font {
  color: #000000;
  font-family: "Poppins";
}
.font-bold {
  color: #666666;
  font-weight: bold;
  font-family: "Poppins";
}
.font-white {
  color: #ffffff;
  font-family: "Poppins";
  text-align: center;
  font-size: 11.5px;
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
span {
  font-size: 13px;
}
.input-container {
  display: flex;
  flex-direction: column;

  position: relative;
}
.input-title {
  position: absolute;
  left: 8px;
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
.bt-small-green {
  width: 95px;
  background: #59bb77;
  box-shadow: 0px 5px 20px rgba(28, 64, 39, 0.2);
  border-radius: 20px;
}
.content-center-status-field {
  padding: 6px 5px;
  width: 380px;
  height: 150px;
  font-size: 13px;
  display: flex;
  flex-direction: column;
}
.input-tile label {
  -webkit-box-shadow: 5px 5px 10px #666;
  -moz-box-shadow: 5px 5px 10px #666;
  box-shadow: 5px 5px 10px #666;
}
.rectangle-title-select {
  width: 100%;
  height: 35px;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 0px 10px;
  margin-top: 12px;
}
.rectangle-title {
  width: 100%;
  height: 60px;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 10px;
  margin-top: 12px;
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

.v-expansion-panel {
  background: #e9e9e9 !important;
  margin-bottom: 25px;
}
</style>