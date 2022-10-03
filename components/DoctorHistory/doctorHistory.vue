<template>
    <client-only>
        <div class="content-body">
            <div class="container">
                <date-picker :inline="inline" v-model="date" @change="getHistory()"></date-picker>
                <table class="table mt-5">
                    <thead>
                        <tr>
                        <th scope="col">SL</th>
                        <th scope="col">Patient Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Problem</th>
                        <th scope="col">Checkup Date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="history.length>0" v-for="(record,i) in history" :key="i">
                            <th scope="row">{{i+1}}</th>
                            <td>{{record.patient_name}}</td>
                            <td>{{record.age}}</td>
                            <td>{{record.disease}}</td>
                            <td>{{new Date(record.chosen_date).toLocaleDateString()}}</td>
                            <td>
                                {{record.status}}
                                <!-- <div class="form-check">
                                    <input class="form-check-input" v-model="status" type="radio" value='Pandding' id="pandding" @change="changeStatus(record._id)" :checked="{'true': record.status==='Pandding'}">
                                    <label class="form-check-label" for="pandding">
                                        Pandding
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" v-model="status" type="radio" value="Cancel" id="cancel" @change="changeStatus(record._id)" :checked="{'true':record.status==='Cancel'}">
                                    <label class="form-check-label" for="cancel">
                                        Cancel
                                    </label>
                                </div> -->
                            </td>
                            <td v-if="new Date(record.chosen_date).toLocaleDateString()==today.toLocaleDateString()">
                                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                    <button type="button" class="btn btn-success d-none" @click="changeStatus(record.doctor_id,record.patient_id,'Checking')">Checking</button>
                                    <button type="button" class="btn btn-warning d-none" @click="changeStatus(record.doctor_id,record.patient_id,'Calling')">Calling</button>
                                    <button type="button" class="btn btn-success" @click="changeStatus(record.doctor_id,record.patient_id,'Complete')">Complete</button>
                                    <button type="button" class="btn btn-danger" @click="changeStatus(record.doctor_id,record.patient_id,'Cancel')">Cancel</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </client-only>
</template>

<script>
    import 'vue2-datepicker/index.css';
    export default {
        name:"DoctorHistory",
        data(){
            return{
                inline:false,
                id:"",
                role:"",
                isLoggedin:"",
                status:"",
                date:new Date(),
                history:[],
                URL:'',
                today:new Date(),
            }
        },
        created(){
            if(process.browser){
                const user = JSON.parse(window.localStorage.getItem('userData'));
                const loggedin = JSON.parse(window.localStorage.getItem('is_loggedin'));
                if(user){
                    this.role = user.role;
                    this.id = user._id;
                    this.isLoggedin = loggedin;
                }
            };
            this.getHistory();
        },
        methods:{
            getHistory(){
                console.log('hello');
                const url = 'doctor/get-appointment/'+this.id+'?date='+this.date.toLocaleDateString();
                this.URL=url;
                let token="";
                if(process.browser){
                    token = window.localStorage.getItem(token);
                }
                this.$axios.get(url,{ headers: { Authorization: token } }).then(res=>{
                    console.log(res);
                    this.history = res.data.data;
                }).catch(error=>{
                    console.log(error);
                })
            },
            changeStatus(doctorId,patientId,status){
                // console.log(doctorId,patientId);
                const url = `doctor/change-status/${doctorId}?patient_id=${patientId}`;
                let token="";
                // return;
                if(process.browser){
                    token = window.localStorage.getItem('token');
                }
                const data={
                    status:status
                }
                // console.log(token);
                this.$axios.post(url,data,{ headers: { Authorization: token } }).then(res=>{
                    console.log(res);
                    // this.history = res.data.data;
                }).catch(error=>{
                    console.log(error);
                })
            }
        }
    }
</script>

<style scoped>
/* .content-body{
    height: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
} */
</style>