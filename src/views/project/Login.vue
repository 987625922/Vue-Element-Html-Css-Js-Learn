<template>
  <div>
    <form v-if="!isReg">
      用户名：<input type="text" v-model="name">
      密码: <input type="text" v-model="password">
      <button type="button" @click="login()">登录</button>
      <button type="button" @click="toReg()">注册</button>
    </form>
    <form v-else>
      用户名: <input type="text" v-model="name">
      密码: <input type="password" v-model="password">
      再次输入密码: <input type="password" v-model="repeat">
      <button type="button" @click="addUser()">注册</button>
      <button type="button" @click="cancel()">取消</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        isReg: false,
        name: '',
        password: '',
        repeat: ''
      }
    },
    methods: {
      login() {
        if (localStorage.getItem("name") == this.name &&
          localStorage.getItem("password") == this.password) {
          this.$router.push('/home')
        }else {
          alert("账号密码不正确")
        }
      },
      addUser() {
        if (this.password == this.repeat) {
          this.isReg = true
          localStorage.setItem('name', this.name)
          localStorage.setItem('password', this.password)
          this.name = ''
          this.password = ''
          this.isReg = false
        }else {
          alert("密码不一致")
        }
      },
      cancel() {
        this.isReg = false
      },
      toReg() {
        this.isReg = true
      }
    }
  }
</script>

<style scoped>

</style>
