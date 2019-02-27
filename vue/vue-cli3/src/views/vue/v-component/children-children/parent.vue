<template>
  <div class="p-c">
    <div class="parentBox">
      <p>我的父节点</p>
    </div>
    <children />
    <children1 />

    <p>
      父截图
      <img src="../../../../assets/img/c-c1.png" alt="" />
    </p>
    <p>
      子截图
      <img src="../../../../assets/img/c-c2.png" alt="" />
    </p>
    <p>
      子截图1
      <img src="../../../../assets/img/c-c3.png" alt="" />
    </p>
  </div>
</template>

<script>
import Vue from "vue";
import children from "./children";
import children1 from "./children1";
export default {
  name: "parent",
  data() {
    return {
      receiveChildren: ""
    };
  },
  components: {
    children,
    children1
  },
  created() {
    window.$bus = new Vue();
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
