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
            <v-list-item-title><router-link to="mysales">My Purchases</router-link></v-list-item-title>
            <v-list-item-title><router-link to="profileBuyer">Profile</router-link></v-list-item-title>
            <v-list-item-title><router-link to="">Addresses</router-link></v-list-item-title>
            <v-list-item-title><router-link to="payment">Payment Methods</router-link></v-list-item-title>
            <v-list-item-title><router-link to="mysales">Balance</router-link></v-list-item-title>
            <v-list-item-title><router-link to="mysales">My Sales</router-link></v-list-item-title>
            <v-list-item-title><router-link to="myproducts">Products</router-link></v-list-item-title>
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

<style lang="scss">
.h-80 {
  height: 80px;
}

.v-list-item {
  flex-direction: column;
  width: 100% !important;
}

.v-list-item a {
  text-decoration: none;
  color: #303030;
}


</style>
