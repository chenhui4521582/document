<template>
<div class="shopping-car">
  <div class="center">
    <div class="left">
      <div class="left-wrapper">
        <div class="left-icon" :class="{active: countNumber}">
          <i class="iconfont">&#xe8c2;</i>
        </div>
        <div class="num" v-if="countNumber">{{ countNumber }}</div>
      </div>
      <div class="price" >
         ￥ {{totalPrice}} 元
      </div>
      <div class="desc">{{ desc }}</div>
    </div>
    <div class="right">
      <div class="pay" v-if="!payDesc" :class="{ 'not-enough': !payDesc}">{{ seller.minPrice }}元 起送</div>
      <div class="pay" v-else @click.stop.prevent="pay" :class="{ 'enough': payDesc}">去结算</div>
    </div>
  </div>
  <div class="bolls-container">
    <transition
      v-for="(item, index) in bolls"
      :key="index"
      name="drap"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:after-enter="afterEnter"
    >
      <div class="boll" v-show="item.show">
        <div class="line line-hook"></div>
      </div>
    </transition>

  </div>
</div>
</template>

<script>
import Velocity from 'velocity-animate'
import { mapState } from 'vuex'
export default {
  name: 'shopping-car',
  data: () => ({
    bolls: [
      {show: false},
      {show: false},
      {show: false},
      {show: false},
      {show: false}
    ]
  }),
  methods: {
    pay () {

    }
  },
  computed: {
    ...mapState(['order', 'seller', 'event']),
    countNumber () {
      let number = 0
      for (var i in this.order) {
        number += this.order[i].count
      }
      return number
    },
    totalPrice () {
      let price = 0
      for (var i in this.order) {
        price += this.order[i].count * this.order[i].price
      }
      return price
    },
    payDesc () {
      return this.totalPrice >= this.seller.minPrice
    },
    desc () {
      return this.seller.minPrice - this.totalPrice <= 0 ? '' : `另需配送费￥ ${this.seller.minPrice - this.totalPrice} 元`
    }
  },
  methods: {
    beforeEnter (el) {
      let eventStyle = this.event.getBoundingClientRect()
      let y = window.innerHeight - eventStyle.top - 40
      let x = eventStyle.left - 30
      let xelement = document.querySelector('.line-hook')
      el.style.transform = `translate3d(0, -${y}px, 0)`
      xelement.style.transform = `translate3d(${x}px, 0, 0)`
    },
    enter (el,done) {
      let xelement = document.querySelector('.line-hook')
      Velocity(el,{ 
        transform: `translate3d(0, 0, 0))`
      },
      {
        duration: 400,
      })
      Velocity(xelement,{ 
        transform: `translate3d(0, 0, 0))`
      },
      {
        complete: done
      })
    },
    afterEnter (el) {
      // this.bolls[1].show = false
    }
  },
  watch: {
    event () {
      this.bolls[1].show = true
    }
  }
}
</script>

<style lang="less" scope>
.shopping-car {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: .94rem;
  .center {
    display: flex;
    height: 100%;
    background: #141d27;
    font-size: 0;
    color: rgba(255, 255, 255, 0.4);
    justify-content: space-between;
    .left {
      .left-wrapper {
          display: inline-block;
          vertical-align: top;
          position: relative;
          margin: -.2rem .24rem 0;
          padding: .12rem;
          width: 1.12rem;
          height: 1.12rem;
          box-sizing: border-box;
          border-radius: 50%;
          background: #141d27;
          .left-icon {
            width: 100%;
            height: 100%;
            line-height: .88rem;
            border-radius: 50%;
            text-align: center;
            background: #2b343c;
            .iconfont {
              vertical-align: middle;
              font-size: .55rem;
            }
            &.active{
              background: #009fde;
            }
            &.active .iconfont{
              color: #fff;
            }
          }
          .num {
            position: absolute;
            top: 0;
            right: 0;
            padding: 0 .17rem;
            text-align: center;
            border-radius: .32rem;
            font-size: .18rem;
            font-weight: 700;
            color: #fff;
            background: rgb(240, 20, 20);
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
          }
      }
      .price {
        display: inline-block;
        vertical-align: top;
        margin-top: 12px;
        line-height: 24px;
        padding-right: 12px;
        box-sizing: border-box;
        border-right: 1px solid rgba(255, 255, 255, 0.1);
        font-size: 16px;
        font-weight: 700;
        &.highlight {
          color: #fff;
        }
      }
      .desc {
        display: inline-block;
        vertical-align: top;
        margin: 12px 0 0 12px;
        line-height: 24px;
        font-size: 10px;
      }
    }
    .right {
      flex: 0 0 2.01rem;
      width: 2.01rem;
      background: #2b343c;
      cursor: pointer;
      .pay {
        height: .94rem;
        line-height: .94rem;
        text-align: center;
        font-size: .24rem;
        font-weight: 700;
        &.not-enough {
          background: #2b333b;
        }
        &.enough {
          background: #00b43c;
          color: #fff;
        }
      }

    }
  }
  .bolls-container{
    .boll{
      position: fixed;
      z-index: 10;
      left: .65rem;
      bottom: .45rem;
      transform:translate3d(0,0,0);
      .line{
        width: .32rem;
        height: .32rem;
        border-radius: 50%;
        background: red;
        transform:translate3d(0,0,0);
      }
    }
  }
}
</style>
