import Vue from "vue";
import axios from "@nuxtjs/axios";
export const state = () =>{
    return{
        isLoggedin:false,
        token: '',
        id:'',
        profileName:'',
    }
}
export const mutations = {
    setToStateAuthenticationInfo(state,data) {
        state.isLoggedin = data.isLoggedin;
        state.token = data.token;
    },
    setProfileDataToState(state,data){
        state.id = data._id;
        state.profileName = data.name;
    }
}
export const actions = {
    authenticationInfo({commit}){
        if(process.browser){
            if(!localStorage.getItem('token')){
                localStorage.setItem('token',JSON.stringify('none'));
            }
            if(!localStorage.getItem('isLoggedin')){
                localStorage.setItem('isLoggedin',JSON.stringify(false));
            }
            const token = JSON.parse(localStorage.getItem('token'));
            const isLoggedin = JSON.parse(localStorage.getItem('isLoggedin'));
            commit('setToStateAuthenticationInfo',{isLoggedin,token});
        }
    },
    profileData({commit}){
        let url = "https://hellodoctor.onrender.com/api/user/profile";
        let token = this.state.token;
        this.$axios.get(url,{ headers: { Authorization: token } }).then(res=>{
            // console.log(res);
            if(res.status==200){
                let profile = res.data.profileData;
                commit('setProfileDataToState',profile);
                // this.data = res.data.profileData[0];
                // this.id = res.data.profileData[0]._id;
                // this.role = res.data.profileData[0].role;
                // this.name = res.data.profileData[0].name;
                // this.email = res.data.profileData[0].email;
                // this.contact = res.data.profileData[0].contact;
                // this.address = res.data.profileData[0].address;
                // this.age = res.data.profileData[0].age;
            }
        }).catch(err => {
            console.log(err);
        })
                
    }
}