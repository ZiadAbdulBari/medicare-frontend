<template>
    <div class="container">
        <div class="reg-form-wrapper">
            <div class="reg_form">
                <div>
                    <h2 class="text-center mb-5">Medicare.</h2>
                </div>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" class="form-control" v-model="name" placeholder="Your Name" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" v-model="email" placeholder="email@email.com" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" v-model="password" placeholder="Password" id="exampleInputPassword1">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" v-model="confirm_password" placeholder="Confirm Password" id="exampleInputPassword1">
                    </div>
                    <div class="text-center mt-4">
                        <button type="submit" class="btn bg-color bordered-round" @click.prevent="registration()">Submit</button>
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
                name:"",
                email:'',
                password:'',
                confirm_password:"",
                params: this.$route.params.index,
            }
        },
        methods:{
            registration(){
                let url = "user/registration/"+this.params;
                let data = {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                }
                this.$axios.post(url,data).then(resp=>{
                    console.log(resp);
                }).catch(err => {
                    console.log(err);
                })
                
            }
        }
    }
</script>

<style>

</style>