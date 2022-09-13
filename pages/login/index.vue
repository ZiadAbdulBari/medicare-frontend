<template>
    <div class="container">
        <div class="reg-form-wrapper">
            <div class="reg_form">
                <div>
                    <a href="/">
                        <h2 class="text-center mb-5">Medicare.</h2>
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
            }
        },
        methods:{
            login(){
                let url = "user/login";
                const data = {
                    email:this.email,
                    password:this.password
                }
                this.$axios.post(url,data).then(res=>{
                    console.log(res);
                    if(res.status==200){
                        if(process.browser){
                            window.localStorage.setItem('token',res.data.access_token);
                        }
                        this.$router.push('/');
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