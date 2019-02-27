<template>
  <div class="login-enter">
    <router-link :to="{ path: '/examples/loginEnter/my' }"
      >用户中心</router-link
    >
  </div>
</template>

<script>
export default {
  name: "LoginEnter"
};
</script>

<style scoped lang="less">
.login-enter {
  .text-left();
}
</style>
