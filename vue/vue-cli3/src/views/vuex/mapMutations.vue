<template>
  <div class="mapMutations">
    <p class="back">
      <router-link to="/">返回</router-link>
    </p>
    <p class="title">
      vuex mutations
    </p>
    <p>
      说明:mapMutations 是同步改变vuex 内的state
    </p>
    <p>
      示例：
    </p>
    <p>
      <img src="../../assets/img/mutations.png" alt="" />
    </p>
    <p class="border-bottom">
      使用...mapMutations把vuex Mutations 方法映射到methods
    </p>

    <p>vuex state</p>
    <p>
      user: <span>{{ user }}</span>
    </p>
    <p>
      user: <span>{{ age }}</span>
    </p>
    <p>
      <button @click="setUser('大爷')">更新user</button>
      <button @click="setAge('万岁万岁万万岁')">更新age</button>
    </p>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "mapMutations",
  computed: {
    ...mapState(["user", "age"])
  },
  methods: {
    ...mapMutations(["setUser", "setAge"])
  }
};
</script>

<style scoped lang="less">
.mapMutations {
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
