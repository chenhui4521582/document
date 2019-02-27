<template>
  <div class="p-c">
    <p>我是父组件</p>
    <p>在组件上绑定 v-model 实现 父子组件的双向绑定</p>
    <p>{{ message }}</p>
    <children v-model="message" />
    <p>
      父截图
      <img src="../../../../assets/img/v-model.png" alt="" />
    </p>
  </div>
</template>

<script>
import children from "./children";
export default {
  name: "parent",
  data: () => ({
    message: "111"
  }),
  components: {
    children
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
