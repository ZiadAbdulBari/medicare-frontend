import Vue from "vue";
import axios from "@nuxtjs/axios";
export const state = () =>{
    return{
        isLoggedin:false,
        token: '',
    }
}
export const mutations = {
    setToStateAuthenticationInfo(state,data) {
        state.isLoggedin = data.isLoggedin;
        state.token = data.token;
    }
}
export const actions = {
    authenticationInfo({commit}){
        if(process.browser){
            if(!localStorage.getItem('token') && !localStorage.getItem('isLoggedin')){
                localStorage.setItem('token',JSON.stringify(''));
                localStorage.setItem('isLoggedin',JSON.stringify(false));
            }
            const token = localStorage.getItem('token');
            const isLoggedin = localStorage.getItem('isLoggedin');
            commit('setToStateAuthenticationInfo',{isLoggedin,token});
        }
    }
}