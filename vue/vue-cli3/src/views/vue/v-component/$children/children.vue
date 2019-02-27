<template>
  <div class="p-c">
    <p>我是子组件</p>
    <p>子组件message: {{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "children",
  data() {
    return {
      message: "111111"
    };
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
