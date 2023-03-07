import Vue from 'vue'
import  Vuex from 'vuex'
Vue.use(Vuex);
export const store = new Vuex.Store({
    state:{
        messageC : 'this test ',
        users:[
            {name : "wafa", lastName : "ben yahia"},
            {name : "test", lastName : "test "}]
    }
});