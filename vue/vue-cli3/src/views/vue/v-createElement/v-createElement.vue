<template>
  <div class="createElement">
    <p class="back">
      <router-link to="/">返回</router-link>
    </p>
    <div class="menuList border-bottom">
      <span
        v-for="(item, i) in switchList"
        :key="i"
        :class="[
          currentComponent == item.type ? 'active itemlist' : 'itemlist'
        ]"
        @click="handleClick(item.type)"
      >
        {{ item.name }}
      </span>
    </div>
    <div class="example">
      <component :is="currentComponent"></component>
    </div>
  </div>
</template>

<script>
import moreComponent from "./component/moreComponent";
import directiveVif from "./component/directiveVif";
import directiveVfor from "./component/directiveVfor";
import directiveVmodel from "./component/directiveVmodel";
import chat from "./component/chat";
export default {
  name: "v-createElement",
  data: () => ({
    switchList: [
      { name: "渲染多个相同的字组件", type: "moreComponent" },
      { name: "指令的实现v-if", type: "directiveVif" },
      { name: "指令的实现v-for", type: "directiveVfor" },
      { name: "指令的实现v-model", type: "directiveVmodel" },
      { name: "模拟聊天", type: "chat" }
    ],
    currentComponent: "moreComponent"
  }),
  components: {
    moreComponent,
    directiveVif,
    directiveVfor,
    directiveVmodel,
    chat
  },
  methods: {
    handleClick(current) {
      this.currentComponent = current;
    }
  }
};
</script>

<style scoped lang="less">
.createElement {
  .text-left();
  .menuList {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    span {
      padding: 5px 10px;
      margin: 5px;
      background: #999;
      color: #fff;
    }
    .active {
      background: #666;
    }
  }
  p {
    padding: 10px 0;
  }
  .border-bottom {
    border-bottom: 1px solid #ccc;
  }
  .title {
    text-align: center;
  }
}
</style>
