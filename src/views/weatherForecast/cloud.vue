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
          color: ['#307fff', '#fe6270'],
          title: {
            top: 20,
            text: '云高/云量',
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
              type: 'cross'
            }
          },
          legend: {
            top: 20,
            icon: 'rect',
            itemWidth: 14,
            itemHeight: 5,
            itemGap: 13,
            data: ['云量','云高'],
            right: '4%',
            textStyle: {
              fontSize: 12,
              color: '#000'
            }
          },
          grid: {
            top: 100,
            left: '3%',
            right: '4%',
            bottom: '2%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              axisTick: {
                alignWithLabel: true
              },
              data: ['1','2','3','4','5','6','7','8','9','10','11','12']
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '云量(成)',
              min: 0,
              max: 10,
              position: 'right',
              axisLine: {
                lineStyle: {
                  color: '#307fff'
                }
              },
              axisLabel: {
                formatter: '{value}'
              }
            },
            {
              type: 'value',
              name: '云高(km)',
              min: 0,
              max: 25,
              position: 'left',
              axisLine: {
                lineStyle: {
                  color: '#fe6270'
                }
              },
              axisLabel: {
                formatter: '{value}'
              }
            }
          ],
          series: [
            {
              name:'云量',
              type:'bar',
              data:[2.6, 5.9, 9.0, 2.4, 2.7, 7.7, 1.6, 1.2, 8.7, 8.8, 6.0, 2.3]
            },
            {
              name:'云高',
              type:'line',
              yAxisIndex: 1,
              symbol: 'none',
              data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
          ]
        },
        chartData2: {
          color: ['#307fff', '#fe6270'],
          title: {
            top: 20,
            text: '云高/云量',
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
              type: 'cross'
            }
          },
          legend: {
            top: 20,
            icon: 'rect',
            itemWidth: 14,
            itemHeight: 5,
            itemGap: 13,
            data: ['云量','云高'],
            right: '4%',
            textStyle: {
              fontSize: 12,
              color: '#000'
            }
          },
          grid: {
            top: 100,
            left: '3%',
            right: '4%',
            bottom: '2%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              axisTick: {
                alignWithLabel: true
              },
              data: ['1','2','3','4','5','6','7','8','9','10','11','12']
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '云量(成)',
              min: 0,
              max: 10,
              position: 'right',
              axisLine: {
                lineStyle: {
                  color: '#307fff'
                }
              },
              axisLabel: {
                formatter: '{value}'
              }
            },
            {
              type: 'value',
              name: '云高(km)',
              min: 0,
              max: 25,
              position: 'left',
              axisLine: {
                lineStyle: {
                  color: '#fe6270'
                }
              },
              axisLabel: {
                formatter: '{value}'
              }
            }
          ],
          series: [
            {
              name:'云量',
              type:'bar',
              data:[2.6, 5.9, 9.0, 2.4, 2.7, 7.7, 1.6, 1.2, 8.7, 8.8, 6.0, 2.3]
            },
            {
              name:'云高',
              type:'line',
              yAxisIndex: 1,
              symbol: 'none',
              data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
          ]
        },
        chartData3: {
          color: ['#307fff', '#fe6270'],
          title: {
            top: 20,
            text: '云高/云量',
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
              type: 'cross'
            }
          },
          legend: {
            top: 20,
            icon: 'rect',
            itemWidth: 14,
            itemHeight: 5,
            itemGap: 13,
            data: ['云量','云高'],
            right: '4%',
            textStyle: {
              fontSize: 12,
              color: '#000'
            }
          },
          grid: {
            top: 100,
            left: '3%',
            right: '4%',
            bottom: '2%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              axisTick: {
                alignWithLabel: true
              },
              data: ['1','2','3','4','5','6','7','8','9','10','11','12']
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '云量(成)',
              min: 0,
              max: 10,
              position: 'right',
              axisLine: {
                lineStyle: {
                  color: '#307fff'
                }
              },
              axisLabel: {
                formatter: '{value}'
              }
            },
            {
              type: 'value',
              name: '云高(km)',
              min: 0,
              max: 25,
              position: 'left',
              axisLine: {
                lineStyle: {
                  color: '#fe6270'
                }
              },
              axisLabel: {
                formatter: '{value}'
              }
            }
          ],
          series: [
            {
              name:'云量',
              type:'bar',
              data:[2.6, 5.9, 9.0, 2.4, 2.7, 7.7, 1.6, 1.2, 8.7, 8.8, 6.0, 2.3]
            },
            {
              name:'云高',
              type:'line',
              yAxisIndex: 1,
              symbol: 'none',
              data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
          ]
        },
        chartData4: {
          color: ['#307fff', '#fe6270'],
          title: {
            top: 20,
            text: '云高/云量',
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
              type: 'cross'
            }
          },
          legend: {
            top: 20,
            icon: 'rect',
            itemWidth: 14,
            itemHeight: 5,
            itemGap: 13,
            data: ['云量','云高'],
            right: '4%',
            textStyle: {
              fontSize: 12,
              color: '#000'
            }
          },
          grid: {
            top: 100,
            left: '3%',
            right: '4%',
            bottom: '2%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              axisTick: {
                alignWithLabel: true
              },
              data: ['1','2','3','4','5','6','7','8','9','10','11','12']
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '云量(成)',
              min: 0,
              max: 10,
              position: 'right',
              axisLine: {
                lineStyle: {
                  color: '#307fff'
                }
              },
              axisLabel: {
                formatter: '{value}'
              }
            },
            {
              type: 'value',
              name: '云高(km)',
              min: 0,
              max: 25,
              position: 'left',
              axisLine: {
                lineStyle: {
                  color: '#fe6270'
                }
              },
              axisLabel: {
                formatter: '{value}'
              }
            }
          ],
          series: [
            {
              name:'云量',
              type:'bar',
              data:[2.6, 5.9, 9.0, 2.4, 2.7, 7.7, 1.6, 1.2, 8.7, 8.8, 6.0, 2.3]
            },
            {
              name:'云高',
              type:'line',
              yAxisIndex: 1,
              symbol: 'none',
              data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
          ]
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
