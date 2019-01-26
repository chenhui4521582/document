<template>
  <div id="app">
    <router-view/>
    <div class="FPS">
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

    },
    Fps () {

    }
  },
  mounted () {
    this.Fps()
  },

}
</script>

<style lang="less">
  * {
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
