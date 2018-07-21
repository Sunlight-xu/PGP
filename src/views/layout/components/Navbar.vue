<template>
  <el-menu class="navbar" mode="horizontal">
    <!--<hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>-->
    <!--<breadcrumb></breadcrumb>-->
    <img class="logoImg" src="../../../assets/images/logo.png">
    <span disabled tabindex="" class="systemName">分布式光伏电站功率预测与运行管理系统</span>
    <span disabled tabindex="" class="userName"><span>{{time}}&nbsp</span>欢迎:张三</span>
    <el-dropdown class="avatar-container">
      <div class="avatar-wrapper">
        <img class="user-avatar" src="../../../assets/images/gf.png">
        <i style="color: #ccc" class="el-icon-caret-bottom"></i>
      </div>
      <el-dropdown-menu class="user-dropdown" slot="dropdown">
        <router-link class="inlineBlock" to="/">
          <el-dropdown-item>
            首页
          </el-dropdown-item>
        </router-link>
        <router-link class="inlineBlock" to="/powerStationManagement">
          <el-dropdown-item>
            电站管理
          </el-dropdown-item>
        </router-link>
        <router-link class="inlineBlock" to="/plan">
          <el-dropdown-item>
            检修计划
          </el-dropdown-item>
        </router-link>
        <el-dropdown-item divided>
          <span @click="logout" style="display:block;">退出</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'user'
    ]),
    time(){
      var date = new Date();
      var seperator1 = "-";
      var seperator2 = ":";
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        // + " " + date.getHours() + seperator2 + date.getMinutes()
        // + seperator2 + date.getSeconds();
      return currentdate;
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    },
    logout() {
      this.$router.push({ path: '/login' })
      // this.$store.dispatch('FedLogOut').then(() => {
      //   location.reload() // 为了重新实例化vue-router对象 避免bug
      // })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.logoImg{
  width: 145px;
  position: fixed;
  left: 16px;
  top: 3px;
}
.name{
  position: inherit;
  margin-left: 28%;
  font-size: 24px;
}
.systemName{
  /*position: fixed;*/
  /*right: 100px;*/
  /*left: 33%;*/
  color: #fff;
  font-weight:bold;
  /*margin-left:8px;*/
  font-size: 28px;
}
.userName{
  font-size:14px;
  color: #ccc;
  position: fixed;
  right: 100px;
  /*left: 24%;*/
}
.navbar {
  text-align: center;
  background-color: #00796A;
  top: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  position: fixed;
  z-index: 100;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: inherit;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>

