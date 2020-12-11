<template>
  <div class="login-container">
    <el-form class="login-from" ref="form" :model="user">
      <el-form-item >
        <el-input
          placeholder="请输入手机号"
          v-model="user.mobile"
        ></el-input>
      </el-form-item>
      <el-form-item >
        <el-input
        placeholder="请输入验证码"
        v-model="user.code"
      ></el-input>
      </el-form-item>
      <el-form-item >
        <el-checkbox v-model="user.checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button
          class="login-btn"
          type="primary"
          @click="onSubmit"
        >登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '',
        code: '',
        checked: false
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style lang="scss">
.login-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2C2C32;
  // background: url('./login-bg.png') no-repeat center;
  // background-size: cover;
  .login-from {
    background-color: #ffffff;
    border-radius: 5px;
    min-width: 300px;
    padding: 60px;
  }
  .login-btn {
    width: 100%;
  }
}
</style>
