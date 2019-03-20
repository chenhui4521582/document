<template>
  <div class="home-tab">
    <router-link tag="div" to="/" class="item border-bottom">商品</router-link>
    <router-link tag="div" to="/comment" class="item border-bottom">评价</router-link>
    <router-link tag="div" to="/store" class="item border-bottom">商家</router-link>
  </div>
</template>

<script>
export default {
  name: 'home-tab'
}
</script>

<style lang="less" scope>
  .home-tab {
    display: flex;
    justify-content:space-around;
    .item{
      flex: 1;
      height: .8rem;
      line-height: .8rem;
      text-align: center;
      color: rgba(7.17.27.01);
      &.acive{
        color: rgba(240, 20,29);
      }
    }
  }
</style>
