<template>
  <div class="my">
    <div class="user" v-if="isLogin">
      {{ userName }}
      <button @click="logout">退出</button>
    </div>
    <div class="no-login" v-else>
      尚未登录
      <router-link to="/examples/loginEnter/login">去登录</router-link>
    </div>
  </div>
</template>

<script>
import { LocalStorage } from "@/util/util";
export default {
  name: "my",
  data: () => ({
    isLogin: false,
    userName: ""
  }),
  methods: {
    logout() {
      this.$veeToast.success("退出成功", 2000, () => {
        LocalStorage.remove("user");
        this.$router.push({ path: "/examples/loginEnter/login" });
      });
    }
  },
  created() {
    this.userName = LocalStorage.get("user");
    this.isLogin = this.userName && true;
  }
};
</script>

<style scoped lang="less"></style>
