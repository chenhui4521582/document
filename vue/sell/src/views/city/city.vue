<template>
  <div class="city">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list
      :hotCities="hotCites"
      :cities="cities"
      :letter="letter"
    ></city-list>
    <city-alphabet
      :cities="cities"
      @change="handleLetterChange"
    ></city-alphabet>
  </div>
</template>

<script>
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";
export default {
  name: "travel-city",
  data: () => ({
    hotCites: [],
    cities: {},
    letter: null
  }),
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {
    handleLetterChange(e) {
      this.letter = e;
    },
    getCity() {
      this.$http.get("/json/city.json").then(res => {
        this.getCitySucc(res);
      });
    },
    getCitySucc(res) {
      let { hotCities, cities } = res.data.data;
      this.hotCites = hotCities;
      this.cities = cities;
    }
  },
  mounted() {
    this.getCity();
  }
};
</script>

<style scoped lang="less"></style>
