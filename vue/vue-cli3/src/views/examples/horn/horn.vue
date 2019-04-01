<template>
  <div class="horn">
    <div class="title">
      <p class="back"><router-link to="/">返回</router-link></p>
      <p class="title2">跑马灯</p>
    </div>
    <div class="container">
      <div class="name">新闻：</div>
      <div class="horn-box">
        <ul :style="css" ref="hornBox">
          <li v-for="(item, index) in list" :key="index" ref="hornList">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "horn",
  data: () => ({
    list: [
      "埃里克森打飞机大连市附近打翻了卡大福利健康",
      "我委屈入侵噢诶如草奥地方1",
      "阿拉山口积分爱上了对方空间大姐夫",
      "2欧我粗23就121九欧水豆腐"
    ],
    css: {
      width: "",
      left: ""
    },
    timer: null
  }),
  methods: {
    run() {
      let element = this.$refs.hornList,
        boxWidth = this.$refs.hornBox.offsetWidth,
        width = 0,
        left = 0;
      element &&
        element.map((item, index) => {
          let offsetWidth = ~~item.offsetWidth;
          width += offsetWidth;
        });
      let lastTime = 0;
      this.timer && cancelAnimationFrame(this.timer);
      let fn = () => {
        lastTime++;
        if (lastTime == 5) {
          left++;
          if (left == Math.floor(width - boxWidth)) {
            left = 0;
          }
          this.css = {
            width: `${width}px`,
            left: `-${left}px`
          };
          lastTime = 0;
        }

        this.timer = requestAnimationFrame(fn);
      };
      this.timer = requestAnimationFrame(fn);
    }
  },
  mounted() {
    this.run();
  }
};
</script>

<style lang="less" scope>
.horn {
  .title {
    .back {
      a {
        display: inline-block;
        text-decoration: none;
        padding: 0.1rem 0.2rem;
        background: @backgroundColor;
        color: #fff;
      }
    }
  }
  .title2 {
    margin-bottom: 0.2rem;
    text-align: center;
  }
}
.container {
  overflow: hidden;
  width: 100%;
  height: 0.7rem;
  line-height: 0.7rem;
  padding-left: 1rem;
  position: relative;
  background: #18253d;
  color: #fff;
  .name {
    position: absolute;
    left: 0;
    top: 0;
    width: 1rem;
    line-height: 0.7rem;
  }
  .horn-box {
    position: relative;
    overflow: hidden;
    width: 100%;
    float: left;
    line-height: 0.7rem;
    height: 0.7rem;
    ul {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      overflow: hidden;
    }
    li {
      float: left;
      padding: 0 0.2rem;
    }
  }
}
</style>
