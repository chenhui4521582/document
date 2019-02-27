import Toast from "@components/toast/index";
import Modal from "@components/modal/modal";
import VueSwitch from "@components/VueSwitch/VueSwitch";

const component = [Modal, VueSwitch];

const install = function(Vue) {
  if (install.installed) return;
  component.map(component => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$toast = Toast;
};
// Vue 是全局变量时，自动 install
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Modal,
  VueSwitch
};
