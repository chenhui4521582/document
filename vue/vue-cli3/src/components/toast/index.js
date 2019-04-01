import Vue from "vue";
import template from "./src/template";
const defaultOptions = {
  transtion: "center"
};
let timeout = "";

let Tpl = Vue.extend(template);
// 实例化模板组件
let $toast = new Tpl();
// 并且挂载实例到文档之外
let mount = $toast.$mount().$el;
// 插入到dom 之中
document.body.appendChild(mount);

const Toast = {
  show: (tip, time, options) => {
    clearTimeout(timeout);
    $toast.tip = tip;
    $toast.type = "";
    if (options && options.toString() === "[object Object]") {
      $toast.options = Object.assign(defaultOptions, options);
    }
    $toast.show = true;
    timeout = setTimeout(function() {
      $toast.show = false;
    }, time || "1500");
  },
  close: () => {
    $toast.show = false;
  },
  success: (tip, time, options) => {
    clearTimeout(timeout);
    $toast.tip = tip;
    $toast.type = "success";
    if (options && options.toString() === "[object Object]") {
      $toast.options = Object.assign(defaultOptions, options);
    }
    $toast.show = true;
    timeout = setTimeout(function() {
      $toast.show = false;
    }, time || "1500");
  },
  warning: (tip, time, options) => {
    clearTimeout(timeout);
    $toast.tip = tip;
    $toast.type = "warning";
    if (options && options.toString() === "[object Object]") {
      $toast.options = Object.assign(defaultOptions, options);
    }
    $toast.show = true;
    timeout = setTimeout(function() {
      $toast.show = false;
    }, time || "1500");
  },
  error: (tip, time, options) => {
    clearTimeout(timeout);
    $toast.tip = tip;
    $toast.type = "error";
    if (options && options.toString() === "[object Object]") {
      $toast.options = Object.assign(defaultOptions, options);
    }
    $toast.show = true;
    timeout = setTimeout(function() {
      $toast.show = false;
    }, time || "1500");
  },
  loading: (tip, time, options) => {
    clearTimeout(timeout);
    $toast.tip = tip || "请稍候";
    $toast.type = "loading";
    if (options && options.toString() === "[object Object]") {
      $toast.options = Object.assign(defaultOptions, options);
    }
    $toast.show = true;
    timeout = setTimeout(function() {
      $toast.show = false;
    }, time || "1500");
  }
};

export default Toast;
