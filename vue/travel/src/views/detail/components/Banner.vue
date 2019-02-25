<template>
  <div>
    <div class="banner" @click="showGallery">
      <img :src="img" alt="" />
      <div class="banner-info">
        <div class="banner-tittle">
          {{ this.sightName }}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{ this.imgs.length }}
        </div>
      </div>
    </div>
    <transition name="fade">
      <vee-gallery
        :visible="visible"
        :imgs="imgs"
        @galleryClosed="closedGallery"
      ></vee-gallery>
    </transition>
  </div>
</template>

<script>
export default {
  name: "detail-banner",
  data: () => ({
    visible: false
  }),
  props: {
    img: String,
    imgs: {
      type: Array,
      default: () => {
        return [];
      }
    },
    sightName: String
  },
  methods: {
    showGallery() {
      this.visible = true;
    },
    closedGallery() {
      this.visible = false;
    }
  }
};
</script>

<style scoped lang="less">
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  .banner-img {
    width: 100%;
  }
  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    line-height: 0.6rem;
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
    .banner-tittle {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }
    .banner-number {
      height: 0.32rem;
      line-height: 0.32rem;
      margin-top: 0.14rem;
      padding: 0 0.4rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;
      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>
