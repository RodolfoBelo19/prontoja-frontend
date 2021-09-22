<template>
  <nav id="navbar">
    <v-app-bar>
      <v-toolbar-title> 
        <img src="../assets/prontoJa.png" />
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title><router-link class="menu-title" to="mysales">My Purchases</router-link></v-list-item-title>
            <v-list-item-title><router-link class="menu-title" to="profileBuyer">Profile</router-link></v-list-item-title>
            <v-list-item-title><router-link class="menu-title" to="">Addresses</router-link></v-list-item-title>
            <v-list-item-title><router-link class="menu-title" to="payment">Payment Methods</router-link></v-list-item-title>
            <v-list-item-title><router-link class="menu-title" to="mysales">Balance</router-link></v-list-item-title>
            <v-list-item-title><router-link class="menu-title" to="mysales">My Sales</router-link></v-list-item-title>
            <v-list-item-title><router-link class="menu-title" to="myproducts">My Products</router-link></v-list-item-title>
            <v-list-item-title><router-link class="menu-title" to="">Store Information</router-link></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  data: () => ({}),
  methods: {},
  mounted() {},
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap");

.h-80 {
  height: 80px;
}

.menu-title {
  color: #303030 !important;
  font-family: "Baloo 2";
  font-weight: 900;
  font-size: 1.563rem;
}

.theme--light.v-sheet {
  height: 100vh;
}

#navbar {
  z-index: 10 !important;
}

.v-menu__content {
  left: 50px !important;
  width: 490px !important;
  max-width: 90% !important;
  text-align: right !important;
  top: 55px !important;
  z-index: 5 !important;
}

.v-list-item {
  flex-direction: column;
  width: 100% !important;
}

.v-list-item__title {
  width: 100%;
}

.v-list-item a {
  text-decoration: none;
  color: #303030;
}


</style>
