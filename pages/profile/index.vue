<template>
    <div>
        <div class="container">
            <div class="user-profile">
                <div class="row">
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="profile-pic"></div>
                            </div>
                            <PatientProfile v-if="role=='patient'" :data="data"/>
                            <DoctorProfile v-if="role=='doctor'" :data="data"/>
                            <!-- <div class="col-md-8">
                                <form>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label for="exampleInputEmail1" class="form-label">Name</label>
                                                        <input type="text" v-model="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label for="exampleInputPassword1" class="form-label">Email</label>
                                                        <input type="email" v-model="email" class="form-control" id="exampleInputPassword1" readonly>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label for="exampleInputEmail1" class="form-label">Contact</label>
                                                        <input type="text" v-model="contact" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label for="exampleInputPassword1" class="form-label">Address</label>
                                                        <input type="text" v-model="address" class="form-control" id="exampleInputPassword1">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label for="exampleInputEmail1" class="form-label">Age</label>
                                                        <input type="text" v-model="age" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn bg-color bordered-round mt-4" @click.prevent="updateProfile()">Update Profile</button>
                                </form>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PatientProfile from "../../components/PatientProfile/patientProfile.vue";
    import DoctorProfile from "../../components/DoctorProfile/doctorProfile.vue";
    export default {
        components:{PatientProfile,DoctorProfile},
        data(){
            return{
                data:{},
                role:'',
                id:"",
                // name: "",
                // email: "",
                // contact: "",
                // address: "",
                // age: "",
            }
        },
        created(){
            this.getProfileData();
        },
        methods:{
            getProfileData(){
                let url = "user/profile/";
                if(process.browser){
                    const token = window.localStorage.getItem('token');
                    this.$axios.get(url,{ headers: { Authorization: token } }).then(res=>{
                        // console.log(res);
                        if(res.status==200){
                            this.data = res.data.profileData[0];
                            this.id = res.data.profileData[0]._id;
                            this.role = res.data.profileData[0].role;
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
            },
        }
    }
</script>

<style>

</style>