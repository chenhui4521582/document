<template>
<div class="countdown">
  <div class="back">
    <router-link to="/" class="back">返回</router-link>
  </div>
  <p v-TimeCountdown="time"></p>
  <button @click="reset">重置</button>
</div>
</template>

<script>
export default {
  name: "view-countdown",
  data: () => ({
    time: new Date().getTime() + 10000
  }),
  methods: {
    reset () {
      this.time = new Date().getTime() + 10000
    }
  }
}
</script>

<style scoped lang="less">
.back{
  .font-size(30);
  text-align: left;
  a{
    display: inline-block;
    padding: 0 20px;
    height: 30px;
    line-height: 30px;
    text-decoration: none;
    background: #00b3ee;
    color: #fff;
  }
}
</style>
