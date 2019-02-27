<template>
  <div class="countdown">
    <p class="back">
      <router-link to="/">返回</router-link>
    </p>
    <p>使用 requestAnimationFrame 写倒计时</p>
    <div class="content">
      <p v-timeCountdown="endTime"></p>
      <button @click="reset">重置</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "countdown",
  data: () => ({
    endTime: new Date().getTime() + 100000
  }),
  methods: {
    reset() {
      this.endTime = new Date().getTime() + 100000;
    }
  }
};
</script>

<style scoped lang="less">
.countdown {
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
