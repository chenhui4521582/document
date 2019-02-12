<template>
  <div :class="[visible ? 'modal modal-in' : 'modal-in']" v-show="visible">
    <div class="caver" @click="modalCancel"></div>
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header border-bottom">
          <p class="title">{{modal.title}}</p>
          <a href="javascript(0)" @click="modalCancel"></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer border-top">
          <a href="javascript:void(0)"
             class="confirm"
             v-if="modal.showCancelButton"
             @click="modalCancel">
            {{modal.cancelButtonText}}
          </a>
          <a href="javascript:void(0)"
             class="cancel"
             @click="modalConfirm" >
            {{modal.confirmButtonText}}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vee-modal',
  props: {
    visible: {
      typ: Boolean,
      default: false
    },
    options: {
      typ: Object,
      delete: {}
    }
  },
  methods: {
    modalCancel () {
      this.$emit('modalCancel')
    },
    modalConfirm () {
      this.$emit('modalConfirm')
    }
  },
  computed: {
    modal () {
      let modal = this.options; let extendModl
      if (modal) {
        extendModl = {
          title: modal.title || '提示',
          showCancelButton: typeof modal.showCancelButton === 'undefined' ? true : modal.showCancelButton,
          cancelButtonText: modal.cancelButtonText ? module.cancelButtonText : '取消',
          confirmButtonText: modal.canfirmButtonText ? modal.confirmButtonText : '确定'
        }
      } else {
        extendModl = {
          title: modal.title,
          showCancelButton: true,
          cancelButtonText: '取消',
          confirmButtonText: '确定'
        }
      }
      return extendModl
    }
  }
}
</script>

<style scoped lang="less">
*{
  margin: 0;
  padding: 0;
}
.modal{
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 9999;
  .caver{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.3);
    z-index: 10;
  }
  .modal-dialog{
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 300px;
    background: #fff;
    border-radius: 5px;
    z-index: 11;
    .modal-content{
      text-align: left;
      padding: 0 ;
      .modal-header{
        color: #666;
        overflow: hidden;
        padding-left: 10px;
        p{
          height: 34px;
          line-height: 34px;
          font-size:16px;
        }

      }
      .modal-body{
        padding:0 10px;
        min-height: 100px;
        color: #999;
        >*{
          font-size:14px;
        }
      }
      .modal-footer{
        padding:5px 10px;
        display: flex;
        justify-content: flex-end;
        a{
          display: block;
          height: 24px;
          line-height: 26px;
          text-align: center;
          text-decoration: none;
          border-radius: 3px;
          color: #fff;
          padding: 0 10px;
        }
        >*{
          font-size: 13px;
        }
        .confirm{
          background: #f56c6c;
          margin-right: 10px;
        }
        .cancel{
          background: #67c23a;

        }
      }
    }

  }
}
.modal-in{
  animation: modal-in .35s linear;
}

@keyframes modal-in {
  0% {
    transform: translateY(-20px) rotateX(-35deg);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: translateY(0) rotateX(0);
    opacity: 1;
  }
}
</style>
