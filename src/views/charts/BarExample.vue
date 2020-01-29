<script>
import { Bar } from "vue-chartjs";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";

export default {
  extends: Bar,
  data: function() {
    return {
      symbols: []
    };
  },
  props: ["cdata"],
  methods: {
    checkProp() {
      const vm = this;
      const zeroArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      if (vm.cdata && Array.isArray(vm.cdata)) {
        if (vm.cdata.length > 0) {
          return vm.cdata;
        } else {
          return zeroArray;
        }
      } else {
        return zeroArray;
      }
    }
  },
  mounted() {
    // Overwriting base render method with actual data.
    let vm = this;
    this.renderChart(
      {
        labels: [
          "",
          "فروردین",
          "اردی‌بهشت",
          "خرداد",
          "تیر",
          "مرداد",
          "شهریور",
          "مهر",
          "آبان",
          "آذر",
          "دی",
          "بهمن",
          "اسفند"
        ],
        datasets: [
          {
            label: "درآمد ماهیانه",
            backgroundColor: "#f87979",
            data: [0, ...this.checkProp()]
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: true,
        tooltips: {
          enabled: false,
          custom: CustomTooltips,
          intersect: true,
          min: 0,
          mode: "index",
          position: "nearest",
          callbacks: {
            labelColor: function(tooltipItem, chart) {
              return {
                backgroundColor:
                  chart.data.datasets[tooltipItem.datasetIndex].backgroundColor
              };
            }
          }
        }
      }
    );
  }
};
</script>
