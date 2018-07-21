<template>
  <div id="home" class="dashboard-main">
    <div class="yun"></div>
      <!--<img class="yunMove1" src="../../assets/images/yun.png">-->
      <img class="yunMove2" src="../../assets/images/yun.png">
      <el-row style="top: 60px;color: #047e6f">
        <el-col :span="2" style="margin-left: 80px;">
          <img class="sun" src="../../assets/images/sun.png">
          <div style="margin-left: 49px;font-size: 21px;">晴</div>
        </el-col>
        <el-col :span="2">
          <div style="margin-top: 24px;">
            <img class="fsd" style="width: 60px;" src="../../assets/images/fsd.png">
            <span style="position: absolute;margin-top: 25px;;font-size: 21px;">200w/㎡</span>
          </div>
          <div style="margin-top: 0px;">
            <img class="wdj" style="width: 60px;" src="../../assets/images/wdj.png">
            <span style="position: absolute;margin-top: 21px;font-size: 21px;">32℃</span>
          </div>
        </el-col>
      </el-row>
      <!--<img class="yunMove3" src="../../assets/images/yun.png">-->
      <!--<div class="menu" v-show="menu">-->
        <!--<div @click="weatherOpen()" class="menu-text">气象</div>-->
        <!--<div @click="electricityOpen()" class="menu-text">发电预测</div>-->
        <!--<div @click="inverterOpen()" class="menu-text">逆变器</div>-->
      <!--</div>-->
      <!--<div @click="menu=!menu" :class="!menu?'menu-btn':'menu-btn-right'">导<br>航<br>菜<br>单</div>-->
      <!--<div @click="closeAll()" class="close-all">关<br>闭<br>所<br>有</div>-->
      <!--<img id="img" class="img-demo" src="../../assets/images/demo.png">-->
      <!--<div style="margin-top: 0px" @click="inverterOpen()">坐标x:{{x}}-&#45;&#45;y:{{y}}</div>-->
    <div id="equipment" class="equipment">
      <img id="line" class="img-line" src="../../assets/images/line.png">
      <el-tooltip content="实时气象" placement="left">
        <img id="qx" @click="weatherOpen()" class="img-qx" src="../../assets/images/qx.png">
      </el-tooltip>
      <el-tooltip content="发电预测" placement="top">
        <img id="house" @click="electricityOpen()" class="img-house" src="../../assets/images/house.png">
      </el-tooltip>
      <el-tooltip content="光伏板" placement="top">
        <img id="gfb1" @click="gfbOpen()" class="img-gfb1" src="../../assets/images/gfb.png">
      </el-tooltip>
      <el-tooltip content="光伏板" placement="left">
        <img id="gfb2" @click="gfbOpen()" class="img-gfb2" src="../../assets/images/gfb.png">
      </el-tooltip>
      <el-tooltip content="光伏板" placement="left">
        <img id="gfb3" @click="gfbOpen()" class="img-gfb3" src="../../assets/images/gfb.png">
      </el-tooltip>
      <el-tooltip content="光伏板" placement="left">
        <img id="gfb4" @click="gfbOpen()" class="img-gfb4" src="../../assets/images/gfb.png">
      </el-tooltip>
      <el-tooltip content="光伏板" placement="left">
        <img id="gfb5" @click="gfbOpen()" class="img-gfb5" src="../../assets/images/gfb.png">
      </el-tooltip>
      <el-tooltip content="光伏板" placement="left">
        <img id="gfb6" @click="gfbOpen()" class="img-gfb6" src="../../assets/images/gfb.png">
      </el-tooltip>
      <el-tooltip content="光伏板" placement="left">
        <img id="gfb7" @click="gfbOpen()" class="img-gfb7" src="../../assets/images/gfb.png">
      </el-tooltip>
      <el-tooltip content="光伏板" placement="left">
        <img id="gfb8" @click="gfbOpen()" class="img-gfb8" src="../../assets/images/gfb.png">
      </el-tooltip>
      <el-tooltip content="汇流箱" placement="top">
        <img id="hlx1" @click="hlxOpen()" class="img-hlx1" src="../../assets/images/hlx.png">
      </el-tooltip>
      <el-tooltip content="汇流箱" placement="top">
        <img id="hlx2" @click="hlxOpen()" class="img-hlx2" src="../../assets/images/hlx.png">
      </el-tooltip>
      <el-tooltip content="汇流箱" placement="top">
        <img id="hlx3" @click="hlxOpen()" class="img-hlx3" src="../../assets/images/hlx.png">
      </el-tooltip>
      <el-tooltip content="汇流箱" placement="top">
        <img id="hlx4" @click="hlxOpen()" class="img-hlx4" src="../../assets/images/hlx.png">
      </el-tooltip>
      <el-tooltip content="汇流箱" placement="top">
        <img id="hlx5" @click="hlxOpen()" class="img-hlx5" src="../../assets/images/hlx.png">
      </el-tooltip>
      <el-tooltip content="汇流箱" placement="top">
        <img id="hlx6" @click="hlxOpen()" class="img-hlx6" src="../../assets/images/hlx.png">
      </el-tooltip>
      <el-tooltip content="汇流箱" placement="top">
        <img id="hlx7" @click="hlxOpen()" class="img-hlx7" src="../../assets/images/hlx.png">
      </el-tooltip>
      <el-tooltip content="汇流箱" placement="top">
        <img id="hlx8" @click="hlxOpen()" class="img-hlx8" src="../../assets/images/hlx.png">
      </el-tooltip>
      <el-tooltip content="逆变器" placement="top">
        <img id="nbq1" @click="inverterOpen()" class="img-nbq1" src="../../assets/images/nbq.png">
      </el-tooltip>
      <el-tooltip content="逆变器" placement="top">
        <img id="nbq2" @click="inverterOpen()" class="img-nbq2" src="../../assets/images/nbq.png">
      </el-tooltip>
      <el-tooltip content="逆变器" placement="top">
        <img id="nbq3" @click="inverterOpen()" class="img-nbq3" src="../../assets/images/nbq.png">
      </el-tooltip>
      <el-tooltip content="逆变器" placement="top">
        <img id="nbq4" @click="inverterOpen()" class="img-nbq4" src="../../assets/images/nbq.png">
      </el-tooltip>
      <el-tooltip content="变压器" placement="top">
        <img id="byq1" @click="byqOpen()" class="img-byq1" src="../../assets/images/byq.png">
      </el-tooltip>
      <el-tooltip content="变压器" placement="top">
        <img id="byq2" @click="byqOpen()" class="img-byq2" src="../../assets/images/byq.png">
      </el-tooltip>
         <div class="tg-text">
            <div>今日发电量：400(kWh)</div>
            <div style="margin-top: 8px;">累计发电量：6000(kWh)</div>
           <div style="margin-top: 8px;">实时功率：18(kW)</div>
         </div>
      <div class="yc-text">
        <div>月合格率：88%</div>
        <div style="margin-top: 8px;">均方根误差：0.11</div>
      </div>
        <img class="flag" src="../../assets/images/flag.gif"/>
      <el-tooltip content="塔杆" placement="top">
        <img id="tg" @click="tgOpen()" class="img-tg" src="../../assets/images/tg.png">
      </el-tooltip>
      <!--<el-tooltip content="发电量" placement="left">-->
        <!--<img class="power" @click="power()" src="../../assets/images/power.png"/>-->
      <!--</el-tooltip>-->
      <!--<el-tooltip content="预测评价" placement="left">-->
        <!--<img class="evaluate" @click="evaluate()" src="../../assets/images/evaluate.png"/>-->
      <!--</el-tooltip>-->
    </div>
      <div>
        <!--圆形导航菜单-->
        <quick-menu :menu-count=getCount :icon-class=icons :menu-url-list=list :background-color=backgroundColor :color=color :position=position :is-open-new-tab=getIsOpenNewTab @process=print></quick-menu>
        <!--微气象弹框-->
        <weather @weather="getWeather" v-if="weatherModal" :chartData="chartData_weather" :activeName="'1'"  :show="weatherModal"></weather>
        <!--气象六要素弹框-->
        <!--<weather-six @weatherSix="getWeatherSix" :show="weatherSixModal"></weather-six>-->
        <!--发电预测弹框-->
        <electricity @electricity="getElectricity" :show="electricityModal" :chartData="chartData_electricity" :activeName="'1'"></electricity>
        <!--功率曲线-->
        <div @click="powerOpen()" v-if="!powerModal" class="gl-btn"><i class="el-icon-arrow-up"></i>功率曲线</div>
        <power @power="getPower" :chartData="chartData_power" :show="powerModal"></power>
        <!--气象预测-->
        <div @click="forecastOpen()" v-if="!forecastModal" class="forecast-btn"><i class="el-icon-arrow-up"></i>气象预测</div>
        <forecast @forecast="getForecast" v-if="forecastModal" :chartData1="chartData1" :chartData2="chartData2" :chartData3="chartData3" :chartData4="chartData4" :show="forecastModal"></forecast>
        <!--逆变器-->
        <inverter @inverter="getInverter" :inverters="inverters" :show="inverterModal"></inverter>
        <!--光伏板-->
        <gfb @gfb="getGfb" :show="gfbModal"></gfb>
        <!--汇流箱-->
        <hlx @hlx="getHlx" :show="hlxModal"></hlx>
        <!--变压器-->
        <byq @byq="getByq" :show="byqModal"></byq>
        <!--塔杆-->
        <tg @tg="getTg" :show="tgModal"></tg>
      </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import Chart from '@/components/Charts/lineMarker'
  import weather from './modal/weather/index'
  import weatherSix from './modal/weather/weather'
  import electricity from './modal/electricity/index'
  import power from './modal/power/index'
  import forecast from './modal/forecast/index'
  import inverter from './modal/inverter/index'
  // 设备
  import gfb from './modal/equipment/gfb'
  import hlx from './modal/equipment/hlx'
  import byq from './modal/equipment/byq'
  import tg from './modal/equipment/tg'
  import { topological,weatherlive,radiance,powercurve,generationforecast,weathercurve } from '@/api/dashboard'
  import quickMenu from '@/components/quickMenu/index'

export default {
  name: 'dashboard',
  components: { quickMenu,Chart,weather,weatherSix, electricity,power,forecast,inverter,gfb,hlx,byq,tg },
  data() {
    return {
      x:0,
      y:0,
      weatherModal:false,
      weatherSixModal:false,
      electricityModal:false,
      powerModal:false,
      forecastModal:false,
      inverterModal:false,
      gfbModal:false,
      hlxModal:false,
      byqModal:false,
      tgModal:false,
      activeName: 'first',
      inverters:null,
      chartData_power: {
        backgroundColor: 'transparent',
        title: {
          top: 20,
          text: '功率',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#03d9be'
          },
          left: '1%'
        },
        tooltip: {
          trigger: 'axis',
          // splitLine:{show: false}, // 曲线网格线
          axisPointer: {
            lineStyle: {
              color: '#ccc'
            }
          },
          formatter:function(params)//数据格式
          {
            console.log(params)
            if(params[0]&&params[1]){
              var one=params[0].value
              var two=params[1].value
              var three=(Number(params[0].value)-Number(params[1].value)).toFixed(2)
              let relVal = params[0].name+"<br/>";
              relVal +=' 功率监测: ' + one+"<br/>";
              relVal +=' 功率预测: ' +two+"<br/>";
              relVal +=' 差值: ' +three;
              return relVal;
            }else if(params[0].seriesName=='功率监测'){
              var one=params[0].value
              let relVal = params[0].name+"<br/>";
              relVal += ' 功率监测: ' + one;
              return relVal;
            }else if(params[0].seriesName=='功率预测'){
              var two=params[0].value
              let relVal = params[0].name+"<br/>";
              relVal += ' 功率预测: ' + two;
              return relVal;
            }

            // console.log(params)
          }
        },
        legend: {
          top: 20,
          icon: 'rect',
          itemWidth: 14,
          itemHeight: 5,
          itemGap: 13,
          data: ['功率监测', '功率预测'],
          right: '4%',
          textStyle: {
            fontSize: 12,
            color: '#ccc'
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
              color: '#ccc'
            }
          },
          data: [],
          // splitLine:{show: false} // 曲线网格线
        }],
        yAxis: [{
          type: 'value',
          name: '(kW)',
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
          // splitLine:{show: false} // 曲线网格线
        }],
        series: [{
          name: '功率监测',
          textStyle: {
            color: '#ccc'
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
          data: []        }, {
          name: '功率预测',
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
                color: 'rgba(254,98,112,0.3)'
              }, {
                offset: 0.8,
                color: 'rgba(254,98,112, 0)'
              }], false),
              shadowColor: 'rgba(254,98,112, 0.1)',
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
          data: []        }]
      },
      chartData_forecast: {
        backgroundColor: 'transparent',
        title: {
          top: 20,
          text: '功率',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#03d9be'
          },
          left: '1%'
        },
        tooltip: {
          trigger: 'axis',
          // splitLine:{show: false}, // 曲线网格线
          axisPointer: {
            lineStyle: {
              color: '#ccc'
            }
          },
          formatter:function(params)//数据格式
          {
            console.log(params)
            if(params[0]&&params[1]){
              var one=params[0].value
              var two=params[1].value
              var three=(Number(params[0].value)-Number(params[1].value)).toFixed(2)
              let relVal = params[0].name+"<br/>";
              relVal +=' 功率监测: ' + one+"<br/>";
              relVal +=' 功率预测: ' +two+"<br/>";
              relVal +=' 差值: ' +three;
              return relVal;
            }else if(params[0].seriesName=='功率监测'){
              var one=params[0].value
              let relVal = params[0].name+"<br/>";
              relVal += ' 功率监测: ' + one;
              return relVal;
            }else if(params[0].seriesName=='功率预测'){
              var two=params[0].value
              let relVal = params[0].name+"<br/>";
              relVal += ' 功率预测: ' + two;
              return relVal;
            }

            // console.log(params)
          }
        },
        legend: {
          top: 20,
          icon: 'rect',
          itemWidth: 14,
          itemHeight: 5,
          itemGap: 13,
          data: ['功率监测', '功率预测'],
          right: '4%',
          textStyle: {
            fontSize: 12,
            color: '#ccc'
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
              color: '#ccc'
            }
          },
          data: [],
          // splitLine:{show: false} // 曲线网格线
        }],
        yAxis: [{
          type: 'value',
          name: '(kW)',
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
          // splitLine:{show: false} // 曲线网格线
        }],
        series: [{
          name: '功率监测',
          textStyle: {
            color: '#ccc'
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
          data: []        }, {
          name: '功率预测',
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
                color: 'rgba(254,98,112,0.3)'
              }, {
                offset: 0.8,
                color: 'rgba(254,98,112, 0)'
              }], false),
              shadowColor: 'rgba(254,98,112, 0.1)',
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
          data: []        }]
      },
      chartData_electricity:{
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
        dataZoom: [{
          startValue: '0',
          show:false,
          bottom: 10,
        }, {
          type: 'inside'
        }],
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#ccc'
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
          name: '预报数据',
          textStyle: {
            color: '#ccc'
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
      },
      chartData_weather:{
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
          data:[]
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
          data: []
        }]
      },
      // 天气预报
      chartData1:{
        backgroundColor: 'transparent',
        title: {
          top: 0,
          text: '4小时(W/㎡)',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#03d9be'
          },
          left: '1%'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: '#ccc'
            }
          }
        },
        grid: {
          top: 48,
          left: '3%',
          right: '4%',
          bottom: '2%',
          containLabel: true
        },
        dataZoom: [{
          startValue: '0',
          show:false,
          bottom: 10,
        }, {
          type: 'inside'
        }],
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#ccc'
            }
          },
          data:['05:15','05:30','05:45','06:00','06:15','06:30','06:45','07:00','07:15','07:30','07:45','08:00','08:15','08:30','08:45','09:00']
        }],
        yAxis: [{
          type: 'value',
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
          data: ['0','0','7','24','54','84','116','150','185','222','261','311','373','425','468','511']
        }]
      },
      chartData2:{
        backgroundColor: 'transparent',
        title: {
          top: 0,
          text: '24小时(W/㎡)',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#03d9be'
          },
          left: '1%'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: '#ccc'
            }
          }
        },
        grid: {
          top: 48,
          left: '3%',
          right: '4%',
          bottom: '2%',
          containLabel: true
        },
        dataZoom: [{
          startValue: '0',
          show:false,
          bottom: 10,
        }, {
          type: 'inside'
        }],
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#ccc'
            }
          },
          data:['00:00','00:15','00:30','00:45','01:00','01:15','01:30','01:45','02:00','02:15','02:30','02:45','03:00','03:15','03:30','03:45','04:00','04:15','04:30','04:45','05:00','05:15','05:30','05:45','06:00','06:15','06:30','06:45','07:00','07:15','07:30','07:45','08:00','08:15','08:30','08:45','09:00','09:15','09:30','09:45','10:00','10:15','10:30','10:45','11:00','11:15','11:30','11:45','12:00','12:15','12:30','12:45','13:00','13:15','13:30','13:45','14:00','14:15','14:30','14:45','15:00','15:15','15:30','15:45','16:00','16:15','16:30','16:45','17:00','17:15','17:30','17:45','18:00','18:15','18:30','18:45','19:00','19:15','19:30','19:45','20:00','20:15','20:30','20:45','21:00','21:15','21:30','21:45','22:00','22:15','22:30','22:45','23:00','23:15','23:30','23:45']
        }],
        yAxis: [{
          type: 'value',
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
          data: ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','7','24','54','84','116','150','185','222','261','311','373','425','468','511','554','589','615','640','662','681','697','706','708','712','718','721','722','719','712','702','690','675','657','638','617','594','569','543','515','483','447','410','374','336','297','255','210','172','141','112','84','57','31','13','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']
        }]
      },
      chartData3:{
        backgroundColor: 'transparent',
        title: {
          top: 0,
          text: '72小时(W/㎡)',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#03d9be'
          },
          left: '1%'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: '#ccc'
            }
          }
        },
        grid: {
          top: 48,
          left: '3%',
          right: '4%',
          bottom: '2%',
          containLabel: true
        },
        dataZoom: [{
          startValue: '0',
          show:false,
          bottom: 10,
        }, {
          type: 'inside'
        }],
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#ccc'
            }
          },
          data:['00:00','00:15','00:30','00:45','01:00','01:15','01:30','01:45','02:00','02:15','02:30','02:45','03:00','03:15','03:30','03:45','04:00','04:15','04:30','04:45','05:00','05:15','05:30','05:45','06:00','06:15','06:30','06:45','07:00','07:15','07:30','07:45','08:00','08:15','08:30','08:45','09:00','09:15','09:30','09:45','10:00','10:15','10:30','10:45','11:00','11:15','11:30','11:45','12:00','12:15','12:30','12:45','13:00','13:15','13:30','13:45','14:00','14:15','14:30','14:45','15:00','15:15','15:30','15:45','16:00','16:15','16:30','16:45','17:00','17:15','17:30','17:45','18:00','18:15','18:30','18:45','19:00','19:15','19:30','19:45','20:00','20:15','20:30','20:45','21:00','21:15','21:30','21:45','22:00','22:15','22:30','22:45','23:00','23:15','23:30','23:45','00:00','00:15','00:30','00:45','01:00','01:15','01:30','01:45','02:00','02:15','02:30','02:45','03:00','03:15','03:30','03:45','04:00','04:15','04:30','04:45','05:00','05:15','05:30','05:45','06:00','06:15','06:30','06:45','07:00','07:15','07:30','07:45','08:00','08:15','08:30','08:45','09:00','09:15','09:30','09:45','10:00','10:15','10:30','10:45','11:00','11:15','11:30','11:45','12:00','12:15','12:30','12:45','13:00','13:15','13:30','13:45','14:00','14:15','14:30','14:45','15:00','15:15','15:30','15:45','16:00','16:15','16:30','16:45','17:00','17:15','17:30','17:45','18:00','18:15','18:30','18:45','19:00','19:15','19:30','19:45','20:00','20:15','20:30','20:45','21:00','21:15','21:30','21:45','22:00','22:15','22:30','22:45','23:00','23:15','23:30','23:45','00:00','00:15','00:30','00:45','01:00','01:15','01:30','01:45','02:00','02:15','02:30','02:45','03:00','03:15','03:30','03:45','04:00','04:15','04:30','04:45','05:00','05:15','05:30','05:45','06:00','06:15','06:30','06:45','07:00','07:15','07:30','07:45','08:00','08:15','08:30','08:45','09:00','09:15','09:30','09:45','10:00','10:15','10:30','10:45','11:00','11:15','11:30','11:45','12:00','12:15','12:30','12:45','13:00','13:15','13:30','13:45','14:00','14:15','14:30','14:45','15:00','15:15','15:30','15:45','16:00','16:15','16:30','16:45','17:00','17:15','17:30','17:45','18:00','18:15','18:30','18:45','19:00','19:15','19:30','19:45','20:00','20:15','20:30','20:45','21:00','21:15','21:30','21:45','22:00','22:15','22:30','22:45','23:00','23:15','23:30','23:45']
        }],
        yAxis: [{
          type: 'value',
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
          data: ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','7','24','54','84','116','150','185','222','261','311','373','425','468','511','554','589','615','640','662','681','697','706','708','712','718','721','722','719','712','702','690','675','657','638','617','594','569','543','515','483','447','410','374','336','297','255','210','172','141','112','84','57','31','13','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','3','9','21','35','51','70','90','101','101','201','231','261','292','335','390','435','469','503','536','565','591','614','632','648','662','680','701','714','718','719','718','711','698','679','654','628','599','563','520','482','450','416','382','349','316','283','251','218','184','150','116','81','47','22','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','34','73','112','152','191','230','269','309','351','395','439','482','535','597','650','693','734','773','809','839','865','885','903','917','931','945','952','953','950','944','932','914','891','863','832','799','758','711','667','626','583','538','494','448','403','357','310','262','213','164','116','67','32','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']
        }]
      },
      chartData4:{
        backgroundColor: 'transparent',
        title: {
          top: 0,
          text: '7天(W/㎡)',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#03d9be'
          },
          left: '1%'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: '#ccc'
            }
          }
        },
        grid: {
          top: 48,
          left: '3%',
          right: '4%',
          bottom: '2%',
          containLabel: true
        },
        dataZoom: [{
          startValue: '0',
          show:false,
          bottom: 10,
        }, {
          type: 'inside'
        }],
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#ccc'
            }
          },
          data:['00:00','00:15','00:30','00:45','01:00','01:15','01:30','01:45','02:00','02:15','02:30','02:45','03:00','03:15','03:30','03:45','04:00','04:15','04:30','04:45','05:00','05:15','05:30','05:45','06:00','06:15','06:30','06:45','07:00','07:15','07:30','07:45','08:00','08:15','08:30','08:45','09:00','09:15','09:30','09:45','10:00','10:15','10:30','10:45','11:00','11:15','11:30','11:45','12:00','12:15','12:30','12:45','13:00','13:15','13:30','13:45','14:00','14:15','14:30','14:45','15:00','15:15','15:30','15:45','16:00','16:15','16:30','16:45','17:00','17:15','17:30','17:45','18:00','18:15','18:30','18:45','19:00','19:15','19:30','19:45','20:00','20:15','20:30','20:45','21:00','21:15','21:30','21:45','22:00','22:15','22:30','22:45','23:00','23:15','23:30','23:45','00:00','00:15','00:30','00:45','01:00','01:15','01:30','01:45','02:00','02:15','02:30','02:45','03:00','03:15','03:30','03:45','04:00','04:15','04:30','04:45','05:00','05:15','05:30','05:45','06:00','06:15','06:30','06:45','07:00','07:15','07:30','07:45','08:00','08:15','08:30','08:45','09:00','09:15','09:30','09:45','10:00','10:15','10:30','10:45','11:00','11:15','11:30','11:45','12:00','12:15','12:30','12:45','13:00','13:15','13:30','13:45','14:00','14:15','14:30','14:45','15:00','15:15','15:30','15:45','16:00','16:15','16:30','16:45','17:00','17:15','17:30','17:45','18:00','18:15','18:30','18:45','19:00','19:15','19:30','19:45','20:00','20:15','20:30','20:45','21:00','21:15','21:30','21:45','22:00','22:15','22:30','22:45','23:00','23:15','23:30','23:45','00:00','00:15','00:30','00:45','01:00','01:15','01:30','01:45','02:00','02:15','02:30','02:45','03:00','03:15','03:30','03:45','04:00','04:15','04:30','04:45','05:00','05:15','05:30','05:45','06:00','06:15','06:30','06:45','07:00','07:15','07:30','07:45','08:00','08:15','08:30','08:45','09:00','09:15','09:30','09:45','10:00','10:15','10:30','10:45','11:00','11:15','11:30','11:45','12:00','12:15','12:30','12:45','13:00','13:15','13:30','13:45','14:00','14:15','14:30','14:45','15:00','15:15','15:30','15:45','16:00','16:15','16:30','16:45','17:00','17:15','17:30','17:45','18:00','18:15','18:30','18:45','19:00','19:15','19:30','19:45','20:00','20:15','20:30','20:45','21:00','21:15','21:30','21:45','22:00','22:15','22:30','22:45','23:00','23:15','23:30','23:45','00:00','00:15','00:30','00:45','01:00','01:15','01:30','01:45','02:00','02:15','02:30','02:45','03:00','03:15','03:30','03:45','04:00','04:15','04:30','04:45','05:00','05:15','05:30','05:45','06:00','06:15','06:30','06:45','07:00','07:15','07:30','07:45','08:00','08:15','08:30','08:45','09:00','09:15','09:30','09:45','10:00','10:15','10:30','10:45','11:00','11:15','11:30','11:45','12:00','12:15','12:30','12:45','13:00','13:15','13:30','13:45','14:00','14:15','14:30','14:45','15:00','15:15','15:30','15:45','16:00','16:15','16:30','16:45','17:00','17:15','17:30','17:45','18:00','18:15','18:30','18:45','19:00','19:15','19:30','19:45','20:00','20:15','20:30','20:45','21:00','21:15','21:30','21:45','22:00','22:15','22:30','22:45','23:00','23:15','23:30','23:45','00:00','50:01','00:30','00:45','01:00','01:15','01:30','01:45','02:00','02:15','02:30','02:45','03:00','03:15','03:30','03:45','04:00','04:15','04:30','04:45','05:00','05:15','05:30','05:45','06:00','06:15','06:30','06:45','07:00','07:15','07:30','07:45','08:00','08:15','08:30','08:45','09:00','09:15','09:30','09:45','10:00','10:15','10:30','10:45','11:00','11:15','11:30','11:45','12:00','12:15','12:30','12:45','13:00','13:15','13:30','13:45','14:00','14:15','14:30','14:45','15:00','15:15','15:30','15:45','16:00','16:15','16:30','16:45','17:00','17:15','17:30','17:45','18:00','18:15','18:30','18:45','19:00','19:15','19:30','19:45','20:00','20:15','20:30','20:45','21:00','21:15','21:30','21:45','22:00','22:15','22:30','22:45','23:00','23:15','23:30','23:45','00:00','00:15','00:30','00:45','01:00','01:15','01:30','01:45','02:00','02:15','02:30','02:45','03:00','03:15','03:30','03:45','04:00','04:15','04:30','04:45','05:00','05:15','05:30','05:45','06:00','06:15','06:30','06:45','07:00','07:15','07:30','07:45','08:00','08:15','08:30','08:45','09:00','09:15','09:30','09:45','10:00','10:15','10:30','10:45','11:00','11:15','11:30','11:45','12:00','12:15','12:30','12:45','13:00','13:15','13:30','13:45','14:00','14:15','14:30','14:45','15:00','15:15','15:30','15:45','16:00','16:15','16:30','16:45','17:00','17:15','17:30','17:45','18:00','18:15','18:30','18:45','19:00','19:15','19:30','19:45','20:00','20:15','20:30','20:45','21:00','21:15','21:30','21:45','22:00','22:15','22:30','22:45','23:00','23:15','23:30','23:45','00:00','00:15','00:30','00:45','01:00','01:15','01:30','01:45','02:00','02:15','02:30','02:45','03:00','03:15','03:30','03:45','04:00','04:15','04:30','04:45','05:00','05:15','05:30','05:45','06:00','06:15','06:30','06:45','07:00','07:15','07:30','07:45','08:00','08:15','08:30','08:45','09:00','09:15','09:30','09:45','10:00','10:15','10:30','10:45','11:00','11:15','11:30','11:45','12:00','12:15','12:30','12:45','13:00','13:15','13:30','13:45','14:00','14:15','14:30','14:45','15:00','15:15','15:30','15:45','16:00','16:15','16:30','16:45','17:00','17:15','17:30','17:45','18:00','18:15','18:30','18:45','19:00','19:15','19:30','19:45','20:00','20:15','20:30','20:45','21:00','21:15','21:30','21:45','22:00','22:15','22:30','22:45','23:00','23:15','23:30','23:45']
        }],
        yAxis: [{
          type: 'value',
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
          data: ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','7','24','54','84','116','150','185','222','261','311','373','425','468','511','554','589','615','640','662','681','697','706','708','712','718','721','722','719','712','702','690','675','657','638','617','594','569','543','515','483','447','410','374','336','297','255','210','172','141','112','84','57','31','13','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','3','9','21','35','51','70','90','101','101','201','231','261','292','335','390','435','469','503','536','565','591','614','632','648','662','680','701','714','718','719','718','711','698','679','654','628','599','563','520','482','450','416','382','349','316','283','251','218','184','150','116','81','47','22','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','34','73','112','152','191','230','269','309','351','395','439','482','535','597','650','693','734','773','809','839','865','885','903','917','931','945','952','953','950','944','932','914','891','863','832','799','758','711','667','626','583','538','494','448','403','357','310','262','213','164','116','67','32','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','34','73','112','152','191','230','269','309','351','395','439','482','535','597','650','693','734','773','809','839','865','885','903','917','931','945','952','953','950','944','932','914','891','863','832','799','758','711','667','626','583','538','494','448','403','357','310','262','213','164','116','67','32','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','34','73','112','152','191','230','269','309','351','395','439','482','535','597','650','693','734','773','809','839','865','885','903','917','931','945','952','953','950','944','932','914','891','863','832','799','758','711','667','626','583','538','494','448','403','357','310','262','213','164','116','67','32','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','34','73','112','152','191','230','269','309','351','395','439','482','535','597','650','693','734','773','809','839','865','885','903','917','931','945','952','953','950','944','932','914','891','863','832','799','758','711','667','626','583','538','494','448','403','357','310','262','213','164','116','67','32','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','34','73','112','152','191','230','269','309','351','395','439','482','535','597','650','693','734','773','809','839','865','885','903','917','931','945','952','953','950','944','932','914','891','863','832','799','758','711','667','626','583','538','494','448','403','357','310','262','213','164','116','67','32','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']
      }]
      },

      // 导航菜单 配置
      count:4,
      icons:["icon-sun","icon-power","icon-loop","icon-checkbox-unchecked"],
      list:[{'isLink':false},{'isLink':false},{'isLink':false},{'isLink':false}],
      backgroundColor:'#00ae98',
      color:'#ffffff',
      position:'bottom-left',
      isOpenNewTab:false
    }
  },
  computed:{
    getCount(){
      return Number(this.count)
    },
    getIsOpenNewTab(){
      return Boolean(this.isOpenNewTab)
    }
  },
  methods: {
    // 菜单触发事件回调
    print(key){
      if(key=='0'){
        this.weatherOpen()
      }
      else if(key=='1'){
        this.electricityOpen()
      }
      else if(key=='2'){
        this.inverterOpen()
      }
      else if(key=='3'){
        this.closeAll()
      }
    },
    // 点击打开天气弹框
    weatherOpen(){
      // this.weatherSixModal=true
      this.weatherModal=true
    },
    getWeather(key){
      this.weatherModal=key
    },
    getWeatherSix(key){
      // this.weatherSixModal=key
    },
    // 点击打开发电预测弹框
    electricityOpen(){
      this.electricityModal=true
    },
    getElectricity(key){
      this.electricityModal=key
    },
    // 功率曲线
    powerOpen(){
      this.weatherModal=false
      // this.weatherSixModal=false
      this.electricityModal=false
      this.inverterModal=false
      this.gfbModal=false
      this.hlxModal=false
      this.byqModal=false
      this.tgModal=false

      this.powerModal=true
    },
    getPower(key){
      this.powerModal=key
    },
    // 气象预测
    forecastOpen(){
      // const loading = this.$loading({
      //   lock: true,
      //   text: 'Loading',
      //   spinner: 'el-icon-loading',
      //   background: 'rgba(0, 0, 0, 0.7)'
      // });
      this.weatherModal=false
      // this.weatherSixModal=false
      this.electricityModal=false
      this.inverterModal=false
      this.gfbModal=false
      this.hlxModal=false
      this.byqModal=false
      this.tgModal=false

      this.forecastModal=true
      // setTimeout(() => {
      //   loading.close();
      // }, 5000);
    },
    getForecast(key){
      this.forecastModal=key
    },
    // 逆变器
    inverterOpen(){
      this.inverterModal=true
      this.inverters=[
        {
          id:'1',
          state:'已开启',
          is:'1'
        },
        {
          id:'2',
          state:'已关闭',
          is:'0'
        },
        {
          id:'3',
          state:'已开启',
          is:'1'
        },
        {
          id:'4',
          state:'已开启',
          is:'1'
        }
      ]
    },
    getInverter(key){
      this.inverterModal=key
    },
    // 光伏板
    gfbOpen(){
      this.gfbModal=true
    },
    getGfb(key){
      this.gfbModal=key
    },
    // 光伏板
    hlxOpen(){
      this.hlxModal=true
    },
    getHlx(key){
      this.hlxModal=key
    },
    // 变压器
    byqOpen(){
      this.byqModal=true
    },
    getByq(key){
      this.byqModal=key
    },
    // 塔杆
    tgOpen(){
      this.tgModal=true
    },
    getTg(key){
      this.tgModal=key
    },
    // 关闭所有
    closeAll(){
      this.weatherModal=false
      // this.weatherSixModal=false
      this.electricityModal=false
      this.inverterModal=false
      this.gfbModal=false
      this.hlxModal=false
      this.byqModal=false
      this.tgModal=false
      this.powerModal=false
    },
    // 发电量
    power(){
      this.$alert('今日发电量：400(kWh)<br>累计发电量：800(kWh)', '发电量', {
        dangerouslyUseHTMLString: true
      });
    },
    // 预测评价
    evaluate(){
      this.$alert('月合格率：80%<br>均方根误差：3', '预测评价', {
        dangerouslyUseHTMLString: true
      });
    }
  },
  mounted(){
    document.getElementById("equipment").style.cursor="pointer"
    topological().then(res =>{
      //this.yesterdaySum=res.body.yesterdaySum
      //this.todaySum=res.body.todaySum
    })
    weatherlive().then(res =>{
      this.mstation=res.body.mstation
      this.mnumber=res.body.mnumber
      this.mdate=res.body.mdate
      this.globalradiation=res.body.globalradiation
      this.directadiation=res.body.directadiation
      this.scatteredradiation=res.body.scatteredradiation
      this.componenttemperature=res.body.componenttemperature
      this.airtemperature=res.body.airtemperature
      this.relativehumidity=res.body.relativehumidity
      this.airpressure=res.body.airpressure
      this.windspeed=res.body.windspeed
      this.winddirection=res.body.winddirection
      this.companycode=res.body.companycode
    })
    radiance().then(res =>{
      // this.chartData1.xAxis[0].data=res.body.forecastTime
      // this.chartData1.series[0].data=res.body.realTimeData
      // this.chartData1.series[1].data=res.body.forecastData
      // this.$refs.chart.initChart(this.chartData1)
    })
    powercurve().then(res =>{
      this.chartData_power.xAxis[0].data=res.body.forecastTime
      this.chartData_power.series[0].data=res.body.realTimeData
      this.chartData_power.series[1].data=res.body.forecastData
      // this.$refs.chart1.initChart(this.chartData2)
    })
    // 功率预测初始化
    generationforecast().then( res =>{
      this.chartData_electricity.xAxis[0].data=res.body.time4h
      this.chartData_electricity.series[0].data=res.body.power4h
    })
    // 微气象初始化
    weathercurve('1').then(res =>{
      this.chartData_weather.xAxis[0].data=res.body.realTimeDate
      this.chartData_weather.series[0].data=res.body.realTimeDataOne
    })
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .dashboard-main{
    margin: 0px 0px;
    padding: 20px;
    min-height: 750px;
    background-image: url("../../assets/images/bj2.jpg");
    background-size: 1920px 1200px;
    position: fixed;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
  }
  .img-demo{
    position: fixed;
    top: 300px;
    left: 200px;
  }
  @media (max-width: 1600px){
    .yun{
      position: absolute;
      width: 100%;
      height: 292px;
      top: 0;
      left: 0;
      background: url("../../assets/images/yun.png") repeat-x 0px 0px;
      background-size: cover;
      animation: move 800s linear infinite;
    }
    @keyframes move {
      0%{
        background-position: 3000% 0;
      }
      100%{
        background-position: -3000% 0;
      }
    }
  }
  @media screen and (min-width:1600px){
    .yun{
      position: absolute;
      width: 100%;
      height: 292px;
      top: 0;
      left: 0;
      background: url("../../assets/images/yun.png") repeat-x 0px 0px;
      background-size: cover;
      animation: move 180s linear infinite;
    }
    @keyframes move {
      0%{
        background-position: 3000% 0;
      }
      100%{
        background-position: -3000% 0;
      }
    }
  }
  .yunMove1{
    position: absolute;
    left: 0px;
    animation: move1 60s linear infinite;
  }
  @keyframes move1 {
    0%{
     left: 0;
    }
    100%{
      left: 3000%;
    }
  }
  .yunMove2{
    position: absolute;
    width: 1600px;
    left: 0px;
    animation: move2 6s linear infinite;
  }
  @keyframes move2 {
    0%{
      opacity: 0.2;
    }
    50%{
      opacity: 1;
    }
    100%{
      opacity: 0.2;
    }
  }
  .yunMove3{
    position: absolute;
    left: 0px;
    animation: move3 6s linear infinite;
  }
  @keyframes move3 {
    0%{
      opacity: 1;
      top: 0;
    }
    100%{
      opacity: 0.5;
      top: -60px;
    }
  }
  .gl-btn{
    font-size: 18px;
    width: 110px;
    height: 31px;
    line-height: 30px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    background-color: rgba(0, 0, 0, 0.2);
    color: #fff;
    text-align: center;
    border-radius: 5px 5px 0 0;
    float: right;
    margin-right: 32px;
    position: fixed;
    right: 35px;
    bottom: 0px;
  }
  .gl-btn:hover{
    color:#03d9be;
    /*border: 1px solid #00796A;*/
    cursor: pointer;
  }
  .forecast-btn{
    font-size: 18px;
    width: 110px;
    height: 31px;
    line-height: 30px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    background-color: rgba(0, 0, 0, 0.2);
    color: #fff;
    text-align: center;
    border-radius: 5px 5px 0 0;
    float: right;
    margin-right: 32px;
    position: fixed;
    right: 175px;
    bottom: 0px;
  }
  .forecast-btn:hover{
    color:#03d9be;
    /*border: 1px solid #00796A;*/
    cursor: pointer;
  }

  /*设备样式*/
  .equipment{
    position: absolute;
    top: -80px;
  }
  .img-qx{
    position: absolute;
    top: 487px;
    left: 631px;
    width: 35px;
    height: 60px;
  }
  .img-house{
    position: absolute;
    width: 127px;
    height: 124px;
    top: 425px;
    left: 696px;
  }
  .img-gfb1{
    position: absolute;
    top: 893px;
    left: 40px;
    width: 1224px;
  }
  .img-gfb2{
    position: absolute;
    top: 800px;
    left: 204px;
    width: 1010px;
  }
  .img-gfb3 {
      position: absolute;
      top: 730px;
      left: 304px;
      width: 875px;
      height: 60px;
    }
  .img-gfb4 {
    position: absolute;
    top: 683px;
    left: 398px;
    width: 753px;
    height: 45px;
  }
  .img-gfb5 {
    position: absolute;
    top: 643px;
    left: 469px;
    width: 658px;
    height: 37px;
  }
  .img-gfb6 {
    position: absolute;
    top: 613px;
    left:511px;
    width: 600px;
    height: 30px;
  }
  .img-gfb7 {
    position: absolute;
    top: 587px;
    left:554px;
    width: 545px;
    height: 25px;
  }
  .img-gfb8 {
    position: absolute;
    top: 565px;
    left:588px;
    width: 500px;
    height: 22px;
  }
  .img-hlx1{
    position: absolute;
    top: 910px;
    left:1254px;
    width: 40px;
  }
  .img-hlx2{
    position: absolute;
    top: 810px;
    left:1206px;
    width: 34px;
  }
  .img-hlx3{
    position: absolute;
    top: 739px;
    left:1172px;
    width: 27px;
  }
  .img-hlx4{
    position: absolute;
    top: 686px;
    left:1147px;
    width: 24px;
  }
  .img-hlx5{
    position: absolute;
    top: 644px;
    left:1127px;
    width: 20px;
  }
  .img-hlx6{
    position: absolute;
    top: 612px;
    left:1111px;
    width: 18px;
  }
  .img-hlx7{
    position: absolute;
    top: 588px;
    left:1099px;
    width: 16px;
  }
  .img-hlx8{
    position: absolute;
    top: 566px;
    left:1087px;
    width: 14px;
  }
  .img-nbq1{
    position: absolute;
    top: 793px;
    left:1481px;
    width: 102px;
  }
  .img-nbq2{
    position: absolute;
    top: 666px;
    left:1345px;
    width: 70px;
  }
  .img-nbq3{
    position: absolute;
    top: 600px;
    left:1273px;
    width: 50px;
  }
  .img-nbq4{
    position: absolute;
    top: 547px;
    left:1215px;
    width: 43px;
  }
  .img-byq1{
    position: absolute;
    top: 691px;
    left:1562px;
    width: 180px;
  }
  .img-byq2{
    position: absolute;
    top: 552px;
    left:1341px;
    width: 100px;
  }
  .img-tg{
    position: absolute;
    top: 425px;
    left:1518px;
    width: 393px;
  }
  .img-line{
    position: absolute;
    top: 564px;
    left:1083px;
    width: 801px;
    height: 389px;
  }
  .tg-text{
    position: relative;
    top: 268px;
    font-size: 18px;
    color: #fff;
    padding: 20px;
    left: 1638px;
    /*height: 60px;*/
    background: rgba(0,0,0,0.3);
    border-radius: 8px;
  }
  .yc-text{
    position: relative;
    top: 53px;
    font-size: 18px;
    color: #fff;
    padding: 20px;
    left: 1638px;
    /* height: 60px; */
    background: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
  }
  .flag{
    position: absolute;
    top: 396px;
    left: 1716px;
    /* transform: rotate(180deg); */
  }
  .power{
    position: fixed;
    top: 104px;
    left: 1800px;
    width: 60px;
  }
  .evaluate{
    position: fixed;
    top: 204px;
    left: 1800px;
    width: 60px;
  }
</style>
