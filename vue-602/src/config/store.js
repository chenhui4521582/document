import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
let store = new Vuex.Store({
    state:{
        page_index:0,
        user_info:{
            user_name:'',
            user_vip:0,
            user_avatar:0,
            point:0,
            user_id:'',
            user_mobile:'',
            user_qq:'',
            user_alipay:'',
            user_idname:''
        }
    },
    mutations:{
        page_index:function(state,index){
            state.page_index = index;
        },
        login_success:function (state, params) {
            state.user_info.user_name = params.user_name;
            state.user_info.user_vip = params.user_vip;
            state.user_info.user_avatar = params.user_avatar;
            state.user_info.user_id = params.user_id;
            state.user_info.point = params.point;
            state.user_info.user_mobile = params.user_mobile;
            state.user_info.user_qq = params.user_qq;
            state.user_info.user_alipay = params.user_alipay;
            state.user_info.user_idname = params.user_idname;
        },
        login_out:function (state, params) {

        },
        exchange_success(state,params){
            state.user_info.point = state.user_info.point - params;
        },
        update_mobile(state,params){
            console.log(params);
            state.user_info.user_mobile = params;
        },
        update_alipay(state,params){
            state.user_info.user_idname = params.user_idname;
            state.user_info.user_alipay = params.user_alipay;
        }
    }
});
export default store;
