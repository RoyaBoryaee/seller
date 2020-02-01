<template>
  <div>
    <div class="row">
      <div class="containers col-lg-6 col-md-6">
        <div class="pic"></div>
      </div>

      <div class="content col-md-offset-6 col-lg-offset-6">
        <center><h1 class="contentHead">درباره‌ی ما</h1></center>

        <h2 style="direction: rtl;text-align: right;">
          با سلام, <br /><br />
          گروه ویو صحبت می‌کنه،این پنل مخصوص فروشنده اپلیکیشن خرید آنلاینه و
          قابلیت‌هایی از جمله ویرایش اطلاعات فروشنده، نمایش میزان سود و نمایش
          راه‌های ارتباطی رو داره و میشه گفت یک پنل شخصی بسیار کارا برای مدیریت
          پروفایل فروشنده است.
          <br /><br />
          <span>&hearts;</span> اگه پروژمونو دوست دارین، لطفا بهمون یک نمره عالی
          بدین<span>&hearts;</span> <br /><br />
          <p>
            <span style="text-align:right; color:#000000; font-size:18px;"
              >*همه‌چیز تا قبل از انجام شدن، ناممکن به نظر می‌رسد</span>
          </p>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
// import CardLine1ChartExample from './dashboard/CardLine1ChartExample'
// import CardLine2ChartExample from './dashboard/CardLine2ChartExample'
// import CardLine3ChartExample from './dashboard/CardLine3ChartExample'
// import CardBarChartExample from './dashboard/CardBarChartExample'
// import MainChartExample from './dashboard/MainChartExample'
// import SocialBoxChartExample from './dashboard/SocialBoxChartExample'
// import CalloutChartExample from './dashboard/CalloutChartExample'
// import { Callout } from '@coreui/vue'

export default {
  // name: 'dashboard',
  // components: {
  //     Callout,
  //     CardLine1ChartExample,
  //     CardLine2ChartExample,
  //     CardLine3ChartExample,
  //     CardBarChartExample,
  //     MainChartExample,
  //     SocialBoxChartExample,
  //     CalloutChartExample
  // },
  // data: function () {
  //     return {
  //         selected: 'Month',
  //         tableItems: [
  //             {
  //                 avatar: { url: 'img/avatars/1.jpg', status: 'success' },
  //                 user: { name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2015' },
  //                 country: { name: 'USA', flag: 'us' },
  //                 usage: { value: 50, period: 'Jun 11, 2015 - Jul 10, 2015' },
  //                 payment: { name: 'Mastercard', icon: 'fa fa-cc-mastercard' },
  //                 activity: '10 sec ago'
  //             },
  //             {
  //                 avatar: { url: 'img/avatars/2.jpg', status: 'danger' },
  //                 user: { name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2015' },
  //                 country: { name: 'Brazil', flag: 'br' },
  //                 usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
  //                 payment: { name: 'Visa', icon: 'fa fa-cc-visa' },
  //                 activity: '5 minutes ago'
  //             },
  //             {
  //                 avatar: { url: 'img/avatars/3.jpg', status: 'warning' },
  //                 user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2015' },
  //                 country: { name: 'India', flag: 'in' },
  //                 usage: { value: 74, period: 'Jun 11, 2015 - Jul 10, 2015' },
  //                 payment: { name: 'Stripe', icon: 'fa fa-cc-stripe' },
  //                 activity: '1 hour ago'
  //             },
  //             {
  //                 avatar: { url: 'img/avatars/4.jpg', status: '' },
  //                 user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2015' },
  //                 country: { name: 'France', flag: 'fr' },
  //                 usage: { value: 98, period: 'Jun 11, 2015 - Jul 10, 2015' },
  //                 payment: { name: 'PayPal', icon: 'fa fa-paypal' },
  //                 activity: 'Last month'
  //             },
  //             {
  //                 avatar: { url: 'img/avatars/5.jpg', status: 'success' },
  //                 user: { name: 'Agapetus Tadeáš', new: true, registered: 'Jan 1, 2015' },
  //                 country: { name: 'Spain', flag: 'es' },
  //                 usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
  //                 payment: { name: 'Google Wallet', icon: 'fa fa-google-wallet' },
  //                 activity: 'Last week'
  //             },
  //             {
  //                 avatar: { url: 'img/avatars/6.jpg', status: 'danger' },
  //                 user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015' },
  //                 country: { name: 'Poland', flag: 'pl' },
  //                 usage: { value: 43, period: 'Jun 11, 2015 - Jul 10, 2015' },
  //                 payment: { name: 'Amex', icon: 'fa fa-cc-amex' },
  //                 activity: 'Last week'
  //             }
  //         ],
  //         tableFields: {
  //             avatar: {
  //                 label: '<i class="icon-people"></i>',
  //                 class: 'text-center'
  //             },
  //             user: {
  //                 label: 'User'
  //             },
  //             country: {
  //                 label: 'Country',
  //                 class: 'text-center'
  //             },
  //             usage: {
  //                 label: 'Usage'
  //             },
  //             payment: {
  //                 label: 'Payment method',
  //                 class: 'text-center'
  //             },
  //             activity: {
  //                 label: 'Activity'
  //             }
  //         }
  //     }
  // },
  // methods: {
  //     variant (value) {
  //         let $variant
  //         if (value <= 25) {
  //             $variant = 'info'
  //         } else if (value > 25 && value <= 50) {
  //             $variant = 'success'
  //         } else if (value > 50 && value <= 75) {
  //             $variant = 'warning'
  //         } else if (value > 75 && value <= 100) {
  //             $variant = 'danger'
  //         }
  //         return $variant
  //     },
  //     flag (value) {
  //         return 'flag-icon flag-icon-' + value
  //     }
  // }
};
</script>

<style>
body {
  background: url("https://s-media-cache-ak0.pinimg.com/736x/f4/ac/6a/f4ac6aac3afb587f6cae04155656fca3.jpg");
}

.containers {
  width: 550px;
  height: 100%;
  margin-left: 10px;
}

.pic {
  box-shadow: 6px 6px 7px #888888;
  width: 300px;
  height: 300px;
  position: relative;
  overflow: hidden;
  margin-top: 100px;
  margin-left: 135px;
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.pic:before {
  content: "";
  margin-top: -63px;
  margin-left: -80px;
  position: absolute;
  width: 450px;
  height: 450px;
  background: url("https://comp.ui.ac.ir/Dorsapax/userfiles/Sub108/139712587.jpeg") center center;
  -ms-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  background-size: contain;
}

.pic:hover,
.box1:hover,
.box2:hover,
.social1:hover,
.social2:hover,
.social3:hover {
  box-shadow: 3px 3px 7px #888888;
  cursor: pointer;
}

.box1 {
  box-shadow: 6px 6px 7px #888888;
  width: 100px;
  height: 100px;
  position: relative;
  overflow: hidden;
  margin-top: -124px;
  margin-left: 16px;
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.box1:before {
  content: "";
  margin-top: -25px;
  margin-left: -31px;
  position: absolute;
  width: 200px;
  height: 200px;
  background: url("data:image/jpeg;base64,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")
    center center;
  -ms-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  background-size: contain;
}

.box2 {
  box-shadow: 6px 6px 7px #888888;
  position: relative;
  overflow: hidden;
  width: 194px;
  height: 99px;
  margin-top: 14px;
  margin-left: 78px;
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.box2:before {
  content: "";
  margin-top: -74px;
  margin-left: -31px;
  position: absolute;
  width: 300px;
  height: 300px;
  background: url("https://cdn.britannica.com/78/137678-004-727C0B80/Esfahan-Iran-World-Heritage-site-1979.jpg")
    center center;
  -ms-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
   background-size: contain;
}

.social1 {
  box-shadow: 6px 6px 7px #888888;
  width: 80px;
  height: 80px;
  background-color: #3b5998;
  margin-top: -57px;
  margin-left: 305px;
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.social1 > i {
  font-size: 60px;
  margin-top: 13px;
  margin-left: 20px;
  -ms-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  color: #ffffff;
}

.social2 {
  box-shadow: 6px 6px 7px #888888;
  width: 80px;
  height: 80px;
  background-color: #c73b6f;
  margin-top: -142px;
  margin-left: 370px;
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.social2 > i {
  font-size: 60px;
  margin-top: 8px;
  margin-left: 13px;
  -ms-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  color: #ffffff;
}

.social3 {
  box-shadow: 6px 6px 7px #888888;
  width: 80px;
  height: 80px;
  background-color: #000000;
  margin-top: -143px;
  margin-left: 435px;
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.social3 > i {
  font-size: 60px;
  margin-top: 9px;
  margin-left: 9px;
  -ms-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  color: #ffffff;
}

.content {
  height: 100%;
  width: 500px;
}

p {
  font-family: "Open Sans Condensed", sans-serif;
}

h2 {
  font-family: "Dancing Script", cursive;
}

.contentHead {
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 60px;
  font-weight: 500;
}

sup {
  font-family: "Open Sans Condensed", sans-serif;
  font-style: italic;
  font-size: smaller;
}

span {
  color: pink;
}

/* IE fix
  #card-chart-01, #card-chart-02 {
    width: 100% !important;
  } */
</style>
