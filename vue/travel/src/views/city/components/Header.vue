<template>
  <div class="city-header">
    <router-link to="/">
      <div class="header-back">
        <span class="iconfont back">&#xe61d;</span>
      </div>
    </router-link>
    <div class="header-center">
      城市选择
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped lang="less">
.city-header {
  position: relative;
  background: @backgroundColor;
}
.header-back {
  position: absolute;
  left: 0;
  top: 0;
  .back {
    display: block;
    line-height: 0.8rem;
    color: #fff;
    .font-size(55);
  }
}
.header-center {
  line-height: 0.8rem;
  color: #fff;
  text-align: center;
  .font-size(32);
}
</style>
