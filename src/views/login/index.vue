<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" class="login-form" >
      <h3 class="title">管理系统模板</h3>
      <el-form-item>
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input v-model="loginForm.username" name="username" placeholder="请填写用户名称!" />
      </el-form-item>
      <el-form-item>
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input v-model="loginForm.password" placeholder="请填写用户密码!" />
        <span class="show-pwd">
          <svg-icon icon-class="eye" />
        </span>
      </el-form-item>
      <el-button type="primary" style="width:100%;">
        登录
      </el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
$bg:#2d3a4b;
$light_gray:#eee;

.login-container {
  .el-form-item {
    border: 1px solid rgba(255,255,255,0.1);
    background: rgba(0,0,0,0.1);
    border-radius: 5px;
    color: #454545;
  }
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      &:-webkit-autofill {
        box-shadow: 0 0 0 0px 1000px $bg inset !important;
        -webkit-box-shadow: 0 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
}
</style>

<style rel="stylesheet/scss"  lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    max-width: 100%;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .title {
    text-align: center;
    font-size: 26px;
    color: #EEE;
    font-weight: 700;
    margin: 0 auto 40px;
  }
  .svg-container {
    display: inline-block;
    width: 30px;
    color: $light_gray;
    padding: 6px 5px 6px 15px;
    vertical-align: middle;
  }
  .show-pwd {
    position: absolute;
    color: $dark_gray;
    right: 10px;
    top: 7px;
    font-size: 16px;
    cursor: pointer;
    user-select: none;
  }
}
</style>

