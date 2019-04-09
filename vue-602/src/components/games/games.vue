<template>
    <div class="games component_height component_scroll">
        <div class="userinfo" v-show="$store.state.user_info.user_name">
            <div class="user_avatar">
                <img :src="avatar" alt="">
            </div>
            <div class="user_detail">
                <div class="nickname">{{$store.state.user_info.user_name}}</div>
                <div class="vip_lv">vip：<img :src="vip" alt=""></div>

            </div>
        </div>
        <div class="slide_box">
            <banner :list="banner" />
        </div>
        <recently :list="recently"/>
        <div class="games_tab">
            <div class="games_tab_nav">
                <ul>
                    <li @click="tab(0)"><span :class="index==0 ? 'active' :'' ">热门</span></li>
                    <li @click="tab(1)"><span :class="index==1 ? 'active' :'' ">新游</span></li>
                    <li @click="tab(2)"><span :class="index==2 ? 'active' :'' ">新开服</span></li>
                    <li @click="tab(3)"><span :class="index==3 ? 'active' :'' ">资讯</span></li>
                </ul>
            </div>
            <div class="games_tab_con">
                <div class="hot" v-show="index==0">
                    <children_games :list="hot" />

                </div>
                <div class="new_games" v-show="index==1">
                    <children_games :list="hot" />
                </div>
                <div class="new_server" v-show="index==2">
                    <children_games :list="hot" />
                </div>

                <div class="news" v-show="index==3">
                    <!--<children_news :list="news"/>-->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import banner from '../public/swiper/swiper.vue';
    import recently from './recently.vue';
    import children_games from './children_games.vue';
    import children_news from './children_news.vue';
    export default{
        name: 'games',
        data: function () {
            return {
                banner:'',
                recently:'',
                index:'0',
                hot:''
            }
        },
        components:{
            banner:banner,
            recently:recently,
            children_games:children_games,
            children_news:children_news
        },
        methods: {
            init:function(){
                let _this = this;
                let url = './interface/index';
                this.$http(url).then(function(res){
                    let banner = res.data.data.posters||[];
                    let recently = res.data.data.recent||[];
                    let hot = res.data.data.hot||[];
                    _this.banner = banner;
                    _this.recently = recently;
                    _this.hot = hot;
                }).catch(function(res){

                })
            },
            tab:function(index){
                this.index=index;
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
        mounted:function(){
            this.init();
        }
    }
</script>
<style scoped>

</style>
