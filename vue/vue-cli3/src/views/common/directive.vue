<template>
  <div class="directive">
    <p class="back">
      <router-link to="/">返回</router-link>
    </p>
    <p>使用 v-hello 指令向P标签内部插入内容</p>
    <p v-hello></p>

    <p>
      示例：
    </p>
    <p>
      <img src="../../assets/img/dirictive.png" alt="" />
    </p>
  </div>
</template>

<script>
export default {
  name: "directive",
  data() {
    return {
      message: "Hi, W3cplus.com"
    };
  }
};
</script>

<style scoped lang="less">
.directive {
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
