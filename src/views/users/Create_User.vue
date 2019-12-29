<template>
  <div id="Create_User">
    <b-row>
      <b-col sm="10">
        <b-card>
          <div slot="header">
            <strong>Credit Card </strong> <small>Form</small>
          </div>
          <b-row>
            <b-col sm="12">
              <b-form-group>
                <label :for="name">Name</label>
                <b-form-input type="text" id="name" placeholder="Enter your name"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12">
              <b-form-group>
                <label :for="ccnumber">Credit Card Number</label>
                <b-form-input type="text" id="ccnumber" placeholder="0000 0000 0000 0000"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="4">
              <b-form-group >
                <label :for="month1">Month</label>
                <b-form-select id="month1"
                               :plain="true"
                               :options="[1,2,3,4,5,6,7,8,9,10,11,12]">
                </b-form-select>
              </b-form-group>
            </b-col>
            <b-col sm="4">
              <b-form-group>
                <label :for="year1">Year</label>
                <b-form-select id="year1"
                               :plain="true"
                               :options="[2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025]">
                </b-form-select>
              </b-form-group>
            </b-col>
            <b-col sm="4">
              <b-form-group>
                <label :for="cvv">CVV/CVC</label>
                <b-form-input type="text" id="cvv" placeholder="123"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
    export default {
        name: 'Create_User',
        data () {
            return {
                selected: [], // Must be an array reference!
                show: true
            }
        },
        methods: {
            click () {
                // do nothing
            }
        }
    }
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>

