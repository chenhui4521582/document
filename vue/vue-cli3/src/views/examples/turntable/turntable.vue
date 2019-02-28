<template>
  <div class="turntable">
    <div class="title">
      <p class="back"><router-link to="/">返回</router-link></p>
      <p class="title2">大转盘</p>
    </div>
    <div class="content">
      <div class="box">
        <div class="turntable-bg">
          <img src="./img/bg.png" alt="" class="turntable-bg">
        </div> 
        <div class="turntable-point" @click="start(1)">
          <img src="./img/trun.png" alt="" />
        </div>
        <div class="turntable-rotate" ref="turntable">
          <ul>
            <li 
              v-for="(item, index) of prize"
              :key="index"
              ref="prize"
            >
              <p class="name">{{item.name}}</p>
              <p class="pic"><img :src="item.img" alt="" /></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    prize:[
      {name: '5元话费', 'img': require('./img/5hfq.png')},
      {name: '666金叶子', 'img': require('./img/666leaf3d.png')},
      {name: '88金叶子', 'img': require('./img/88leaf3d.png')},
      {name: '188金叶子', 'img': require('./img/188leaf3d.png')},
      {name: '0.3元京东卡', 'img': require('./img/jdk3d.png')},
      {name: '免费套圈*1', 'img': require('./img/quoits_rabbit.png')}
    ],
    timer: null,
    isAnimation: false,
    nowTime: 0
  }),
  methods: {
    turnInit () {
      let prize = this.$refs.prize
      prize && prize.map((item,index) => {
        item.style.transform = `rotate(${index*60}deg)`
      })
    },
    start(id) {
      // id 中奖的 id
      // 默认圈数
      let defaultAngle = 9 * 360;

      if(this.isAnimation) return;
      this.isAnimation = true;
      // 当前次数
      this.nowTime += 1;
      
      // 随机角度
      let randomAngle = ~ ~ Math.floor(Math.random() * 60 - 32);

      // 旋转角度  当前角度（ nowTime * defaultAngle ） +  商品所在的角度 （id * 60） + 随机角度 = 停止角度
      let element = this.$refs.turntable;
      element.style.transform = `translateX(-50%) rotate(-${this.nowTime * defaultAngle + id * 60 + randomAngle}deg)`

      setTimeout(() => {
        this.isAnimation = false;
      }, 3200)
    }
  },
  mounted() {
    this.turnInit();
  }
};
</script>
<style lang="less" scope>
.turntable {
  position: absolute;
  left: 0;
  top:0;
  right: 0;
  bottom: 0;
  overflow: hidden;
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
  .content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 1.2rem;
    background:rgba(0,0,0,.5);
    .box{
      position: absolute;
      left: 50%;
      top: 50%;
      width: 6.51rem;
      height: 8.34rem;
      transform: translate(-50%, -50%);
    }
    .turntable-bg{
      position: absolute;
      left: 0;
      top: 0;
      width: 6.51rem;
      height: 8.34rem;
      z-index: 2;
      img {
        width: 100%;
        vertical-align: top;
      }
      
    }
    .turntable-rotate {
      position: absolute;
      left: 50%;
      top: 0.52rem;
      transform: translateX(-50%) rotate(0deg);
      z-index: 1;
      width: 5.4rem;
      height: 5.4rem;
      background: url('~./img/turntable.png') no-repeat 0 0;
      background-size: 100% 100%;
      transition: all 3s;
      ul {
        position: relative;
        width: 100%;
        height: 100%;
        li{
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          right: 0;
          transform-origin: 50% 50%;
          text-align: center;
          font-size: 0.24rem;
          color: #C56100;
          .name {
            margin-top: .6rem;
          }
          .pic{
            width: 2.0rem;
            height: 2.0rem;
            margin: .1rem auto 0;
            img {
              margin: 0 auto;
              max-width: 43%;
            }
          }
        }
      }
    }
    .turntable-point {
      position: absolute;
      z-index: 3;
      transform: translateX(-50%);
      width: 2.09rem;
      height: 2.31rem;
      left: 50%;
      top: 2rem;
      img {
        vertical-align: top;
        width: 100%;
      }
    }
  }
}
</style>
