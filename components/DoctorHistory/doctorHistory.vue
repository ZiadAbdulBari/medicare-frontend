<template>
    <client-only>
        <div class="container">
            <table class="table mt-5">
                <thead>
                    <tr>
                    <th scope="col">SL</th>
                    <th scope="col">Patient Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Problem</th>
                    <th scope="col">Checkup Time</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="history.length>0" v-for="(record,i) in history" :key="i">
                        <th scope="row">{{i+1}}</th>
                        <td>{{record.patient_name}}</td>
                        <td>{{record.age}}</td>
                        <td>{{record.disease}}</td>
                        <td>{{record.chosen_date}}</td>
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
                    </tr>
                </tbody>
            </table>
        </div>
    </client-only>
</template>

<script>
    export default {
        name:"DoctorHistory",
        data(){
            return{
                id:"",
                role:"",
                isLoggedin:"",
                status:"",
                history:[],
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
                // console.log(new Date().toLocaleDateString());
                // return;
                const url = 'doctor/get-appointment/'+this.id+'?date='+new Date().toLocaleDateString();
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
            changeStatus(id){
                const url = 'doctor/edit-status/'+id;
                console.log(this.status);
                let token="";
                // return;
                if(process.browser){
                    token = window.localStorage.getItem('token');
                }
                let data={
                    status:this.status,
                }
                console.log(data);
                // return;
                this.$axios.post(url,data,{ headers: { Authorization: token } }).then(res=>{
                    console.log(res);
                    this.history = res.data.data;
                }).catch(error=>{
                    console.log(error);
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>