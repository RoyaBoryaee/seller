<template>
  <div class="animated fadeIn">
    <!--/.row-->
    <b-row>
      <b-col sm="12">
        <b-card header="Bar Chart">
          <div class="chart-wrapper">
            <bar-example chartId="chart-bar-01" v-bind:cdata="cdata" />
          </div>
        </b-card>
      </b-col>
    </b-row>
    <!--/.row-->
  </div>
</template>

<script>
import axios from "axios";
import queryString from "query-string";
import { format, subYears } from "date-fns";
import SocialBoxChartExample from "../dashboard/SocialBoxChartExample";
import BarExample from "../charts/BarExample";

export default {
  name: "Show_Profit",
  components: {
    SocialBoxChartExample,
    BarExample
  },
  data: function() {
    return {
      cdata: []
    };
  },
  methods: {
    fetchData() {
      try {
        const token = localStorage.getItem('accessToken') || '';
        const start = format(subYears(new Date(Date.now()), 1), "yyyy-MM-dd");
        const end = format(new Date(Date.now()), "yyyy-MM-dd");
        const qs = queryString.stringify({ start, end });
        axios({
          url: `http://198.143.182.157/api/salesmans/GetFinancialReport?${qs}`,
          method: "post",
          headers: {
            authorization: 'Bearer ' + token
          }
        })
          .then(response => {
            this.cdata = Object.values(response.data);
          })
          .catch(err => console.log(err));
      } catch (err) {
        console.log(err);
      }
    }
  },
  beforeMount() {
    this.fetchData();
  }
};
</script>
