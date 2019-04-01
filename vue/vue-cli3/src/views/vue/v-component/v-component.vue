<template>
  <div class="component">
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
import childrenParent from "./children-parent/parent";
import parentChildren from "./parent-children/parent";
import childrenChildren from "./children-children/parent";
import parent from "./$parent/parent";
import children from "./$children/parent";
import VModel from "./v-model/parent";
export default {
  name: "v-component",
  data: () => ({
    switchList: [
      { name: "父传子", type: "parentChildren" },
      { name: "子传父", type: "childrenParent" },
      { name: "子传子", type: "childrenChildren" },
      { name: "this.$parent", type: "parent" },
      { name: "this.$children", type: "children" },
      { name: "v-model", type: "VModel" }
    ],
    currentComponent: "parent"
  }),
  components: {
    parent,
    children,
    childrenParent,
    parentChildren,
    childrenChildren,
    VModel
  },
  methods: {
    handleClick(type) {
      this.currentComponent = type;
    }
  }
};
</script>

<style scoped lang="less">
.component {
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
