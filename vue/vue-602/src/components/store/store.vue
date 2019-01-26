<template>
    <div class="store component_height component_scroll">
        <banner :list="list"/>
        <div class="news_slide">
            <div class="new_icon">
                <img src="/static/images/store/news_icon.png" alt="">
            </div>
            <div class="new_slide_box">
                <div class="swiper-container news_title">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">2小时以前兑换了30元话费全国通用移动/联通/电信</div>
                        <div class="swiper-slide">3小时以前兑换了100元话费全国通用移动/联通/电信</div>
                        <div class="swiper-slide">4小时以前兑换了100元话费全国通用移动/联通/电信</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="my">
            <ul>
                <li class="point">
                    <img src="/static/images/store/mall_icon01.png" alt="">
                    <p><span>{{$store.state.user_info.point}}</span>积分</p>
                </li>
                <li class="task">
                    <router-link :to="{path:'/store/point_task'}">
                        <img src="/static/images/store/mall_icon03.png" alt="">
                        <p>积分任务</p>
                    </router-link>
                </li>
                <li class="exchange_log">
                    <img src="/static/images/store/mall_icon04.png" alt="">
                    <p>兑换记录</p>
                </li>
            </ul>
        </div>
        <div class="hot_commodity">
            <h4 class="hot_commodity_title">热销商品</h4>
            <ul class="hot_commodity_list">
                <li class="hot_commodity_item" v-for="(item,index) in hot_commodity" :class="index == 2 ? 'last':''">
                    <router-link :to="{path:'/store/commodity_detail',name:'commodity_detail',params:{item,title:item.commodity_name}}">
                        <img :src="item.commodity_src" alt="">
                        <p>{{item.commodity_name}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="commodity">
            <div class="commodity_nav">
                <ul>
                    <li @click="tab(0)"><span :class="tab_index == 0 ? 'active' : '' ">游戏礼包</span></li>
                    <li @click="tab(1)"><span :class="tab_index == 1 ? 'active' : '' ">实物商品</span></li>
                    <li @click="tab(2)"><span :class="tab_index == 2 ? 'active' : '' ">虚拟商品</span></li>
                </ul>
            </div>
            <div class="commodity_con">
                <div class="lb" v-show="tab_index == 0">
                    <commodity :list="lb_commodity"/>
                </div>
                <div class="sw" v-show="tab_index == 1">
                    <commodity :list="sw_commodity"/>
                </div>
                <div class="xn" v-show="tab_index == 2">
                    <commodity :list="xn_commodity"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Swiper from 'swiper';
    import banner from '../public/swiper/swiper.vue';
    import commodity from './commodity.vue';
    export default{
        name: 'store',
        data: function () {
            return {
                list:[],
                hot_commodity:'',
                lb_commodity:'',
                sw_commodity:'',
                xn_commodity:'',
                tab_index:0
            }
        },
        components:{
            banner,
            commodity
        },
        methods: {
            banner_init(){
                let url = '/interface/poster',
                    id = '4';
                this.$http(url,{params:{'poster_id':id}}).then(res=>{
                    let {error,data} = res.data;
                    error == '1000' && (this.list = data);
                })
            },
            news_slide(){
                new Swiper('.news_title', {
                    direction: 'vertical',
                    slidesPerView: 1,
                    spaceBetween: 30,
                    loop:true,
                    autoplay:{
                        delay: 2500,
                        disableOnInteraction: false
                    }
                });
            },
            tab(index){
                this.tab_index = index;
            },
            init(){
                let url = '/interface/store';
                this.$http(url).then(res=>{
                    let {hot,sw,lb,xn} = res.data.data;
                    this.hot_commodity=hot;
                    this.lb_commodity=lb;
                    this.sw_commodity=sw;
                    this.xn_commodity=xn;
                }).catch(res=>{

                })
            }
        },
        mounted(){
            this.init();
            this.banner_init();
            this.news_slide();
        }
    }
</script>
