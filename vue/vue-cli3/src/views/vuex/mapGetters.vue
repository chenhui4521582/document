<template>
  <div class="getters">
    <p class="back">
      <router-link to="/">返回</router-link>
    </p>
    <p class="title">
      vuex getter 属性
    </p>
    <p>
      说明: getter相当于是一个计算过滤器(computed) 返回计算过后的state;
    </p>
    <p>
      示例：
    </p>
    <p>
      <img src="../../assets/img/getters.png" alt="" />
    </p>
    <p class="border-bottom">原来的state Age属性 {{ age }}</p>
    <p>使用getters 属性过滤后的 Age属性 {{ removeAge }}</p>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "getter",
  computed: {
    ...mapState(["age"]),
    ...mapGetters(["removeAge"])
  }
};
</script>

<style scoped lang="less">
.getters {
  .text-left();
  .back {
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 10px;
  }
  .title {
    text-align: center;
  }
}
</style>
