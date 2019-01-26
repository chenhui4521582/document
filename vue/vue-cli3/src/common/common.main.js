// import Directive from '@/common/directive'
import Vue from 'vue'
import Mixin from '@/common/mixin'
import filters from '@/common/filters'
import CH_UI from '@components/index'

Vue.use(CH_UI);
Vue.use(Mixin)
for(let key in filters) {
  Vue.filter(key, filters[key])
}

