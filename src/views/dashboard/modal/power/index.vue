<template>
  <transition name="power">
    <div class="power-modal-main" v-if="show">
      <div class="power-container">
        <div class="power-header">
          <i class="btn-modal el-icon-close" @click="closeModel()" ></i>
        </div>
        <div class="body">
          <el-row class="text-top">
            <el-col :span="4">最大功率：25.12(kW)</el-col>
            <el-col :span="4">平均功率：18(kW)</el-col>
          </el-row>
          <chart :id="1" height='100%' width='100%' :chartData="chartData"></chart>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import Chart from '@/components/Charts/lineMarker'
  export default {
    name: "power",
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
        this.$emit('power', false)
      }
    }
  }
</script>

<style scoped>
  .power-modal-main{
    height: 96%;
    width: 100%;
    z-index: 40;
    position: fixed;
    right: 0px;
    bottom: -16px;
  }
  .power-container{
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    -webkit-box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 1px 0px;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 1px 0px;
    border-radius: 8px;
    display: inline-block;
    text-align: left;
    overflow: hidden;
    backface-visibility: hidden;
  }
  .body{
    width: 100%;
    height: 90%;
    position: relative;
    padding: 10px 15px;
    color: #303133;
    font-size: 15px;
  }
  .power-header{
    /*cursor:move;*/
    position: relative;
    padding: 15px;
    padding-bottom: 10px;
  }
  .power-enter-active {
    transition: all .2s ease;
  }
  .power-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .power-enter, .power-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateY(100px);
    opacity: 0;
  }
  .power-btn{
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
  }
  .power-btn:hover{
    color:#03d9be;
    /*border: 1px solid #00796A;*/
    cursor: pointer;
  }
  .text-top{
    left: 24px;
    color: #fff;
  }
</style>
