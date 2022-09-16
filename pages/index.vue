<template>
  <div class="bootstrap-iso">
    <section>
      <div class="d-flex align-items-center">
        <div class="w-100 text-end">
          <h1 class="banner-main-text">
            Most Trusted<br> Health Partner
          </h1>
            <p>We're teaming up with impactful partners<br> large and small to transform the healthcare system.</p>
            <button class=" btn bordered-round bg-color">Find Doctor</button>
        </div>
        <div class="me-auto">
            <img src="~/static/images/banner1.png" class="" alt="">
        </div>
      </div>
      <div>
      </div>
    </section>
    <section class="common-bg-color">
      <div class="container">
        <div class="content-wrapper">
          <div class="d-flex justify-content-between">
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">Openning Hour</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
              </div>
            </div>
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
              </div>
            </div>
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
              </div>
            </div>
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
    <section class="common-bg-color d-none">
      <div class="container">
        <div class="content-wrapper">
          <p class="text-center">Service</p>
          <h1 class="text-center section-header">Our Medical Services</h1>
          <div class="d-flex gap-2 align-items-start">
            <div class="nav nav-pills me-3 d-flex gap-2 align-content-between  flex-wrap service-tab justify-content-between" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <div class="nav-link tab-button d-flex align-items-center justify-content-center active" v-for="(service,i) in coreService" :key="i" :id="'v-pills-'+service.service_name+'-tab-'+i" data-bs-toggle="pill" :data-bs-target="'#v-pills-'+service.service_name+'-'+i" type="button" role="tab" :aria-controls="'v-pills-'+service.service_name+'-'+i" aria-selected="true">
                <div class="text-center">
                  <div class="tab-button-icon">

                  </div>
                  <p class="tab-button-text">{{service.service_name}}</p>
                </div>
              </div>
            </div>
            <div class="tab-content tab-bg" id="v-pills-tabContent">
              <div class="tab-pane fade show active" v-for="(service,i) in coreService" :key="i" :id="'v-pills-'+service.service_name+'-'+i" role="tabpanel" :aria-labelledby="'v-pills-'+service.service_name+'-tab-'+i" tabindex="0">
                <div class="tab-img">
                  <img src="~/static/images/service1.png" class="w-100" alt="">
                </div>
                <div class="tab-text mt-4 pb-3 px-3">
                  <h3>{{service.title}}</h3>
                  <p>{{service.description}}</p>
                  <button class="btn bg-color bordered-round">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="d-flex justify-content-between top-space w-100">
          <div class="medical-video">
            <img src="~/static/images/bitmap.png" alt="" style="width:100%;height:100%">
          </div>
          <div class="medical-text">
            <h1 class="title">Personal care & healthy living</h1>
            <p class="subtitle">Medicare gives you 24/7, all-in-one healthcare. We're here for you through sickness.</p>
            <p class="discription">When you're feeling sick, Babylon gives you 24/7 access to care. When you're back on your feet, we give you the tools and advice to stay healthy.</p>
            <button class="btn bg-color bordered-round">Read More</button>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
          <div class="row top-space">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-3" v-for="(doctor,i) in allDoctor.slice(0,4)" :key="i">
                  <div class="doctor">
                      <div class="doctor-pic">
                        <img src="" alt="">
                      </div>
                      <div>
                        <h5 class="text-center mt-4">{{doctor.name}}</h5>
                        <p class="text-center mt-2 mb-3">{{doctor.speacialist_on}}</p>
                        <button class="btn bg-color bordered-round" data-bs-toggle="modal" data-bs-target="#exampleModal" @click.prevent="getDoctorInfo(doctor._id,doctor.name)">Appointment</button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
    <section class="common-bg-color">
      <div class="container">
        <div class="content-wrapper">
          <p class="text-center">Testimonials</p>
          <h1 class="text-center mb-5">Trusted by clinicians worldwide</h1>
          <div class="row">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-6">
                  <div class="feedback-wrapper">
                    <div class="quote-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#4B49AC" class="bi bi-quote" viewBox="0 0 16 16">
                        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
                      </svg>
                    </div>
                    <div class="feedback">
                      <p>“Using Medicare has enabled me to grow my private practice and offer therapeutic services to clients throughout California. The technology is excellent and very user friendly. I would recommend Medicare to any practicing clinician.”</p>
                    </div>
                    <div class="d-flex align-items-center">
                      <div class="user-img"></div>
                      <div class="ms-3">
                        <h5 class="user-name">Ziad Abdul Bari</h5>
                        <p class="possition">Dentist</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="feedback-wrapper">
                    <div class="quote-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#4B49AC" class="bi bi-quote" viewBox="0 0 16 16">
                        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
                      </svg>
                    </div>
                    <div class="feedback">
                      <p>“Using Medicare has enabled me to grow my private practice and offer therapeutic services to clients throughout California. The technology is excellent and very user friendly. I would recommend Medicare to any practicing clinician.”</p>
                    </div>
                    <div class="d-flex">
                      <div class="user-img"></div>
                      <div class="ms-3 align-self-center">
                        <h5 class="user-name">Ziad Abdul Bari</h5>
                        <p class="possition">Dentist</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Doctor Schedule</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="text-center" v-if="!dateConfirm">
              <date-picker :inline="inline" v-model="date" @change="checkDoctorSchedule()"></date-picker>
            </div>
            <div v-if="dateConfirm">
              <div class="row">
                <div class="col-md-12">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Patient Name</label>
                    <input type="text" class="form-control" v-model="pathientName" id="exampleInputEmail1" aria-describedby="emailHelp">
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Contact Number</label>
                    <input type="text" class="form-control" v-model="contact" id="exampleInputEmail1" aria-describedby="emailHelp">
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Age</label>
                    <input type="text" class="form-control" v-model="age" id="exampleInputEmail1" aria-describedby="emailHelp">
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Address</label>
                    <input type="text" class="form-control" v-model="address" id="exampleInputEmail1" aria-describedby="emailHelp">
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Disease</label>
                    <input type="text" class="form-control" v-model="disease" id="exampleInputEmail1" aria-describedby="emailHelp">
                  </div>
                  <button type="submit" class="bg-color bordered-round" @click.prevent="cerateAppointment()">Submit</button>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-start">
            <h6>{{text}}</h6>
            <table class="table" v-if="Object.entries(selectedDateInfo).length !== 0">
              <tbody>
                <tr class="table-info">
                  <td>{{selectedDateInfo.day}}</td>
                  <td>{{selectedDateInfo.time}}</td>
                  <td>{{selectedDateInfo.hospital}}</td>
                  <td v-if="userData.isLoggedin==true">
                    <button type="button" class="bg-color bordered-round" @click.prevent="dateConfirm=true">Confirm</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue2-datepicker/index.css';
export default {
  name: 'IndexPage',
  data(){
    return{
      inline:true,
      coreService:[],
      medicalService:{},
      allDoctor:[],
      feedback:[],
      userData:{name:"", isLoggedin:""},
      date:new Date(),
      doctorId:"",
      doctorName:"",
      text:"",
      selectedDateInfo:{},
      dateConfirm:false,
      pathientName:"",
      contact:"",
      age:"",
      address:"",
      disease:"",
    }
  },
  created(){
    if(process.browser){
      const user = JSON.parse(window.localStorage.getItem('userData'));
      const loggedin = JSON.parse(window.localStorage.getItem('is_loggedin'));
      if(user){
        this.userData.name = user.name;
        this.userData.isLoggedin = loggedin;
      }
    }
    this.getCoreService();
    this.getDoctors();
  },
  methods:{
    getCoreService(){
      const url = "home/all-core-service";
      this.$axios.get(url).then(res=>{
        // console.log(res);
        this.coreService = res.data.coreService;
      }).catch(error=>{
        console.log(error);
      })
    },
    getDoctors(){
      const url = "home/all-doctor/doctor";
      this.$axios.get(url).then(res=>{
        // console.log(res);
        this.allDoctor = res.data.allDoctor;
      }).catch(error=>{
        console.log(error);
      })
    },
    getDoctorInfo(id,name){
      this.doctorId = id;
      this.doctorName = name;
    },
    checkDoctorSchedule(){
      this.selectedDateInfo={};
      this.text="";
      if(process.browser){
        let url = 'doctor/schedule-check/'+this.doctorId;
        let data = {
          date: this.date.toLocaleDateString()
        };
        this.$axios.post(url,data).then(res=>{
          console.log(res);
          if(res.status==200){
            this.text= res.data.mgs;
            this.selectedDateInfo = res.data.data;
          }
        }).catch(error=>{
          console.log(error);
        })
      }
    },
    cerateAppointment(){
      const url = 'doctor/appointment';
      let token="";
      if(process.browser){
        token = window.localStorage.getItem(token);
      }
      const data={
        user_name: this.userData.name,
        doctor_name: this.doctorName,
        doctor_id: this.doctorId,
        patient_name: this.pathientName,
        contact: this.contact,
        age: this.age,
        disease: this.disease,
        chosen_date: this.date,
      }
      this.$axios.post(url,data,{ headers: { Authorization: token } }).then(res=>{
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
            title: 'Successfull'
          })
        }
      }).catch(error=>{
        console.log(error);
      })
    }
  }
}
</script>
<style>
</style>
