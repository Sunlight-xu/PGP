<template>
  <div class="app-container">
    <el-row>
      <el-col :span="12">
        <div class='chart-container'>
          <div class="topological">
            <div class="state">
              <div class="open"></div><div style="color: green;margin-left: 24px;margin-top: -2px;">开启</div>
              <div class="off"></div><div style="color: red;margin-left: 24px;margin-top: 6px;">关闭</div>
            </div>
            <div class="topological-top">
              <img style="width:40px;margin-left: -20px;position: absolute;" src="../../assets/images/dw.png" />
              <div :class="{spot:dw=='dw-off'}"></div>
              <div :class="dw" @click="switchClick('dw')"></div>
              <div class="verticalLine"></div>
              <img style="width:40px;margin-top: 90px;margin-left: -20px;position: absolute;" src="../../assets/images/byq.png" />
            </div>
            <div class="topological-left">
              <div :class="{'spot-nbq-1':dw=='dw-off'&&nbq1=='nbq1-off'}"></div>
              <div :class="nbq1" @click="switchClick('nbq1')"></div>
              <div class="nbq-line-1"></div>
              <img style="width: 40px;margin-left: -20px;position: absolute;margin-top: 20px;" src="../../assets/images/nbq.png" />
              <div class="hlq-main-1">
                <div :class="{'spot-hlq-1':dw=='dw-off'&&nbq1=='nbq1-off'}"></div>
                <div class="hlq1-off"></div>
                <div class="hlq-line-1"></div>
                <img style="width: 50px;margin-left: -25px;position: absolute;margin-top: 20px;" src="../../assets/images/hl.png" />
                <div :class="{'spot-gf-1':dw=='dw-off'&&nbq1=='nbq1-off'}"></div>
                <div class="gf-line-1"></div>
                <img style="margin-left: -76px;position: absolute;margin-top: 95px;width: 40px;" src="../../assets/images/gf.png" />
                <div :class="{'spot-gf-2':dw=='dw-off'&&nbq1=='nbq1-off'}"></div>
                <div class="gf-line-2"></div>
                <img style="margin-left: -22px;position: absolute;margin-top: 95px;width: 40px;" src="../../assets/images/gf.png" />
                <div :class="{'spot-gf-3':dw=='dw-off'&&nbq1=='nbq1-off'}"></div>
                <div class="gf-line-3"></div>
                <img style="margin-left: 31px;position: absolute;margin-top: 95px;width: 40px;" src="../../assets/images/gf.png" />
              </div>
              <div class="hlq-main-2">
                <div :class="{'spot-hlq-2':dw=='dw-off'&&nbq1=='nbq1-off'}"></div>
                <div class="hlq2-off"></div>
                <div class="hlq-line-2"></div>
                <img style="width: 50px;margin-left: -25px;position: absolute;margin-top: 20px;" src="../../assets/images/hl.png" />
                <div :class="{'spot-gf-4':dw=='dw-off'&&nbq1=='nbq1-off'}"></div>
                <div class="gf-line-4"></div>
                <img style="margin-left: -76px;position: absolute;margin-top: 95px;width: 40px;" src="../../assets/images/gf.png" />
                <div :class="{'spot-gf-5':dw=='dw-off'&&nbq1=='nbq1-off'}"></div>
                <div class="gf-line-5"></div>
                <img style="margin-left: -22px;position: absolute;margin-top: 95px;width: 40px;" src="../../assets/images/gf.png" />
                <div :class="{'spot-gf-6':dw=='dw-off'&&nbq1=='nbq1-off'}"></div>
                <div class="gf-line-6"></div>
                <img style="margin-left: 31px;position: absolute;margin-top: 95px;width: 40px;" src="../../assets/images/gf.png" />
              </div>
              <div></div>
            </div>
            <div class="topological-right">
              <div :class="{'spot-nbq-2':dw=='dw-off'}"></div>
              <div class="nbq2-off"></div>
              <div class="nbq-line-2"></div>
              <img style="width: 40px;margin-left: -20px;position: absolute;margin-top: 20px;" src="../../assets/images/nbq.png" />
              <div class="hlq-main-3">
                <div :class="{'spot-hlq-3':dw=='dw-off'}"></div>
                <div class="hlq3-off"></div>
                <div class="hlq-line-3"></div>
                <img style="width: 50px;margin-left: -25px;position: absolute;margin-top: 20px;" src="../../assets/images/hl.png" />
                <div :class="{'spot-gf-7':dw=='dw-off'}"></div>
                <div class="gf-line-7"></div>
                <img style="margin-left: -76px;position: absolute;margin-top: 95px;width: 40px;" src="../../assets/images/gf.png" />
                <div :class="{'spot-gf-8':dw=='dw-off'}"></div>
                <div class="gf-line-8"></div>
                <img style="margin-left: -22px;position: absolute;margin-top: 95px;width: 40px;" src="../../assets/images/gf.png" />
                <div :class="{'spot-gf-9':dw=='dw-off'}"></div>
                <div class="gf-line-9"></div>
                <img style="margin-left: 31px;position: absolute;margin-top: 95px;width: 40px;" src="../../assets/images/gf.png" />
              </div>
              <div class="hlq-main-4">
                <div :class="{'spot-hlq-4':dw=='dw-off'}"></div>
                <div class="hlq4-off"></div>
                <div class="hlq-line-4"></div>
                <img style="width: 50px;margin-left: -25px;position: absolute;margin-top: 20px;" src="../../assets/images/hl.png" />
                <div :class="{'spot-gf-10':dw=='dw-off'}"></div>
                <div class="gf-line-10"></div>
                <img style="margin-left: -76px;position: absolute;margin-top: 95px;width: 40px;" src="../../assets/images/gf.png" />
                <div :class="{'spot-gf-11':dw=='dw-off'}"></div>
                <div class="gf-line-11"></div>
                <img style="margin-left: -22px;position: absolute;margin-top: 95px;width: 40px;" src="../../assets/images/gf.png" />
                <div :class="{'spot-gf-12':dw=='dw-off'}"></div>
                <div class="gf-line-12"></div>
                <img style="margin-left: 31px;position: absolute;margin-top: 95px;width: 40px;" src="../../assets/images/gf.png" />
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div  class='chart-container'>
          <el-row>
            <el-col :span="12">设备状态</el-col>
            <el-col :span="12">
              <el-row>
                 <el-col :span="12">正常<div class="btn-green"></div></el-col>
                 <el-col :span="12">异常<div class="btn-red"></div></el-col>
              </el-row>
            </el-col>
          </el-row>
          <table class="table-body">
            <tbody>
               <tr>
                 <td>变压器</td>
                 <td>逆变器1</td>
                 <td>逆变器2</td>
                 <td>温度传感器</td>
               </tr>
               <tr>
                 <td><div class="breathe-btn-red"></div></td>
                 <td><div class="breathe-btn"></div></td>
                 <td><div class="breathe-btn"></div></td>
                 <td><div class="breathe-btn"></div></td>
               </tr>

               <tr>
                 <td>湿度传感器</td>
                 <td>气压传感器</td>
                 <td>风速传感器</td>
                 <td>风向传感器</td>
               </tr>
               <tr>
                 <td><div class="breathe-btn"></div></td>
                 <td><div class="breathe-btn"></div></td>
                 <td><div class="breathe-btn"></div></td>
                 <td><div class="breathe-btn"></div></td>
               </tr>

               <tr>
                 <td>降水传感器</td>
                 <td>云高仪传感器</td>
                 <td>总辐射传感器</td>
                 <td>散射辐射传感器</td>
               </tr>
               <tr>
                 <td><div class="breathe-btn"></div></td>
                 <td><div class="breathe-btn"></div></td>
                 <td><div class="breathe-btn"></div></td>
                 <td><div class="breathe-btn"></div></td>
               </tr>

               <tr>
                 <td>射辐射传感器</td>
                 <td>能见度传感器</td>
                 <td>天气现象传感器</td>
                 <td>雷电传感器</td>
               </tr>
               <tr>
                 <td><div class="breathe-btn"></div></td>
                 <td><div class="breathe-btn"></div></td>
                 <td><div class="breathe-btn-red"></div></td>
                 <td><div class="breathe-btn"></div></td>
               </tr>

               <!--<tr>-->
                 <!--<td>通讯状态</td>-->
               <!--</tr>-->
               <!--<tr>-->
                 <!--<td><div class="breathe-btn"></div></td>-->
               <!--</tr>-->
            </tbody>
          </table>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class='chart-container'>
         <el-tabs class="tab" v-model="activeName" @tab-click="handleClick">
           <el-tab-pane label="辐照度" name="1"></el-tab-pane>
           <el-tab-pane label="气温" name="2"></el-tab-pane>
           <el-tab-pane label="风速/风向" name="3"></el-tab-pane>
           <el-tab-pane label="相对湿度" name="4"></el-tab-pane>
           <el-tab-pane label="气压" name="5"></el-tab-pane>
           <el-tab-pane label="降水量" name="6"></el-tab-pane>
           <el-tab-pane label="云高/云量" name="7"></el-tab-pane>
         </el-tabs>
          <chart :id="2" v-if="activeName!=3&&activeName!=7&&chartData2.xAxis[0].data" ref="chart" height='100%' width='100%' :chartData="chartData2"></chart>
          <blend-chart :id="3" v-if="activeName==7&&chartData2.xAxis[0].data" ref="chart2" height='100%' width='100%' :chartData="chartData2"></blend-chart>
          <wind-chart :id="5" v-if="activeName==3&&chartData2.xAxis[0].data" ref="chart3" height='100%' width='100%' :chartData="chartData2"></wind-chart>
        </div>
      </el-col>
      <el-col :span="12">
        <div class='chart-container'>
         <div style="height: 54px"></div>
          <chart :id="4" ref="chart4" v-if="chartData3.xAxis[0].data" height='100%' width='100%' :chartData="chartData3"></chart>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import Chart from '@/components/Charts/lineMarker'
  import blendChart from '@/components/Charts/blendMarker'
  import windChart from '@/components/Charts/windMarker'
  import { topology,devicestatus,weathercurve,realtimepower } from '@/api/realTimeMonitoring'

  export default {
    components: { Chart, blendChart,windChart },
    data() {
      return {
        on:true,
        dw:'dw-off',
        nbq1:'nbq1-off',
        activeName: '1',
        chartData2: null,
        chartData3: null
      }
    },
    methods: {
      weathercurveInit(key){
        weathercurve(key).then(res =>{
          console.log(this.chartData2)
          this.chartData2.xAxis[0].data=res.body.realTimeDate
          this.chartData2.series[0].data=res.body.realTimeDataOne
          // if(key=='3'||key=='7'){
          //   this.chartData2.series[1].data=res.body.realTimeDataTwo
          // }
          this.$refs.chart.initChart(this.chartData2)
        })
      },
      realtimepowerInit(){
        realtimepower().then(res =>{
          this.chartData3.xAxis[0].data=res.body.dateTime
          this.chartData3.series[0].data=res.body.realPowerCount
          this.chartData3.series[1].data=res.body.inverterOne
          this.chartData3.series[2].data=res.body.inverterTwo
          this.$refs.chart4.initChart(this.chartData3)
        })
      },
      handleClick(tab, event) {
        if(tab.name=='1') {
          this.chartData2= {
            backgroundColor: '#fff',
            title: {
              top: 20,
              text: '辐照度',
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
              data: ['00:00','00:15','00:30','00:45','01:00','01:15','01:30','01:45','02:00','02:15','02:30','02:45','03:00','03:15','03:30','03:45','04:00','04:15','04:30','04:45','05:00','05:15','05:30','05:45','06:00','06:15','06:30','06:45','07:00','07:15','07:30','07:45','08:00','08:15','08:30','08:45','09:00','09:15','09:30','09:45','10:00','10:15','10:30','10:45','11:00','11:15','11:30','11:45','12:00','12:15','12:30','12:45','13:00','13:15','13:30','13:45','14:00','14:15','14:30','14:45','15:00','15:15','15:30','15:45','16:00','16:15','16:30','16:45','17:00','17:15','17:30','17:45','18:00','18:15','18:30','18:45','19:00','19:15','19:30','19:45','20:00','20:15','20:30','20:45','21:00','21:15','21:30','21:45','22:00','22:15','22:30','22:45','23:00','23:15','23:30','23:45']
            }],
            yAxis: [{
              type: 'value',
              name: '(W/㎡)',
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
              name: '辐照度',
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
                    color: 'rgba(13,211,131, 0.3)'
                  }, {
                    offset: 0.8,
                    color: 'rgba(13,211,131, 0)'
                  }], false),
                  shadowColor: 'rgba(0,0,0, 0.1)',
                  shadowBlur: 10
                }
              },
              itemStyle: {
                normal: {
                  color: 'rgb(13,211,131)',
                  borderColor: 'rgba(13,211,131,0.2)',
                  borderWidth: 12
                }
              },
              data: ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','21','47','75','104','136','169','205','243','294','358','413','457','501','546','583','613','641','667','691','713','732','747','760','771','780','785','783','774','761','747','728','706','681','653','625','597','568','537','500','459','417']
            }]
          }
        }
        else if (tab.name=='2'){
          this.chartData2= {
            backgroundColor: '#fff',
            title: {
              top: 20,
              text: '气温',
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
              data: ['00:00','00:15','00:30','00:45','01:00','01:15','01:30','01:45','02:00','02:15','02:30','02:45','03:00','03:15','03:30','03:45','04:00','04:15','04:30','04:45','05:00','05:15','05:30','05:45','06:00','06:15','06:30','06:45','07:00','07:15','07:30','07:45','08:00','08:15','08:30','08:45','09:00','09:15','09:30','09:45','10:00','10:15','10:30','10:45','11:00','11:15','11:30','11:45','12:00','12:15','12:30','12:45','13:00','13:15','13:30','13:45','14:00','14:15','14:30','14:45','15:00','15:15','15:30','15:45','16:00','16:15','16:30','16:45','17:00','17:15','17:30','17:45','18:00','18:15','18:30','18:45','19:00','19:15','19:30','19:45','20:00','20:15','20:30','20:45','21:00','21:15','21:30','21:45','22:00','22:15','22:30','22:45','23:00','23:15','23:30','23:45']
            }],
            yAxis: [{
              type: 'value',
              name: '(℃)',
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
              name: '气温',
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
                    color: 'rgba(13,211,131, 0.3)'
                  }, {
                    offset: 0.8,
                    color: 'rgba(13,211,131, 0)'
                  }], false),
                  shadowColor: 'rgba(0,0,0, 0.1)',
                  shadowBlur: 10
                }
              },
              itemStyle: {
                normal: {
                  color: 'rgb(13,211,131)',
                  borderColor: 'rgba(13,211,131,0.2)',
                  borderWidth: 12
                }
              },
              data: ['26.6','26.6','26.6','26.6','26.6','26.6','26.6','26.6','26.6','26.6','26.6','26.6','26.6','26.6','26.6','26.6','26.6','26.6','26.7','26.7','26.7','26.8','26.9','26.9','27.0','27.1','27.2','27.3','27.4','27.5','27.6','27.7','27.8','27.9','28.0','28.1','28.2','28.3','28.3','28.4','28.5','28.6','28.7','28.8','28.8','28.9','28.9','28.9','28.9','28.9','29.0','29.0','29.0','29.0','29.1','29.1','29.2','29.3','29.4','29.5','29.6','29.7','29.8','29.9','30.0']
            }]
          }
        }
        else if (tab.name=='3'){
          var data=[]
          var newData=[]
          this.chartData2=  {
            title: {
              top: 20,
              text: '风速/风向',
              textStyle: {
                fontWeight: 'normal',
                fontSize: 16,
                color: '#000'
              },
              left: '1%'
            },
            grid: {
              top: 100,
              left: '3%',
              right: '4%',
              bottom: '0%',
              containLabel: true
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                lineStyle: {
                  color: '#57617B'
                }
              }
            },
            legend: {
              top: 20,
              icon: 'rect',
              itemWidth: 14,
              itemHeight: 5,
              itemGap: 13,
              data: ['风速','风向'],
              right: '4%',
              textStyle: {
                fontSize: 12,
                color: '#000'
              }
            },
            xAxis : [
              {
                type : 'category',
                boundaryGap : false,
                // axisLine: {onZero: false},
                axisLine: {
                  lineStyle: {
                    color: '#57617B'
                  }
                },
                data : []
              }
            ],
            yAxis: [
              {
                name: '风向(度)',
                type: 'value',
                // max: 360,
                axisLabel: {
                  margin: 10,
                  textStyle: {
                    fontSize: 14
                  },
                  show: true,
                  interval: 'auto',
                  formatter: '{value}'
                },
                axisTick: {
                  show: false
                },
                axisLine: {
                  lineStyle: {
                    color: '#57617B',
                  }
                },
                splitLine: {
                  lineStyle: {
                    color: '#57617B',
                  }
                }
              },
              {
                name: '风速(m/s)',
                nameLocation: 'start',
                type: 'value',
                inverse: true,

                axisLabel: {
                  margin: 10,
                  textStyle: {
                    fontSize: 14
                  }
                },
                axisTick: {
                  show: false
                },
                axisLine: {
                  lineStyle: {
                    color: '#57617B'
                  }
                },
                splitLine: {
                  lineStyle: {
                    color: '#57617B'
                  }
                }
              }
            ],
            series: [
              {
                name:'风向',
                type:'line',
                lineStyle: {
                  normal: {
                    width: 1
                  }
                },
                itemStyle: {
                  normal: {
                    color: 'rgb(48,127,255)',
                    // borderColor: 'rgba(13,211,131,0.2)',
                    // borderWidth: 12
                  }
                },
                data:[]
              },
              {
                name:'风速',
                type:'line',
                yAxisIndex:1,
                lineStyle: {
                  normal: {
                    width: 1
                  }
                },
                itemStyle: {
                  normal: {
                    color: 'rgb(13,211,131)',
                    borderColor: 'rgba(13,211,131,0.2)',
                    borderWidth: 12
                  }
                },
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                data: []              }
            ]
          }
          weathercurve(tab.name).then(res =>{
            this.chartData2.xAxis[0].data=res.body.realTimeDate
              this.chartData2.series[1].data=res.body.realTimeDataOne
              // data=res.body.realTimeDataTwo
              $.each(res.body.realTimeDataTwo,(index,value)=>  {
              const _data={
                value:value,
                symbol: 'arrow',
                symbolSize: [7,14],
                symbolRotate: value,
                symbolOffset:[0,6]
              }
              this.chartData2.series[0].data.push(_data)
            })
            // this.chartData2.series[1].data=res.body.realTimeDataOne
            this.$refs.chart3.initChart(this.chartData2)
          })
          // data=["1","33","22"]
        }
        else if (tab.name=='4'){
          this.chartData2= {
            backgroundColor: '#fff',
            title: {
              top: 20,
              text: '相对湿度',
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
              data: ['00:00','00:15','00:30','00:45','01:00','01:15','01:30','01:45','02:00','02:15','02:30','02:45','03:00','03:15','03:30','03:45','04:00','04:15','04:30','04:45','05:00','05:15','05:30','05:45','06:00','06:15','06:30','06:45','07:00','07:15','07:30','07:45','08:00','08:15','08:30','08:45','09:00','09:15','09:30','09:45','10:00','10:15','10:30','10:45','11:00','11:15','11:30','11:45','12:00','12:15','12:30','12:45','13:00','13:15','13:30','13:45','14:00','14:15','14:30','14:45','15:00','15:15','15:30','15:45','16:00','16:15','16:30','16:45','17:00','17:15','17:30','17:45','18:00','18:15','18:30','18:45','19:00','19:15','19:30','19:45','20:00','20:15','20:30','20:45','21:00','21:15','21:30','21:45','22:00','22:15','22:30','22:45','23:00','23:15','23:30','23:45']
            }],
            yAxis: [{
              type: 'value',
              name: '(%)',
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
              name: '相对湿度',
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
                    color: 'rgba(13,211,131, 0.3)'
                  }, {
                    offset: 0.8,
                    color: 'rgba(13,211,131, 0)'
                  }], false),
                  shadowColor: 'rgba(0,0,0, 0.1)',
                  shadowBlur: 10
                }
              },
              itemStyle: {
                normal: {
                  color: 'rgb(13,211,131)',
                  borderColor: 'rgba(13,211,131,0.2)',
                  borderWidth: 12
                }
              },
              data: ['85.9','86','86.1','86.2','86.2','86.3','86.4','86.5','86.6','86.7','86.8','86.8','86.9','87','87.1','87.2','87.2','87.3','87.4','87.4','87.5','87.2','86.9','86.6','86.3','86','85.7','85.3','85','84.7','84.4','84.1','83.7','83.4','83.1','82.8','82.5','82.2','81.8','81.5','81.2','80.9','80.7','80.4','80.1','80.2','80.3','80.4','80.5','80.6','80.6','80.7','80.8','80.8','80.9','80.9','80.9','79.8','78.8','77.7','76.6','75.5','74.5','73.4','72.3']            }]
          }
        }
        else if (tab.name=='5'){
          this.chartData2= {
            backgroundColor: '#fff',
            title: {
              top: 20,
              text: '气压',
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
              data: ['00:00','00:15','00:30','00:45','01:00','01:15','01:30','01:45','02:00','02:15','02:30','02:45','03:00','03:15','03:30','03:45','04:00','04:15','04:30','04:45','05:00','05:15','05:30','05:45','06:00','06:15','06:30','06:45','07:00','07:15','07:30','07:45','08:00','08:15','08:30','08:45','09:00','09:15','09:30','09:45','10:00','10:15','10:30','10:45','11:00','11:15','11:30','11:45','12:00','12:15','12:30','12:45','13:00','13:15','13:30','13:45','14:00','14:15','14:30','14:45','15:00','15:15','15:30','15:45','16:00','16:15','16:30','16:45','17:00','17:15','17:30','17:45','18:00','18:15','18:30','18:45','19:00','19:15','19:30','19:45','20:00','20:15','20:30','20:45','21:00','21:15','21:30','21:45','22:00','22:15','22:30','22:45','23:00','23:15','23:30','23:45']
            }],
            yAxis: [{
              type: 'value',
              name: '(hPa)',
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
              name: '气压',
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
                    color: 'rgba(13,211,131, 0.3)'
                  }, {
                    offset: 0.8,
                    color: 'rgba(13,211,131, 0)'
                  }], false),
                  shadowColor: 'rgba(0,0,0, 0.1)',
                  shadowBlur: 10
                }
              },
              itemStyle: {
                normal: {
                  color: 'rgb(13,211,131)',
                  borderColor: 'rgba(13,211,131,0.2)',
                  borderWidth: 12
                }
              },
              data:  ['1000.6','1000.5','1000.4','1000.3','1000.2','1000.1','1000.0','999.9','999.8','999.7','999.6','999.5','999.4','999.3','999.2','999.2','999.1','999.0','998.9','998.9','998.8','998.9','998.9','999.0','999.1','999.2','999.3','999.4','999.5','999.5','999.6','999.7','999.8','999.8','999.8','999.9','999.9','999.9','999.9','999.9','999.9','999.9','999.9','999.9','999.9','999.9','999.8','999.7','999.6','999.5','999.5','999.4','999.3','999.2','999.1','999.0','998.9','998.8','998.6','998.4','998.2','998.1','997.9','997.7','997.5']
            }]
          }
        }
        else if (tab.name=='6'){
          this.chartData2= {
            backgroundColor: '#fff',
            title: {
              top: 20,
              text: '降水量',
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
              data: ['00:00','00:15','00:30','00:45','01:00','01:15','01:30','01:45','02:00','02:15','02:30','02:45','03:00','03:15','03:30','03:45','04:00','04:15','04:30','04:45','05:00','05:15','05:30','05:45','06:00','06:15','06:30','06:45','07:00','07:15','07:30','07:45','08:00','08:15','08:30','08:45','09:00','09:15','09:30','09:45','10:00','10:15','10:30','10:45','11:00','11:15','11:30','11:45','12:00','12:15','12:30','12:45','13:00','13:15','13:30','13:45','14:00','14:15','14:30','14:45','15:00','15:15','15:30','15:45','16:00','16:15','16:30','16:45','17:00','17:15','17:30','17:45','18:00','18:15','18:30','18:45','19:00','19:15','19:30','19:45','20:00','20:15','20:30','20:45','21:00','21:15','21:30','21:45','22:00','22:15','22:30','22:45','23:00','23:15','23:30','23:45']
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
              name: '降水量',
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
                    color: 'rgba(13,211,131, 0.3)'
                  }, {
                    offset: 0.8,
                    color: 'rgba(13,211,131, 0)'
                  }], false),
                  shadowColor: 'rgba(0,0,0, 0.1)',
                  shadowBlur: 10
                }
              },
              itemStyle: {
                normal: {
                  color: 'rgb(13,211,131)',
                  borderColor: 'rgba(13,211,131,0.2)',
                  borderWidth: 12
                }
              },
              data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122]
            }]
          }
          this.$refs.chart.initChart(this.chartData2)
        }
        else if (tab.name=='7'){
          this.chartData2= {
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
          }
            // weathercurve(tab.name).then(res =>{
            //   this.chartData2.xAxis[0].data=res.body.realTimeDate
            //   this.chartData2.series[0].data=res.body.realTimeDataOne
            //   this.chartData2.series[1].data=res.body.realTimeDataTwo
            //   this.$refs.chart2.initChart(this.chartData2)
            // })

        }
        if(tab.name!='7'&&tab.name!='3'&&tab.name!='6'){
          this.weathercurveInit(tab.name)
          // this.$refs.chart.initChart(this.chartData2)
        }
      },
      switchClick(key){
        if(key=='dw'){
          var text=''
          if(this.dw=='dw-off'){
            text='此操作将关闭电网, 是否继续?'
          }else {
            text='此操作将开启电网, 是否继续?'
          }
          this.$confirm(text, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            if(this.dw=='dw-off'){
              this.dw='dw-open'
            }else {
              this.dw='dw-off'
            }
            this.$message({
              type: 'success',
              message: '操作成功!'
            });
          }).catch(() => {
            // this.$message({
            //   type: 'info',
            //   message: '已取消删除'
            // });
          });
        }
        else if(key=='nbq1'){
          var text=''
          if(this.nbq1=='nbq1-off'){
            text='此操作将关闭逆变器1, 是否继续?'
          }else {
            text='此操作将开启逆变器1, 是否继续?'
          }
          this.$confirm(text, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            if(this.nbq1=='nbq1-off'){
              this.nbq1='nbq1-open'
            }else {
              this.nbq1='nbq1-off'
            }
            this.$message({
              type: 'success',
              message: '操作成功!'
            });
          }).catch(() => {
            // this.$message({
            //   type: 'info',
            //   message: '已取消删除'
            // });
          });
        }
      }
    },
    created(){
      this.chartData2= {
        backgroundColor: '#fff',
        title: {
          top: 20,
          text: '辐照度',
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
          data: ['00:00','00:15','00:30','00:45','01:00','01:15','01:30','01:45','02:00','02:15','02:30','02:45','03:00','03:15','03:30','03:45','04:00','04:15','04:30','04:45','05:00','05:15','05:30','05:45','06:00','06:15','06:30','06:45','07:00','07:15','07:30','07:45','08:00','08:15','08:30','08:45','09:00','09:15','09:30','09:45','10:00','10:15','10:30','10:45','11:00','11:15','11:30','11:45','12:00','12:15','12:30','12:45','13:00','13:15','13:30','13:45','14:00','14:15','14:30','14:45','15:00','15:15','15:30','15:45','16:00','16:15','16:30','16:45','17:00','17:15','17:30','17:45','18:00','18:15','18:30','18:45','19:00','19:15','19:30','19:45','20:00','20:15','20:30','20:45','21:00','21:15','21:30','21:45','22:00','22:15','22:30','22:45','23:00','23:15','23:30','23:45']
        }],
        yAxis: [{
          type: 'value',
          name: '(W/㎡)',
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
          name: '辐照度',
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
                color: 'rgba(13,211,131, 0.3)'
              }, {
                offset: 0.8,
                color: 'rgba(13,211,131, 0)'
              }], false),
              shadowColor: 'rgba(0,0,0, 0.1)',
              shadowBlur: 10
            }
          },
          itemStyle: {
            normal: {
              color: 'rgb(13,211,131)',
              borderColor: 'rgba(13,211,131,0.2)',
              borderWidth: 12
            }
          },
          data: ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','21','47','75','104','136','169','205','243','294','358','413','457','501','546','583','613','641','667','691','713','732','747','760','771','780','785','783','774','761','747','728','706','681','653','625','597','568','537','500','459','417']
        }]
      }
      this.chartData3={
        backgroundColor: '#fff',
        title: {
          top: 20,
          text: '功率',
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
        legend: {
          top: 20,
          icon: 'rect',
          itemWidth: 14,
          itemHeight: 5,
          itemGap: 13,
          data: ['逆变器1','逆变器2','总功率'],
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
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#57617B'
            }
          },
          data: []        }],
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
          name: '总功率',
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
                color: 'rgba(146,92,255, 0.3)'
              }, {
                offset: 0.8,
                color: 'rgba(146,92,255, 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10
            }
          },
          itemStyle: {
            normal: {
              color: 'rgb(146,92,255)',
              borderColor: 'rgba(146,92,255,0.2)',
              borderWidth: 12

            }
          },
          data: []        },
          {
            name: '逆变器1',
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
                shadowColor: 'rgba(0,0,0, 0.1)',
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
            data:[]          },
          {
            name: '逆变器2',
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
                  color: 'rgba(13,211,131, 0.3)'
                }, {
                  offset: 0.8,
                  color: 'rgba(13,211,131, 0)'
                }], false),
                shadowColor: 'rgba(0,0,0, 0.1)',
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: 'rgb(13,211,131)',
                borderColor: 'rgba(13,211,131,0.2)',
                borderWidth: 12
              }
            },
            data: []          }]
      }
      topology().then(res =>{
        this.yesterdaySum=res.body.yesterdaySum
        this.todaySum=res.body.todaySum
        this.inverterOne=res.body.inverterOne
        this.inverterTwo=res.body.inverterTwo
        this.realPowerCount=res.body.realPowerCount
      })
      devicestatus().then(res =>{
        // this.yesterdaySum=res.body.yesterdaySum
        // this.todaySum=res.body.todaySum
      })
      weathercurve('1').then(res =>{
        console.log(this.chartData2)
        this.chartData2.xAxis[0].data=res.body.realTimeDate
        this.chartData2.series[0].data=res.body.realTimeDataOne
        // if(key=='3'||key=='7'){
        //   this.chartData2.series[1].data=res.body.realTimeDataTwo
        // }
        this.$refs.chart.initChart(this.chartData2)
      })
      realtimepower().then(res =>{
        this.chartData3.xAxis[0].data=res.body.dateTime
        this.chartData3.series[0].data=res.body.realPowerCount
        this.chartData3.series[1].data=res.body.inverterOne
        this.chartData3.series[2].data=res.body.inverterTwo
        this.$refs.chart4.initChart(this.chartData3)
        console.log(this.chartData3)
      })
      // this.realtimepowerInit();
      // this.weathercurveInit('1');
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
  $font:0.7em;
  .index-img{
    width: 78%;
    height: 90%;
    margin-left: 22px;
    margin-top: 40px;
  }
  .gl-sum{
    margin-top: -32%;
    margin-left: 46%;
    position: absolute;
    font-size: $font;
  }
  .gl-l{
    position: absolute;
    margin-left: 28%;
    margin-top: -16%;
    font-size: $font;
  }
  .gl-r{
    position: absolute;
    margin-left: 67%;
    margin-top: -16%;
    font-size: $font;
  }
  .fd-jt{
    position: absolute;
    margin-left: 77%;
    margin-top: -7%;
    font-size: $font;
  }
  .fd-zt{
    position: absolute;
    margin-left: 77%;
    margin-top: -3%;
    font-size: $font;
  }
  .tab{
    width: 90%;
    margin-left: 6%;
  }
  .table-body{
    margin-top: 20px;
  }
  table,table tr th, table tr td { border:1px solid #ccc; }
  table { width: 100%; min-height: 28px; line-height: 28px; text-align: center; border-collapse: collapse; padding:2px;}
  .align{
    margin-top: 3%;
  }
  .btn-left{
    margin-left: 114px !important;
  }
  .btn-green{
     background-color: #2a7b00;
     width: 15px;
     height: 15px;
     border-radius: 50%;
    margin-top: -17px;
    margin-left: 48px;
  }
  .btn-red{
    background-color: #c80000;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-top: -17px;
    margin-left: 48px;
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

  .breathe-btn {
  position:relative;
  width:15px;
  height:15px;
  margin: 8px auto;
  // margin:40px auto;
  // margin: -14px 0 0 140px;
  line-height:40px;
  border:1px solid #2a7b00;
  border-radius:50%;
  color:#fff;
  font-size:20px;
  text-align:center;
  cursor:pointer;
  box-shadow:0 1px 2px rgba(0,0,0,0.3);
  overflow:hidden;
  /*background-image:-webkit-gradient(linear,left top,left bottom,from(#3eb700),to(#359b00));*/
  background: linear-gradient(180deg, #3eb700 50%, #359b00);
  animation-timing-function:ease-in-out;
  animation-name:breathe;
  animation-duration:1200ms;
  animation-iteration-count:infinite;
  animation-direction:alternate;
}
@keyframes breathe {
  0% {
  opacity:.2;
  box-shadow:0 1px 2px rgba(255,255,255,0.4);
}
100% {
  opacity:1;
  border:1px solid rgba(62,183,0,1);
  box-shadow:0 1px 8px rgba(62,183,0,1);
}
}
  .breathe-btn-red {
    position:relative;
    width:15px;
    height:15px;
    margin: 8px auto;
    // margin:40px auto;
    // margin: -14px 0 0 140px;
    line-height:40px;
    border:1px solid #c80000;
    border-radius:50%;
    color:#fff;
    font-size:20px;
    text-align:center;
    cursor:pointer;
    box-shadow:0 1px 2px rgba(0,0,0,0.3);
    overflow:hidden;
    /*background-image:-webkit-gradient(linear,left top,left bottom,from(#ea0000),to(#9d0000));*/
    background: linear-gradient(180deg, #ea0000 50%, #9d0000);
    animation-timing-function:ease-in-out;
    animation-name:breathe-red;
    animation-duration:1200ms;
    animation-iteration-count:infinite;
    animation-direction:alternate;
  }
@keyframes breathe-red {
    0% {
      opacity:.2;
      box-shadow:0 1px 2px rgba(255,255,255,0.4);
    }
    100% {
      opacity:1;
      border:1px solid rgba(193,17,17,1);
      box-shadow:0 1px 8px rgba(193,17,17,1);
    }
  }

  // 移动轨迹
  .topological{
    width: 700px;
    height: 300px;
  }
  .topological img{
    z-index: 4;
  }
  /*开关按钮*/
  .off{
    width: 20px;
    height: 10px;
    border: 1px solid red;
    position: absolute;
    z-index: 3;
    background-color: white;
    margin-top: 8px;
  }
  .open{
    width: 20px;
    height: 10px;
    border: 1px solid green;
    position: absolute;
    z-index: 3;
    background-color: white;
  }
  .state{
    margin-left: 500px;
    position: absolute;
    font-size: 12px;
  }
  .dw-off{
    cursor:pointer;
    width: 10px;
    height: 20px;
    border: 1px solid red;
    position: absolute;
    margin-top: 53px;
    margin-left: -4px;
    z-index: 3;
    background-color: white;
  }
  .dw-open{
    cursor:pointer;
    width: 10px;
    height: 20px;
    border: 1px solid green;
    position: absolute;
    margin-top: 53px;
    margin-left: -4px;
    z-index: 3;
    background-color: white;
  }

  .nbq1-off{
    cursor:pointer;
    width: 20px;
    height: 10px;
    border: 1px solid red;
    position: absolute;
    margin-top: -4px;
    margin-left: 66px;
    z-index: 3;
    background-color: white;
  }
  .nbq1-open{
    cursor:pointer;
    width: 20px;
    height: 10px;
    border: 1px solid green;
    position: absolute;
    margin-top: -4px;
    margin-left: 66px;
    z-index: 3;
    background-color: white;
  }

  .nbq2-off{
    cursor:pointer;
    width: 20px;
    height: 10px;
    border: 1px solid red;
    position: absolute;
    margin-top: -4px;
    margin-left: -86px;
    z-index: 3;
    background-color: white;
  }
  .nbq2-open{
    cursor:pointer;
    width: 20px;
    height: 10px;
    border: 1px solid green;
    position: absolute;
    margin-top: -4px;
    margin-left: -86px;
    z-index: 3;
    background-color: white;
  }

  .hlq1-off{
    cursor:pointer;
    width: 20px;
    height: 10px;
    border: 1px solid red;
    position: absolute;
    margin-top: -4px;
    margin-left: 26px;
    z-index: 3;
    background-color: white;
  }
  .hlq1-open{
    cursor:pointer;
    width: 20px;
    height: 10px;
    border: 1px solid green;
    position: absolute;
    margin-top: -4px;
    margin-left: 26px;
    z-index: 3;
    background-color: white;
  }

  .hlq2-off{
    cursor:pointer;
    width: 20px;
    height: 10px;
    border: 1px solid red;
    position: absolute;
    margin-top: -4px;
    margin-left: -40px;
    z-index: 3;
    background-color: white;
  }
  .hlq2-open{
    cursor:pointer;
    width: 20px;
    height: 10px;
    border: 1px solid green;
    position: absolute;
    margin-top: -4px;
    margin-left: -40px;
    z-index: 3;
    background-color: white;
  }

  .hlq3-off{
    cursor:pointer;
    width: 20px;
    height: 10px;
    border: 1px solid red;
    position: absolute;
    margin-top: -4px;
    margin-left: 26px;
    z-index: 3;
    background-color: white;
  }
  .hlq3-open{
    cursor:pointer;
    width: 20px;
    height: 10px;
    border: 1px solid green;
    position: absolute;
    margin-top: -4px;
    margin-left: 26px;
    z-index: 3;
    background-color: white;
  }

  .hlq4-off{
    cursor:pointer;
    width: 20px;
    height: 10px;
    border: 1px solid red;
    position: absolute;
    margin-top: -4px;
    margin-left: -40px;
    z-index: 3;
    background-color: white;
  }
  .hlq4-open{
    cursor:pointer;
    width: 20px;
    height: 10px;
    border: 1px solid green;
    position: absolute;
    margin-top: -4px;
    margin-left: -40px;
    z-index: 3;
    background-color: white;
  }

  .topological-top{
    margin-left: 48%;
  }
  .topological-left{
    margin-left: 172px;
    margin-top: 109px;
    position: absolute;
  }
  .topological-right{
    margin-left: 497px;
    margin-top: 109px;
    position: absolute;
  }
  .hlq-main-1{
    position: absolute;
    margin-left: -87px;
    margin-top: 40px;
  }
  .hlq-main-2{
    margin-left: 81px;
    margin-top: 40px;
  }
  .hlq-main-3{
    position: absolute;
    margin-left: -84px;
    margin-top: 40px;
  }
  .hlq-main-4{
    margin-left: 80px;
    margin-top: 40px;
  }
  /*逆变器*/
  .nbq-line-1{
    width: 2px;
    height: 50px;
    background-color: #3a8ee6;
    position: absolute;
  }
  .nbq-line-1::after{
    content: "";
    width: 144px;
    height: 2px;
    background-color: #3a8ee6;
    position: absolute;
  }
  .nbq-line-2{
    width: 2px;
    height: 50px;
    background-color: #3a8ee6;
    position: absolute;
  }
  .nbq-line-2::after{
    content: "";
    margin-left: -142px;
    width: 142px;
    height: 2px;
    background-color: #3a8ee6;
    position: absolute;
  }
   /*汇流器*/
  .hlq-line-1{
    width: 2px;
    height: 50px;
    background-color: #3a8ee6;
    position: absolute;
  }
  .hlq-line-1::after{
    content: "";
    width: 140px;
    height: 2px;
    background-color: #3a8ee6;
    position: absolute;
  }
  .hlq-line-2{
    width: 2px;
    height: 50px;
    background-color: #3a8ee6;
    position: absolute;
  }
  .hlq-line-2::after{
    content: "";
    width: 104px;
    height: 2px;
    background-color: #3a8ee6;
    position: absolute;
    margin-left: -102px;
  }
  .hlq-line-3{
    width: 2px;
    height: 50px;
    background-color: #3a8ee6;
    position: absolute;
  }
  .hlq-line-3::after{
    content: "";
    width: 140px;
    height: 2px;
    background-color: #3a8ee6;
    position: absolute;
  }
  .hlq-line-4{
    width: 2px;
    height: 50px;
    background-color: #3a8ee6;
    position: absolute;
  }
  .hlq-line-4::after{
    content: "";
    width: 104px;
    height: 2px;
    background-color: #3a8ee6;
    position: absolute;
    margin-left: -102px;
  }
   /*光伏板*/
  .gf-line-1{
    margin-top: 39px;
    margin-left: -56px;
    width: 2px;
    height: 80px;
    background-color: #3a8ee6;
    position: absolute;
  }
  .gf-line-1::after{
    content: "";
    width: 50px;
    height: 2px;
    background-color: #3a8ee6;
    position: absolute;
  }
  .gf-line-2{
    margin-top: 39px;
    margin-left: 0px;
    width: 2px;
    height: 80px;
    background-color: #3a8ee6;
    position: absolute;
  }
  .gf-line-3{
    margin-top: 39px;
    margin-left: 51px;
    width: 2px;
    height: 80px;
    background-color: #3a8ee6;
    position: absolute;
  }
  .gf-line-3::after{
    content: "";
    width: 50px;
    height: 2px;
    margin-left: -48px;
    background-color: #3a8ee6;
    position: absolute;
  }

  .gf-line-4{
    margin-top: 39px;
    margin-left: -56px;
    width: 2px;
    height: 80px;
    background-color: #3a8ee6;
    position: absolute;
  }
  .gf-line-4::after{
    content: "";
    width: 50px;
    height: 2px;
    background-color: #3a8ee6;
    position: absolute;
  }
  .gf-line-5{
    margin-top: 39px;
    margin-left: 0px;
    width: 2px;
    height: 80px;
    background-color: #3a8ee6;
    position: absolute;
  }
  .gf-line-6{
    margin-top: 39px;
    margin-left: 51px;
    width: 2px;
    height: 80px;
    background-color: #3a8ee6;
    position: absolute;
  }
  .gf-line-6::after{
    content: "";
    width: 50px;
    height: 2px;
    margin-left: -48px;
    background-color: #3a8ee6;
    position: absolute;
  }

  .gf-line-7{
    margin-top: 39px;
    margin-left: -56px;
    width: 2px;
    height: 80px;
    background-color: #3a8ee6;
    position: absolute;
  }
  .gf-line-7::after{
    content: "";
    width: 50px;
    height: 2px;
    background-color: #3a8ee6;
    position: absolute;
  }
  .gf-line-8{
    margin-top: 39px;
    margin-left: 0px;
    width: 2px;
    height: 80px;
    background-color: #3a8ee6;
    position: absolute;
  }
  .gf-line-9{
    margin-top: 39px;
    margin-left: 51px;
    width: 2px;
    height: 80px;
    background-color: #3a8ee6;
    position: absolute;
  }
  .gf-line-9::after{
    content: "";
    width: 50px;
    height: 2px;
    margin-left: -48px;
    background-color: #3a8ee6;
    position: absolute;
  }

  .gf-line-10{
    margin-top: 39px;
    margin-left: -56px;
    width: 2px;
    height: 80px;
    background-color: #3a8ee6;
    position: absolute;
  }
  .gf-line-10::after{
    content: "";
    width: 50px;
    height: 2px;
    background-color: #3a8ee6;
    position: absolute;
  }
  .gf-line-11{
    margin-top: 39px;
    margin-left: 0px;
    width: 2px;
    height: 80px;
    background-color: #3a8ee6;
    position: absolute;
  }
  .gf-line-12{
    margin-top: 39px;
    margin-left: 51px;
    width: 2px;
    height: 80px;
    background-color: #3a8ee6;
    position: absolute;
  }
  .gf-line-12::after{
    content: "";
    width: 50px;
    height: 2px;
    margin-left: -48px;
    background-color: #3a8ee6;
    position: absolute;
  }
  .verticalLine{
    margin-top: 30px;
    width: 2px;
    height: 60px;
    background-color: #3a8ee6;
    position: absolute;
  }
  .spot{
    width: 8px;
    height: 8px;
    margin-left: -3px;
    z-index: 1;
    position: absolute;
    background-color: rgba(62,183,0,1);
    border-radius: 50%;
    animation: move 4s infinite linear;
  }
  @keyframes move{
    0%{
      margin-top:100px;
      opacity:.2;
      box-shadow:0 1px 2px rgba(255,255,255,0.4);
    }
    50%{
      margin-top:50px;
      opacity:1;
      border:1px solid rgba(52,143,0,1);
      box-shadow:0 1px 8px rgba(52,143,0,1);
    }
    100%{
      margin-top:0px;
      opacity:1;
      border:1px solid rgba(62,163,0,1);
      box-shadow:0 1px 8px rgba(62,183,0,1);
    }
  }

  .spot-nbq-1{
       width: 8px;
       height: 8px;
       margin-left: -3px;
       z-index: 1;
       position: absolute;
       background-color: rgba(62,183,0,1);
       border-radius: 50%;
       animation: move1 4s infinite linear;
     }
  @keyframes move1{
    0%{
      margin-top:20px;
      opacity:.2;
      box-shadow:0 1px 2px rgba(255,255,255,0.4);
    }
    20%{
      margin-top:-3px;
      margin-left:-3px;
      opacity:1;
      border:1px solid rgba(52,143,0,1);
      box-shadow:0 1px 8px rgba(52,143,0,1);
    }
    100%{
      margin-top:-3px;
      margin-left:140px;
      opacity:1;
      border:1px solid rgba(62,163,0,1);
      box-shadow:0 1px 8px rgba(62,183,0,1);
    }
  }

  .spot-nbq-2{
    width: 8px;
    height: 8px;
    margin-left: -3px;
    z-index: 1;
    position: absolute;
    background-color: rgba(62,183,0,1);
    border-radius: 50%;
    animation: move2 4s infinite linear;
  }
  @keyframes move2{
    0%{
      margin-top:20px;
      opacity:.2;
      box-shadow:0 1px 2px rgba(255,255,255,0.4);
    }
    20%{
      margin-top:-3px;
      margin-left:-3px;
      opacity:1;
      border:1px solid rgba(52,143,0,1);
      box-shadow:0 1px 8px rgba(52,143,0,1);
    }
    100%{
      margin-top:-3px;
      margin-left:-140px;
      opacity:1;
      border:1px solid rgba(62,163,0,1);
      box-shadow:0 1px 8px rgba(62,183,0,1);
    }
  }

  .spot-hlq-1{
    width: 8px;
    height: 8px;
    margin-left: -3px;
    z-index: 1;
    position: absolute;
    background-color: rgba(62,183,0,1);
    border-radius: 50%;
    animation: move3 3s infinite linear;
  }
  @keyframes move3{
    0%{
      margin-top:20px;
      opacity:.2;
      box-shadow:0 1px 2px rgba(255,255,255,0.4);
    }
    20%{
      margin-top:-3px;
      margin-left:-3px;
      opacity:1;
      border:1px solid rgba(52,143,0,1);
      box-shadow:0 1px 8px rgba(52,143,0,1);
    }
    100%{
      margin-top:-3px;
      margin-left:70px;
      opacity:1;
      border:1px solid rgba(62,163,0,1);
      box-shadow:0 1px 8px rgba(62,183,0,1);
    }
  }

  .spot-hlq-2{
    width: 8px;
    height: 8px;
    margin-left: -3px;
    z-index: 1;
    position: absolute;
    background-color: rgba(62,183,0,1);
    border-radius: 50%;
    animation: move4 3s infinite linear;
  }
  @keyframes move4{
    0%{
      margin-top:20px;
      opacity:.2;
      box-shadow:0 1px 2px rgba(255,255,255,0.4);
    }
    20%{
      margin-top:-3px;
      margin-left:-3px;
      opacity:1;
      border:1px solid rgba(52,143,0,1);
      box-shadow:0 1px 8px rgba(52,143,0,1);
    }
    100%{
      margin-top:-3px;
      margin-left:-70px;
      opacity:1;
      border:1px solid rgba(62,163,0,1);
      box-shadow:0 1px 8px rgba(62,183,0,1);
    }
  }

  .spot-hlq-3{
    width: 8px;
    height: 8px;
    margin-left: -3px;
    z-index: 1;
    position: absolute;
    background-color: rgba(62,183,0,1);
    border-radius: 50%;
    animation: move5 3s infinite linear;
  }
  @keyframes move5{
    0%{
      margin-top:20px;
      opacity:.2;
      box-shadow:0 1px 2px rgba(255,255,255,0.4);
    }
    20%{
      margin-top:-3px;
      margin-left:-3px;
      opacity:1;
      border:1px solid rgba(52,143,0,1);
      box-shadow:0 1px 8px rgba(52,143,0,1);
    }
    100%{
      margin-top:-3px;
      margin-left:70px;
      opacity:1;
      border:1px solid rgba(62,163,0,1);
      box-shadow:0 1px 8px rgba(62,183,0,1);
    }
  }

  .spot-hlq-4{
    width: 8px;
    height: 8px;
    margin-left: -3px;
    z-index: 1;
    position: absolute;
    background-color: rgba(62,183,0,1);
    border-radius: 50%;
    animation: move6 3s infinite linear;
  }
  @keyframes move6{
    0%{
      margin-top:20px;
      opacity:.2;
      box-shadow:0 1px 2px rgba(255,255,255,0.4);
    }
    20%{
      margin-top:-3px;
      margin-left:-3px;
      opacity:1;
      border:1px solid rgba(52,143,0,1);
      box-shadow:0 1px 8px rgba(52,143,0,1);
    }
    100%{
      margin-top:-3px;
      margin-left:-70px;
      opacity:1;
      border:1px solid rgba(62,163,0,1);
      box-shadow:0 1px 8px rgba(62,183,0,1);
    }
  }

  .spot-gf-1{
    width: 8px;
    height: 8px;
    margin-left: -3px;
    z-index: 1;
    position: absolute;
    background-color: rgba(62,183,0,1);
    border-radius: 50%;
    animation: move7 3s infinite linear;
  }
  @keyframes move7{
    0%{
      margin-top:100px;
      margin-left: -59px;
      opacity:.2;
      box-shadow:0 1px 2px rgba(255,255,255,0.4);
    }
    60%{
      margin-top:36px;
      margin-left:-59px;
      opacity:1;
      border:1px solid rgba(52,143,0,1);
      box-shadow:0 1px 8px rgba(52,143,0,1);
    }
    100%{
      margin-top:36px;
      margin-left:0px;
      opacity:1;
      border:1px solid rgba(62,163,0,1);
      box-shadow:0 1px 8px rgba(62,183,0,1);
    }
  }

  .spot-gf-2{
    width: 8px;
    height: 8px;
    margin-left: -3px;
    z-index: 1;
    position: absolute;
    background-color: rgba(62,183,0,1);
    border-radius: 50%;
    animation: move8 2.4s infinite linear;
  }
  @keyframes move8{
    0%{
      margin-top:100px;
      margin-left: -3px;
      opacity:.2;
      box-shadow:0 1px 2px rgba(255,255,255,0.4);
    }
    50%{
      margin-top:60px;
      margin-left:-3px;
      opacity:1;
      border:1px solid rgba(52,143,0,1);
      box-shadow:0 1px 8px rgba(52,143,0,1);
    }
    100%{
      margin-top:36px;
      margin-left:-3px;
      opacity:1;
      border:1px solid rgba(62,163,0,1);
      box-shadow:0 1px 8px rgba(62,183,0,1);
    }
  }

  .spot-gf-3{
    width: 8px;
    height: 8px;
    margin-left: -3px;
    z-index: 1;
    position: absolute;
    background-color: rgba(62,183,0,1);
    border-radius: 50%;
    animation: move9 3s infinite linear;
  }
  @keyframes move9{
    0%{
      margin-top:100px;
      margin-left: 48px;
      opacity:.2;
      box-shadow:0 1px 2px rgba(255,255,255,0.4);
    }
    60%{
      margin-top:36px;
      margin-left:48px;
      opacity:1;
      border:1px solid rgba(52,143,0,1);
      box-shadow:0 1px 8px rgba(52,143,0,1);
    }
    100%{
      margin-top:36px;
      margin-left:0px;
      opacity:1;
      border:1px solid rgba(62,163,0,1);
      box-shadow:0 1px 8px rgba(62,183,0,1);
    }
  }

  .spot-gf-4{
    width: 8px;
    height: 8px;
    margin-left: -3px;
    z-index: 1;
    position: absolute;
    background-color: rgba(62,183,0,1);
    border-radius: 50%;
    animation: move10 3s infinite linear;
  }
  @keyframes move10{
    0%{
      margin-top:100px;
      margin-left: -59px;
      opacity:.2;
      box-shadow:0 1px 2px rgba(255,255,255,0.4);
    }
    60%{
      margin-top:36px;
      margin-left:-59px;
      opacity:1;
      border:1px solid rgba(52,143,0,1);
      box-shadow:0 1px 8px rgba(52,143,0,1);
    }
    100%{
      margin-top:36px;
      margin-left:0px;
      opacity:1;
      border:1px solid rgba(62,163,0,1);
      box-shadow:0 1px 8px rgba(62,183,0,1);
    }
  }

  .spot-gf-5{
    width: 8px;
    height: 8px;
    margin-left: -3px;
    z-index: 1;
    position: absolute;
    background-color: rgba(62,183,0,1);
    border-radius: 50%;
    animation: move11 2.4s infinite linear;
  }
  @keyframes move11{
    0%{
      margin-top:100px;
      margin-left: -3px;
      opacity:.2;
      box-shadow:0 1px 2px rgba(255,255,255,0.4);
    }
    50%{
      margin-top:60px;
      margin-left:-3px;
      opacity:1;
      border:1px solid rgba(52,143,0,1);
      box-shadow:0 1px 8px rgba(52,143,0,1);
    }
    100%{
      margin-top:36px;
      margin-left:-3px;
      opacity:1;
      border:1px solid rgba(62,163,0,1);
      box-shadow:0 1px 8px rgba(62,183,0,1);
    }
  }

  .spot-gf-6{
    width: 8px;
    height: 8px;
    margin-left: -3px;
    z-index: 1;
    position: absolute;
    background-color: rgba(62,183,0,1);
    border-radius: 50%;
    animation: move12 3s infinite linear;
  }
  @keyframes move12{
    0%{
      margin-top:100px;
      margin-left: 48px;
      opacity:.2;
      box-shadow:0 1px 2px rgba(255,255,255,0.4);
    }
    60%{
      margin-top:36px;
      margin-left:48px;
      opacity:1;
      border:1px solid rgba(52,143,0,1);
      box-shadow:0 1px 8px rgba(52,143,0,1);
    }
    100%{
      margin-top:36px;
      margin-left:0px;
      opacity:1;
      border:1px solid rgba(62,163,0,1);
      box-shadow:0 1px 8px rgba(62,183,0,1);
    }
  }

  .spot-gf-7{
    width: 8px;
    height: 8px;
    margin-left: -3px;
    z-index: 1;
    position: absolute;
    background-color: rgba(62,183,0,1);
    border-radius: 50%;
    animation: move13 3s infinite linear;
  }
  @keyframes move13{
    0%{
      margin-top:100px;
      margin-left: -59px;
      opacity:.2;
      box-shadow:0 1px 2px rgba(255,255,255,0.4);
    }
    60%{
      margin-top:36px;
      margin-left:-59px;
      opacity:1;
      border:1px solid rgba(52,143,0,1);
      box-shadow:0 1px 8px rgba(52,143,0,1);
    }
    100%{
      margin-top:36px;
      margin-left:0px;
      opacity:1;
      border:1px solid rgba(62,163,0,1);
      box-shadow:0 1px 8px rgba(62,183,0,1);
    }
  }

  .spot-gf-8{
    width: 8px;
    height: 8px;
    margin-left: -3px;
    z-index: 1;
    position: absolute;
    background-color: rgba(62,183,0,1);
    border-radius: 50%;
    animation: move14 2.4s infinite linear;
  }
  @keyframes move14{
    0%{
      margin-top:100px;
      margin-left: -3px;
      opacity:.2;
      box-shadow:0 1px 2px rgba(255,255,255,0.4);
    }
    50%{
      margin-top:60px;
      margin-left:-3px;
      opacity:1;
      border:1px solid rgba(52,143,0,1);
      box-shadow:0 1px 8px rgba(52,143,0,1);
    }
    100%{
      margin-top:36px;
      margin-left:-3px;
      opacity:1;
      border:1px solid rgba(62,163,0,1);
      box-shadow:0 1px 8px rgba(62,183,0,1);
    }
  }

  .spot-gf-9{
    width: 8px;
    height: 8px;
    margin-left: -3px;
    z-index: 1;
    position: absolute;
    background-color: rgba(62,183,0,1);
    border-radius: 50%;
    animation: move15 3s infinite linear;
  }
  @keyframes move15{
    0%{
      margin-top:100px;
      margin-left: 48px;
      opacity:.2;
      box-shadow:0 1px 2px rgba(255,255,255,0.4);
    }
    60%{
      margin-top:36px;
      margin-left:48px;
      opacity:1;
      border:1px solid rgba(52,143,0,1);
      box-shadow:0 1px 8px rgba(52,143,0,1);
    }
    100%{
      margin-top:36px;
      margin-left:0px;
      opacity:1;
      border:1px solid rgba(62,163,0,1);
      box-shadow:0 1px 8px rgba(62,183,0,1);
    }
  }

  .spot-gf-10{
    width: 8px;
    height: 8px;
    margin-left: -3px;
    z-index: 1;
    position: absolute;
    background-color: rgba(62,183,0,1);
    border-radius: 50%;
    animation: move16 3s infinite linear;
  }
  @keyframes move16{
    0%{
      margin-top:100px;
      margin-left: -59px;
      opacity:.2;
      box-shadow:0 1px 2px rgba(255,255,255,0.4);
    }
    60%{
      margin-top:36px;
      margin-left:-59px;
      opacity:1;
      border:1px solid rgba(52,143,0,1);
      box-shadow:0 1px 8px rgba(52,143,0,1);
    }
    100%{
      margin-top:36px;
      margin-left:0px;
      opacity:1;
      border:1px solid rgba(62,163,0,1);
      box-shadow:0 1px 8px rgba(62,183,0,1);
    }
  }

  .spot-gf-11{
    width: 8px;
    height: 8px;
    margin-left: -3px;
    z-index: 1;
    position: absolute;
    background-color: rgba(62,183,0,1);
    border-radius: 50%;
    animation: move17 2.4s infinite linear;
  }
  @keyframes move17{
    0%{
      margin-top:100px;
      margin-left: -3px;
      opacity:.2;
      box-shadow:0 1px 2px rgba(255,255,255,0.4);
    }
    50%{
      margin-top:60px;
      margin-left:-3px;
      opacity:1;
      border:1px solid rgba(52,143,0,1);
      box-shadow:0 1px 8px rgba(52,143,0,1);
    }
    100%{
      margin-top:36px;
      margin-left:-3px;
      opacity:1;
      border:1px solid rgba(62,163,0,1);
      box-shadow:0 1px 8px rgba(62,183,0,1);
    }
  }

  .spot-gf-12{
    width: 8px;
    height: 8px;
    margin-left: -3px;
    z-index: 1;
    position: absolute;
    background-color: rgba(62,183,0,1);
    border-radius: 50%;
    animation: move18 3s infinite linear;
  }
  @keyframes move18{
    0%{
      margin-top:100px;
      margin-left: 48px;
      opacity:.2;
      box-shadow:0 1px 2px rgba(255,255,255,0.4);
    }
    60%{
      margin-top:36px;
      margin-left:48px;
      opacity:1;
      border:1px solid rgba(52,143,0,1);
      box-shadow:0 1px 8px rgba(52,143,0,1);
    }
    100%{
      margin-top:36px;
      margin-left:0px;
      opacity:1;
      border:1px solid rgba(62,163,0,1);
      box-shadow:0 1px 8px rgba(62,183,0,1);
    }
  }

</style>
