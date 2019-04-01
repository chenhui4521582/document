<template>
  <button :class="[active ? 'btn active' : 'btn']" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="less">
.btn {
  display: inline-block;
  padding: 5px 10px;
  background: #999;
  cursor: pointer;
  font-size: 14px;
  color: #fff;
  border: none;
  &:hover {
    background: #00b3ee;
  }
  &.active {
    background: #00b3ee;
  }
}
</style>
