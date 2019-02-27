<template>
  <div class="filters">
    <p class="back"><router-link to="/">返回</router-link></p>
    <p class="title border-bottom">
      说明: 全局过滤 filters
    </p>
    <p>例子：</p>
    <p>过滤前 的时间 {{ time }}</p>
    <p>过滤后 的时间 {{ time | formatTime }}</p>
  </div>
</template>

<script>
export default {
  name: "filters",
  data: () => ({
    time: new Date().getTime()
  }),
  methods: {
    countdown() {
      setInterval(res => {
        this.time = new Date().getTime();
      }, 1000);
    }
  },
  mounted() {
    this.countdown();
  }
};
</script>

<style scoped lang="less">
.filters {
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
