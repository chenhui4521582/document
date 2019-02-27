<template>
  <div class="mapActions">
    <p class="back">
      <router-link to="/">返回</router-link>
    </p>
    <p class="title">
      vuex Actions
    </p>
    <p>
      说明: actions是 vuex mutations 的异步提交
    </p>
    <p>
      示例：
    </p>
    <p>
      <img src="../../assets/img/actions.png" alt="" />
    </p>
    <p>
      原始State数据
    </p>
    <p class="border-bottom">
      user = chenhui; age = 28;
    </p>
    <p>
      使用Actions 改变后的State数据 :
    </p>
    <p>user = {{ demo.user }}; age = {{ demo.age }};</p>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "mapActions",
  computed: {
    ...mapState(["demo"])
  },
  methods: {
    ...mapActions({
      updateAge: "demo/updateAge",
      updateUser: "demo/updateUser"
    })
  },
  mounted() {
    this.updateAge();
    this.updateUser();
  }
};
</script>

<style scoped lang="less">
.mapActions {
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
