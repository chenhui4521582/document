/*
*   Component
*/
import Home from '@view/home/Home.vue'
import childBox from '@/config/router/childBox'

import mixin from '@view/common/mixin.vue'
import directive from '@view/common/directive.vue'
import modal from '@view/common/modal.vue'
import toast from '@view/common/toast.vue'
import filters from '@view/common/filters.vue'
import vueSwitch from '@view/common/vueSwitch.vue'

import mapState from '@view/vuex/mapState.vue'
import mapMutations from '@view/vuex/mapMutations.vue'
import mapActions from '@view/vuex/mapActions.vue'
import mapGetters from '@view/vuex/mapGetters.vue'
import module from '@view/vuex/module.vue'

import slot from '@view/vue/v-slot/v-slot.vue'
import vModel from '@view/vue/v-model/v-model.vue'
import vComponent from '@view/vue/v-component/v-component.vue'
import vTransition from '@view/vue/v-transition/v-transition.vue'

import examplesSelectPage from '@view/examples/select-page/selectPage.vue'
import loginEnter from '@view/examples/login-enter/LoginEnter.vue'
import my from '@view/examples/login-enter/components/my.vue'
import login from '@view/examples/login-enter/components/login.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/vuex',
    component: childBox,
    children: [
      {
        path: '/vuex/mapState',
        name: 'mapState',
        component: mapState
      },
      {
        path: '/vuex/mapMutations',
        name: 'mapMutations',
        component: mapMutations
      },
      {
        path: '/vuex/mapActions',
        name: 'mapActions',
        component: mapActions
      },
      {
        path: '/vuex/mapGetters',
        name: 'mapGetters',
        component: mapGetters
      },
      {
        path: '/vuex/module',
        name: 'module',
        component: module
      }
    ]
  },
  {
    path: '/common',
    component: childBox,
    children: [
      {
        path: '/common/mixin',
        name: 'mixin',
        component: mixin
      },
      {
        path: '/common/modal',
        name: 'modal',
        component: modal
      },
      {
        path: '/common/toast',
        name: 'toast',
        component: toast
      },
      {
        path: '/common/filters',
        name: 'filters',
        component: filters
      },
      {
        path: '/common/switch',
        name: 'vueSwitch',
        component: vueSwitch
      },
      {
        path: '/common/directive',
        name: 'directive',
        component: directive
      }

    ]
  },
  {
    path: '/vue',
    component: childBox,
    children: [
      {
        path: '/vue/v-slot',
        name: 'v-slot',
        component: slot
      },
      {
        path: '/vue/vmodel',
        name: 'v-model',
        component: vModel
      },
      {
        path: '/vue/v-component',
        name: 'v-component',
        component: vComponent
      },
      {
        path: '/vue/v-transition',
        name: 'v-transition',
        component: vTransition
      }
    ]
  },
  {
    path: '/examples',
    component: childBox,
    children: [
      {
        path: '/examples/selectPage',
        name: 'examples-selectPage',
        component: examplesSelectPage
      },
      {
        path: '/examples/loginEnter/',
        component: childBox,
        children: [
          {
            path: '/',
            name: 'loginEnter',
            component: loginEnter
          },
          {
            path: '/examples/loginEnter/my',
            name: 'my',
            component: my,
            meta: {
              login: true
            }
          },
          {
            path: '/examples/loginEnter/login',
            name: 'login',
            component: login,
            meta: {
              login: true
            }
          }
        ]
      }
    ]
  }
]
export default routes
