<template>
<div class="icons">
  <swiper :options="options" refs="swiper" @someSwiperEvent="swiperCallback">
    <swiper-slide
      v-for="(item, index) in pages"
      :key="index"
    >
      <div
        class="icon-list"
        v-for="innerItem in item"
        :key="innerItem.id"
      >
        <div class="icon">
          <img :src="innerItem.imgUrl" alt="">
        </div>
        <p>{{innerItem.desc}}</p>
      </div>
    </swiper-slide>
  </swiper>
</div>
</template>

<script>
export default {
  name: "home-icons",
  props: {
	iconList: Array
  },
  data: () => ({
    options: {}
  }),
  methods: {
    swiperCallback(e){

    }
  },
  computed:{
    pages () {
      let pages = [];
      this.iconList.map(( item, index ) => {
        let page = Math.floor (index / 8);
        if(!pages[page]){
          pages[page] = []
        }
        pages[page].push(item);
      })
      return pages;
    }
  }
}
</script>

<style scoped lang="less">
.icons {
 .icon-list {
    position: relative;
    float: left;
    width: 25%;
    height: 0;
    overflow: hidden;
    padding-bottom: 25%;
    text-align: center;

    .icon {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: .44rem;

      text-align: center;
      padding: .1rem;

      img {
        vertical-align: top;
        margin: 0 auto;
        height: 100%;
      }
    }

    p {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: .44rem;
      line-height: .44rem;
    }
  }
}
</style>