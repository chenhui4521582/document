<template>
<div class="modal">
  <div class="back">
    <router-link to="/" class="back">返回</router-link>
  </div>
  <button @click="modalOpen">显示modal</button>
  <vee-modal
    :visible="visible"
    :options="options"
    v-on:modalCancel="modalCancel"
    v-on:modalConfirm="modalConfirm"
  >
    <p slot="body">测试测试测试内容</p>
  </vee-modal>
</div>
</template>

<script>
export default {
  name: 'view-vee-modal',
  data: () => ({
    visible: false,
    options: {}
  }),
  methods: {
    modalCancel () {
      this.visible = false
    },
    modalConfirm () {
      this.visible = false
    },
    modalOpen () {
      this.visible = true
    }
  }
}
</script>

<style scoped lang="less">
  .back{
    .font-size(30);
    text-align: left;
    a{
      display: inline-block;
      padding: 0 20px;
      height: 30px;
      line-height: 30px;
      text-decoration: none;
      background: #00b3ee;
      color: #fff;
    }
  }
</style>
