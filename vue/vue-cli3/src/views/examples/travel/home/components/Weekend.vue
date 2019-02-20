<template>
  <div class="weekend">
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item in weekendList"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home-weekend",
  props: {
	weekendList: Array
  }
}
</script>

<style scoped lang="less">
.title{
  line-height: .7rem;
  background: #eee;
  text-indent: .2rem;
}

.item-img-wrapper{
  overflow: hidden;
  height: 0;
  padding-bottom: 37.09%;
}

.item-img{
  width: 100%
}

.item-info{
  padding: .1rem;
}
.item-title{
  line-height: .54rem;
  font-size: .32rem;
  text-overflow: ellipsis;
}
.item-desc{
  line-height: .4rem;
  color: #ccc;
  text-overflow: ellipsis;
}
</style>