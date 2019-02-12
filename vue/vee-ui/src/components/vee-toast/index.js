import Vue from 'vue'
import template from './src/template'
const defaultOptions = {
  transtion: 'center'
}
let timeout = ''

let Tpl = Vue.extend(template)
// 实例化模板组件
let $toast = new Tpl()
// 并且挂载实例到文档之外
let mount = $toast.$mount().$el
// 插入到dom 之中
document.body.appendChild(mount)

function showToast ( time, callback, options ) {
  clearTimeout(timeout)
  if (options && options.toString() === '[object Object]') {
    $toast.options = Object.assign(defaultOptions, options)
  }
  $toast.show = true
  timeout = setTimeout(function () {
    $toast.show = false
    callback && callback();
  }, time || '1500')
}

const Toast = {
  show: (tip, time, callback, options) => {
    $toast.tip = tip;
    $toast.type = ''
    showToast ( time, callback, options )
  },
  close: () => {
    $toast.show = false
  },
  success: (tip, time, callback, options) => {
    $toast.tip = tip
    $toast.type = 'success'
    showToast ( time, callback, options )
  },
  warning: (tip, time, callback, options) => {
    $toast.tip = tip
    $toast.type = 'warning'
    showToast ( time, callback, options )
  },
  error: (tip, time, callback, options) => {
    $toast.tip = tip
    $toast.type = 'error'
    showToast ( time, callback, options )
  },
  loading: (tip, time, callback, options) => {
    $toast.tip = tip || '请稍候'
    $toast.type = 'loading'
    showToast ( time, callback, options )
  }
}

export default Toast
