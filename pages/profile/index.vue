<template>
    <div>
        <div class="container">
            <div class="user-profile">
                <div class="row">
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="profile-pic">
                                    <img v-if="data.profile_img" :src="data.profile_img" alt="" style="width:100%; height:100%;object-fit: cover; margin-top:10px">
                                    <img v-if="!data.profile_img" src="~/static/images/default_doctor_pro_pic.png" alt="" style="width:100%; height:100%;object-fit: cover;margin-top:10px">
                                </div>
                            </div>
                            <PatientProfile v-if="role=='patient'" :data="data"/>
                            <DoctorProfile v-if="role=='doctor'" :data="data"/>
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
            this.$store.dispatch('authenticationInfo');
            this.getProfileData();
        },
        methods:{
            getProfileData(){
                let url = "user/profile/";
                let token = this.$store.state.token;
                this.$axios.get(url,{ headers: { Authorization: token } }).then(res=>{
                    // console.log(res);
                    if(res.status==200){
                        this.data = res.data.profileData;
                        this.id = res.data.profileData._id;
                        this.role = res.data.profileData.role;
                        // this.name = res.data.profileData[0].name;
                        // this.email = res.data.profileData[0].email;
                        // this.contact = res.data.profileData[0].contact;
                        // this.address = res.data.profileData[0].address;
                        // this.age = res.data.profileData[0].age;
                    }
                }).catch(err => {
                    console.log(err);
                })
            },
        }
    }
</script>

<style>

</style>