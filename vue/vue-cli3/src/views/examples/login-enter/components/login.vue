<template>
  <div class="login">
    <div class="mr">
      <label>用户名</label>
      <input type="text" v-model="userInfo.name" />
    </div>
    <div class="mr">
      <label>密码</label>
      <input type="text" v-model="userInfo.pwd" />
    </div>
    <div class="mr">
      <button @click="login">登录</button>
    </div>
  </div>
</template>

<script>
import { LocalStorage } from "@/util/util";
export default {
  name: "login",
  data: () => ({
    userInfo: {
      name: "",
      pwd: ""
    }
  }),
  methods: {
    login() {
      this.$veeToast.success("登录成功", 2000, () => {
        let { formWorld } = this.$route.query;

        LocalStorage.set("user", this.userInfo.name);

        formWorld && this.$router.push({ path: formWorld });
      });
    }
  }
};
</script>

<style scoped lang="less">
.login {
  .text-left;
  .mr {
    margin-bottom: 10px;
    height: 30px;
    input {
      vertical-align: top;
      height: 30px;
      line-height: 30px;
    }
  }
}
</style>
