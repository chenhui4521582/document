import Vue from 'vue'
import Router from 'vue-router'
/* cookie*/
import Cookie from '../unit/cookie'
/* store */
import vuex from './store.js';

/* v-component page父级组件 */
import box from '@/components/public/box.vue';
/* v-component 游戏中心 */
import games from '@/components/games/games.vue';
import game_iframe from '@/components/games/game_iframe.vue';
/* v-component 社区 */
import bbs from '@/components/bbs/bbs.vue';
import articles from '@/components/bbs/articles.vue';
import reply from '@/components/bbs/reply.vue';
import publish_articles from '@/components/bbs/publish_articles.vue';
/* v-component 礼包 */
import cards from '@/components/cards/cards.vue';
/* v-component 商城 */
import store from '@/components/store/store.vue';
import commodity_detail from '@/components/store/commodity_detail.vue';
import point_task from '@/components/store/point_task.vue';
/* v-component 个人中心 */
import home from '@/components/home/home.vue';
import ranking from '@/components/home/ranking.vue';
import login from '@/components/home/login.vue';
import register from '@/components/home/register.vue';
import vip from '@/components/home/vip.vue';
import account_safety from '@/components/home/account_safety.vue';
import id_card from '@/components/home/id_card.vue';
import bind_mobile from '@/components/home/bind_mobile.vue';
import bind_alipay from '@/components/home/bind_alipay.vue';
import bind_qq from '@/components/home/bind_qq.vue';

var routes = [
    {
        path:'/',
        component:box,
        children:[
            {path:'/',name:'games',component:games, meta:{title:'602游戏', index:0}},
            {path:'/games/iframe',name:'game_iframe',component:game_iframe, meta:{login:true,title:'游戏', index:0,footer:'hide'}},
        ]
    },
    {
        path:'/bbs',
        component:box,
        children:[
            {path:'/',component:bbs,name:'bbs',meta:{title:'602社区',index:1}},
            {path:'/bbs/articles',name:'articles',component:articles,meta:{title:'内容详情',index:1,back:true}},
            {path:'/bbs/reply',name:'reply',component:reply,meta:{title:'602社区',index:1}},
            {path:'/bbs/publish_articles',name:'publish_articles',component:publish_articles, meta:{login:true,title:'发布内容', index:1,back:true}},
        ]
    },
    {
        path:'/cards',
        component:cards,
        meta:{
            title:'游戏礼包',
            index:2
        }
    },
    {
        path:'/store',
        component:box,
        children:[
            {path:'/',name:'store',component:store, meta:{login:true,title:'积分商城', index:3}},
            {path:'/store/commodity_detail',name:'commodity_detail',component:commodity_detail, meta:{login:true,title:'商品详情', index:3,back:true}},
            {path:'/store/point_task',name:'point_task',component:point_task, meta:{login:true,title:'今日任务', index:3,back:true}}
        ]
    },
    {
        path:'/home',
        component:box,
        children:[
            {path:'/',name:'home',component:home, meta:{login:true,title:'个人中心', index:4}},
            {path:'/home/login',name:'login',component:login, meta:{title:'登录', index:4,back:true}},
            {path:'/home/register',name:'register',component:register, meta:{title:'注册', index:4,back:true}},
            {path:'/home/ranking',name:'ranking',component:ranking, meta:{login:true,title:'602金榜', index:4,back:true}},
            {path:'/home/vip',name:'vip',component:vip, meta:{login:true,title:'vip介绍', index:4,back:true}},
            {path:'/home/account_safety',name:'account_safety',component:account_safety, meta:{login:true,title:'账号安全', index:4,back:true}},
            {path:'/home/id_card',name:'id_card',component:id_card, meta:{login:true,title:'实名认证', index:4,back:true}},
            {path:'/home/bind_mobile',name:'bind_mobile',component:bind_mobile, meta:{login:true,title:'绑定手机', index:4,back:true}},
            {path:'/home/bind_alipay',name:'bind_alipay',component:bind_alipay, meta:{login:true,title:'绑定支付宝', index:4,back:true}},
            {path:'/home/bind_qq',name:'bind_qq',component:bind_qq, meta:{login:true,title:'绑定qq', index:4,back:true}}
        ]
    }
];



Vue.use(Router);
let vue_router = new Router({routes});

vue_router.beforeEach((to,from,next)=>{
    let metaLogin = to.meta.login,
        query = {forworld:to.path},
        isLogin = Cookie.getCookie('user'),
        index = to.meta.index ? to.meta.index  :0 ;
        vuex.commit('page_index',index);
    metaLogin?(isLogin?next():next({path:'/home/login',query})):next();
});


export default vue_router;
