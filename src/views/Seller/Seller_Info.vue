<template>
  <div class dir="rtl">
    <b-card>
      <b-card-header>فروشندگان</b-card-header>
      <b-card-body>
        <div
          style="margin-left:50%"
          v-if="loadingSeller"
          class="spinner-border text-info"
          role="status"
        >
          <span class="sr-only">Loading...</span>
        </div>
        <form v-else>
          <div class="row form-item">
            <div class="col">
              <input
                type="text"
                v-model="currentSalesman.name"
                class="form-control"
                placeholder=" نام و نام خانوادگی"
              />
            </div>
            <div class="col">
              <input
                type="text"
                v-model="currentSalesman.email"
                class="form-control"
                placeholder="ایمیل"
              />
            </div>
          </div>
          <div class="row form-item">
            <div class="col">
              <input
                type="text"
                v-model="currentSalesman.userName"
                class="form-control"
                placeholder="نام کاربری"
              />
            </div>
            <div class="col">
              <input
                type="password"
                v-model="password"
                class="form-control"
                placeholder="گذر واژه"
              />
            </div>
          </div>
          <div class="row form-item">
            <div class="col">
              <input
                type="text"
                v-model="currentSalesman.phoneNumber"
                class="form-control"
                placeholder="شماره تماس"
              />
            </div>
            <div class="col">
              <input
                type="text"
                v-model="currentSalesman.location"
                class="form-control"
                placeholder="محل ثبت سازمان"
              />
            </div>
          </div>
          <div class="row form-item">
            <div class="col">
              <label style="display:inline;padding:5px">انتخاب عکس پروفایل</label>
              <img width="300" :src="currentSalesman.profileImage" />

              <file-select style="display:inline" @base64="getbase64profile" v-model="profilefile"></file-select>
            </div>
            <div class="col">
              <label style="display:inline;padding:5px">انتخاب عکس احراز هویت</label>
              <img width="300" :src="currentSalesman.identificationImage" />

              <file-select @base64="getbase64id" style="display:inline" v-model="idfile"></file-select>
            </div>
          </div>

          <div class="col">
            <b-button style="float:right;width:20%;" variant="success" @click="editSalesMan" block>
              <!-- <span v-if="editingSeller" class="spinner-border text-info" role="status">
                <span class="sr-only">Loading...</span>
              </span>
              <span v-else>ویرایش</span>-->
              ویرایش
            </b-button>
          </div>
        </form>
      </b-card-body>
    </b-card>
  </div>
</template>
<script>
import { mapState } from "vuex";
import FileSelect from "../widgets/FileSelector";
export default {
  name: "Devices",
  components: {
    FileSelect
  },
  computed: {
    ...mapState({
      currentSalesman: "currentSalesman"
    })
  },
  data() {
    return {
      idfile: null,
      profilefile: null,
      loadingSeller: false,
      editingSeller: false,
      password:""
    };
  },
  methods: {
    getbase64profile(value) {
      this.currentSalesman.profileImage = value;
    },
    getbase64id(value) {
      this.currentSalesman.identificationImage = value;
    },
    editSalesMan() {
      this.editingSeller = true;
      this.currentSalesman.password= this.password;
      this.$store
        .dispatch("editSalesMan", this.currentSalesman)
        .then(() => {
          alert("فروشنده ویرایش شد!");
          this.editingSeller = false;
        })
        .catch(error => {
          this.editingSeller = false;
          alert(error.message);
        });
    }
  },
  created() {
    this.loadingSeller = true;
    this.$store
      .dispatch("getSalesmen")
      .then(() => {
        this.loadingSeller = false;
      })
      .catch(() => {
        this.loadingSeller = false;
      });
  }
};
</script>
<style scoped>
.form-item {
  padding: 10px;
}
</style>
