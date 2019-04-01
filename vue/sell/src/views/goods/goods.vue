<template>
  <div class="goods">
    <div class="wrapper">
      <div class="slide" ref="slide">
        <ul>
          <li
            v-for="(item, index) of goods"
            :key="index"
            :class="{'active': index == currentIndex}"
            @click="scrollTo(index, $event)"
          >
            <span class="text border-bottom">
              <span
                v-show="item.type>0"
                class="icon"
                :class="classMap[item.type]"
              />{{item.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="content" ref="content">
        <div class="items">
          <div
            class="item"
            v-for="(item, index) in goods"
            :key="index"
            ref="children"
          >
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li
                v-for="(innerItem, index) in item.foods"
                :key="index"
              >
                <div class="icon">
                  <img width="57" height="57" :src="innerItem.icon">
                </div>
                <div class="text">
                  <h2 class="name">{{innerItem.name}}</h2>
                  <p class="desc">{{innerItem.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{innerItem.sellCount}}份</span>
                    <span>好评率{{innerItem.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{innerItem.price}}</span>
                    <span class="old"
                      v-show="innerItem.oldPrice"
                    >￥{{innerItem.oldPrice}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <cart-control :food="innerItem"/>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <shopping-car />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BetterScroll from 'better-scroll'
import ShoppingCar from '@/components/shopping-car/shopping-car.vue'
import CartControl from '@/components/cart-control/cart-control.vue'
export default {
  name: 'goods',
  data: () => ({
    goods: {},
    classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee'],
    heightArray: [0],
    scrollY: 0
  }),
  components: {
    ShoppingCar,
    CartControl
  },
  computed: {
    currentIndex () {
      for (var i = 0; i < this.heightArray.length; i++) {
        let startHeight = this.heightArray[i]
        let endHeight = this.heightArray[i + 1]
        if (!endHeight || (this.scrollY >= startHeight && this.scrollY < endHeight)) {
          return i
        }
      }
      return 0
    }
  },
  methods: {
    scrollTo (index, e) {
      let el = this.$refs.children[index]
      this.contentScroll.scrollToElement(el, 300)
    },
    scrollInit () {
      this.slideScroll = new BetterScroll(this.$refs.slide, { click: true })
      this.contentScroll = new BetterScroll(this.$refs.content, { click: true, probeType: 3 })
      this.contentScroll.on('scroll', e => {
        this.scrollY = Math.abs(Math.round(e.y))
      })
    },
    countHeight () {
      let element = this.$refs.children
      let height = 0
      element && element.map((item, index) => {
        height += item.clientHeight
        this.heightArray.push(height)
      })
    },
    async getGoodsData () {
      let res = await this.$http.get('./json/data.json')
      this.goods = res.data.goods
      this.$nextTick(function () {
        this.scrollInit()
        this.countHeight()
      })
    }
  },
  created () {
    this.getGoodsData()
  }
}
</script>

<style lang="less" scope>
.goods {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 3.48rem;
  .wrapper {
    position: absolute;
    left: 0;
    right: 0;
    bottom: .94rem;
    top: 0;
    display: flex;
    justify-content:space-around;
    .slide {
      overflow: hidden;
      height: 100%;
      width: 1.6rem;
      background: #f3f5f7;
      li {
        display: table;
        height: 1.08rem;
        width: 1.6rem;
        padding: 0 .2rem;
        line-height: 14px;
        &.active {
          background: #fff;
          .text {
            color: #333;
          }
        }
        .icon {
          display: inline-block;
          vertical-align: top;
          width: .24rem;
          height: .24rem;
          margin-right: .04rem;
          background-size: .24rem .24rem;
          background-repeat: no-repeat;
          &.decrease{
            background-image: url('./img/discount_3@2x.png')
          }
          &.discount {
            background-image: url('./img/discount_3@2x.png')
          }
          &.guarantee {
            background-image: url('./img/guarantee_3@2x.png')
          }
          &.invoice {
            background-image: url('./img/invoice_3@2x.png')
          }
          &.special {
            background-image: url('./img/special_3@2x.png')
          }
        }
        .text {
          display: table-cell;
          width: 1.12rem;
          vertical-align: middle;
          font-size: .2rem;
          color: #666;
        }
      }
    }
    .content {
      flex: 1;
      overflow: hidden;
      height: 100%;
      .items {
        .item {
          .title {
            padding-left: .28rem;
            height: .52rem;
            line-height: .52rem;
            border-left: .04rem solid #d9dde1;
            font-size: .24rem;
            color: rgb(147, 153, 159);
            font-weight: normal;
            background: #f3f5f7;
          }
          li {

            margin: 0 .36rem;
            padding: .36rem 0;
            display: flex;
            justify-content: flex-start;
            .icon {
              margin-right: .2rem;
              width: 1.14rem;
              height: 1.14rem;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .text {
              position: relative;
              flex: 1;
              .name {
                margin: .04rem 0 .16rem 0;
                height: .28rem;
                line-height: .28rem;
                font-size: .28rem;
                color: rgb(7, 17, 27);
              }
              .desc,.extra {
                line-height: .2rem;
                font-size: .2rem;
                color: rgb(147, 153, 159);
              }
              .desc {
                line-height: .24rem;
                margin-bottom: .16rem;
              }
              .extra {
                .count {
                  margin-right: .24rem;
                }
              }
              .price {
                font-weight: 700;
                line-height: 24px;
                .now {
                  margin-right: 8px;
                  font-size: 14px;
                  color: rgb(240, 20, 20);
                }
                .old {
                  text-decoration: line-through;
                  font-size: 10px;
                  color: rgb(147, 153, 159);
                }
              }
              .cartcontrol-wrapper {
                position: absolute;
                right: 0;
                bottom: .05rem;
              }
            }

          }
        }
      }
    }
  }
}
</style>
