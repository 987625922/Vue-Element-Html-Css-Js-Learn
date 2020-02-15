<template>
  <el-row class="header">
    <el-col :span="6"><p class="flex" style="font-size: 20px;margin-left: 20px">
      <img src="../../assets/logo.png" id="logo"/>管理后台</p></el-col>
    <el-col :span="12">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="6" style="word-wrap: break-word;">
      <p class="flex" style="font-size: 20px;margin-left: 20px">
        <img id="adminImg" src="../../assets/img/default.jpg">
        <el-dropdown id="el-dropdown">
          <span class="el-dropdown-link">用户名<i class="el-icon-arrow-down el-icon--right"></i></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </p>
    </el-col>
  </el-row>

</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  }

  .el-col {
    border-radius: 4px;
  }

  .header {
    height: 70px;
    background-color: #2fa5ed;
    color: #fff;
  }

  .header el-col {
    align-items: center;
  }

  #logo {
    display: block;
    width: 44px;
    height: 39px;
    margin-right: 20px;
  }

  .flex {
    display: flex;
    flex-wrap: wrap;
  }

  #adminImg {
    width: 44px;
    height: 45px;
    border-radius: 50%;
    display: block;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #fff;
    text-align: center;
    margin-left: 20px;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }

  #el-dropdown {
    margin-top: 10px;
  }
</style>
