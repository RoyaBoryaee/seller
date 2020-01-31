<template>
  <div
    class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
    style="margin-left:auto;margin-right:auto;"
  >
    <div class="card" style="width: 18rem;margin:auto;">
      <div class="card-header" style="text-align:center">
        نمایش راه‌های ارتباطی
      </div>
      <table style="direction:rtl;text-align:right;">
        <tr>
          <td>نام</td>
          <td>{{ TuserName }}</td>
        </tr>
        <tr>
          <td>ایمیل</td>
          <td>{{ Temail }}</td>
        </tr>
        <tr>
          <td>شماره تلفن</td>
          <td>{{ TphoneNumber }}</td>
        </tr>
        <tr>
          <td>آدرس</td>
          <td>{{ Tlocation }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      Tname: null,
      TphoneNumber: null,
      Tlocation: null,
      Temail: null,
      TidentificationImage: null,
      TprofileImage: null,
      TactivityDescription: null,
      TactivityFields: null,
      TregistrationTime: "",
      Tapproved: false,
      Tsuspend: false,
      Tproducts: null,
      Tid: null,
      TuserName: "",
      Tpassword: null,
      // info: {
      //   userName: "فروشنده شماره1",
      //   password: "123456"
      // },
      name: "Roya"
    };
  },
  beforeMount() {
    this.Accessinfo();
  },
  methods: {
    // submit() {
    //   axios
    //     .post("http://198.143.182.157/api/Salesmans/Login", this.info)
    //     .then(response => {
    //       console.log("hi salesman log in");
    //       this.cookie = response.data.token;
    //            this.Accessinfo();
    //     });
    //   console.log(this.cookie);
 
    // },
    Accessinfo(){
       axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem('accessToken');
      axios.post("http://198.143.182.157/api/Salesmans/GetCurrentUser", {})
        // eslint-disable-next-line no-console
        .then(res => {
          
          this.Tname = res.data.name;
          this.TphoneNumber = res.data.phoneNumber;
          this.Tlocation = res.data.location;
          this.Temail = res.data.email;
          this.TidentificationImage = res.data.identificationImage;
          this.TprofileImage = res.data.profileImage;
          this.TactivityDescription = res.data.activityDescription;
          this.TactivityFields = res.data.activityFields;
          this.TregistrationTime = res.data.registrationTime;
          this.Tapproved = res.data.approved;
          this.Tsuspend = res.data.suspend;
          this.Tproducts = res.data.products;
          this.Tid = res.data.id;
          this.TuserName = res.data.userName;
          this.Tpassword = res.data.password;
          console.log(this.TuserName);
          // console.log(this.Tusername)
        })
        // eslint-disable-next-line no-console
        .catch(error => console.log(error));

    },
  }
};
</script>
<style>
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}

th,
td {
  padding: 16px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>
