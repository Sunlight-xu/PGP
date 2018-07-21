<template>
  <transition name="hlx">
    <div class="hlx-modal-main" v-if="show">
      <div class="container-modal">
        <div class="hlx-header">
          <div class="title">汇流箱</div>
          <i class="btn-modal el-icon-close" @click="closeModel()" ></i>
        </div>
        <div class="body">
          <div>汇流箱个数<span>（10个）</span></div>
          <div class="text-top">汇流箱容量<span>（300kw）</span></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "hlx",
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
        this.$emit('hlx', false)
      },
      move:function () {
        let x=0
        let y=0;
        let px=0;
        let py=0;
        let onDrag = false;
        // 鼠标按下
        $(".hlx-header").mousedown (
          function (e) {
            x = e.clientX;
            y = e.clientY;

            px = $(".hlx-modal-main").offset().left;
            py = $(".hlx-modal-main").offset().top;

            onDrag = true;

            // 鼠标移动
            $(document).mousemove (
              function (e) {
                if (onDrag) {
                  let nx = e.clientX + px - x;
                  let ny = e.clientY + py - y;

                  $(".hlx-modal-main").css("left",nx+'px')
                  $(".hlx-modal-main").css("top",ny+'px')
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
  .hlx-modal-main{
    height: 114px;
    width: 420px;
    z-index: 5;
    position: fixed;
    top: 402px;
    bottom: 0;
    left: 30px;
    right: 0;
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
  .hlx-header{
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
  .hlx-enter-active {
    transition: all .2s ease;
  }
  .hlx-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .hlx-enter, .hlx-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(-10px);
    opacity: 0;
  }
  .icon-right{
    position: absolute;
    margin-top: 9px;
  }
</style>
