<template>
  <v-app>
<!--    <v-app-bar-->
<!--      app-->
<!--      color="primary"-->
<!--      dark-->
<!--    >   </v-app-bar>-->


    <router-link to="/">Home</router-link>
    <router-link to="/addbook">add book </router-link>
    <router-link to="/msg">message  </router-link>


    <v-main>

      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
