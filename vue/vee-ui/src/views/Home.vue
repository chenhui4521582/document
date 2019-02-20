<template>
  <div class="home">
    <div class="list">
      <router-link
        v-for="item in list"
        :key="item.name"
        :to="{path:item.url}"
        replease
      >
        {{item.name}}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data: () => ({
    list: [
      { name: 'veeToast', url: '/view-toast' },
      { name: 'veeSwitch', url: '/view-switch' },
      { name: 'veeModal', url: '/view-modal' },
      { name: 'veeSlide', url: '/view-slide' },
      { name: 'veeScrollSlide', url: '/view-scroll-slide' },
      { name: 'veeUploader', url: '/view-uploader' },
      { name: 'veeCountdown', url: '/view-countdown' },
      { name: 'veeGallery', url: '/view-gallery' }
    ]
  })
}
</script>
<style lang="less" scoped>
  .home{
    .text-left();
  }
  .list{
    display: inline-block;
    a{
      display: block;
      padding: 5px 10px;
      text-decoration: none;
      color: #fff;
      background: #999;
      margin-bottom: 10px;
    }
  }
</style>
