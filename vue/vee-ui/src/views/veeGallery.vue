<template>
  <div class="countdown">
    <div class="back">
      <router-link to="/" class="back">返回</router-link>
    </div>
    <button @click="showGallery">显示</button>
    <vee-gallery :visible="visible" :imgs="imgs" @galleryClosed="galleryClosed"></vee-gallery>
  </div>
</template>

<script>
  export default {
	name: "view-gallery",
	data: () => ({
	  visible: false,
      imgs: [
      	"http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg",
        "http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png"
      ]
	}),
	methods: {
	  showGallery () {
        this.visible = true
      },
	  galleryClosed () {
		this.visible = false
      }
	}
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
