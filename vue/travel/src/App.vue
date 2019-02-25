<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style scoped lang="less">
#app {
  width: 100%;
  padding-bottom: 60px;
  .font-size(28);
}
</style>
