import Vue from 'vue';
import router from '../config/router/route'
import store from '../config/vuex/index'
import '../component/validator/validator'
import App from '@modules/app/main'
import 'babel-polyfill'

new Vue({
    el: '#App',
    store,
    router,
    methods: {
        alert () {
            alert('111')
        }
    },
    render: h => h(App)
})
