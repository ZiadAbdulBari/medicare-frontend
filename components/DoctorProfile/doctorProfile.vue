<template>
    <client-only>
        <div class="col-md-9">
            <form>
                <div class="row">
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Name</label>
                                            <input type="text" v-model="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Email</label>
                                            <input type="text" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Contact</label>
                                            <input type="text" v-model="contact" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">NID</label>
                                            <input type="text" v-model="NID" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Work At</label>
                                            <input type="text" v-model="work_at" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Specialist On</label>
                                            <input type="text" v-model="speacialist_on" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Degree</label>
                                            <input type="text" v-model="degree" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-check mb-2">
                                                    <input class="form-check-input" v-model="sunday" type="checkbox" true-value="sunday" false-value="" id="flexCheckDefault" :checked="sunday=='sunday'" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Sunday
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="mb-3">
                                                    <input type="text" v-model="sunday_time" placeholder="4:00pm-8:00pm" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="mb-3">
                                                    <input type="text" v-model="sunday_hospital" placeholder="Hospital Name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="mb-3">
                                                    <input type="text" v-model="sunday_patient" placeholder="Patient Number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-check mb-2">
                                                    <input class="form-check-input" v-model="monday" type="checkbox" true-value="monday" false-value="" id="flexCheckDefault" :checked="monday=='monday'">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Monday
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="mb-3">
                                                    <input type="text" v-model="monday_time" placeholder="4:00pm-8:00pm" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="mb-3">
                                                    <input type="text" v-model="monday_hospital" placeholder="Hospital Name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="mb-3">
                                                    <input type="text" v-model="monday_patient" placeholder="Patient Number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-check mb-2">
                                                    <input class="form-check-input" v-model="tuesday" type="checkbox" true-value="tuesday" false-value="" id="flexCheckDefault" :checked="tuesday=='tuesday'">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Tuesday
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="mb-3">
                                                    <input type="text" v-model="tuesday_time" placeholder="4:00pm-8:00pm" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="mb-3">
                                                    <input type="text" v-model="tuesday_hospital" placeholder="Hospital Name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="mb-3">
                                                    <input type="text" v-model="tuesday_patient" placeholder="Patient Number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-check mb-2">
                                                    <input class="form-check-input" v-model="wednesday" type="checkbox" true-value="wednesday" false-value="" id="flexCheckDefault" :checked="wednesday=='wednesday'">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Wednesday
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="mb-3">
                                                    <input type="text" v-model="wednesday_time" placeholder="4:00pm-8:00pm" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="mb-3">
                                                    <input type="text" v-model="wednesday_hospital" placeholder="Hospital Name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="mb-3">
                                                    <input type="text" v-model="wednesday_patient" placeholder="Patient Number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-check mb-2">
                                                    <input class="form-check-input" v-model="thursday" type="checkbox" true-value="thursday" false-value="" id="flexCheckDefault" :checked="thursday=='thursday'">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Thursday
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="mb-3">
                                                    <input type="text" v-model="thursday_time" placeholder="4:00pm-8:00pm" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="mb-3">
                                                    <input type="text" v-model="thursday_hospital" placeholder="Hospital Name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="mb-3">
                                                    <input type="text" v-model="thursday_patient" placeholder="Patient Number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-check mb-2">
                                                    <input class="form-check-input" v-model="friday" type="checkbox" true-value="friday" false-value="" id="flexCheckDefault" :checked="friday=='friday'">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Friday
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="mb-3">
                                                    <input type="text" v-model="friday_time" placeholder="4:00pm-8:00pm" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="mb-3">
                                                    <input type="text" v-model="friday_hospital" placeholder="Hospital Name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="mb-3">
                                                    <input type="text" v-model="friday_patient" placeholder="Patient Number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-check mb-2">
                                                    <input class="form-check-input" v-model="saturday" type="checkbox" true-value="saturday" false-value="" id="flexCheckDefault" :checked="saturday=='saturday'">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Saturday
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="mb-3">
                                                    <input type="text" v-model="saturday_time" placeholder="4:00pm-8:00pm" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="mb-3">
                                                    <input type="text" v-model="saturday_hospital" placeholder="Hospital Name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="mb-3">
                                                    <input type="text" v-model="saturday_patient" placeholder="Patient Number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn bg-color bordered-round mt-4" @click.prevent="updateProfile()">Update Profile</button>
            </form>
        </div>
    </client-only>
</template>

<script>

    export default {
        name:'doctorProfile',
        props:{
            data:{
                type:Object,
                required: true
            }
        },
        data(){
            return{
                // data:this.data,
                id:this.data._id,
                sunday:this.data.available[0].day,
                sunday_time:this.data.available[0].time,
                sunday_hospital:this.data.available[0].hospital,
                sunday_patient:this.data.available[0].patient_cheack,
                monday:this.data.available[1].day,
                monday_time:this.data.available[1].time,
                monday_hospital:this.data.available[1].hospital,
                monday_patient:this.data.available[1].patient_cheack,
                tuesday:this.data.available[2].day,
                tuesday_time:this.data.available[2].time,
                tuesday_hospital:this.data.available[2].hospital,
                tuesday_patient:this.data.available[2].patient_cheack,
                wednesday:this.data.available[3].day,
                wednesday_time:this.data.available[3].time,
                wednesday_hospital:this.data.available[3].hospital,
                wednesday_patient:this.data.available[3].patient_cheack,
                thursday:this.data.available[4].day,
                thursday_time:this.data.available[4].time,
                thursday_hospital:this.data.available[4].hospital,
                thursday_patient:this.data.available[4].patient_cheack,
                friday:this.data.available[5].day,
                friday_time:this.data.available[5].time,
                friday_hospital:this.data.available[5].hospital,
                friday_patient:this.data.available[5].patient_cheack,
                saturday:this.data.available[6].day,
                saturday_time:this.data.available[6].time,
                saturday_hospital:this.data.available[6].hospital,
                saturday_patient:this.data.available[6].patient_cheack,

                name:this.data.name,
                email:this.data.email,
                contact:this.data.contact,
                NID:this.data.NID,
                work_at:this.data.work_at,
                speacialist_on:this.data.speacialist_on,
                degree:this.data.degree,
               
            }
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
                        NID:this.NID,
                        sunday: this.sunday,
                        sunday_time: this.sunday_time,
                        sunday_hospital: this.sunday_hospital,
                        sunday_patient: this.sunday_patient,
                        monday:this.monday,
                        monday_time:this.monday_time,
                        monday_hospital:this.monday_hospital,
                        monday_patient:this.monday_patient,
                        tuesday:this.tuesday,
                        tuesday_time:this.tuesday_time,
                        tuesday_hospital:this.tuesday_hospital,
                        tuesday_patient:this.tuesday_patient,
                        wednesday:this.wednesday,
                        wednesday_time:this.wednesday_time,
                        wednesday_hospital:this.wednesday_hospital,
                        wednesday_patient:this.wednesday_patient,
                        thursday:this.thursday,
                        thursday_time:this.thursday_time,
                        thursday_hospital:this.thursday_hospital,
                        thursday_patient:this.thursday_patient,
                        friday:this.friday,
                        friday_time:this.friday_time,
                        friday_hospital:this.friday_hospital,
                        friday_patient:this.friday_patient,
                        saturday:this.saturday,
                        saturday_time:this.saturday_time,
                        saturday_hospital:this.saturday_hospital,
                        saturday_patient:this.saturday_patient,
                        work_at:this.work_at,
                        speacialist_on:this.speacialist_on,
                        degree:this.degree,
                    }
                    this.$axios.post(url, data, { headers: { Authorization: token } }).then(res=>{
                        console.log(data);
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