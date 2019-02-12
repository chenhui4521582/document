<template>
  <div class="scroll-slide">
    <div class="back">
      <router-link to="/" class="back">返回</router-link>
      <button @click="updateList">更新</button>
    </div>
    <vee-scroll-slide :list="list" :max="5" />
  </div>

</template>

<script>
import veeScrollSlide from '@/components/vee-scroll-slide/vee-scroll-slide'
export default {
	name: "view-vee-scroll-slide",
  data: () => ({
    list: [],
    id:1000000000
  }),
  components: {
    veeScrollSlide
  },
  methods: {
	  updateList () {
	    this.id = this.id+1;
	    this.list.push({text:this.id, id:this.id})
    }
  },
  mounted() {
	  setInterval(()=>{
	    this.updateList()
    },1000)
  }
}
</script>

<style scoped lang="less">
  .scroll-slide{
    text-align: left;
  }
  .back{
    .font-size(26);
    text-align: left;
    a{
      display: inline-block;
      padding: 0 20px;
      height: 30px;
      line-height: 30px;
      text-decoration: none;
      background: #00b3ee;
      color: #fff;
    }
  }
</style>
