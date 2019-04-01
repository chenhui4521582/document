<template>
  <div class="p-c">
    <p>父组件通过v-bind把数据传递到子组件,子组件通过props接收参数</p>
    <children-component :toChildren="toChildren" />
    <p><img src="../../../../assets/img/component-p-c.png" alt="" /></p>
  </div>
</template>

<script>
import childrenComponent from "./children.vue";
export default {
  name: "parent",
  data() {
    return {
      toChildren: "我是父组件的值"
    };
  },
  components: {
    childrenComponent
  }
};
</script>

<style scoped lang="less">
.p-c {
  .text-left();
  .menuList {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    span {
      padding: 5px 10px;
      margin: 5px;
      background: #999;
      color: #fff;
    }
    .active {
      background: #666;
    }
  }
  p {
    padding: 10px 0;
  }
  .border-bottom {
    border-bottom: 1px solid #ccc;
  }
  .title {
    text-align: center;
  }
}
</style>
