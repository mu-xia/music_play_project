
<template>
  <div class="app">
      <m-header></m-header>
      <tab></tab>
    <!--keep-alive缓存内存，减少请求，优化-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
  //加载可以解析图片
  import MHeader from '@/components/m-header/m-header.vue';
  import Tab from '@/components/tab/tab';
export default {
  name: 'app',
  components:{
    MHeader,
    Tab
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable" //字体背景色

  .app{
    color:$color-theme
  }
</style>
