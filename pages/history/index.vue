<template>
    <div>
        <PatientHistory v-if="role=='patient'"/>
        <DoctorHistory v-if="role=='doctor'"/>
    </div>
</template>

<script>
import DoctorHistory from '../../components/DoctorHistory/doctorHistory.vue';
import PatientHistory from '../../components/ParientHistory/patientHistory.vue';

    export default {
  components: { PatientHistory, DoctorHistory },
        data(){
            return{
                id:"",
                // role:"",
                isLoggedin:"",
                history:[],
                status:"",
                // statusPanddin:'Pandding',
                // statusCancel:'Cancel',
            }
        },
        computed:{
            role(){
                return this.$store.state.role;
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
        },
        methods:{
            
        }
    }
</script>

<style>

</style>