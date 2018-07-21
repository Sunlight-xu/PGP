<template>
  <div class="app-container">
    <el-row>
      <el-col :span="12">
        <div class='chart-container'>
          <chart :id="1" ref="first" height='100%' width='100%' :chartData="chartData1"></chart>
        </div>
      </el-col>
      <el-col :span="12">
        <div  class='chart-container'>
          <chart :id="2" ref="second" height='100%' width='100%':chartData="chartData2"></chart>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class='chart-container'>
          <chart :id="3" ref="third" height='100%' width='100%' :chartData="chartData3"></chart>
        </div>
      </el-col>
      <el-col :span="12">
        <div  class='chart-container'>
          <chart :id="4" ref="fourth" height='100%' width='100%' :chartData="chartData4"></chart>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import Chart from '@/components/Charts/lineMarker'

  export default {
    components: { Chart },
    data() {
      return {
        chartData1: {
          backgroundColor: '#fff',
          title: {
            top: 20,
            text: '降水量预报(4小时)',
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
          dataZoom: [{
            startValue: '0'
          }, {
            type: 'inside',
          }],
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
            data: ['00:00 ','15:00 ','30:00 ','45:00 ','00:01 ','15:01 ','30:01 ','45:01 ','00:02 ','15:02 ','30:02 ','45:02 ','00:03 ','15:03 ','30:03 ','45:03 ','00:04 ','15:04 ','30:04 ','45:04 ','00:05 ','15:05 ','30:05 ','45:05 ','00:06 ','15:06 ','30:06 ','45:06 ','00:07 ','15:07 ','30:07 ','45:07 ','00:08 ','15:08 ','30:08 ','45:08 ','00:09 ','15:09 ','30:09 ','45:09 ','00:10 ','15:10 ','30:10 ','45:10 ','00:11 ','15:11 ','30:11 ','45:11 ','00:12 ','15:12 ','30:12 ','45:12 ','00:13 ','15:13 ','30:13 ','45:13 ','00:14 ','15:14 ','30:14 ','45:14 ','00:15 ','15:15 ','30:15 ','45:15 ','00:16 ','15:16 ','30:16 ','45:16 ','00:17 ','15:17 ','30:17 ','45:17 ','00:18 ','15:18 ','30:18 ','45:18 ','00:19 ','15:19 ','30:19 ','45:19 ','00:20 ','15:20 ','30:20 ','45:20 ','00:21 ','15:21 ','30:21 ','45:21 ','00:22 ','15:22 ','30:22 ','45:22 ','00:23 ','15:23 ','30:23 ','45:23']
          }],
          yAxis: [{
            type: 'value',
            name: '(mm)',
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
            name: '降水量预报',
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
            data: ['165','165','165','172','172','172','172','172','172','172','172','172','172','172','172','174','174','174','174','174','174','174','174','174','174','174','174','186','186','186','186','186','186','186','186','186','186','186','186','190','190','190','190','190','190','190','190','190','190','190','190','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','188','188','188','188','188','188','188','188','188','188','188','188','185','185','185','185','185','185','185','185','185']
          }]
        },
        chartData2: {
          backgroundColor: '#fff',
          title: {
            top: 20,
            text: '降水量预报(24小时)',
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
          dataZoom: [{
            startValue: '0'
          }, {
            type: 'inside',
          }],
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
            data: ['00:00 ','15:00 ','30:00 ','45:00 ','00:01 ','15:01 ','30:01 ','45:01 ','00:02 ','15:02 ','30:02 ','45:02 ','00:03 ','15:03 ','30:03 ','45:03 ','00:04 ','15:04 ','30:04 ','45:04 ','00:05 ','15:05 ','30:05 ','45:05 ','00:06 ','15:06 ','30:06 ','45:06 ','00:07 ','15:07 ','30:07 ','45:07 ','00:08 ','15:08 ','30:08 ','45:08 ','00:09 ','15:09 ','30:09 ','45:09 ','00:10 ','15:10 ','30:10 ','45:10 ','00:11 ','15:11 ','30:11 ','45:11 ','00:12 ','15:12 ','30:12 ','45:12 ','00:13 ','15:13 ','30:13 ','45:13 ','00:14 ','15:14 ','30:14 ','45:14 ','00:15 ','15:15 ','30:15 ','45:15 ','00:16 ','15:16 ','30:16 ','45:16 ','00:17 ','15:17 ','30:17 ','45:17 ','00:18 ','15:18 ','30:18 ','45:18 ','00:19 ','15:19 ','30:19 ','45:19 ','00:20 ','15:20 ','30:20 ','45:20 ','00:21 ','15:21 ','30:21 ','45:21 ','00:22 ','15:22 ','30:22 ','45:22 ','00:23 ','15:23 ','30:23 ','45:23']
          }],
          yAxis: [{
            type: 'value',
            name: '(mm)',
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
            name: '降水量预报',
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
            data: ['165','165','165','172','172','172','172','172','172','172','172','172','172','172','172','174','174','174','174','174','174','174','174','174','174','174','174','186','186','186','186','186','186','186','186','186','186','186','186','190','190','190','190','190','190','190','190','190','190','190','190','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','188','188','188','188','188','188','188','188','188','188','188','188','185','185','185','185','185','185','185','185','185']
          }]
        },
        chartData3: {
          backgroundColor: '#fff',
          title: {
            top: 20,
            text: '降水量预报(72小时)',
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
          dataZoom: [{
            startValue: '0'
          }, {
            type: 'inside',
          }],
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
            data: ['00:00 ','15:00 ','30:00 ','45:00 ','00:01 ','15:01 ','30:01 ','45:01 ','00:02 ','15:02 ','30:02 ','45:02 ','00:03 ','15:03 ','30:03 ','45:03 ','00:04 ','15:04 ','30:04 ','45:04 ','00:05 ','15:05 ','30:05 ','45:05 ','00:06 ','15:06 ','30:06 ','45:06 ','00:07 ','15:07 ','30:07 ','45:07 ','00:08 ','15:08 ','30:08 ','45:08 ','00:09 ','15:09 ','30:09 ','45:09 ','00:10 ','15:10 ','30:10 ','45:10 ','00:11 ','15:11 ','30:11 ','45:11 ','00:12 ','15:12 ','30:12 ','45:12 ','00:13 ','15:13 ','30:13 ','45:13 ','00:14 ','15:14 ','30:14 ','45:14 ','00:15 ','15:15 ','30:15 ','45:15 ','00:16 ','15:16 ','30:16 ','45:16 ','00:17 ','15:17 ','30:17 ','45:17 ','00:18 ','15:18 ','30:18 ','45:18 ','00:19 ','15:19 ','30:19 ','45:19 ','00:20 ','15:20 ','30:20 ','45:20 ','00:21 ','15:21 ','30:21 ','45:21 ','00:22 ','15:22 ','30:22 ','45:22 ','00:23 ','15:23 ','30:23 ','45:23']
          }],
          yAxis: [{
            type: 'value',
            name: '(mm)',
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
            name: '降水量预报',
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
            data: ['165','165','165','172','172','172','172','172','172','172','172','172','172','172','172','174','174','174','174','174','174','174','174','174','174','174','174','186','186','186','186','186','186','186','186','186','186','186','186','190','190','190','190','190','190','190','190','190','190','190','190','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','188','188','188','188','188','188','188','188','188','188','188','188','185','185','185','185','185','185','185','185','185']
          }]
        },
        chartData4: {
          backgroundColor: '#fff',
          title: {
            top: 20,
            text: '降水量预报(7天)',
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
          dataZoom: [{
            startValue: '0'
          }, {
            type: 'inside',
          }],
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
            data: ['00:00 ','15:00 ','30:00 ','45:00 ','00:01 ','15:01 ','30:01 ','45:01 ','00:02 ','15:02 ','30:02 ','45:02 ','00:03 ','15:03 ','30:03 ','45:03 ','00:04 ','15:04 ','30:04 ','45:04 ','00:05 ','15:05 ','30:05 ','45:05 ','00:06 ','15:06 ','30:06 ','45:06 ','00:07 ','15:07 ','30:07 ','45:07 ','00:08 ','15:08 ','30:08 ','45:08 ','00:09 ','15:09 ','30:09 ','45:09 ','00:10 ','15:10 ','30:10 ','45:10 ','00:11 ','15:11 ','30:11 ','45:11 ','00:12 ','15:12 ','30:12 ','45:12 ','00:13 ','15:13 ','30:13 ','45:13 ','00:14 ','15:14 ','30:14 ','45:14 ','00:15 ','15:15 ','30:15 ','45:15 ','00:16 ','15:16 ','30:16 ','45:16 ','00:17 ','15:17 ','30:17 ','45:17 ','00:18 ','15:18 ','30:18 ','45:18 ','00:19 ','15:19 ','30:19 ','45:19 ','00:20 ','15:20 ','30:20 ','45:20 ','00:21 ','15:21 ','30:21 ','45:21 ','00:22 ','15:22 ','30:22 ','45:22 ','00:23 ','15:23 ','30:23 ','45:23']
          }],
          yAxis: [{
            type: 'value',
            name: '(mm)',
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
            name: '降水量预报',
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
            data: ['165','165','165','172','172','172','172','172','172','172','172','172','172','172','172','174','174','174','174','174','174','174','174','174','174','174','174','186','186','186','186','186','186','186','186','186','186','186','186','190','190','190','190','190','190','190','190','190','190','190','190','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','201','188','188','188','188','188','188','188','188','188','188','188','188','185','185','185','185','185','185','185','185','185']
          }]
        },
      }
    },
    methods: {
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .chart-container{
    position: relative;
    padding:20px;
    width: 100%;
    height:45vh;
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
