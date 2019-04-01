<template>
  <div class="p-c">
    <p>我是父组件</p>
    <p>通过this.$children 改变子组件的值,调用子组件的方法</p>
    <p><button @click="updateChildren">改变子组件</button></p>
    <children />
    <children1 />
    <p>
      父截图
      <img src="../../../../assets/img/$children.png" alt="" />
    </p>
  </div>
</template>

<script>
import children from "./children";
import children1 from "./children1";
export default {
  name: "parent",
  components: {
    children,
    children1
  },
  methods: {
    updateChildren() {
      this.$children[0].message = "222222";
      this.$children[1].message = "333333";
      console.log(this.$children);
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
