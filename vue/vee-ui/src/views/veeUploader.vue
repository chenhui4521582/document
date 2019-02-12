<template>
  <div class="vee-uploader">
    <div class="back">
      <router-link to="/" class="back">返回</router-link>
    </div>
    <div class="uploader-body">
      <vee-uploader @uploadSubmit="submit"></vee-uploader>
    </div>
  </div>

</template>

<script>
export default {
  name: "view-uploader",
  methods: {
    submit (url) {
      console.log(url);
    }
  }
}
</script>

<style scoped lang="less">
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
  .uploader-body{
    padding:10px;
  }
</style>
