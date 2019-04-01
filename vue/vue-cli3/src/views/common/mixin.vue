<template>
  <div class="mixin">
    <p class="back"><router-link to="/">返回</router-link></p>
    <p class="title">
      vuex mixins
    </p>
    <p class="border-bottom">
      说明: 相当于是把另外一个组件混入到当前组件，2个组件可以使用
      对方组件的定义的 ‘data’ ‘methods’
    </p>
    <p>当前组件内部Data 没有message</p>
    <p>methods内部没有update,remove</p>
    <p>使用了全局的Mixin</p>
    <p>
      全局mixin: <span>{{ message }}</span>
    </p>
    <p>
      <button @click="update('改变全局mixin值为1111')">更新</button>
      <button @click="remove">删除</button>
    </p>
    <p>当前组件内部Data user</p>
    <p>methods内部没有updateUser,removeUser</p>
    <p>使用了局部的Mixin</p>
    <p>
      局部mixin: <span>{{ user }}</span>
    </p>
    <p>
      <button @click="updateUser('改变局部mixin值为1111')">更新</button>
      <button @click="removeUser">删除</button>
    </p>

    <p>
      示例：
    </p>
    <p>
      <img src="../../assets/img/mixins.png" alt="" />
    </p>
  </div>
</template>

<script>
const mixin = {
  data: () => ({
    user: "chenhuihui"
  }),
  methods: {
    updateUser(user) {
      this.user = user;
    },
    removeUser() {
      this.user = "";
    }
  }
};
export default {
  name: "mixin",
  mixins: [mixin]
};
</script>

<style scoped lang="less">
.mixin {
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
