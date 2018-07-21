<template>
  <transition name="weather">
    <div class="weather-modal-main" :style="{height:modalHeight,width:modalWidth}" v-if="show">
         <div class="container-modal">
           <div class="weather-header" @mouseover="move()">
             <div class="title">微气象监测</div>
             <!--<i class="btn-big el-icon-d-caret" @click="bigModal"></i>-->
             <i class="btn-modal el-icon-close" @click="closeModel()" ></i>
           </div>
           <div class="body">
             <el-tabs class="tab" v-model="activeName" @tab-click="handleClick">
               <el-tab-pane label="辐照度" name="1"></el-tab-pane>
               <el-tab-pane label="气温" name="2"></el-tab-pane>
               <el-tab-pane label="风速/风向" name="3"></el-tab-pane>
               <el-tab-pane label="相对湿度" name="4"></el-tab-pane>
               <el-tab-pane label="气压" name="5"></el-tab-pane>
               <el-tab-pane label="降水量" name="6"></el-tab-pane>
               <el-tab-pane label="云高/云量" name="7"></el-tab-pane>
             </el-tabs>
             <chart :id="6"  ref="chart" :height="chartHeight" :width="chartWidth" :chartData="option"></chart>
             <!--<blend-chart :id="3" v-if="activeName==7" ref="chart2" height='90%' width='100%' :chartData="chartData"></blend-chart>-->
             <!--<wind-chart :id="5" v-if="activeName==3" ref="chart3" height='90%' width='100%' :chartData="chartData"></wind-chart>-->
           </div>
         </div>
    </div>
  </transition>
</template>

<script>
  import echarts from 'echarts'
  import { weathercurve } from '@/api/dashboard'
  import Chart from '@/components/Charts/lineMarker'
  import blendChart from '@/components/Charts/blendMarker'
  import windChart from '@/components/Charts/windMarker'
export default {
  name: "weather",
  components: { Chart,blendChart,windChart },
  props: {
    // activeName:{
    //   type:String,
    //   default:'1'
    // },
    show:{
      type:Boolean,
      default:false
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    chartData: {
      type: Object
    }
  },
  computed: {
  },
  data(){
    return{
      activeName:'1',
      option:this.chartData,
      modalWidth:'600px',
      modalHeight:'380px',
      chartWidth:'100%',
      chartHeight:'90%',
    }
  },
  mounted() {
    this.$nextTick(function () {
      if(this.show){

      }
    })
  },
  methods: {
    closeModel: function () {
      this.$emit('weather', false)
    },
    bigModal:function(){
      if(this.modalWidth=='100%'&&this.modalHeight=='100%'){
        this.modalWidth='600px'
        this.modalHeight='380px'
        this.chartWidth='100%'
        this.chartHeight='90%'
      }else {
        this.modalWidth='100%'
        this.modalHeight='100%'
        this.chartWidth='100%'
        this.chartHeight='90%'
      }
      this.$refs.chart.initChart(this.option)
      // this.$refs.chart.show()
    },
    move:function () {
      let x=0
      let y=0;
      let px=0;
      let py=0;
      let onDrag = false;
      // 鼠标按下
      $(".weather-header").mousedown (
        function (e) {
          x = e.clientX;
          y = e.clientY;

          px = $(".weather-modal-main").offset().left;
          py = $(".weather-modal-main").offset().top;

          onDrag = true;

          // 鼠标移动
          $(document).mousemove (
            function (e) {
              if (onDrag) {
                let nx = e.clientX + px - x;
                let ny = e.clientY + py - y;

                $(".weather-modal-main").css("left",nx+'px')
                $(".weather-modal-main").css("top",ny+'px')
              }
            }
          )
          // 鼠标移开
          $(document).mouseup (
            function (e) {
              if (onDrag) {
                onDrag = false;
              }
            }
          )
        }
      )
    },
    search(key){
      weathercurve(key).then(res =>{
        if(key=='1') {
          this.option= {
            backgroundColor: 'transparent',
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                lineStyle: {
                  color: '#ccc'
                }
              }
            },
            grid: {
              top: 28,
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
                  color: '#ccc'
                }
              },
              data:res.body.realTimeDate
            }],
            yAxis: [{
              type: 'value',
              name: '(W/㎡)',
              axisTick: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: '#ccc'
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
              data: res.body.realTimeDataOne
            }]
          }
          // this.chartData.xAxis[0].data=res.body.realTimeDate
          // this.chartData.series[0].data=res.body.realTimeDataOne
        }
        else if (key=='2'){
          this.option= {
            backgroundColor: 'transparent',
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                lineStyle: {
                  color: '#ccc'
                }
              }
            },
            grid: {
              top: 28,
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
                  color: '#ccc'
                }
              },
              data: res.body.realTimeDate
            }],
            yAxis: [{
              type: 'value',
              name: '(℃)',
              axisTick: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: '#ccc'
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
              data: res.body.realTimeDataOne            }]
          }
        }
        else if (key=='3'){
          var data=[]
          var newData=[]
          var option=  {
            grid: {
              top: 28,
              left: '3%',
              right: '4%',
              bottom: '0%',
              containLabel: true
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                lineStyle: {
                  color: '#ccc'
                }
              },
              formatter:function(params)//数据格式
              {
                var relVal = params[0].name+"<br/>";
                relVal +=' 风速: ' + params[0].value+'m/s'+"<br/>";
                relVal +=' 风向: ' +params[0].data.symbolRotate+'°';
                // console.log(params)
                return relVal;
              }
            },
            xAxis : [
              {
                type : 'category',
                boundaryGap : false,
                // axisLine: {onZero: false},
                axisLine: {
                  lineStyle: {
                    color: '#ccc'
                  }
                },
                data : res.body.realTimeDate
              }
            ],
            yAxis: [
              {
                name: '风速/风向',
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
                    color: '#ccc',
                  }
                },
                splitLine: {
                  lineStyle: {
                    color: '#57617B',
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
              }
            ]
          }
          option.xAxis[0].data=res.body.realTimeDate
          // this.option.series[1].data=res.body.realTimeDataOne
          $.each(res.body.realTimeDataOne,(index,value)=>  {
            const _data={
              value:value,
              symbol: 'arrow',
              symbolSize: [7,14],
              symbolRotate: null,
              symbolOffset:[0,6]
            }
            option.series[0].data.push(_data)
          })
          // $.each(option.series[0].data,(index,data)=>  {
          //   var symbolRotate=''
          //   $.each(res.body.realTimeDataTwo,(index,value)=>  {
          //     symbolRotate=value
          //   })
          //   data.symbolRotate=symbolRotate
          // })
          for(var i=0;i<res.body.realTimeDataTwo.length;i++){
            option.series[0].data[i].symbolRotate=res.body.realTimeDataTwo[i]
          }
          this.option=option;
        }
        else if (key=='4'){
          this.option= {
            backgroundColor: 'transparent',
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                lineStyle: {
                  color: '#ccc'
                }
              }
            },
            grid: {
              top: 28,
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
                  color: '#ccc'
                }
              },
              data: res.body.realTimeDate
            }],
            yAxis: [{
              type: 'value',
              name: '(%)',
              axisTick: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: '#ccc'
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
              data: res.body.realTimeDataOne            }]
          }
        }
        else if (key=='5'){
          var arry=[]
          $.each(res.body.realTimeDataOne,function (index,data) {
            arry.push(Number(data))
          })
          var max=Math.max.apply(null,arry);
          var min=Math.min.apply(null,arry);
          this.option= {
            backgroundColor: 'transparent',
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                lineStyle: {
                  color: '#ccc'
                }
              }
            },
            grid: {
              top: 28,
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
                  color: '#ccc'
                }
              },
              data: res.body.realTimeDate            }],
            yAxis: [{
              type: 'value',
              min: min,
              max: max,
              name: '(hPa)',
              axisTick: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: '#ccc'
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
              data:  res.body.realTimeDataOne            }]
          }
        }
        else if (key=='6'){
          this.option= {
            backgroundColor: 'transparent',
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                lineStyle: {
                  color: '#ccc'
                }
              }
            },
            grid: {
              top: 28,
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
                  color: '#ccc'
                }
              },
              data: []            }],
            yAxis: [{
              type: 'value',
              name: '(mm)',
              axisTick: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: '#ccc'
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
              data: []
            }]
          }
        }
        else if (key=='7'){
          this.option= {
            color: ['#307fff', '#fe6270'],
            // title: {
            //   top: 0,
            //   text: '云高/云量',
            //   textStyle: {
            //     fontWeight: 'normal',
            //     fontSize: 16,
            //     color: '#ccc'
            //   },
            //   left: '1%'
            // },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross'
              }
            },
            legend: {
              top: 0,
              icon: 'rect',
              itemWidth: 14,
              itemHeight: 5,
              itemGap: 13,
              data: ['云量','云高'],
              right: '4%',
              textStyle: {
                fontSize: 12,
                color: '#ccc'
              }
            },
            grid: {
              top: 58,
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
                name: '(成)',
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
                },
                splitLine: {
                  lineStyle: {
                    color: '#57617B'
                  }
                }
              },
              {
                type: 'value',
                name: '(km)',
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
        }
        this.$refs.chart.initChart(this.option)
      })
    },
    handleClick(tab, event) {
      this.search(tab.name)
    },
  }
}
</script>

<style scoped>
.weather-modal-main{
  /*height: 380px;*/
  /*width: 600px;*/
  z-index: 10;
  position: fixed;
  top: 80px;
  bottom: 0;
  left: 30%;
  right: 0;
}
.container{
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px 0px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px 0px;
  border-radius: 8px;
  display: inline-block;
  text-align: left;
  overflow: hidden;
  backface-visibility: hidden;
}
.weather-header{
  cursor:move;
  position: relative;
  padding: 15px;
  padding-bottom: 10px;
}
.body{
  width: 100%;
  height: 80%;
  position: relative;
  padding: 10px 15px;
  color: #303133;
  font-size: 15px;
}
.title{
  padding-left: 0;
  margin-bottom: 0;
  font-size: 18px;
  line-height: 1;
  color: #03d9be;
  border-bottom: solid 1px #606266;
}
.weather-enter-active {
  transition: all .3s ease;
}
.weather-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.weather-enter, .weather-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(-100px);
  opacity: 0;
}
</style>
