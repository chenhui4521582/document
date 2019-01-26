<template>
  <div class="modal">
    <p class="back"><router-link to="/">返回</router-link></p>
    <p class="title">
      全局公用组件modal
    </p>
    <p class="border-bottom">
      说明: 这是一个全局modal 对话框
    </p>
    <p>
      <button @click="openModal">显示modal</button>
    </p>
    <Modal
      :visible="visible"
      :options="options"
      v-on:modalCancel="modalCancel"
      v-on:modalConfirm="modalConfirm"
    >
      <p slot="body">测试测试测试内容</p>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'modal',
  data: () => ({
    visible: false,
    options: {}
  }),
  methods: {
    openModal () {
      this.options = {
        title: '提示'
      }
      this.visible = true
    },
    modalCancel () {
      this.visible = false
    },
    modalConfirm () {
      this.visible = false
    }
  }

}
</script>

<style scoped lang="less">
.modal{
  .text-left();
  p{
    padding: 10px 0;
  span{
    color: #0a8cff;
  }
  }
  .border-bottom{
    border-bottom: 1px solid #f1f1f1;
  }
  .title{
    text-align: center;
  }
}
</style>
