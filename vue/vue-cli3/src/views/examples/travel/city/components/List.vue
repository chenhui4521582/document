<template>
<div class="city-list" ref="wrapper">
  <div class="wrapper">
    <div class="area ">
      <div class="title border-topbottom">当前城市</div>
      <div class="items">
        <div class="item ">
          <div class="btn">{{travel.city}}</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">热门城市</div>
      <div class="items">
        <div class="item"
           v-for="item in hotCities"
           :key="item.id"
           @click="handleCityClick(item.name)"
        >
          <div class="btn">{{item.name}}</div>
        </div>
      </div>
    </div>
    <div class="area"
         v-for="(item, key) in cities"
         :key="key"
         ref="letter"
    >
      <div class="title border-topbottom">{{key}}</div>
      <div class="items-list">
        <div class="item border-bottom"
           v-for="innerItem in item"
           :key="innerItem.id"
           @click="handleCityClick(item.name)"
        >{{innerItem.name}}</div>
      </div>
    </div>
  </div>
  <div class="go-top iconfont" @click="goTop" v-show="showTop">
    &#xe615;
  </div>
</div>
</template>

<script>
import betterScroll from 'better-scroll'
import { mapState, mapActions } from 'vuex'
export default {
  name: "List",
  props: {
    cities: Object,
    hotCities: Array,
    letter: Number
  },
  data: () => ({
	showTop: false
  }),
  methods: {
    ...mapActions({
      changeCity: 'travel/changeCity'
    }),
    goTop () {
      this.scroll.scrollToElement(this.$refs.wrapper, '100')
	  this.showTop = false
    },
	handleCityClick(city) {
      this.changeCity(city)
      this.$router.push({path:'/examples/travel'})
    }
  },
  mounted (){
    this.scroll = new betterScroll(this.$refs.wrapper);
  },
  watch: {
    letter () {
	  if(this.letter == 0 || this.letter == null){
		this.showTop = false
	  }else{
		this.showTop = true
	  }
      if(this.letter >= 0 && this.letter <= 21){
        let element = this.$refs.letter[this.letter];
        this.scroll.scrollToElement(element)
      }
    }
  },
  computed: {
	...mapState({travel:'travel', dome: 'demo'})
  }


}
</script>

<style scoped lang="less">
.border-topbottom{
  &:before{
    border-color: #c1c1c1;
  }
  &:after{
    border-color: #c1c1c1;
  }
}
.city-list{
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 1.6rem;
  right: 0;
  bottom: 0;
}
.title{
  padding: 0 .2rem;
  background: #eee;
  line-height: .56rem;
  color: #666666;
}
.items{
  overflow: hidden;
  padding: .1rem .6rem .1rem .1rem;
  .item{
    float: left;
    width: 33.33%;
    .btn{
      margin: .05rem;
      padding: .08rem 0;
      text-align: center;
      border: 1px solid #ccc;
      border-radius: 3px;
      font-size: .24rem;
    }
  }
}
.items-list{
  overflow: hidden;
  .item{
    line-height: .68rem;
    padding-left: .2rem;
    color: #666;
    font-size: .24rem;
  }
}
.go-top{
  position: fixed;
  bottom: .8rem;
  right: .6rem;
  width: .8rem;
  height: .8rem;
  text-align: center;
  line-height: .8rem;
  .font-size(50);
}
</style>