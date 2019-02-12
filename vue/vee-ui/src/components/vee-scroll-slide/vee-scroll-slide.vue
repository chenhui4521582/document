<template>
  <transition-group name="fade" tag="ul" class="scroll-slide">
    <li v-for="(item,i) in items"
        :key="item.id"
        :style="{...item}"
        :class="[items.length >= max && i === 0 && 'active']"
    >
      {{item.id}}
    </li>
  </transition-group>
</template>

<script>
export default {
	name: "vee-scroll-slide",
  props: {
	  list: {
	    type: Array,
      default: () => {
        return []
      }
    },
    max:{
	    type: Number,
      default: 4
    }
  },
  computed: {
	  items () {
	    let items = [];
      let filterList = this.list.filter((item,index) => {
	      return this.list.length - this.max - 1 < index
      });
      filterList.forEach((item,index) => {
        let object = {};
        object.id = item.id;
        object.bottom = `${(filterList.length - index - 1) * 35}px`;
        items.push(object)
      })
      return items;

    }
  }
}
</script>

<style scoped lang="less">

.scroll-slide{
  position: relative;
  height: 200px;
  li{
    position: absolute;
    padding: 0 10px;
    margin-bottom: 5px;
    bottom:0;
    list-style: none;
    min-width: 150px;
    transition: all .5s;
    height: 30px;
    line-height: 30px;
    background:#999;
    border-radius:15px;
    color: #fff;
  }
  .active{
    opacity: .7;
  }
  .fade-enter{
    opacity: 0;
    transform: translate(30px,30px);
  }
  .fade-enter-to{
    opacity: 1;
    transform: translate(0,0);
  }
  .fade-leave{
    opacity: 0;
    transform: translate(0,0);
  }
  .fade-leave-to{
    opacity: 0;
    transform: translate(10px,-40px);
  }

  .fade-enter-active,.fade-level-active{
    transition:all .5s;
  }
}
</style>
