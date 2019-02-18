<template>
  <div id="app">
    <router-view/>
    <div class="FPS" v-if="ENV=='development'">
      <P>FPS:{{FPS}}</P>
      <P>ENV:{{ENV}}</P>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  data () {
    return {
      ENV: process.env.NODE_ENV
    }
  },
  computed:{
    ...mapState(['FPS'])
  },
  methods: {
    ...mapActions({
      setFps:'actionsSetFps'
    }),
    init () {
      this.ENV == 'development' && this.Fps();
    },
    Fps () {
      let _this = this;
      let fps = 0;
      let startTime = new Date().getTime();
      let timer = '';
      if(timer) return false
      timer = requestAnimationFrame(function fn () {
        let diffTime = new Date().getTime() - startTime;
        fps ++ ;
        timer = requestAnimationFrame(fn);
        if(diffTime>=1000){
          _this.setFps(fps);
          fps = 0
          startTime = new Date().getTime();
        }
      })
    }
  },
  mounted () {
    this.init();
  },
}
</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    .font-size(28);
  }

  ul,li,ol,li,p,h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
    list-style: none;
  }

  html,body{
    margin: 0;
    padding: 0;
  }

  table,thead,tbody,tr{
    margin: 0;
    padding: 0;
    border: none;
    border-collapse:collapse;
  }

  th,td {
    margin: 0;
    padding: 0;
  }

  img{
    max-width:100%;
    display: block;
    border: none;

  }

  #app {
    width: 100%;
    text-align: center;
    padding-bottom: 60px;
  }
  .FPS{
    position: fixed;
    left: 0;
    bottom: 0;
    padding: 10px 15px;
    background:#5dff35;
    opacity: .6;
    width: auto;
    color: #000;
  }

</style>
