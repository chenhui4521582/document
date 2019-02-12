import veeToast from './vee-toast/'
import veeModal from './vee-modal/vee-modal'
import veeSwitch from './vee-switch/vee-switch'
import veeUploader from './vee-uploader/vee-uploader'

// 全局组件列表
const component = [
  veeModal,
  veeSwitch,
  veeUploader
]

// 注册全局组件
const install = function (Vue) {
  if (install.installed) return

  component.map(component => {
    Vue.component(component.name, component)
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
