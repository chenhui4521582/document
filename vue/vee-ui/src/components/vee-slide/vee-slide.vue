<template>
  <div class="slide">
    <div class="box" :style="{
      width: options.boxWidth+'px',
      height: options.boxHeight+'px'
      }">
      <div @mouseover="clearTimer" @mouseout="setTimer" v-for="(item, index) in items" :key= "index" class="item" :style="{
        width:item.width+'px',
		    height:item.height+'px',
			  left:item.left+'px',
				bottom:item.bottom+'px',
				opacity:item.opacity,
				'z-index':item.zIndex
	      }">
        <span :style="{'line-height':item.height+'px'}">
          <img :src="lists[index].content" alt="">
        </span>
      </div>
    </div>
  </div>
</template>

<script>
function copyObject (object) {
  if(typeof object === 'object'){
    if (object instanceof Array) {
      return [...object]
    }else if (object.toString() === '[object Object]'){
      return Object.assign({},object)
    }
  }
}

export default {
  name: "vee-slide",
  props:{
    options:{
      type: Object,
      default: () => ({
        boxWidth: 800,
        currentWidth: 400,
        boxHeight: 300,
        currentHeight: 280,
        scale: 0.8
      })
    },
    list:{
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    let items = [],
      {boxWidth=800, boxHeight=300, currentWidth=400, currentHeight=280, scale=0.9} = this.options,
      list = copyObject(this.list),
      level = Math.floor(this.list.length/2);
    if(this.list.length % 2 === 0){
      let center = this.list[0];
      list.push(center);
    }

    let lefts = list.slice(0,level),

      rights = list.slice(level),

      leftGap = (boxWidth - currentWidth)/2,

      gap = leftGap/level;

    lefts.forEach((e,i) => {
      let obj = {};
      obj.content = e.content;
      obj.left = i * gap;
      obj.zIndex = i+1;
      obj.opacity = 1 / (level + 1 - i);
      obj.width = currentWidth * Math.pow(scale, level-i);
      obj.height = currentHeight * Math.pow(scale, level-i);
      obj.bottom = (boxHeight - obj.height)/2;
      items.push(obj);
    });
    rights.forEach((e,i) => {
      let obj = {};
      obj.content = e.content;
      obj.width = currentWidth * Math.pow(scale, i);
      obj.height = currentHeight * Math . pow(scale, i);
      obj.left = boxWidth - (level-i)*gap - obj.width;
      obj.zIndex = level - i + 1;
      obj.opacity = 1 / (i + 1);
      obj.bottom = (boxHeight - obj.height)/2;
      items.push(obj);
    });
    return {
      items,
      lists:list,
      timer:null,
      dir:'left'
    }
  },
  methods:{
    setTimer () {
      let that = this;
      this.clearTimer();
      function cb() {
        that.timer = setTimeout(() => {
          if(that.dir === "right"){
            let pop = that.items.shift();
            that.items.push(pop);
            console.log(that.items);
          }else{
            let pop = that.items.pop();
            that.items.unshift(pop);
          }
          cb();
        },2000);
      }
      cb();
    },
    clearTimer () {
      if(this.timer){
        clearTimeout(this.timer);
      }
    },
    toggleDir () {
      if(this.dir=='right'){
        this.dir = 'left';
        return;
      }
      this.dir = 'right';
    }
  },
  computed: {

  },
  created () {
    this.setTimer();
  },
}
</script>

<style scoped lang="less">
  .box{
    width:800px;
    height:300px;
    position:relative;
    margin:0 auto;
  }
  .toggle{
    position:absolute;
    padding:.5em .8em;
    top:0;
    left:0;
  }
  .item{
    box-sizing:border-box;
    border:1px solid #fff;
    position:absolute;
    display:block;
    background-color:blue;
    color:#fff;
    text-align:center;
    transition: all .8s ease;
    img{
      vertical-align: top;
      width: 100%;
      height: 100%;
    }
  }
  .item span{
    transition:inherit;
    font-size:60px;
  }
  .cascade-list .item:nth-child(2n){
    /*
      background-color:red;
      */
  }
</style>
