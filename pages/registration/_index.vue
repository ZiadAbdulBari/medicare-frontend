<template>
    <div class="d-flex">
        <div class="reg_form">
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="text" class="form-control" v-model="name" id="exampleInputEmail1" aria-describedby="emailHelp">
                    <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" v-model="email" id="exampleInputEmail1" aria-describedby="emailHelp">
                    <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" v-model="password" id="exampleInputPassword1">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" v-model="confirm_password" id="exampleInputPassword1">
                </div>
                <button type="submit" class="btn btn-primary" @click.prevent="registration()">Submit</button>
            </form>
        </div>
        <div class="reg_img ms-auto">
            <img src="~/static/images/d_reg_img.png" alt="">
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