<template>
  <transition name="inverter">
    <div class="inverter-modal-main" v-if="show">
      <div class="container-modal">
        <div class="inverter-header" @mouseover="move()">
          <div class="title">逆变器</div>
          <i class="btn-modal el-icon-close" @click="closeModel()" ></i>
        </div>
        <div class="body">
          <el-row>
            <el-col :span="12">今日发电量（200kWh）</el-col>
            <el-col :span="12">累计发电量（800kWh）</el-col>
          </el-row>
          <el-row>
            <el-col :span="12">实时功率合计（16kW）</el-col>
            <el-col :span="12"></el-col>
          </el-row>
         <!--<el-row>-->
           <!--<el-col :span="8">逆变器个数（4个）</el-col>-->
           <!--<el-col :span="8">逆变器容量（4kw）</el-col>-->
           <!--<el-col :span="8">逆变器型号（BEPW4000）</el-col>-->
         <!--</el-row>-->
          <!--<el-row>-->
            <!--<el-col :span="8">逆变效率（98%）</el-col>-->
            <!--<el-col :span="8">实时功率（4kw）</el-col>-->
            <!--<el-col :span="8">今日发电量（200kwh）</el-col>-->
          <!--</el-row>-->
          <!--<el-row>-->
            <!--<el-col :span="8">累计发电量（800kwh）</el-col>-->
          <!--</el-row>-->
          <div class="list">
            <el-row style="width: 123%;">
              <el-col class="item" :span="6" v-for="item in inverters" :key="item.id">
                <img class="img" v-show="item.is=='1'"  src="../../../../assets/images/nbq1.png">
                <img class="img" v-show="item.is=='0'"  src="../../../../assets/images/nbq-close.png">
                <el-button v-show="item.is=='1'" @click="chooseItem(item)" style="position: absolute;margin: 12px 33px;" size="mini" type="danger">关闭</el-button>
                <el-button v-show="item.is=='0'" @click="chooseItem(item)" style="position: absolute;margin: 12px 33px;" size="mini" type="success">开启</el-button>
                <div>状态：<span :class="item.is=='1'?'text-green':'text-red'">{{item.state}}</span></div>
                <div>逆变器容量：<span>2kW</span></div>
                <div>逆变器型号：<span>BEPW4000</span></div>
                <div>逆变效率：<span>98%</span></div>
                <div>实时功率：<span>4kW</span></div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import Chart from '@/components/Charts/lineMarker'
  export default {
    name: "inverter",
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
      inverters: {
        type: Array
      }
    },
    computed: {
    },
    data() {
      return {
        // show: false,   // 是否显示模态框
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
        this.$emit('inverter', false)
      },
      move:function () {
        let x=0
        let y=0;
        let px=0;
        let py=0;
        let onDrag = false;
        // 鼠标按下
        $(".inverter-header").mousedown (
          function (e) {
            x = e.clientX;
            y = e.clientY;

            px = $(".inverter-modal-main").offset().left;
            py = $(".inverter-modal-main").offset().top;

            onDrag = true;

            // 鼠标移动
            $(document).mousemove (
              function (e) {
                if (onDrag) {
                  let nx = e.clientX + px - x;
                  let ny = e.clientY + py - y;

                  $(".inverter-modal-main").css("left",nx+'px')
                  $(".inverter-modal-main").css("top",ny+'px')
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
      chooseItem(item){
        var text='当前逆变器为开启状态，是否关闭?'
        if(item.is=='0'){
          text='当前逆变器为关闭状态，是否开启?'
        }
        this.$confirm(text, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          if(item.is=='1'){
            item.is=!item.is
            item.state='已关闭'
          }else {
            item.is=!item.is
            item.state='已开启'
          }
          this.$message({
            type: 'success',
            message: '成功!'
          });
        }).catch(() => {
          // this.$message({
          //   type: 'info',
          //   message: '已取消'
          // });
        });
      }
    }
  }
</script>

<style scoped>
  .background{
    z-index: 1000;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: .5;
    background: #000;
  }
  .inverter-modal-main{
    height: 380px;
    width: 600px;
    z-index: 1100;
    position: fixed;
    top: 80px;
    bottom: 0;
    left: 67%;
    right: 0;
  }
  .container{
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px 0px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px 0px;
    border-radius: 8px;
    display: inline-block;
    text-align: left;
    overflow: hidden;
    backface-visibility: hidden;
  }
  .inverter-header{
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
    color: #ccc;
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
  .list{
    /*text-align: center;*/
  }
  .item{
    margin-top: 8px;
    border: 1px solid #ccc;
    margin-left: 10px;
    font-size: 12px;
  }
  .text-green{
    color: #85ce61;
  }
  .text-red{
    color: #f56c6c;
  }
  .img{
    margin-left: 8px;
  }
  .inverter-enter-active {
    transition: all .3s ease;
  }
  .inverter-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .inverter-enter, .inverter-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateY(-100px);
    opacity: 0;
  }
</style>
