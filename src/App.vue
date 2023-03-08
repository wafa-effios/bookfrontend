<template>

  <v-app>
    <v-app-bar app>
      <v-toolbar-title>
        <router-link to="/">My App</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" text>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <router-link to="/" class="v-list-item__content">Home</router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/addbook" class="v-list-item__content">Add book</router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/msg" class="v-list-item__content">message</router-link>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>




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
