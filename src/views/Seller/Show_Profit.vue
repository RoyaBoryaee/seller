<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="6" md="2">
        <b-card>
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-people"></i>
          </div>
          <div class="h4 mb-0">87.500</div>
          <small class="text-muted text-uppercase font-weight-bold"
            >Visitors</small
          >
          <b-progress
            height="{}"
            class="progress-xs mt-3 mb-0"
            variant="info"
            :value="25"
          />
        </b-card>
      </b-col>
      <b-col sm="6" md="2">
        <b-card>
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-user-follow"></i>
          </div>
          <div class="h4 mb-0">385</div>
          <small class="text-muted text-uppercase font-weight-bold"
            >New Clients</small
          >
          <b-progress
            height="{}"
            class="progress-xs mt-3 mb-0"
            variant="success"
            :value="25"
          />
        </b-card>
      </b-col>
      <b-col sm="6" md="2">
        <b-card>
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-basket-loaded"></i>
          </div>
          <div class="h4 mb-0">1238</div>
          <small class="text-muted text-uppercase font-weight-bold"
            >Products sold</small
          >
          <b-progress
            height="{}"
            class="progress-xs mt-3 mb-0"
            variant="warning"
            :value="25"
          />
        </b-card>
      </b-col>
      <b-col sm="6" md="2">
        <b-card>
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-pie-chart"></i>
          </div>
          <div class="h4 mb-0">28%</div>
          <small class="text-muted text-uppercase font-weight-bold"
            >Returning Visitors</small
          >
          <b-progress height="{}" class="progress-xs mt-3 mb-0" :value="25" />
        </b-card>
      </b-col>
      <b-col sm="6" md="2">
        <b-card>
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-speedometer"></i>
          </div>
          <div class="h4 mb-0">5:34:11</div>
          <small class="text-muted text-uppercase font-weight-bold"
            >Avg. Time</small
          >
          <b-progress
            height="{}"
            class="progress-xs mt-3 mb-0"
            variant="danger"
            :value="25"
          />
        </b-card>
      </b-col>
      <b-col sm="6" md="2">
        <b-card>
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-speech"></i>
          </div>
          <div class="h4 mb-0">972</div>
          <small class="text-muted text-uppercase font-weight-bold"
            >Comments</small
          >
          <b-progress
            height="{}"
            class="progress-xs mt-3 mb-0"
            variant="info"
            :value="25"
          />
        </b-card>
      </b-col> </b-row
    ><!--/.row-->
    <b-row>
      <b-col sm="12">
        <b-card header="Bar Chart">
          <div class="chart-wrapper">
            <bar-example chartId="chart-bar-01" />
          </div>
        </b-card> </b-col></b-row
    ><!--/.row-->
  </div>
</template>

<script>
import SocialBoxChartExample from "../dashboard/SocialBoxChartExample";
import BarExample from "../charts/BarExample";

export default {
  name: "Show_Profit",
  components: {
    SocialBoxChartExample,
    BarExample
  },
  data() {
    return {
      msg: "Widgets"
    };
  }
};
</script>
