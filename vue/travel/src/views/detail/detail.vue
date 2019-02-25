<template>
  <div class="city-detail">
    <detail-banner
      :img="img"
      :imgs="imgs"
      :sightName="sightName"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from "./components/Banner";
import DetailList from "./components/List";
import DetailHeader from "./components/Header";
export default {
  name: "city-detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data: () => ({
    imgs: [],
    img: "",
    sightName: "",
    list: []
  }),
  methods: {
    getDetailData() {
      this.$http
        .get("/json/detail.json", { params: { id: this.$route.params.id } })
        .then(res => {
          this.getDetailSucc(res);
        });
    },
    getDetailSucc(res) {
      console.log(res);
      let {
        gallaryImgs = [],
        bannerImg = "",
        sightName = "",
        categoryList = []
      } = res.data.data;
      this.imgs = gallaryImgs;
      this.img = bannerImg;
      this.sightName = sightName;
      this.list = categoryList;
    }
  },
  mounted() {
    this.getDetailData();
  }
};
</script>

<style scoped lang="less">
.content {
  height: 50rem;
}
</style>
