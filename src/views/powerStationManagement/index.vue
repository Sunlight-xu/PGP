<template>
<div class="app-container">
  <el-form label-width="120px" :model="management">
    <div class="title">
      <span class="title-bottom">光伏电站基础信息</span>
      <el-button class="btn-power">编辑</el-button>
      <el-button class="btn-power" style="margin-right: 24px;">保存</el-button>
    </div>
    <el-row type="flex">
      <el-col :span="8" :offset="2">
        <el-form-item label="电站名称">
          <el-input :disabled="true" placeholder="小营东路15号"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8" :offset="2">
        <el-form-item label="电站编号">
          <el-input :disabled="true" placeholder="911100001"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row type="flex">
      <el-col :span="8" :offset="2">
        <el-form-item label="经度">
          <el-input :disabled="true" placeholder="108.9004"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8" :offset="2">
        <el-form-item label="纬度">
          <el-input :disabled="true" placeholder="31.4314"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row type="flex">
      <el-col :span="8" :offset="2">
        <el-form-item label="海拔高度">
          <el-input :disabled="true" placeholder="955m"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8" :offset="2">
        <el-form-item label="装机容量">
          <el-input :disabled="true" placeholder="1"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row type="flex">
      <el-col :span="8" :offset="2">
        <el-form-item label="发电单元数量">
          <el-input :disabled="true" placeholder="550个"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8" :offset="2">
        <el-form-item label="逆变器类型">
          <el-input :disabled="true" placeholder="集中式"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row type="flex">
      <el-col :span="8" :offset="2">
        <el-form-item label="逆变器转换效率">
          <el-input :disabled="true" placeholder="95%"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8" :offset="2">
        <el-form-item label="组件类型">
          <el-input :disabled="true" placeholder=""></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row type="flex">
      <el-col :span="8" :offset="2">
        <el-form-item label="跟踪方式">
          <el-input :disabled="true" placeholder="MPPT"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8" :offset="2">
        <el-form-item label="所属企业">
          <el-input :disabled="true" placeholder="国家电网"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row type="flex">
      <el-col :span="8" :offset="2">
        <el-form-item label="投产时间">
          <el-input :disabled="true" placeholder="2018-01-05"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8" :offset="2">
        <el-form-item label="电池类型">
          <el-input :disabled="true" placeholder="单晶硅"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row type="flex">
      <el-col :span="8" :offset="2">
        <el-form-item label="所属地市">
          <el-input :disabled="true" placeholder="北京海淀"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8" :offset="2">
        <el-form-item label="倾角">
          <el-input :disabled="true" placeholder="15°"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row type="flex">
      <el-col :span="8" :offset="2">
        <el-form-item label="光伏组件面积">
          <el-input :disabled="true" placeholder="1.28m2"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8" :offset="2">
      </el-col>
    </el-row>
  </el-form>
</div>
</template>
<script>
export default {
  data(){
    return{
      management:{

      }
    }
  }
}
</script>

<style scoped>
.btn-power{
  float: right;
  margin-top: -24px;
}
</style>
