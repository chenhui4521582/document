<template>
  <div class="gallery" @click="handleClosed" v-if="visible">
    <div class="wrapper" @click.stop>
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(img,index) in imgs" :key="index">
          <img :src="img" alt="" class="gallary-img">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'vee-gallery',
  components:{
	swiper,
	swiperSlide
  },
  props: {
	visible: {
      typ: Boolean,
      default: false
    },
    imgs: {
	  type: Array,
      default: () => {
        return []
      },
      required: true
    },
    options: {
	  type: Object,
      default: () => ({})
    }
  },
  computed: {
    swiperOptions () {
      let defaultOptions = {
		observer: true,
		observeParents: true,
		paginationType: 'fraction',
		pagination: '.swiper-pagination'
      }
      return Object.assign(this.options,defaultOptions);
    }
  },
  methods: {
	handleClosed(){
	  this.$emit('galleryClosed')
    }
  }
}
</script>

<style lang="less">
.gallery .swiper-container{
  overflow: inherit;
}
.gallery{
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #000;
  .wrapper{
    height: 0;
    width: 100%;
    padding-bottom: 100%;
  }
  .gallary-img{
    width: 100%;
  }
  .swiper-pagination{
    color: #fff;
    bottom: -2rem;
  }
}
</style>
