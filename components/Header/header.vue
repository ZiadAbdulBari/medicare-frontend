<template>
    <div>
        <!-- <div class="alert alert-warning mb-0" role="alert" v-if="isActive==false">
            <div class="container text-center">
                Your account is not active. Please complete your profile to activete your account.
            </div>
        </div> -->
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container">
                <nuxt-link class="navbar-brand" to="/"><img src="~/static/images/logo.png" alt=""></nuxt-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul class="navbar-nav text-center gap-4">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Service</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Doctor</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                <div>
                    
                    <div class="d-flex" v-if="is_loggedin===false || is_loggedin==='false'">
                        <div class="dropdown">
                            <a class="btn btn bg-color bordered-round dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Registration
                            </a>

                            <ul class="dropdown-menu">
                                <li><nuxt-link to="/registration/doctor" class="dropdown-item" href="#">Registration As A Doctor</nuxt-link></li>
                                <li><nuxt-link to="/registration/patient" class="dropdown-item" href="#">Registration As A Patient</nuxt-link></li>
                            </ul>
                        </div>
                        <nuxt-link to="/login" class="btn bordered bordered-round ms-3">Login</nuxt-link>
                    </div>
                    <ul class="navbar-nav" v-if="is_loggedin===true || is_loggedin==='true'">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle after-login" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <div class="header-pic me-2">
                                    <img v-if="imageURL" :src="imageURL" alt="" width="100%" style="object-fit:cover">
                                    <img v-if="!imageURL" src="~/static/images/user.png" alt="" width="100%">
                                </div>
                                <h6 class="me-1 mb-0">{{name}}</h6>
                            </a>
                            <ul class="dropdown-menu">
                                <li><nuxt-link class="dropdown-item" to="/profile">Profile</nuxt-link></li>
                                <li><nuxt-link class="dropdown-item" to="/history">History</nuxt-link></li>
                                <li><a class="dropdown-item" @click.prevent="logout()">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                   
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                is_loggedin: false,
                name:'',
                imageURL:'',
                isActive: false,
            }
        },
        created(){
            if(process.browser){
                const userData = JSON.parse(window.localStorage.getItem('userData'));
                if(window.localStorage.getItem('is_loggedin')!=null){
                    this.is_loggedin =JSON.parse(window.localStorage.getItem('is_loggedin'));
                }
                if(userData!=null){
                    this.name = userData.name;
                    this.imageURL = userData.profile_img;
                    this.isActive = userData.is_activeted;
                }
                
                // console.log(this.is_loggedin);
            }
        },
        methods:{
            logout(){
                if(process.browser){
                    window.localStorage.setItem('is_loggedin','false');
                    window.localStorage.setItem('token','');
                    window.localStorage.setItem('userData',"{}");
                    this.is_loggedin='false';
                    this.$router.push('/');
                }
            }
        }
    }
</script>

<style>

</style>