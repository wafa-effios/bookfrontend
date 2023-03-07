<template>
  <v-data-table
      :headers="headers"
      :items="desserts"
      sort-by="calories"
      class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
          flat
      >
        <v-toolbar-title>Test crud </v-toolbar-title>
        <v-divider
            class="mx-4"
            inset
            vertical
        ></v-divider>
        <v-spacer></v-spacer>

        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this Book?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
          small
          class="mr-2"
          @click="editItem(item.id)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
          small
          @click="deleteItem(item.id)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
          color="primary"
          @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>
<script>
import axios from "axios";

export default {
  data: () => ({
    id:null,
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'id',
        align: 'start',
        sortable: false,
        value: 'id',
      },
      { text: 'title', value: 'name' },
      { text: 'Author id', value: 'author.id' },
      { text: 'Author name', value: 'author.name' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    desserts: [],

  }),



  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.desserts = []
    },

    editItem (item) {
     this.$router.push('/editbook/'+item);
    },

    deleteItem (item) {
      this.id = item ;
      // this.editedIndex = this.desserts.indexOf(item)
      // this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      axios.delete("http://127.0.0.1:5000/books/"+this.id).then(value => {
        this.getData();
        this.id = null ;
        this.closeDelete();
      console.log(value)}).catch(reason => console.log(reason))
      // this.desserts.splice(this.editedIndex, 1)

    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
      })
    },
    async getData() {
      axios.get('http://127.0.0.1:5000/books')
          .then(response => {
            console.log(response.data)
            this.desserts = response.data
          }).catch(error => {
        console.error(error)
      })

    },
  },
  mounted() {
 this.getData();
      }

}
</script>