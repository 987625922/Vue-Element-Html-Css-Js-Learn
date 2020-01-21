<template>
  <el-container>
    <el-header>
      <el-button type="button" @click="toLearnBasic()">基础</el-button>
      <el-button type="button" @click="toProject()">一个列表和登录的小项目</el-button>
      <el-button type="button" @click="toProject2()">网络获取数据展示</el-button>
    </el-header>
    <el-main></el-main>
  </el-container>
</template>

<script>
  export default {
    name: 'LearnNavigation',
    methods: {
      toLearnBasic () {
        this.$router.push('basic')
      },
      toProject () {
        this.$router.push('login')
      },
      toProject2 () {
        this.$router.push('getlist')
      }
    }
  }
</script>

<style scoped>
  .el-main {
    background-color: #ffffff;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-header, .el-footer {
    color: #333;
    line-height: 60px;
  }
</style>
