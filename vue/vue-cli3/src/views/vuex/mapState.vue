<template>
  <div class="mapState">
    <p class="back">
      <router-link to="/">返回</router-link>
    </p>
    <p class="title">
      vuex mapState
    </p>
    <p>
      说明: 使用...mapState映射vuex state 到当前组件
    </p>

    <p>
      示例：
    </p>
    <p>
      <img src="../../assets/img/mapState.png" alt="" />
    </p>
    <p>使用...mapState映射vuex module state 到当前组件</p>
    <p>
      vuex:user <span>{{ user }}</span>
    </p>
    <p>
      vuex:age <span>{{ age }}</span>
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "mapState",

  computed: {
    ...mapState(["user", "age"])
  }
};
</script>

<style scoped lang="less">
.mapState {
  .text-left();
  p {
    padding: 10px 0;
    span {
      color: #0a8cff;
    }
  }
  .border-bottom {
    border-bottom: 1px solid #f1f1f1;
  }
  .title {
    text-align: center;
  }
}
</style>
