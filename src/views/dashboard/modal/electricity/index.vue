<template>
  <transition name="electricity">
    <div class="electricity-modal-main" v-if="show">
      <div class="container-modal">
        <div class="electricity-header"  @mouseover="move()">
          <div class="title">发电预测</div>
          <i class="btn-modal el-icon-close" @click="closeModel()" ></i>
        </div>
        <div class="body">
          <el-tabs class="tab" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="4小时" name="1"></el-tab-pane>
            <el-tab-pane label="24小时" name="2"></el-tab-pane>
            <el-tab-pane label="72小时" name="3"></el-tab-pane>
            <el-tab-pane label="7天" name="4"></el-tab-pane>
          </el-tabs>
          <el-button class="modify-btn" @click="dialogVisible = true" type="text">预测修正</el-button>
          <el-button class="out-btn" type="text">导出报文</el-button>
          <chart :id="2" ref="chart" height='86%' width='100%' :chartData="chartData"></chart>
        </div>
      </div>
      <el-dialog
        title="预测修正"
        :visible.sync="dialogVisible"
        width="30%" :modal-append-to-body="false">
        <el-row>
          <el-col :span="6">时间区间：</el-col>
          <el-col :span="6">
            <el-date-picker
              v-model="date"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </el-col>
        </el-row>
        <el-row style="margin-top: 8px">
          <el-col :span="6">修正值：</el-col>
          <el-col :span="6">
            <el-input></el-input>
          </el-col>
        </el-row>
        <span slot="footer" class="dialog-footer">
           <el-button @click="dialogVisible = false">取 消</el-button>
           <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </transition>
</template>

<script>
  import Chart from '@/components/Charts/lineMarker'
  import { topological,weatherlive,radiance,powercurve,generationforecast } from '@/api/dashboard'
  export default {
    name: "electricity",
    components: { Chart },
    props: {
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
      // activeName:{
      //   type: String,
      //   default: '1'
      // },
      chartData: {
        type: Object
      }
    },
    data(){
      return{
        activeName:'1',
        dialogVisible:false,
        date:null
      }
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      closeModel: function () {
        this.$emit('electricity', false)
      },
      move:function () {
        let x=0
        let y=0;
        let px=0;
        let py=0;
        let onDrag = false;
        // 鼠标按下
        $(".electricity-header").mousedown (
          function (e) {
            x = e.clientX;
            y = e.clientY;

            px = $(".electricity-modal-main").offset().left;
            py = $(".electricity-modal-main").offset().top;

            onDrag = true;

            // 鼠标移动
            $(document).mousemove (
              function (e) {
                if (onDrag) {
                  let nx = e.clientX + px - x;
                  let ny = e.clientY + py - y;

                  $(".electricity-modal-main").css("left",nx+'px')
                  $(".electricity-modal-main").css("top",ny+'px')
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
        generationforecast().then( res =>{
          if(key=='1'){
            this.chartData.xAxis[0].data=res.body.time4h
            this.chartData.series[0].data=res.body.power4h
          }

          else if(key=='2'){
            this.chartData.xAxis[0].data=res.body.time24h
            this.chartData.series[0].data=res.body.power24h
          }

          else if(key=='3'){
            this.chartData.xAxis[0].data=res.body.time72h
            //   .map(function (str) {
            //   return str.replace(' ', '\n')
            // })
            this.chartData.series[0].data=res.body.power72h
          }

          else if(key=='4'){
            this.chartData.xAxis[0].data=res.body.time7d
            //   .map(function (str) {
            //   return str.replace(' ', '\n')
            // })
            this.chartData.series[0].data=res.body.power7d
          }


          this.$refs.chart.initChart(this.chartData1)
        })
      },
      handleClick(tab, event) {
        this.search(tab.name)
      }
    }
  }
</script>

<style scoped>
  .electricity-modal-main{
    height: 380px;
    width: 68%;
    z-index: 60;
    position: fixed;
    top: 500px;
    bottom: 0;
    left: 30%;
    right: 0;
    /*right: 0px;*/
    /*bottom: -16px;*/
  }
  .container{
    z-index: 20;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    -webkit-box-shadow: rgba(0, 0, 0, 0.8) 0px 2px 1px 0px;
    box-shadow: rgba(0, 0, 0, 0.8) 0px 2px 1px 0px;
    border-radius: 8px;
    display: inline-block;
    text-align: left;
    overflow: hidden;
    backface-visibility: hidden;
  }
  .electricity-header{
    cursor:move;
    position: relative;
    padding: 15px;
    padding-bottom: 10px;
  }
  .body{
    width: 100%;
    height: 83%;
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
  .electricity-enter-active {
    transition: all .3s ease;
  }
  .electricity-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .electricity-enter, .electricity-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateY(-100px);
    opacity: 0;
  }
  .out-btn{
    position: absolute;
    top: 0;
    right: 14px;
  }
  .modify-btn{
    position: absolute;
    top: 0;
    right: 90px;
  }
</style>
