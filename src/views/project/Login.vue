<template>
  <div>
    <form v-if="!isReg">
      用户名：<input type="text" v-model="name">
      密码: <input type="text" v-model="password">
      <button type="button" @click="login()">登录</button>
    </form>
    <form v-else>
      用户名: <input type="text" v-model="name">
      密码: <input type="text" v-model="password">
      再次输入密码: <input type="text">
      <button type="button" @click="addUser()">注册</button>
      <button type="button" @click="cancel()">注册</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        isReg: false,
        name: '',
        password: '',
        repeat: ''
      }
    },
    methods: {
      login () {
        this.$router.push('/home')
      },
      addUser () {
        this.isReg = true
        localStorage.setItem('name', this.name)
        localStorage.setItem('password', this.password)
      },
      cancel () {
        this.isReg = false
      }
    }
  }
</script>

<style scoped>

</style>
