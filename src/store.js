import Vue from 'vue'
import  Vuex from 'vuex'
import axios from "axios";
import  config from './config.json'
Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        response : undefined,
        messageC : 'this test ',
            books :[],
        authors: [],
        users:[
            {name : "wafa", lastName : "ben yahia"},
            {name : "test", lastName : "test "}]
    },
    actions: {

        async  getBooks({commit}){
          await  axios.get(config.apiUrl+'books')
                .then(response => {
                    console.log(response.data)
                    commit('setBooks',response.data)
                }).catch(error => {
                console.error(error)
            })
        },
        deleteBook(context , id){
            axios.delete(config.apiUrl+"books/"+id)
                .then(() =>{
                    const deletedBookIndex = this.state.books.findIndex(book => book.id === id) ;
                    this.state.books.splice(deletedBookIndex, 1);
                })
                .catch(
                    reason => {
                        alert("an error occured");
                        console.log(reason);
                    }
                )

        },
        async editbook(context,data){
            try {
                console.log(data)
                const response = await axios.put(config.apiUrl+'books', data);
                console.log(response.data);
               context.commit('setBook',response.data)
            } catch (error) {
                console.error(error);
            }
        },
        async addbook(context,data){
            try {
                console.log(data)
                const response = await axios.post(config.apiUrl+'books', data);
                console.log(response.data);
                context.commit('setBook',response.data)
            } catch (error) {
                console.error(error);
            }
        },
        async getAllAuthors({commit}){
            await axios.get(config.apiUrl+'authors')
                .then(response => {
                    commit('setAuthors', response.data);
                }).catch(error => {
                console.error(error)
            })
        }

    },
    mutations: {
        setBooks(state,newItem){
            state.books = newItem ;
        },
        setBook(state,book){
            state.response = book ;
        },
        setAuthors(state,authors){
            state.authors = authors ;
        }

    },
    getters: {
        getBook : state =>state.books,
    }
});