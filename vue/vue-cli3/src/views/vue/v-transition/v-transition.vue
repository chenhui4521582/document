<template>
  <div class="transition">
    <p class="back">
      <router-link to="/">返回</router-link>
    </p>

    <button @click="toggle" :class="[isShow? 'toggle-btn is-show' : 'toggle-btn is-hidden']">{{isShow ? '显示' : '隐藏'}}</button>
    <transition name="fade" mode="in-out">
      <p v-if="isShow" class="alert-info" :key="'info'">{{alertInfoMsg}}</p>
      <p v-else="!isShow" class="alert-error" :key="'error'">{{alertErrorMsg}}</p>
    </transition>


    <p class="border-bottom"></p>

    <p class="title">滚动</p>

    <div class="scrollComponent">
      <div class="scroll-leave">

      </div>
      <div class="scroll-center">

      </div>
      <div class="scroll-enter">

      </div>
    </div>
    <ul class="scroll">
      <transition-group name="scroll" mode="out-in">
        <li v-for="item in list" :key="item.id">{{item.value}}</li>
      </transition-group>
    </ul>
    <p>
      <button class="scrollBtn is-show" @click="scroll">滚动</button>
    </p>
    <p class="border-bottom"></p>
  </div>
</template>

<script>
function shuffle(arr) {
  var result = [],
    random;
  while (arr.length > 0) {
    random = Math.floor(Math.random() * arr.length);
    result.push(arr[random])
    arr.splice(random, 1)
  }
}



export default {
  name: 'v-transition',
  data: () => ({
    isShow: true,
    alertInfoMsg: "👻👻👻Hello! W3cplus.com!👻👻👻",
    alertErrorMsg: "💩💩💩Goodbye! W3cplus.com!💩💩💩",
    list: [
      {id:1, value: '很好很强大很厉害'},
      {id:2, value: '做好做大做强'},
      {id:3, value: '狗屎难听'},
      {id:4, value: '很赞66666'}
    ]
  }),
  methods: {
    toggle () {
      this.isShow = !this.isShow
    },
    scroll () {
      this.list.splice(0,1)
      this.list.push({id: this.list[2].id+1,value: '做好做大做强'});
    }
  }
}
</script>

<style scoped lang="less">

.scroll{
  text-align: left;
  ul{
    display: inline-block;
  }
  li{
    padding: 5px 15px;
    border-radius:15px;
    background: rgba(0,0,0,.5);
    color: #fff;
    margin-bottom: 10px;
  }
}

.fade-enter-active,.fade-leave-active{
  transition: all 0.5s ease-in-out;
}
.fade-leave{
  opacity:1;
  transform: translate(0, 0);
}
.fade-leave-to{
  opacity: 0;
  transform: translate(50%, 0);
}
.fade-enter{
  opacity: 0;
  transform: translate(50%, 0);
}
.fade-enter-to{
  opacity: 1;
  transform: translate(0, 0);
}



.scroll-enter,.scroll-leave-to{
  opacity: 0;
  transform: translateY(80px);
}
.scroll-leave-active,.scroll-enter-active{
  transition: all .5s;
}



.scrollBtn,.toggle-btn{
  border: 0;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 14px;
  margin:10px;
  color: #fff;
  display: inline-block;
  transition: all 0.28s ease;
}
.is-show {
  background-color: #55acee;
  box-shadow: 0px 5px 0px 0px #3c93d5;
}
.is-show:hover {
  background-color: #6fc6ff;
}
.is-hidden {
  background-color: #e74c3c;
  box-shadow: 0px 5px 0px 0px #ce3323;
}
.is-hidden:hover {
  background-color: #ff6656;
}
.alert-info{
  color: #0c5460;
  background-color: #d1ecf1;
  border-color: #bee5eb;
}
.alert-error{
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}
.transition{
  .text{
    background: #00b3ee;
  }
  p{
    padding: 10px 0
  }
  .border-bottom{
    border-bottom: 1px solid #f1f1f1;
  }
  .title{
    text-align: center;
  }
}
</style>
