<template>
  <div class="app-container">
    <el-tabs class="tab" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="4小时" name="1"></el-tab-pane>
      <el-tab-pane label="24小时" name="2"></el-tab-pane>
      <el-tab-pane label="72小时" name="3"></el-tab-pane>
      <el-tab-pane label="7天" name="4"></el-tab-pane>
    </el-tabs>
    <el-button style="float: right;
    margin-top: -60px;">报表生成</el-button>
    <div class='chart-container'>
      <chart :id="1" ref="chart" v-if="activeName=='1'&&chartData1" height='100%' width='100%' :chartData="chartData1"></chart>
      <chart :id="1" ref="chart" v-if="activeName=='2'&&chartData2" height='100%' width='100%' :chartData="chartData2"></chart>
      <chart :id="1" ref="chart" v-if="activeName=='3'&&chartData3" height='100%' width='100%' :chartData="chartData3"></chart>
      <chart :id="1" ref="chart" v-if="activeName=='4'&&chartData4" height='100%' width='100%' :chartData="chartData4"></chart>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import Chart from '@/components/Charts/lineMarker'
  import { generationforecast } from '@/api/electricity'

  export default {
    components: { Chart },
    data() {
      return {
        activeName: '1',
        chartData1: null,
        chartData2: null,
        chartData3: null,
        chartData4: null
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event)
        if(tab.name=='1'){
          this.$refs.chart.initChart(this.chartData1)
        }
        else if(tab.name=='2'){
          this.$refs.chart.initChart(this.chartData2)
        }
        else if(tab.name=='3'){
          this.$refs.chart.initChart(this.chartData3)
        }
        else if(tab.name=='4'){
          this.$refs.chart.initChart(this.chartData4)
        }
      }
    },
    created(){
      this.chartData1= {
        backgroundColor: '#fff',
        title: {
          top: 20,
          text: '发电预测(4小时)',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#000'
          },
          left: '1%'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: '#57617B'
            }
          }
        },
        grid: {
          top: 100,
          left: '3%',
          right: '4%',
          bottom: '2%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#57617B'
            }
          },
          data: []
        }],
        yAxis: [{
          type: 'value',
          name: '(kW)',
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#57617B'
            }
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              fontSize: 14
            }
          },
          splitLine: {
            lineStyle: {
              color: '#57617B'
            }
          }
        }],
        series: [{
          name: '预报数据',
          textStyle: {
            color: '#000'
          },
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 1
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(48,127,255, 0.3)'
              }, {
                offset: 0.8,
                color: 'rgba(48,127,255, 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10
            }
          },
          itemStyle: {
            normal: {
              color: 'rgb(48,127,255)',
              borderColor: 'rgba(48,127,255,0.2)',
              borderWidth: 12

            }
          },
          data: []}]
      }
      this.chartData2= {
        backgroundColor: '#fff',
        title: {
          top: 20,
          text: '发电预测(24小时)',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#000'
          },
          left: '1%'
        },
        dataZoom: [{
          startValue: '0'
        }, {
          type: 'inside',
        }],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: '#57617B'
            }
          }
        },
        grid: {
          top: 100,
          left: '3%',
          right: '4%',
          bottom: '2%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#57617B'
            }
          },
          data: []
        }],
        yAxis: [{
          type: 'value',
          name: '(kW)',
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#57617B'
            }
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              fontSize: 14
            }
          },
          splitLine: {
            lineStyle: {
              color: '#57617B'
            }
          }
        }],
        series: [{
          name: '预报数据',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 1
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(254,98,112, 0.3)'
              }, {
                offset: 0.8,
                color: 'rgba(254,98,112, 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10
            }
          },
          itemStyle: {
            normal: {
              color: 'rgb(254,98,112)',
              borderColor: 'rgba(254,98,112,0.2)',
              borderWidth: 12
            }
          },
          data: []
        }]
      }
      this.chartData3= {
        backgroundColor: '#fff',
        title: {
          top: 20,
          text: '发电预测(72小时)',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#000'
          },
          left: '1%'
        },
        dataZoom: [{
          startValue: '0'
        }, {
          type: 'inside',
        }],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: '#57617B'
            }
          }
        },
        grid: {
          top: 100,
          left: '3%',
          right: '4%',
          bottom: '2%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#57617B'
            }
          },
          data: []
        }],
        yAxis: [{
          type: 'value',
          name: '(kW)',
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#57617B'
            }
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              fontSize: 14
            }
          },
          splitLine: {
            lineStyle: {
              color: '#57617B'
            }
          }
        }],
        series: [{
          name: '预报数据',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 1
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(254,98,112, 0.3)'
              }, {
                offset: 0.8,
                color: 'rgba(254,98,112, 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10
            }
          },
          itemStyle: {
            normal: {
              color: 'rgb(254,98,112)',
              borderColor: 'rgba(254,98,112,0.2)',
              borderWidth: 12
            }
          },
          data: []
        }]
      }
      this.chartData4= {
        backgroundColor: '#fff',
        title: {
          top: 20,
          text: '发电预测(7天)',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#000'
          },
          left: '1%'
        },
        dataZoom: [{
          startValue: '0'
        }, {
          type: 'inside',
        }],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: '#57617B'
            }
          }
        },
        grid: {
          top: 100,
          left: '3%',
          right: '4%',
          bottom: '2%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#57617B'
            }
          },
          data: []
        }],
        yAxis: [{
          type: 'value',
          name: '(kW)',
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#57617B'
            }
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              fontSize: 14
            }
          },
          splitLine: {
            lineStyle: {
              color: '#57617B'
            }
          }
        }],
        series: [{
          name: '预报数据',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 1
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(254,98,112, 0.3)'
              }, {
                offset: 0.8,
                color: 'rgba(254,98,112, 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10
            }
          },
          itemStyle: {
            normal: {
              color: 'rgb(254,98,112)',
              borderColor: 'rgba(254,98,112,0.2)',
              borderWidth: 12
            }
          },
          data: []
        }]
      }
      generationforecast().then( res =>{
        console.log(res)
        this.chartData1.xAxis[0].data=res.body.time4h
        this.chartData1.series[0].data=res.body.power4h
        this.chartData2.xAxis[0].data=res.body.time24h
        this.chartData2.series[0].data=res.body.power24h
        // this.$refs.chart2.initChart(this.chartData2)
        this.chartData3.xAxis[0].data=res.body.time72h
        this.chartData3.series[0].data=res.body.power72h
        // this.$refs.chart3.initChart(this.chartData3)
        this.chartData4.xAxis[0].data=res.body.time7d
        this.chartData4.series[0].data=res.body.power7d
        // this.$refs.chart4.initChart(this.chartData4)

        this.$refs.chart.initChart(this.chartData1)
      })
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .chart-container{
    position: relative;
    padding:20px;
    width: 100%;
    height:75vh;
  }
  .dashboard {
    &-container {
      margin: 30px;
    }
    &-text {
      font-size: 30px;
      line-height: 300px;
      text-align: center;
    }
  }
</style>
