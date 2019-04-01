<template>
  <div class="p-c">
    <div class="parentBox">
      <p>我是父组件</p>
      <p>
        接收的值：<span style="color: red">{{ receiveChildren }}</span>
      </p>
    </div>
    <children @receiveDate="receiveDate" />

    <p>
      父截图
      <img src="../../../../assets/img/c-p1.png" alt="" />
    </p>
    <p>
      子截图
      <img src="../../../../assets/img/c-p2.png" alt="" />
    </p>
  </div>
</template>

<script>
import children from "./children";
export default {
  name: "parent",
  data() {
    return {
      receiveChildren: ""
    };
  },
  components: {
    children
  },
  methods: {
    receiveDate(data) {
      this.receiveChildren = data;
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
