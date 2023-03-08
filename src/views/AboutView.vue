<template>
  <v-card
      elevation="2"
      outlined
      class="mx-auto my-12"
      max-width="600"
  >
  <div class="about">
<!--    <h1> haka ta9ra params men vue js </h1>-->
<!--    <h1>Params Id {{$router.params.teamid}}</h1>-->
    <v-card-title>{{nameVue}}</v-card-title>
    <v-card-text>
    <v-text-field v-model="title" label="Title" required></v-text-field>

    <v-select
        v-model="author"
        :items="$store.state.authors"
        item-text="name"
        item-value="id"
   />
    </v-card-text>
    <v-card-actions>
    <v-btn  @click="clicked">{{nameVue}} book </v-btn >

    <v-btn  @click="goHome">go Home </v-btn >
    </v-card-actions>
  </div>
  </v-card>
</template>
<script>
import axios from "axios";

export  default {
  data(){
    return {
      nameVue:'Add',
      id: undefined ,
      title: '',
      author: {

      },
      options:[]
    }
  },
  methods :{
    goHome(){
      this.$router.push('/');
    },
    clicked(){
      if(this.id !== undefined){
        this.EditBook()
      }else {
        this.addBook()
      }
    },
    async EditBook() {
      const authSelected = this.$store.state.authors.find(value => value.id === this.author);
      const data = {
        id: this.id ,
        title: this.title,
        author: authSelected,
      };
      await this.$store.dispatch('editbook', data);
      this.goHome()
    },

    async addBook() {
       const authSelected = this.$store.state.authors.find(value => value.id === this.author);
      const data = {
        title: this.title,
        author: authSelected,
      };
      await this.$store.dispatch('addbook', data);
      if(this.$store.state.response != undefined){
        alert('add with sucess')
      }

    },
  },
  mounted() {
    this.id = this.$route.params.id ;
    console.log(this.id)
    if(this.id !== undefined){
      this.nameVue = 'Edit'
      axios.get('http://127.0.0.1:5000/book/'+this.id)
          .then(response => {
            const book = response.data
            this.title = book.title;
          }).catch(error => {
        console.error(error)
      })
    }
    this.$store.dispatch('getAllAuthors');

  }

}
</script>

