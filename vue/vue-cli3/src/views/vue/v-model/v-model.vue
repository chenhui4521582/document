<template>
  <div class="component_slot">
    <p class="back">
      <router-link to="/">返回</router-link>
    </p>
    <p class="title">
      vue v-model
    </p>
    <p class="border-bottom">
      说明: vue 的双向数据绑定
    </p>
    <p>
      示例：单input框
    </p>
    <p class="border-bottom">
      <input type="text" v-model="input" /> <span> 输入的值: {{ input }}</span>
    </p>
    <p>
      示例：单选框
    </p>
    <p class="border-bottom">
      <input type="radio" v-model="radio" value="man" /><label>男</label>
      <input type="radio" v-model="radio" value="woman" /><label>女</label>
      <br />
      <span>单选框: {{ radio }}</span>
    </p>
    <p>
      示例：复选框
    </p>
    <p class="border-bottom">
      <input type="checkbox" v-model="checked" value="" />
      <label> 复选框: {{ checked }}</label>
    </p>
    <p>
      示例：多个复选选框
    </p>
    <p class="border-bottom">
      <input type="checkbox" v-model="moreChecked" value="BM" />
      <label>宝马</label>
      <input type="checkbox" v-model="moreChecked" value="BC" />
      <label>奔驰</label>
      <input type="checkbox" v-model="moreChecked" value="AD" />
      <label>奥迪</label>
      <input type="checkbox" v-model="moreChecked" value="BSJ" />
      <label>保时捷</label>
      <input type="checkbox" v-model="moreChecked" value="BL" />
      <label>宾利</label>
      <br />
      <template>
        <span>多选框: </span>
        <span v-for="(item, index) in moreChecked" :key="index"
          >{{ item }}-</span
        >
      </template>
    </p>
    <p>
      示例：下啦框
    </p>
    <p class="border-bottom">
      <select name="" id="" v-model="select">
        <option value="BM">宝马</option>
        <option value="BC">奔驰</option>
        <option value="BSJ">保时捷</option>
        <option value="AD">奥迪</option>
        <option value="BL">宾利</option>
      </select>
      <span>下啦框: {{ select }}</span>
    </p>

    <p>
      示例：时间框
    </p>
    <p class="border-bottom">
      <input type="date" v-model="date" /> <span>时间: {{ date }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "v-model",
  data: () => ({
    input: "",
    radio: "man",
    checked: "",
    moreChecked: [],
    date: "",
    select: "BC"
  })
};
</script>

<style scoped lang="less">
.component_slot {
  .text-left();
  p {
    padding: 10px 0;
  }
  .border-bottom {
    border-bottom: 1px solid #f1f1f1;
  }
  .title {
    text-align: center;
  }
}
</style>
