<template>
  <div class="home-horn">
    <span class="horn-title"></span>
    <span class="horn-center">{{ seller.bulletin }}</span>
    <span class="iconfont">&#xe61e;</span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'home-horn',
  computed: {
    ...mapState(['seller']),
    hasBulletin () {
      return !!this.hasBulletin
    }
  }
}
</script>

<style lang="less" scope>
.home-horn {
  position: relative;
  padding: 0 .3rem 0 .76rem;
  overflow: hidden;
  text-overflow: ellipsis;
  background: rgba(7, 17, 27, 0.7);
  height: .56rem;
  line-height: .56rem;
  overflow: hidden;
  font-size: .2rem;
  color: #fff;
  .horn-title {
    position: absolute;
    top: .16rem;
    left: .16rem;
    display: block;
    width: .44rem;
    height: .24rem;
    background: url(./img/bulletin@2x.png) no-repeat 0 0;
    background-size: 100% 100%;
  }
  .horn-center {
    white-space: nowrap;
  }
  .iconfont {
    position: absolute;
    right: 0;
    top: 0;
    display: block;
    height: 100%;
    line-height: .56rem;
    font-size: .24rem;
  }
}
</style>
