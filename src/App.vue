<template>
  <div id="app">
    <keep-alive exclude="Detail,UserInfo,Order">
      <router-view/>
    </keep-alive>
    <!--<loading/>-->
    <main-tab-bar/>
  </div>
</template>

<script>
  import MainTabBar from "./components/content/mainTabbar/MainTabBar";
  // import loading from "./components/common/loading/loading"
  export default {
    name:'app',
    components: {
      MainTabBar,
      // loading
    },
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
