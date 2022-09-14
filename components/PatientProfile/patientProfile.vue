<template>
    <div class="col-md-8">
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
    </div>
</template>

<script>

    export default {
        name:"patientProfile",
        props:{
            data: {
                type: Object,
                required: true
            }
        },
        data(){
            return{
                // data:{},
                role:this.data.role,
                id:this.data._id,
                name: this.data.name,
                email: this.data.email,
                contact: this.data.contact,
                address: this.data.address,
                age: this.data.age,
            }
        },
        created(){
        },
        methods:{
            updateProfile(){
                const url = "user/edit-profile/"+this.id;
                if(process.browser){
                    const token = window.localStorage.getItem('token');
                    // console.log(token);
                    let data = {
                        name:this.name,
                        email:this.email,
                        contact:this.contact,
                        address:this.address,
                        age:this.age
                    }
                    this.$axios.post(url, data, { headers: { Authorization: token } }).then(res=>{
                        console.log(res);
                        if(res.status==200){
                            const Toast = Swal.mixin({
                                toast: true,
                                position: 'bottom-end',
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true,
                            })
                            Toast.fire({
                                icon: 'success',
                                title: 'Profile Update Seccessfull'
                            })
                        }
                        else{
                            const Toast = Swal.mixin({
                                toast: true,
                                position: 'bottom-end',
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true,
                            })
                            Toast.fire({
                                icon: 'error',
                                title: 'Profile Update Failed'
                            })
                        }
                    }).catch(err => {
                        console.log(err);
                    })
                }
            }
        }
    }
</script>

<style>

</style>