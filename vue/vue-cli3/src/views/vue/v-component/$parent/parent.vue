<template>
  <div class="p-c">
    <p>我是父组件</p>
    <p>父组件message {{ message }}</p>
    <children />

    <p>
      父截图
      <img src="../../../../assets/img/$parent.png" alt="" />
    </p>
    <p>
      子截图
      <img src="../../../../assets/img/$parent1.png" alt="" />
    </p>
  </div>
</template>

<script>
import children from "./children";
export default {
  name: "parent",
  data() {
    return {
      message: "111111"
    };
  },
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
