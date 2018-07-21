<template>

  <div class="login-container">
    <div class="login-top-wp">
      <div class="login-top">
        <img src="../../assets/images/logo.gif" />
      </div>
    </div>
    <el-form autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px"
      class="card-box login-form">
      <h3 class="title">用户登录</h3>
      <el-form-item prop="username" style="margin-bottom:20px;">
        <span class="svg-container svg-container_login">
          <svg-icon icon-class="user" />
        </span>
        <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="用户名" />
      </el-form-item>
      <el-form-item prop="password" style="margin-bottom:30px;">
        <span class="svg-container" style="font-size: 20px; color:#afafaf; padding-left:8px;">
          <svg-icon icon-class="password"></svg-icon>
        </span>
        <el-input name="password" :type="pwdType" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on"
          placeholder="密码"></el-input>
          <span class="show-pwd" @click="showPwd"><svg-icon icon-class="eye" /></span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleLogin">
          登录
        </el-button>
      </el-form-item>
    </el-form>
    <div class="login-bottom-wp">
      <div class="login-bottom">
        <p>
          地址：北京市海淀区清河小营东路15号 邮编：100192<br/>
          电话：86-10-82812114 传真：86-10-62913126 Email：cepri@epri.sgcc.com.cn<br/>
          备案号：京ICP备05014725号 京公海网安备110108001531号<br/>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', message: '请输入用户名' }],
        password: [{ required: true, trigger: 'blur', message: '请输入密码' }]
      },
      loading: false,
      pwdType: 'password'
    }
  },
  methods: {
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    handleLogin() {
      this.$router.push({ path: '/dashboard' })
      // this.$refs.loginForm.validate(valid => {
      //   if (valid) {
      //     this.loading = true
      //     this.$store.dispatch('Login', this.loginForm).then(() => {
      //       this.loading = false
      //       this.$router.push({ path: '/dashboard' })
      //     }).catch(() => {
      //       this.loading = false
      //     })
      //   } else {
      //     console.log('验证失败')
      //     return false
      //   }
      // })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">

  $dark_gray:#afafaf;
  $light_gray:#00796a;

  .login-top-wp{
    width:100%;
    height:70px;
    background:#fff;
    position: absolute;
    top:0;
  }

  .login-top{
    width:1200px;
    margin:0 auto;
    padding-top:8px;
  }

  .login-bottom-wp{
    width:100%;
    height:120px;
    position:absolute;
    background:#fff;
    bottom:0;
  }

  .login-bottom{
    width:1200px;
    margin:0 auto;
    padding-top:10px;
  }

  .login-bottom p{
    text-align: center;
    line-height: 22px;
    font-size:12px;
  }

  .login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background: url(../../assets/images/pclogin.jpg) no-repeat center top;
    input:-webkit-autofill {
       -webkit-box-shadow: 0 0 0px 1000px #fff inset !important;
       -webkit-text-fill-color: #757575 !important;
    }
    input {
      background: transparent;
      border: 0px;
       -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 10px;
      color: $light_gray;
      height: 40px;
    }


    .el-input {
      display: inline-block;
      height: 40px;
      width: 85%;
    }

    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;
    }
    .svg-container {
      padding: 0px 5px 6px 4px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      height:40px;
      display: inline-block;
      &_login {
        font-size: 28px;
      }
    }
    .title {
      font-size: 30px;
      font-weight: 400;
      color: $light_gray;
      margin: 0px auto 30px auto;
      text-align: center;
      font-weight: bold;
      border:0;
    }

    .login-form {
      position: absolute;
      left: 600px;
      right: 0;
      width: 340px;
      padding: 35px 35px 15px 35px;
      margin: 260px auto 0px;
      background:#fff;
      border-radius:5px;
    }
    .el-form-item {
      border: 1px solid #dfdfdf;
      background: #fff;
      border-radius: 5px;
      color: #454545;
    }
    .el-form-but{
      border:0px;
    }
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 3px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select:none;
    }
    .thirdparty-button{
      position: absolute;
      right: 35px;
      bottom: 28px;
    }
    .el-button--primary {
      color: #fff;
      background-color: #00796a;
      border-color: #00796a;
    }
  }
</style>
