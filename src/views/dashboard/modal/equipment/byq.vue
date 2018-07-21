<template>
  <transition name="byq">
    <div class="byq-modal-main" v-if="show">
      <div class="container-modal">
        <div class="byq-header">
          <div class="title">变压器</div>
          <i class="btn-modal el-icon-close" @click="closeModel()" ></i>
        </div>
        <div class="body">
          <div>变压器个数<span>（2个）</span></div>
          <div class="text-top">变压器容量<span>（1000kW）</span></div>
          <div class="text-top">变压器型号<span>（SFSZ9-31500/110）</span></div>
          <div class="text-top">相数<span>（单相）</span></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "byq",
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
      data: {
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
        this.$emit('byq', false)
      },
      move:function () {
        let x=0
        let y=0;
        let px=0;
        let py=0;
        let onDrag = false;
        // 鼠标按下
        $(".byq-header").mousedown (
          function (e) {
            x = e.clientX;
            y = e.clientY;

            px = $(".byq-modal-main").offset().left;
            py = $(".byq-modal-main").offset().top;

            onDrag = true;

            // 鼠标移动
            $(document).mousemove (
              function (e) {
                if (onDrag) {
                  let nx = e.clientX + px - x;
                  let ny = e.clientY + py - y;

                  $(".byq-modal-main").css("left",nx+'px')
                  $(".byq-modal-main").css("top",ny+'px')
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
  .byq-modal-main{
    height: 166px;
    width: 420px;
    z-index: 5;
    position: fixed;
    top: 529px;
    bottom: 0;
     left: 30px;
    /*right: 35px;*/
  }
  .container{
    z-index: 5;
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
  .byq-header{
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
    font-size: 15px;
    margin-left: 18px;
    color: #ccc;
    top: -8px;
  }
  .title{
    padding-left: 0;
    margin-bottom: 0;
    font-size: 18px;
    line-height: 1;
    color: #03d9be;
    border-bottom: solid 1px #606266;
  }
  .text-top{
    margin-top: 8px;
  }
  .byq-enter-active {
    transition: all .2s ease;
  }
  .byq-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .byq-enter, .byq-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(-10px);
    opacity: 0;
  }
  .icon-right{
    position: absolute;
    margin-top: 9px;
  }
</style>
