<template>
  <div class="cart-control">
    <transition name="move">
      <span
        class="remove iconfont"
        @click="handleRemove"
        v-show="showRemove"
      >
        &#xe676;
        </span>
    </transition>

    <span
      v-show="showRemove"
      class="number"
    >
      {{ newFood.count }}
    </span>

    <span
      class="add iconfont"
      @click.stop.prevent="handleAdd"
    >
      &#xe661;
    </span>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'cart-control',
  props: {
    food: Object
  },
  data: () => ({
    newFood: {}
  }),
  methods: {
    ...mapMutations(['UPDATEORDER', 'RECEIVEEVENT']),
    handleRemove () {
      if (!this.newFood.count) return false
      this.newFood.count -= 1
      this.UPDATEORDER(this.newFood)
    },
    handleAdd (e) {
      if (!this.newFood.count) {
        this.newFood = Object.assign({}, this.food, { count: 1 })
      } else {
        this.newFood.count += 1
      }
      this.UPDATEORDER(this.newFood)
      this.RECEIVEEVENT(e.target)
    }
  },
  computed: {
    showRemove () {
      return !!(this.newFood.count > 0)
    }
  },
  mounted () {
    // console.log(this.food)
  }
}
</script>

<style lang="less" scope>
  .cart-control{
    width:1.36rem;
    height: .4rem;
    line-height: .4rem;
    color: rgb(0, 160, 220);
    position: relative;
    span {
      position: absolute;
      display: block;
      width: .4rem;
      height: .4rem;
      transform-origin:50% 50%;
    }
    .add {
      right: 0;
      top: 0;
      font-size: .43rem;
      text-align:left;
    }
    .number {
      top: 0;
      left: .4rem;
      width: .56rem;
      line-height: .4rem;
      font-size: .32rem;
      text-align: center;
      color: #666;
    }
    .remove {
      left: 0;
      top: 0;
      font-size: .38rem;
    }

  }
  .move-enter {
    opacity: 0;
    transform: translateX(1rem) rotate(0);
  }
  .move-enter-to {
    opacity: 1;
    transform:translateX(0) rotate(190deg);
  }
  .move-leave{
    opacity: 1;
    transform:translateX(0) rotate(0);
  }
  .move-leave-to {
    opacity: 0;
    transform: translateX(1rem) rotate(190deg);
  }
  .move-enter-active,.move-leave-active {
    transition: all .5s
  }
</style>
