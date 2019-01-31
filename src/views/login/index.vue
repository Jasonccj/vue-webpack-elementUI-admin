<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" class="login-form" >
      <h3 class="title">vue-admin-template</h3>
      <el-form-item>
        <el-input v-model="loginForm.username" name="username" placeholder="请填写用户名称!" />
      </el-form-item>
      <el-form-item>
        <el-input v-model="loginForm.password" placeholder="请填写用户密码!" />
      </el-form-item>
      <el-button type="primary">登录</el-button>
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

<style rel="stylesheet/scss"  lang="scss" scoped>
$bg: #2d3a4b;
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
  .login-form {
    background-color: red;
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
}
</style>

