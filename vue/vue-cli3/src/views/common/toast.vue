<template>
  <div class="toast">
    <p class="back">
      <router-link to="/">返回</router-link>
    </p>
    <button @click="toast">显示toast</button>
    <button @click="success">显示Success toast</button>
    <button @click="warning">显示warning toast</button>
    <button @click="error">显示Error toast</button>
    <button @click="loading">显示loading toast</button>
    <button @click="closed">关闭toast</button>
  </div>
</template>

<script>
export default {
  name: "toast",
  methods: {
    toast() {
      this.$veeToast.show("show", 200000);
    },
    success() {
      this.$veeToast.success("success", 2000);
    },
    warning() {
      this.$veeToast.warning("warning", 2000);
    },
    error() {
      this.$veeToast.error("error", 2000);
    },
    loading() {
      this.$veeToast.loading("loading", 2000);
    },
    closed() {
      this.$veeToast.close();
    }
  }
};
</script>

<style scoped lang="less">
.toast {
  button {
    display: block;
    margin-bottom: 0.2rem;
  }
  .text-left();
  p {
    padding: 10px 0;
    span {
      color: #0a8cff;
    }
  }
  .border-bottom {
    border-bottom: 1px solid #f1f1f1;
  }
  .title {
    text-align: center;
  }
}
</style>
