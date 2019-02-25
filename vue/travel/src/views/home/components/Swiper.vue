<template>
  <div class="swiper">
    <swiper :options="options" v-if="showSwiper">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "home-swiper",
  components: {
    swiper,
    swiperSlide
  },
  props: {
    swiperList: Array
  },
  data: () => ({
    options: {
      pagination: ".swiper-pagination",
      autoplay: 3000
    }
  }),
  computed: {
    showSwiper() {
      return !!this.swiperList.length;
    }
  }
};
</script>

<style lang="less">
.swiper .swiper-pagination-bullet {
  background: #fff !important;
}
.swiper {
  overflow: hidden;
  height: 0;
  padding-bottom: 31.2%;
  .swiper-img {
    width: 100%;
  }
}
</style>
