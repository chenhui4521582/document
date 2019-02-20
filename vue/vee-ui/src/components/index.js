import veeToast from './vee-toast/'
import veeModal from './vee-modal/vee-modal'
import veeSwitch from './vee-switch/vee-switch'
import veeUploader from './vee-uploader/vee-uploader'
import veeCountdown from './vee-countdown/vee-countdown'
import veeGallery from './vee-gallery/vee-gallery'

// 全局组件列表s
const components = [
  veeModal,
  veeSwitch,
  veeUploader,
  veeGallery
]

// 全局指令列表
const directives = [
  veeCountdown
]

// 注册全局组件
const install = function (Vue) {
  if (install.installed) return
  components.map(component => {
    Vue.component(component.name, component)
  })

  directives.map(directive => {
    Vue.directive(directive.name, directive.method)
  })

  Vue.prototype.$veeToast = veeToast
}

// Vue 是全局变量时，自动 install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
};

export default {
  install,
  veeModal,
  veeSwitch
}
