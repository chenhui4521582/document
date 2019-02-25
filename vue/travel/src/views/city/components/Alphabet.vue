<template>
  <div class="alphabet">
    <div
      class="item"
      v-for="(item, index) in list"
      :key="item"
      ref="letter"
      @click="handleChange(index)"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "AlphaBet",
  props: {
    cities: Object
  },
  data: () => ({
    touchStatus: false,
    scrollY: 0,
    timer: null
  }),
  updated() {
    this.scrollY = this.$refs.letter[0].offsetTop;
  },
  methods: {
    handleChange(index) {
      this.$emit("change", index);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearInterval(this.timer);
        }
        this.timer = setTimeout(() => {
          let touchY = e.touches[0].clientY;
          let index = Math.floor((touchY - this.scrollY) / 20);
          if (index >= 0 && index <= 21) {
            this.$emit("change", index);
          }
        }, 16);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
  },
  computed: {
    list() {
      let list = [];
      for (let i in this.cities) {
        list.push(i);
      }
      return list;
    }
  }
};
</script>

<style scoped lang="less">
.alphabet {
  position: absolute;
  right: 0;
  top: 0;
  width: 0.6rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: @backgroundColor;
  .item {
    line-height: 0.4rem;
    .font-size(20);
  }
}
</style>
