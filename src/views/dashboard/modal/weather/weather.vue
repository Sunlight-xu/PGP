<template>
  <transition name="weather">
    <div class="weatherSix-modal-main" v-if="show">
      <div class="container-modal">
        <div class="weatherSix-header">
          <div class="title">当前天气</div>
          <i class="btn-modal el-icon-close" @click="closeModel()" ></i>
        </div>
        <div class="body">
         <el-row>
           <el-col :span="12"><img src="../../../../assets/images/fzd.png"><span class="icon-right">辐照度（200w/㎡）</span></el-col>
           <el-col :span="12"><img src="../../../../assets/images/wd.png"><span class="icon-right">气温（32℃）</span></el-col>
         </el-row>
          <el-row>
            <el-col :span="12"><img src="../../../../assets/images/fc.png"><span class="icon-right">风速风向（5m/s   西北）</span></el-col>
            <el-col :span="12"><img src="../../../../assets/images/sd.png"><span class="icon-right">相对湿度（10%）</span></el-col>
          </el-row>
          <el-row>
            <el-col :span="12"><img src="../../../../assets/images/yl.png"><span class="icon-right">降雨量（32mm）</span></el-col>
            <el-col :span="12"><img src="../../../../assets/images/qy.png"><span class="icon-right">气压（900hpa）</span></el-col>
          </el-row>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "weather-six",
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
      chartData: {
        type: Object
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
        this.$emit('weatherSix', false)
      },
      move:function () {
        let x=0
        let y=0;
        let px=0;
        let py=0;
        let onDrag = false;
        // 鼠标按下
        $(".weatherSix-header").mousedown (
          function (e) {
            x = e.clientX;
            y = e.clientY;

            px = $(".weatherSix-modal-main").offset().left;
            py = $(".weatherSix-modal-main").offset().top;

            onDrag = true;

            // 鼠标移动
            $(document).mousemove (
              function (e) {
                if (onDrag) {
                  let nx = e.clientX + px - x;
                  let ny = e.clientY + py - y;

                  $(".weatherSix-modal-main").css("left",nx+'px')
                  $(".weatherSix-modal-main").css("top",ny+'px')
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
      }
    }
  }
</script>

<style scoped>
  .weatherSix-modal-main{
    height: 160px;
    width: 420px;
    z-index: 5;
    position: fixed;
    top: 80px;
    bottom: 0;
    left: 30px;
    right: 0;
  }
  .container{
    z-index: 5;
    height: 100%;
    width: 100%;
    /*background-color: rgba(0, 0, 0, 0.2);*/
    /*-webkit-box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px 0px;*/
    /*box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px 0px;*/
    border-radius: 8px;
    display: inline-block;
    text-align: left;
    overflow: hidden;
    backface-visibility: hidden;
  }
  .weatherSix-header{
    /*cursor:move;*/
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
    margin-left: 18px;
    top:-15px
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
    transition: all .2s ease;
  }
  .weather-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .weather-enter, .weather-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(-10px);
    opacity: 0;
  }
  .icon-right{
    position: absolute;
    margin-top: 9px;
  }
</style>
