import Vue from "vue";
import Vuex from "vuex";
//import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        review: {
            author: "",
            des: "",
            score: 0,
            uploadDate: new Date(),
        }
    },  
    getters:{},
    actions:{}, 
    mutations:{},
});