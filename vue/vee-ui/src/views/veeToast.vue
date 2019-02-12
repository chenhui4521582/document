<template>
  <div class="vee-toast">
    <div class="back">
      <router-link to="/" class="back">返回</router-link>
    </div>
    <p>
      <button @click="show">默认样式</button>
      <button @click="success">Success</button>
      <button @click="warning">warning</button>
      <button @click="error">error</button>
      <button @click="loading">loading</button>
      <button @click="close">关闭</button>
    </p>
  </div>

</template>

<script>
export default {
  name: 'view-vee-toast',
  methods: {
	  show () {
	    this.$veeToast.show('默认样式', 2000 )
    },
    success () {
      this.$veeToast.success('Success样式', 20000)
    },
    warning () {
      this.$veeToast.warning('Warning样式', 2000)
    },
    error () {
      this.$veeToast.error('Error样式', 2000)
    },
    loading () {
      this.$veeToast.loading('Loading', 2000)
    },
    close () {
      this.$veeToast.close()
    }
  }
}
</script>

<style scoped lang="less">
  .vee-toast{

  }
  .back{
    .font-size(26);
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
