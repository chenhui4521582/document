<template>
  <div class="component_slot">
    <p class="back">
      <router-link to="/">返回</router-link>
    </p>
    <p class="title">
      vuex slot
    </p>
    <p>
      说明: 往children 组件内部插入html元素
    </p>
    <p>
      示例：
    </p>
    <p>
      <img src="../../../assets/img/slot.png" alt="" />
    </p>
    <childrenComponent>
      <p slot="slot_header">这是插入头部</p>
      <p>默认插入位置</p>
      <p slot="slot_footer">这是插入尾部</p>
    </childrenComponent>
  </div>
</template>

<script>
import childrenComponent from "./childrenComponent";
export default {
  name: "v-slot",
  components: {
    childrenComponent
  }
};
</script>

<style scoped lang="less">
.component_slot {
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
