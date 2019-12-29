<template>
  <div id="chartdiv"></div>
</template>
<script>
    import * as am4core from "@amcharts/amcharts4/core";
    import * as am4charts from "@amcharts/amcharts4/charts";
    import am4themes_animated from "@amcharts/amcharts4/themes/animated";
    am4core.useTheme(am4themes_animated);
    export default {
        name: 'newchart',
        mounted() {

            let chart = am4core.create("chartdiv", am4charts.XYChart);

// Add data
            chart.data = [{
                "date": "01-1",
                "value": 13
            }, {
                "date": "01-2",
                "value": 11
            }, {
                "date": "01-3",
                "value": 15
            }, {
                "date": "01-4",
                "value": 16
            }, {
                "date": "01-5",
                "value": 18
            }, {
                "date": "01-6",
                "value": 13
            }, {
                "date": "01-7",
                "value": 22
            }, {
                "date": "01-8",
                "value": 23
            }, {
                "date": "01-9",
                "value": 20
            }, {
                "date": "01-10",
                "value": 17
            }, {
                "date": "01-11",
                "value": 16
            }, {
                "date": "01-12",
                "value": 18
            }, {
                "date": "01-13",
                "value": 21
            }, {
                "date": "01-14",
                "value": 26
            }, {
                "date": "01-15",
                "value": 24
            }, {
                "date": "01-16",
                "value": 29
            }, {
                "date": "01-17",
                "value": 32
            }, {
                "date": "01-18",
                "value": 18
            }, {
                "date": "01-19",
                "value": 24
            }, {
                "date": "01-20",
                "value": 22
            }, {
                "date": "01-21",
                "value": 18
            }, {
                "date": "01-22",
                "value": 19
            }, {
                "date": "01-23",
                "value": 14
            }, {
                "date": "01-24",
                "value": 15
            }, {
                "date": "01-25",
                "value": 12
            }, {
                "date": "01-26",
                "value": 8
            }, {
                "date": "01-27",
                "value": 9
            }, {
                "date": "01-28",
                "value": 8
            }, {
                "date": "01-29",
                "value": 7
            }, {
                "date": "01-30",
                "value": 5
            }, {
                "date": "01-31",
                "value": 11
            }, {
                "date": "02-1",
                "value": 13
            }, {
                "date": "02-2",
                "value": 18
            }, {
                "date": "02-3",
                "value": 20
            }, {
                "date": "02-4",
                "value": 29
            }, {
                "date": "02-5",
                "value": 33
            }, {
                "date": "02-6",
                "value": 42
            }, {
                "date": "02-7",
                "value": 35
            }, {
                "date": "02-8",
                "value": 31
            }, {
                "date": "02-9",
                "value": 47
            }, {
                "date": "02-10",
                "value": 52
            }, {
                "date": "02-11",
                "value": 46
            }, {
                "date": "02-12",
                "value": 41
            }, {
                "date": "02-13",
                "value": 43
            }, {
                "date": "02-14",
                "value": 40
            }, {
                "date": "02-15",
                "value": 39
            }, {
                "date": "02-16",
                "value": 34
            }, {
                "date": "02-17",
                "value": 29
            }, {
                "date": "02-19",
                "value": 34
            }, {
                "date": "02-20",
                "value": 37
            }, {
                "date": "02-21",
                "value": 42
            }, {
                "date": "02-22",
                "value": 49
            }, {
                "date": "02-23",
                "value": 46
            }, {
                "date": "02-24",
                "value": 47
            }, {
                "date": "02-25",
                "value": 55
            }, {
                "date": "02-26",
                "value": 59
            }, {
                "date": "02-27",
                "value": 58
            }, {
                "date": "02-28",
                "value": 57
            }, {
                "date": "02-29",
                "value": 61
            }, {
                "date": "02-30",
                "value": 59
            }, {
                "date": "02-31",
                "value": 67
            }, {
                "date": "03-1",
                "value": 65
            }, {
                "date": "03-2",
                "value": 61
            }, {
                "date": "03-3",
                "value": 66
            }, {
                "date": "03-4",
                "value": 69
            }, {
                "date": "03-5",
                "value": 71
            }, {
                "date": "03-6",
                "value": 67
            }, {
                "date": "03-7",
                "value": 63
            }, {
                "date": "03-8",
                "value": 46
            }, {
                "date": "03-9",
                "value": 32
            }, {
                "date": "03-10",
                "value": 21
            }, {
                "date": "03-11",
                "value": 18
            }, {
                "date": "03-12",
                "value": 21
            }, {
                "date": "03-13",
                "value": 28
            }, {
                "date": "03-14",
                "value": 27
            }, {
                "date": "03-15",
                "value": 36
            }, {
                "date": "03-16",
                "value": 33
            }, {
                "date": "03-17",
                "value": 31
            }, {
                "date": "03-18",
                "value": 30
            }, {
                "date": "03-19",
                "value": 34
            }, {
                "date": "03-20",
                "value": 38
            }, {
                "date": "03-21",
                "value": 37
            }, {
                "date": "03-22",
                "value": 44
            }, {
                "date": "03-23",
                "value": 49
            }, {
                "date": "03-24",
                "value": 53
            }, {
                "date": "03-25",
                "value": 57
            }, {
                "date": "03-26",
                "value": 60
            }, {
                "date": "03-27",
                "value": 61
            }, {
                "date": "03-28",
                "value": 69
            }, {
                "date": "03-29",
                "value": 67
            }, {
                "date": "03-30",
                "value": 72
            }, {
                "date": "03-31",
                "value": 77
            }, {
                "date": "04-1",
                "value": 75
            }, {
                "date": "04-2",
                "value": 70
            }, {
                "date": "04-3",
                "value": 72
            }, {
                "date": "04-4",
                "value": 70
            }, {
                "date": "04-5",
                "value": 72
            }, {
                "date": "04-6",
                "value": 73
            }, {
                "date": "04-7",
                "value": 67
            }, {
                "date": "04-8",
                "value": 68
            }, {
                "date": "04-9",
                "value": 65
            }, {
                "date": "04-10",
                "value": 71
            }, {
                "date": "04-11",
                "value": 75
            }, {
                "date": "04-12",
                "value": 74
            }, {
                "date": "04-13",
                "value": 71
            }, {
                "date": "04-14",
                "value": 76
            }, {
                "date": "04-15",
                "value": 77
            }, {
                "date": "04-16",
                "value": 81
            }, {
                "date": "04-17",
                "value": 83
            }, {
                "date": "04-18",
                "value": 80
            }, {
                "date": "04-19",
                "value": 81
            }, {
                "date": "04-20",
                "value": 87
            }, {
                "date": "04-21",
                "value": 82
            }, {
                "date": "04-22",
                "value": 86
            }, {
                "date": "04-23",
                "value": 80
            }, {
                "date": "04-24",
                "value": 87
            }, {
                "date": "04-25",
                "value": 83
            }, {
                "date": "04-26",
                "value": 85
            }, {
                "date": "04-27",
                "value": 84
            }, {
                "date": "04-28",
                "value": 82
            }, {
                "date": "04-29",
                "value": 73
            }, {
                "date": "04-30",
                "value": 71
            }, {
                "date": "04-31",
                "value": 75
            }, {
                "date": "05-1",
                "value": 79
            }, {
                "date": "05-2",
                "value": 70
            }, {
                "date": "05-3",
                "value": 73
            }, {
                "date": "05-4",
                "value": 61
            }, {
                "date": "05-5",
                "value": 62
            }, {
                "date": "05-6",
                "value": 66
            }, {
                "date": "05-7",
                "value": 65
            }, {
                "date": "05-8",
                "value": 73
            }, {
                "date": "05-9",
                "value": 79
            }, {
                "date": "05-10",
                "value": 78
            }, {
                "date": "05-11",
                "value": 78
            }, {
                "date": "05-12",
                "value": 78
            }, {
                "date": "05-13",
                "value": 74
            }, {
                "date": "05-14",
                "value": 73
            }, {
                "date": "05-15",
                "value": 75
            }, {
                "date": "05-16",
                "value": 70
            }, {
                "date": "05-17",
                "value": 77
            }, {
                "date": "05-18",
                "value": 67
            }, {
                "date": "05-19",
                "value": 62
            }, {
                "date": "05-20",
                "value": 64
            }, {
                "date": "05-21",
                "value": 61
            }, {
                "date": "05-22",
                "value": 59
            }, {
                "date": "05-23",
                "value": 53
            }, {
                "date": "05-24",
                "value": 54
            }, {
                "date": "05-25",
                "value": 56
            }, {
                "date": "05-26",
                "value": 59
            }, {
                "date": "05-27",
                "value": 58
            }, {
                "date": "05-28",
                "value": 55
            }, {
                "date": "05-29",
                "value": 52
            }, {
                "date": "05-30",
                "value": 54
            }, {
                "date": "05-31",
                "value": 50
            }, {
                "date": "06-1",
                "value": 50
            }, {
                "date": "06-2",
                "value": 51
            }, {
                "date": "06-3",
                "value": 52
            }, {
                "date": "06-4",
                "value": 58
            }, {
                "date": "06-5",
                "value": 60
            }, {
                "date": "06-6",
                "value": 67
            }, {
                "date": "06-7",
                "value": 64
            }];

// Set input format for the dates
            chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

// Create axes
            let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
            let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
            let series = chart.series.push(new am4charts.LineSeries());
            series.dataFields.valueY = "value";
            series.dataFields.dateX = "date";
            series.tooltipText = "{value}"
            series.strokeWidth = 2;
            series.minBulletDistance = 15;

// Drop-shaped tooltips
            series.tooltip.background.cornerRadius = 20;
            series.tooltip.background.strokeOpacity = 0;
            series.tooltip.pointerOrientation = "vertical";
            series.tooltip.label.minWidth = 40;
            series.tooltip.label.minHeight = 40;
            series.tooltip.label.textAlign = "middle";
            series.tooltip.label.textValign = "middle";

// Make bullets grow on hover
            let bullet = series.bullets.push(new am4charts.CircleBullet());
            bullet.circle.strokeWidth = 2;
            bullet.circle.radius = 4;
            bullet.circle.fill = am4core.color("#fff");

            let bullethover = bullet.states.create("hover");
            bullethover.properties.scale = 1.3;

// Make a panning cursor
            chart.cursor = new am4charts.XYCursor();
            chart.cursor.behavior = "panXY";
            chart.cursor.xAxis = dateAxis;
            chart.cursor.snapToSeries = series;

// Create vertical scrollbar and place it before the value axis
            chart.scrollbarY = new am4core.Scrollbar();
            chart.scrollbarY.parent = chart.leftAxesContainer;
            chart.scrollbarY.toBack();

// Create a horizontal scrollbar with previe and place it underneath the date axis
            /*chart.scrollbarX = new am4charts.XYChartScrollbar();
            chart.scrollbarX.series.push(series);
            chart.scrollbarX.parent = chart.bottomAxesContainer;*/

            chart.events.on("ready", function () {
                dateAxis.zoom({start: 0.79, end: 1});
            });

        }

    }
</script>
<style>
  #chartdiv {
    width: 100%;
    height: 500px;
  }
</style>
