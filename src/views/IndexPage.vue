<template>
  <div class="container">
    <h3>hello,你好!</h3>
    <h3>欢迎使用^-^!</h3>
    <el-row>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  components: {
  }
}
</script>

<style lang="scss">
  $color: #3dbae9;
.container{
  h3{
    color: $color
  }
}
</style>
