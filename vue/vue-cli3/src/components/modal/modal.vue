<template>
  <div :class="[visible ? 'modal modal-in' : 'vee-modal.vue']" v-show="visible">
    <div class="caver" @click="modalCancel"></div>
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header border-bottom">
          <p class="title">{{ modal.title }}</p>
          <a href="javascript(0)" @click="modalCancel"></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer border-top">
          <a
            href="javascript:void(0)"
            class="confirm"
            v-if="modal.showCancelButton"
            @click="modalCancel"
            >{{ modal.cancelButtonText }}</a
          >
          <a href="javascript:void(0)" class="cancel" @click="modalConfirm">{{
            modal.confirmButtonText
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["visible", "options"],
  methods: {
    modalCancel() {
      this.$emit("modalCancel");
    },
    modalConfirm() {
      this.$emit("modalConfirm");
    }
  },
  computed: {
    modal() {
      let modal = this.options;
      let extendModl;
      if (modal) {
        extendModl = {
          title: modal.title || "提示",
          showCancelButton:
            typeof modal.showCancelButton === "undefined"
              ? true
              : modal.showCancelButton,
          cancelButtonText: modal.cancelButtonText
            ? module.cancelButtonText
            : "取消",
          confirmButtonText: modal.canfirmButtonText
            ? modal.confirmButtonText
            : "确定"
        };
      } else {
        extendModl = {
          title: modal.title,
          showCancelButton: true,
          cancelButtonText: "取消",
          confirmButtonText: "确定"
        };
      }
      return extendModl;
    }
  }
};
</script>

<style scoped lang="less">
.modal {
  position: fixed;
  left: 0;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 9999;
  .caver {
    position: absolute;
    left: 0;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 10;
  }
  .modal-dialog {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 6rem;
    background: #fff;
    border-radius: 5px;
    z-index: 11;
    .modal-content {
      padding: 0;
      .modal-header {
        p {
          height: 0.6rem;
          line-height: 0.6rem;
          font-size: 0.32rem;
        }
        color: #666;
        padding: 0.08rem;
      }
      .modal-body {
        padding: 0 0.08rem;
        min-height: 2rem;
        color: #999;
        > * {
          font-size: 0.28rem;
        }
      }
      .modal-footer {
        padding: 0.08rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        a {
          display: block;
          height: 0.5rem;
          line-height: 0.5rem;
          text-align: center;
          text-decoration: none;
          border-radius: 3px;
          color: #fff;
          padding: 0 0.3rem;
        }
        > * {
          font-size: 0.26rem;
        }
        .confirm {
          background: #f56c6c;
          margin-right: 0.2rem;
        }
        .cancel {
          background: #67c23a;
        }
      }
    }
  }
}
.modal-in {
  animation: modal-in 0.35s linear;
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
