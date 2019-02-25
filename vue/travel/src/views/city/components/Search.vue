<template>
  <div>
    <div class="city-search">
      <input type="text" placeholder="请输入城市名或者拼音" v-model="keyword" />
    </div>
    <div class="search-content" v-show="keyword" ref="search">
      <ul>
        <li
          class="secrch-item border-bottom"
          v-for="item in list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{ item.name }}
        </li>
        <li class="secrch-item border-bottom" v-show="hasListData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import BetterScroll from "better-scroll";
import { mapActions } from "vuex";
export default {
  name: "Seach",
  props: {
    cities: Object
  },
  data: () => ({
    keyword: "",
    timer: null,
    list: []
  }),
  methods: {
    ...mapActions({
      changeCity: "travel/changeCity"
    }),
    handleCityClick(city) {
      this.changeCity(city);
      this.$router.push({ path: "/examples/travel" });
    }
  },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.search);
  },
  watch: {
    keyword() {
      let result = [];
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        for (let i in this.cities) {
          this.cities[i].forEach(item => {
            if (
              item.spell.indexOf(this.keyword) > -1 ||
              item.name.indexOf(this.keyword) > -1
            ) {
              result.push(item);
            }
          });
        }
        this.list = result;
      }, 100);
    }
  },
  computed: {
    hasListData() {
      return !this.list.length;
    }
  }
};
</script>

<style scoped lang="less">
.city-search {
  padding: 0.1rem;
  background: @backgroundColor;
  input {
    width: 100%;
    line-height: 0.6rem;
    text-align: center;
    padding: 0 0.1rem;
    border: none;
    color: #666;
  }
}
.search-content {
  overflow: hidden;
  position: absolute;
  top: 1.6rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;
  z-index: 9;
  .secrch-item {
    line-height: 0.6rem;
    padding-left: 0.2rem;
    color: #666;
    background: #fff;
  }
}
</style>
