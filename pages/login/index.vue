<template>
    <div class="container">
        <div class="reg-form-wrapper">
            <div class="reg_form">
                <div class="text-center mb-5">
                    <a href="/">
                        <img src="~/static/images/logo.png" alt="">
                    </a>
                </div>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" v-model="email" placeholder="email@email.com" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" v-model="password" placeholder="Password" id="exampleInputPassword1">
                    </div>
                    <div class="text-center mt-4">
                        <button type="submit" class="btn bg-color bordered-round" @click.prevent="login()">Login</button>
                    </div>
                </form>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        data(){
            return{
                email:"",
                password:"",
                nonActiveMgs:"",
            }
        },
        methods:{
            login(){
                let url = "user/login";
                const data = {
                    email:this.email,
                    password:this.password,
                }
                this.$axios.post(url,data).then(res=>{
                    console.log(res);
                    const Toast = Swal.mixin({
                            toast: true,
                            position: 'bottom-end',
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                           
                        })
                    if(res.status==200){
                        let token = res.data.access_token;
                        let isLoggedin = true;
                        if(process.browser){
                            localStorage.setItem('token', JSON.stringify(token));
                            localStorage.setItem('isLoggedin', JSON.stringify(isLoggedin));
                        }
                        this.$store.dispatch('authenticationInfo');
                        this.$store.dispatch('profileData');
                        Toast.fire({
                            icon: 'success',
                            title: 'Successfully Loggedin'
                        })
                        this.$router.push('/');
                    }
                    // else if (res.status==204){
                    //     this.nonActiveMgs="Sorry! Your accoount is not active. You will be notified after activation"
                    // }
                    else{
                        Toast.fire({
                            icon: 'error',
                            title: 'Authorization Failed'
                        })
                    }
                }).catch(err => {
                    console.log(err);
                })
            }
        }
    }
</script>

<style>

</style>