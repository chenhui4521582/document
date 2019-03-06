<template>
  <div class="goods">
    <div class="wrapper">
      <div class="slide" ref="slide">
        <ul v-if="hasData">
          <li v-for="(item, index) of goods" :key="index">
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="content">

      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
export default {
  name: 'goods',
  data: () => ({
    goods: {}
  }),
  created () {
    this.$http.get('./json/data.json').then(res => {
      let { goods = {} } = res.data
      this.goods = goods
    })
  },
  computed: {
    hasData () {
      return !!this.goods.length
    }
  },
  mounted () {
    this.$nextTick(() => {
      let element = this.$refs.slide
      let scroll = new BetterScroll(element)
    })
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
    height: 100%;
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
        padding: 0 .25rem;
        line-height: .28rem;
      }
    }
    .content {
      flex: 1;
      overflow: hidden;
      height: 100%;
    }
  }
}
</style>
