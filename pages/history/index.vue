<template>
    <div>
        <div class="container">
            <table class="table mt-5">
                <thead>
                    <tr>
                    <th scope="col">SL</th>
                    <th scope="col">Patient Name</th>
                    <th scope="col">Doctor Name</th>
                    <th scope="col">Problem</th>
                    <th scope="col">Checkup Time</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="history.length>0" v-for="(record,i) in history" :key="i">
                        <th scope="row">{{i+1}}</th>
                        <td>{{record.patient_name}}</td>
                        <td>{{record.doctor_name}}</td>
                        <td>{{record.disease}}</td>
                        <td>{{record.chosen_date}}</td>
                        <td>------</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                id:"",
                role:"",
                isLoggedin:"",
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
                const url = 'doctor/patient-history/'+this.id;
                let token="";
                if(process.browser){
                    token = window.localStorage.getItem(token);
                }
                this.$axios.get(url,{ headers: { Authorization: token } }).then(res=>{
                    // console.log(res);
                    this.history = res.data.data;
                }).catch(error=>{
                    console.log(error);
                })
            }
        }
    }
</script>

<style>

</style>