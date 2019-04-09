<template>
    <div class="home component_scroll">
        <div class="user_info" v-show="$store.state.user_info.user_name">
            <div class="user_avatar">
                <img :src="avatar" alt="">
            </div>
            <div class="information">
                <div class="user_name">
                    {{$store.state.user_info.user_name}}
                    <img :src="vip" alt="">
                </div>
                <div class="user_id">
                    ID:{{$store.state.user_info.user_id}}
                </div>
            </div>
            <div class="message">
                <img src="/static/images/home/message_icon.png" alt="">
            </div>
        </div>
        <div class="my">
            <div class="btn collect">
                <router-link to="/home/collect">
                    <p class="number">{{$store.state.user_info.collect||0}}</p>
                    <p>我的收藏</p>
                </router-link>
            </div>
            <div class="btn point">
                <router-link to="/home/collect">
                    <p class="number">{{$store.state.user_info.point||0}}</p>
                    <p>我的积分</p>
                </router-link>
            </div>
            <div class="btn friends">
                <p class="number">{{$store.state.user_info.friends||0}}</p>
                <router-link to="/home/collect">我的好友</router-link>
            </div>
        </div>
        <div class="service_list">
            <ul>
                <li v-for="(item ,index) in services" :class="item.classname">
                    <router-link :to="item.url">
                        <em><img :src="item.src" alt=""></em>
                        <span>{{item.name}}</span>
                        <i><img src="/static/images/home/right_btn.png" alt=""></i>
                    </router-link>
                </li>
                <li class="kefu">
                    <router-link to="/home/kefu">
                        <em><img src="/static/images/home/center_icon7.png" alt=""></em>
                        <span>联系客服</span>
                        <i><img src="/static/images/home/right_btn.png" alt=""></i>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="logout">
            <router-link :to="{path:'/home/login',query:{forworld:'/home'}}">
                切换账号
            </router-link>
        </div>
    </div>
</template>
<script>
    export default{
        name: '',
        data: function () {
            return {
                services:[
                    {name:'游戏金榜',src:'/static/images/home/center_icon2.png',url:'/home/ranking',classname:'game_ranking',val:'查看每周大咖排行榜'},
                    {name:'我的信用值',src:'/static/images/home/center_icon8.png',url:'/home/credit',classname:'my_credit'},
                    {name:'我的礼包',src:'/static/images/home/center_icon3.png',url:'/home/my_card',classname:'my_card'},
                    {name:'vip专属',src:'/static/images/home/center_icon4.png',url:'/home/vip',classname:'my_vuo'},
                    {name:'账号安全',src:'/static/images/home/center_icon5.png',url:'/home/account_safety',classname:'my_safety'},
                    {name:'实名认证',src:'/static/images/home/center_icon6.png',url:'/home/id_card',classname:'authentication'},
                ]
            }
        },
        computed:{
            vip(){
                let {user_vip} =  this.$store.state.user_info,
                    vip = '/static/images/home/vip_icon'+user_vip+'.png';
                return vip;
            },
            avatar(){
                let url ='',
                    {user_avatar} =  this.$store.state.user_info;
                user_avatar == 1 ? url = '/static/images/avatar.png' : url = '/static/images/default_avatar.png'
                return url;
            }
        },
        methods: {}
    }
</script>
