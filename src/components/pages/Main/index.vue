<template>
  <el-container class="p-main">
    <el-header class="m-header">
      <Header />
    </el-header>
    <el-container class="m-container">
      <el-aside class="m-nav">导航</el-aside>
      <el-main class="m-content">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from "../../Header";

export default {
  name: "Main",
  components: {
    Header,
  },
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p-main {
  width: 100%;
  height: 100%;
}
.m-container {
  height: calc(100% - 60px);
}
</style>
