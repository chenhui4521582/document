<template>
  <div class="module">
    <p class="back">
      <router-link to="/">返回</router-link>
    </p>
    <p class="title">
      vuex module
    </p>
    <p>
      说明: 在大型项目中state 状态机因为参数太多，导致维护困难，使用module分区
    </p>
    <p>
      示例：
    </p>
    <p>
      <img src="../../assets/img/module.png" alt="" />
    </p>
    <p class="border-bottom">
      引入module模块, module 模块内部包含state,mutations,getters,actions
    </p>

    <p>
      命名空间:namespaced = true
    </p>
    <p>
      <img src="../../assets/img/module_1.png" alt="" />
    </p>
    <p class="border-bottom">
      使module模块的mutations actions getter state 独立出来不存放于 根store
    </p>
  </div>
</template>

<script>
export default {
  name: "module"
};
</script>

<style scoped lang="less">
.module {
  .text-left();
  p {
    padding: 10px 0;
  }
  .border-bottom {
    border-bottom: 1px solid #f1f1f1;
  }
  .title {
    text-align: center;
  }
}
</style>
