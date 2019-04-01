<template>
  <div
    :class="[switchShow ? 'common-switch active' : 'common-switch']"
    @click="handleChange"
  >
    <span></span>
  </div>
</template>

<script>
export default {
  name: "VueSwitch",
  data: () => ({
    switchShow: false
  }),
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleChange() {
      this.switchShow = !this.switchShow;
      this.$emit("input", this.switchShow);
    }
  }
};
</script>

<style scoped lang="less">
.common-switch {
  position: relative;
  width: 40px;
  height: 20px;
  background: rgb(255, 73, 73);
  border-radius: 10px;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  span {
    position: absolute;
    left: 1px;
    top: 1px;
    width: 18px;
    height: 18px;
    background: #fff;
    display: block;
    border-radius: 50%;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }
}
.common-switch.active {
  background: rgb(19, 206, 102);
  span {
    left: 100%;
    margin-left: -19px;
  }
}
</style>
