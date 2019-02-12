<template>
  <div class="switch">
    <div class="back">
      <router-link to="/" class="back">返回</router-link>
    </div>
    <vee-switch v-model="show"/>
  </div>
</template>

<script>
export default {
  name: 'view-vee-switch',
  data: () => ({
    show: false,
    show1:222,
  })
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
