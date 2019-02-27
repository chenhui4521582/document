<template>
  <div class="componentSlot">
    <slot name="slot_header"></slot>
    <p>内部的值11111</p>
    <slot></slot>
    <slot name="slot_footer"></slot>
  </div>
</template>

<script>
export default {
  name: "childrenComponent"
};
</script>

<style scoped></style>
