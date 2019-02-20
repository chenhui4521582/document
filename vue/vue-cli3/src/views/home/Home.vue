<template>
  <div class="home">
    <img alt="Vue logo" src="@assets/logo.png">
    <br>
    <div class="links">
      <h6 class="title">
        vue 基本使用
      </h6>
      <div class="list  border-bottom">
        <router-link v-for="(item) in vue" :key="item.name" :to="item.url">
          {{item.name}}
        </router-link>
      </div>

      <h6 class="title">
        vuex 基本使用
      </h6>
      <div class="list border-bottom">
        <router-link v-for="(item) in vuex" :key="item.name" :to="item.url">
          {{item.name}}
        </router-link>
      </div>

      <h6 class="title">common 基本使用</h6>
      <div class="list  border-bottom">
        <router-link v-for="(item) in common" :key="item.name" :to="item.url">
          {{item.name}}
        </router-link>
      </div>

      <h6 class="title">实战例子</h6>
      <div class="list  border-bottom">
        <router-link v-for="(item) in examples" :key="item.name" :to="item.url">
          {{item.name}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data: () => ({
    show: false,
    vuex: [
      { name: 'vuex mapState', url: '/vuex/mapstate' },
      { name: 'vuex mapMutations', url: '/vuex/mapmutations' },
      { name: 'vuex mapActions', url: '/vuex/mapactions' },
      { name: 'vuex mapGetters', url: '/vuex/mapGetters' },
      { name: 'vuex module', url: '/vuex/module' }
    ],
    vue: [
      { name: '插槽slot', url: '/vue/v-slot' },
      { name: 'v-model', url: '/vue/vmodel' },
      { name: 'component', url: '/vue/v-component' },
      { name: 'transition', url: '/vue/v-transition' },
      { name: 'createElement', url: '/vue/v-createElement' }
    ],
    common: [
      { name: '全局mixin', url: '/common/mixin' },
      { name: '全局filters', url: '/common/filters' },
      { name: '全局指令time', url: '/common/time' },
      { name: '全局组件modal', url: '/common/modal' },
      { name: '全局组件toast', url: '/common/toast' },
      { name: '全局组件Switch', url: '/common/switch' },
    ],
    examples: [
      { name: '选择进度', url: '/examples/selectPage' },
      { name: '登录拦截', url: '/examples/loginenter' },
      { name: '毫秒倒计时', url: '/examples/countdown' },
      { name: 'iframe 通讯', url: '/examples/iframe' },
      { name: '去哪儿', url: '/examples/travel' }
    ]
  })
}
</script>
<style lang="less" scoped>
  .home{
    img{margin: 0 auto}
    .links{
      padding: 0 .2rem;
      .title{
        padding: 10px 0 0;
      }
      .list{
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        padding: 10px 0 0;
      }
      a{
        display: block;
        padding: 0 10px;
        margin:0 10px 10px;
        background: #0a8cff;
        color: #fff;
        text-align: center;
        height: 30px;
        line-height: 30px;
        text-decoration: none;
      }
    }
  }
</style>
