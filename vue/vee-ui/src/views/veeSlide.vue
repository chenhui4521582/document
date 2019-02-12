<template>
  <div class="slide">
    <div class="back">
      <router-link to="/" class="back">返回</router-link>
    </div>
    <veeSlide :list="list" :options="options"></veeSlide>
  </div>
</template>

<script>
import veeSlide from '@/components/vee-slide/vee-slide'
import a from '../assets/img/1.jpg'
import b from '../assets/img/2.jpg'
import c from '../assets/img/3.jpg'
import d from '../assets/img/4.jpg'
import e from '../assets/img/5.jpg'
import f from '../assets/img/6.jpg'
export default {
	name: "view-vee-slide",
  components: {
	  veeSlide
  },
  data: () => ({
    options: {
      boxWidth:800,
      currentWidth:400
    },
    list: [
      {content:a,color:'1'},
      {content:b,color:'2'},
      {content:c,color:'3'},
      {content:d,color:'4'},
      {content:e,color:'5'},
      {content:f,color:'6'}
    ]
  })
}
</script>

<style scoped lang="less">
  .back{
    .font-size(30);
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
