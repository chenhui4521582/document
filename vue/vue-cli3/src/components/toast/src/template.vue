<template>
  <div class="toast" v-if="show">
    <span class="icon success" v-if="type == 'success'">
      <img src="./img/success.png" alt="" />
    </span>
    <span class="icon warning" v-if="type == 'warning'">
      <img src="./img/warning.png" alt="" />
    </span>
    <span class="icon error" v-if="type == 'error'">
      <img src="./img/error.png" alt="" />
    </span>
    <span class="icon loading" v-if="type == 'loading'">
      <img src="./img/loading_2.png" alt="" />
    </span>
    <span>
      {{ tip }}
    </span>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    show: {
      default: false
    },
    time: {
      default: 1500
    },
    tip: {
      default: ""
    },
    type: {
      default: ""
    }
  }
};
</script>

<style scoped lang="less">
.toast {
  position: absolute;
  left: 50%;
  top: 50%;
  max-width: 3rem;
  padding: 0.15rem 0.24rem;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: 0.24rem;
  border-radius: 4px;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .icon {
    display: block;
    height: 0.4rem;
    width: 0.4rem;
    img {
      width: 100%;
      height: 100%;
      vertical-align: top;
    }
  }
  .loading {
    animation: rotate 1s infinite linear;
  }
  span {
    line-height: 0.4rem;
    margin-right: 0.15rem;
  }

  @keyframes rotate {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
}
</style>
