<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe61d;</span>
    </div>
    <div class="header-center">
      <span class="iconfont">&#xe61f;</span>
      <input type="text" placeholder="输入城市/景点/游玩主题" />
    </div>
    <router-link to="/city">
      <div class="header-right">
        <span class="iconfont">&#xe65a;</span>
        <span>{{ city }}</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "home-header",
  computed: {
    ...mapState(["city"])
  },
  mounted() {}
};
</script>

<style scoped lang="less">
.header {
  overflow: hidden;
  display: flex;
  height: 0.72rem;
  background: @backgroundColor;
  .header-left {
    float: left;
    width: 0.72rem;
    line-height: 0.72rem;
    color: #fff;
    .iconfont {
      .font-size(40);
    }
  }
  .header-center {
    flex: 1;
    box-sizing: border-box;
    margin: 0.1rem 0;
    padding: 0 0.1rem;
    background: #fff;
    border-radius: 3px;
    height: 0.52rem;
    input {
      display: inline-block;
      padding-left: 0.1rem;
      border: none;
      height: 100%;
      outline: none;
    }
  }
  .header-right {
    float: right;
    min-width: 1.2rem;
    line-height: 0.72rem;
    color: #fff;
    .iconfont {
      .font-size(40);
    }
  }
}
</style>
