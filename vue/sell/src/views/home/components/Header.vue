<template>
  <div class="home-header">
    <div class="wrapper">
      <div class="sller-img">
        <img :src="seller.avatar" alt="">
      </div>
      <div class="seller-detail">
        <div class="name">
          <div class="icon"></div>
          <div class="value">{{seller.name}}</div>
        </div>
        <div class="delivery">
          {{seller.description}} / {{seller.deliveryTime}}分钟送达
        </div>
        <div class="preferential">
          <div class="icon" :class="preferentialIcon"></div>
          <div class="value">
            {{preferentialValue}}
          </div>
        </div>
      </div>
    </div>
    <div class="background">
        <img :src="seller.avatar" width="100%" height="100%">
    </div>
    <div class="showBtn" @click="show">
      <span>{{preferentialLength}}个</span>
      <span class="iconfont">&#xe61e;</span>
    </div>
    <div v-show="detailShow" class="detail" transition="fade">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'home-header',
  data: () => ({
    iconList: ['decrease', 'discount', 'special', 'invoice', 'guarantee'],
    detailShow: false
  }),
  methods: {
    show () {
      this.detailShow = true
    },
    hide () {
      this.detailShow = false
    }
  },
  computed: {
    ...mapState(['seller']),
    preferentialIcon () {
      if (this.seller.supports) {
        if (this.seller.supports[0]) {
          return this.iconList[this.seller.supports[0].type]
        }
      }
      return ''
    },
    preferentialValue () {
      if (this.seller.supports) {
        if (this.seller.supports[0]) {
          return this.seller.supports[0].description
        }
      }
      return ''
    },
    preferentialLength () {
      if (this.seller.supports) {
        return this.seller.supports.length
      }
      return 0
    }
  }
}
</script>

<style lang="less" scope>
.fade-enter-to,.fade-leave {
  opacity: 1
}
.fade-enter-active,.fade-leave-active {
  transition: all .2s;
}
.home-header {
  position: relative;
  color: #fff;
  .wrapper {
    padding: .48rem .25rem .36rem .48rem;
    overflow: hidden;
    position: relative;
    z-index: 2;
    background: rgba(7, 17, 27, 0.5);
    .sller-img {
      float: left;
      margin-right: .32rem;
      width: 1.28rem;
      height: 1.28rem;
      border-radius:3px;
      overflow: hidden;
      img {
        vertical-align: top;
        width: 100%;
        height: 100%;
      }
    }
    .seller-detail{
      float: left;
      .name {
        overflow: hidden;
        margin: .04rem 0 .16rem 0;
        .icon {
          float: left;
          margin-right: .12rem;
          width: .6rem;
          height: .36rem;
          background: url(./img/brand@2x.png) no-repeat 0 0;
          background-size: 100% 100%;
        }
        .value {
          float: left;
          line-height: .36rem;
          font-size:.32rem;
          font-weight: bold;
        }
      }
      .delivery {
        margin-bottom: .2rem;
        line-height: .24rem;
        font-size: .24rem;
      }
      .preferential {

        .icon {
          float: left;
          margin-right: .12rem;
          width: .24rem;
          height: .24rem;
          background-size: .24rem 124rem;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          &.decrease {
            background-image: url('./img/decrease_1@2x.png')
          }

          &.discount{
            background-image: url('./img/discount_1@2x.png')
          }
          &.guarantee{
            background-image: url('./img/guarantee_1@2x.png')
          }
          &.invoice{
            background-image: url('./img/invoice_1@2x.png')
          }
          &.special{
            background-image: url('./img/special_1@2x.png')
          }
        }
        .value {
          float: left;
          line-height: .24rem;
          font-size: .2rem;
        }
      }
    }
  }
  .background {
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .showBtn {
    position: absolute;
    right: .5rem;
    bottom: .28rem;
    z-index: 3;
    border-radius: 30px;
    background: rgba(0,0,0,.3);
    text-align: center;
    line-height: .5rem;
    padding: 0 .15rem;
    span {
      font-size: .2rem
    }
    .iconfont {
      color: #fff;
      font-size: .2rem
    }
  }
  .detail {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 5;
    background: rgba(0,0,0,.6);
  }
}
</style>
