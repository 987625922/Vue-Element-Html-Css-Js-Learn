<template>
  <div id="login_main">
    <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" placeholder="请输入账号" v-model="form.username"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="login('loginForm')">登录</el-button>
        <el-button id="register" type="text" v-on:click="register()">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        form: {
          username: '',
          password: ''
        },
        // 表单验证，需要在 el-form-item 元素中增加 prop 属性
        rules: {
          username: [
            {required: true, message: '账号不可为空', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不可为空', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      register() {
        this.$router.push('Register')
      },
      login(formName) {
        // 为表单绑定验证功能
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios.post("http://localhost:8081/admin/login", {
              phone: this.username,
              password: this.password
            })
              .then(function (res) {
                //此处的this指向的不是当前vue实例
                // self.items = res.data.data
                if (res.data.code == 200) {
                  console.log(res.data)
                } else {
                  console.log(res.data.msg)
                }
              })
              .catch(function (err) {
                console.log(err.data)
              })
          } else {
            this.$message.error('账号密码不能为空')
            return false
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  #login_main {
    background-image: url(../../assets/img/bg_gihub_windows.jpg);
    background-size: 100% 100%;
    height: 100%;
    position: fixed;
    width: 100%
  }

  .login-box {
    border: 1px solid #DCDFE6;
    width: 350px;
    margin: 180px auto;
    padding: 35px 35px 15px 35px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 25px #909399;
  }

  .login-title {
    text-align: center;
    margin: 0 auto 40px auto;
    color: #303133;
  }

  #register {
    color: #ffffff;
  }
</style>
