<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6" sm="8">
          <b-card no-body class="mx-4">
            <b-card-body class="p-4">
              <b-button @click="goBack"  class="btn btn-primary" type="button">
                <i style="padding-right:5px;" class="cil-arrow-left"></i>ورود
              </b-button>
              <b-form>
                <h1 style="padding-top:10px;">ثبت نام</h1>
                <p class="text-muted">ساختن حساب کاربری</p>
                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text>
                      
                      <i class="icon-user"></i>
                    </b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input
                    type="text"
                    class="form-control"
                    placeholder="نام کاربری"
                    v-model="username"
                    autocomplete="username"
                  />
                </b-input-group>
                  
                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                  <b-input-group-text>
                     <i class="cil-happy"></i>
                  </b-input-group-text>

                  </b-input-group-prepend>
                  <b-form-input
                    type="text"
                    class="form-control"
                    placeholder="نام"
                    v-model="first_name"
                  
                  />
                </b-input-group>
               
                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                      <b-input-group-text>
                     <i class="cil-face"></i>
                  </b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input
                    type="text"
                    class="form-control"
                    placeholder="نام خانوادگی"
                    v-model="last_name"
                  
                  />
                </b-input-group>

                 <b-input-group class="mb-3">
                  <b-input-group-prepend>
                     <b-input-group-text>@</b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input
                    type="text"
                    class="form-control"
                    placeholder="ایمیل شرکتی"
                    v-model="email"
                    autocomplete="email"
                  />
                 </b-input-group>
                   <b-input-group class="mb-3">
                  <b-input-group-prepend>
                   <b-input-group-text>
                     <i class="cil-building"></i>
                  </b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input
                    type="text"
                    class="form-control"
                    placeholder="محل ثبت سازمان"
                    v-model="location"
                 
                  />
               </b-input-group>
               </b-input-group>
                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                     <b-input-group-text><i class="cil-screen-smartphone"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input
                    type="text"
                    class="form-control"
                    placeholder="شماره همراه"
                    v-model="phone_num"
                 
                  />
               </b-input-group>
                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text>
                      <i class="icon-lock"></i>
                    </b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input
                    type="password"
                    class="form-control"
                    placeholder="گذر واژه"
                    v-model="password"
                    autocomplete="new-password"
                  />
                </b-input-group>

                <b-input-group class="mb-4">
                  <b-input-group-prepend>
                    <b-input-group-text>
                      <i class="icon-lock"></i>
                    </b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input
                    type="password"
                    class="form-control"
                    placeholder="تکرار گذر واژه"
                    v-model="repPassword"
                    autocomplete="new-password"
                  />
                </b-input-group>

                <div class="mb-4" >
                  <label style="display:inline;padding:5px">انتخاب عکس احراز هویت</label>
                        <file-select @base64="getbase64id" style="display:inline" v-model="idfile"></file-select>
    
     <label style="display:inline;padding:5px">انتخاب عکس پروفایل </label>
        <file-select style="display:inline" @base64="getbase64profile" v-model="profilefile"></file-select>
  

                </div>

                <b-button variant="success" @click="signup" block>ساختن حساب کاربری</b-button>
              </b-form>
            </b-card-body>
          
          </b-card>
        </b-col>
      </b-row>
    </div>
    <div v-if="message" class="alert alert-primary" role="alert">
      This is a primary alert with
      <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
    </div>
  </div>
</template>

<script>
import FileSelect from "../widgets/FileSelector"
import { mapState, mapActions } from "vuex";
export default {
  name: "Register",
  components:{
    FileSelect
  },
  data() {
    return {
      username: "",
      password: "",
      repPassword: "",
      email: "",
      first_name:"",
      last_name:"",
      phone_num:null,
      message: false,
      signingUp:false,
      location:"",
      idfile:null,
      base64IdFile:"",
      profilefile:null,
      base64ProfileFile:"",
    };
  },
  computed: {
    ...mapState(["accessToken"])
  },
  methods: {
    goBack() {
      this.$router.push({ name: "Login" });
    },
    getbase64id(value){
        this.base64IdFile = value;
    },
    getbase64profile(value){
        this.base64ProfileFile = value;
    },
    signup() {
       this.signingUp = true
      this.$store
        .dispatch("doSignup", {
          userName: this.username,
          password: this.password,
          email: this.email,
          name:this.first_name + " " + this.last_name,
          location: this.location,
          phoneNumber:this.phone_num

        })
        .then(Response => {
            this.signingUp = false
          this.$store
            .dispatch("doLogin", {
              username: this.username,
              password: this.password,
             
            })
            .then(() => {
               this.$router.push({ name: "Home" });
            })
              this.signingUp = false
            .catch(error => {
              alert(error.message);
            });
        })
        .catch(() => {});
    }
  }
};
</script>
