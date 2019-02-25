<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
export default {
  name: "travel-home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data: () => ({
    iconList: [],
    recommendList: [],
    swiperList: [],
    weekendList: []
  }),

  methods: {
    getHomeData() {
      this.$http("/json/index.json").then(res => {
        this.getHomeDataSucc(res);
      });
    },
    getHomeDataSucc(res) {
      let {
        iconList = [],
        recommendList = [],
        swiperList = [],
        weekendList = []
      } = res.data.data;
      this.iconList = iconList;
      this.recommendList = recommendList;
      this.swiperList = swiperList;
      this.weekendList = weekendList;
    }
  },
  mounted() {
    this.getHomeData();
  },
  activated() {
    console.log("activated");
  }
};
</script>

<style scoped lang="less"></style>
