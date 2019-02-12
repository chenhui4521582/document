import Mixin from '@/common/mixin'
import filters from '@/common/filters'
const install = Vue => {
  if(Vue.installed) {
    return false
  }
  Vue.mixin(Mixin);

  filters.map(item => {
    Vue.filter(item.name,item.method)
  })
}

export default {
  install
}


