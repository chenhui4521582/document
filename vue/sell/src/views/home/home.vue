<template>
<div class="home">
  <home-header></home-header>
  <home-horn></home-horn>
  <home-tab></home-tab>
  <router-view></router-view>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import HomeHeader from './components/Header'
import HomeHorn from './components/Horn'
import HomeTab from './components/Tab'
export default {
  name: 'home',
  data: () => ({
    alertShow: false,
    changeFile: ''
  }),
  components: {
    HomeHeader,
    HomeHorn,
    HomeTab
  },
  methods: {
    ...mapActions(['GETSTOREDATA'])
  },
  created () {
    this.GETSTOREDATA()
  },
  mounted () {

  }
}
</script>

<style lang="less" scope>
.bottom-slide{
  position: absolute;
  left: 0;
  bottom: 0rem;
  height: 2.1rem;
  width: 100%;
  text-align: center;
  background: #f1f1f1;
  p {
    height: .7rem;
    line-height: .7rem;
    border-bottom: 1px solid #666;
  }
}
.slide-enterv .slide-leave-to{
  bottom: -2.1rem;
}
.slide-enter-to,.slide-leave {
  bottom: 0
}
.slide-enter-active,.slide-leave-active {
  transition: all .3s;
}
</style>
