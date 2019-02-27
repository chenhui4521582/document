<template>
  <div class="p-c">
    <p>我是子组件</p>
    <p>{{ toChildren }}</p>
  </div>
</template>

<script>
export default {
  name: "children",
  props: {
    toChildren: {
      type: String,
      default: ""
    }
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
