<template>
    <div class="vip">
        <div class="vip_top">
            <div class="swiper-container">
                <div class="xian"></div>
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) in vip_list">
                        <vip_lv :item="item"></vip_lv>
                    </div>
                </div>
            </div>
        </div>
        <div class="vip_center">
            <div class="swiper-container ">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="vip_privilege" style="text-align: center;padding: 1rem 0">
                            该等级没有会员特权
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="vip_privilege">
                            <h1>会员特权</h1>
                            <div class="vip_privilege_list">
                                <em><img src="/static/images/home/fanli_01.png"></em>
                                <div class="vip_privilege_txt">
                                    <h2>赠送2%积分</h2>
                                    <p>在游戏金榜内充值任意金额，即可获得充值金额<i class="power_red">2</i>%的等值积分（例如充值100元，可获得2000积分），积分可在商城内兑换商品</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="vip_privilege">
                            <h1>会员特权</h1>
                            <div class="vip_privilege_list">
                                <em><img src="/static/images/home/fanli_01.png"></em>
                                <div class="vip_privilege_txt">
                                    <h2>赠送2%积分</h2>
                                    <p>在游戏金榜内充值任意金额，即可获得充值金额<i class="power_red">2</i>%的等值积分（例如充值100元，可获得2000积分），积分可在商城内兑换商品</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="vip_privilege">
                            <h1>会员特权</h1>
                            <div class="vip_privilege_list">
                                <em><img src="/static/images/home/fanli_01.png"></em>
                                <div class="vip_privilege_txt">
                                    <h2>赠送5%积分</h2>
                                    <p>在游戏金榜内充值任意金额，即可获得充值金额<i class="power_red">5</i>%的等值积分（例如充值100元，可获得5000积分），积分可在商城内兑换商品</p>
                                </div>
                            </div>

                            <div class="vip_privilege_list">
                                <em><img src="/static/images/home/fanli_02.png"></em>
                                <div class="vip_privilege_txt">
                                    <h2>专属客服</h2>
                                    <p>达到VIP4及以上，即可享有VIP专属客服，随时为您一对一服务</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="vip_privilege">
                            <h1>会员特权</h1>
                            <div class="vip_privilege_list">
                                <em><img src="/static/images/home/fanli_01.png"></em>
                                <div class="vip_privilege_txt">
                                    <h2>赠送5%积分</h2>
                                    <p>在游戏金榜内充值任意金额，即可获得充值金额<i class="power_red">5</i>%的等值积分（例如充值100元，可获得5000积分），积分可在商城内兑换商品</p>
                                </div>
                            </div>

                            <div class="vip_privilege_list">
                                <em><img src="/static/images/home/fanli_02.png"></em>
                                <div class="vip_privilege_txt">
                                    <h2>专属客服</h2>
                                    <p>达到VIP4及以上，即可享有VIP专属客服，随时为您一对一服务</p>
                                </div>
                            </div>

                            <div class="vip_privilege_list">
                                <em><img src="/static/images/home/fanli_03.png"></em>
                                <div class="vip_privilege_txt">
                                    <h2>生日礼物</h2>
                                    <p>达到VIP5及以上，客服会为您准备一份精美的生日礼物（需先联系您的专属客服登记您的生日信息及联系方式）</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="vip_privilege">
                            <h1>会员特权</h1>
                            <div class="vip_privilege_list">
                                <em><img src="/static/images/home/fanli_01.png"></em>
                                <div class="vip_privilege_txt">
                                    <h2>赠送5%积分</h2>
                                    <p>在游戏金榜内充值任意金额，即可获得充值金额<i class="power_red">5</i>%的等值积分（例如充值100元，可获得5000积分），积分可在商城内兑换商品</p>
                                </div>
                            </div>

                            <div class="vip_privilege_list">
                                <em><img src="/static/images/home/fanli_02.png"></em>
                                <div class="vip_privilege_txt">
                                    <h2>专属客服</h2>
                                    <p>达到VIP4及以上，即可享有VIP专属客服，随时为您一对一服务</p>
                                </div>
                            </div>

                            <div class="vip_privilege_list">
                                <em><img src="/static/images/home/fanli_03.png"></em>
                                <div class="vip_privilege_txt">
                                    <h2>生日礼物</h2>
                                    <p>达到VIP5及以上，客服会为您准备一份精美的生日礼物（需先联系您的专属客服登记您的生日信息及联系方式）</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="vip_privilege">
                            <h1>会员特权</h1>
                            <div class="vip_privilege_list">
                                <em><img src="/static/images/home/fanli_01.png"></em>
                                <div class="vip_privilege_txt">
                                    <h2>赠送8%积分</h2>
                                    <p>在游戏金榜内充值任意金额，即可获得充值金额<i class="power_red">8</i>%的等值积分（例如充值100元，可获得8000积分），积分可在商城内兑换商品</p>
                                </div>
                            </div>

                            <div class="vip_privilege_list">
                                <em><img src="/static/images/home/fanli_02.png"></em>
                                <div class="vip_privilege_txt">
                                    <h2>专属客服</h2>
                                    <p>达到VIP4及以上，即可享有VIP专属客服，随时为您一对一服务</p>
                                </div>
                            </div>

                            <div class="vip_privilege_list">
                                <em><img src="/static/images/home/fanli_03.png"></em>
                                <div class="vip_privilege_txt">
                                    <h2>生日礼物</h2>
                                    <p>达到VIP5及以上，客服会为您准备一份精美的生日礼物（需先联系您的专属客服登记您的生日信息及联系方式）</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="vip_privilege">
                            <h1>会员特权</h1>
                            <div class="vip_privilege_list">
                                <em><img src="/static/images/home/fanli_01.png"></em>
                                <div class="vip_privilege_txt">
                                    <h2>赠送8%积分</h2>
                                    <p>在游戏金榜内充值任意金额，即可获得充值金额<i class="power_red">8</i>%的等值积分（例如充值100元，可获得8000积分），积分可在商城内兑换商品</p>
                                </div>
                            </div>

                            <div class="vip_privilege_list">
                                <em><img src="/static/images/home/fanli_02.png"></em>
                                <div class="vip_privilege_txt">
                                    <h2>专属客服</h2>
                                    <p>达到VIP4及以上，即可享有VIP专属客服，随时为您一对一服务</p>
                                </div>
                            </div>

                            <div class="vip_privilege_list">
                                <em><img src="/static/images/home/fanli_03.png"></em>
                                <div class="vip_privilege_txt">
                                    <h2>生日礼物</h2>
                                    <p>达到VIP5及以上，客服会为您准备一份精美的生日礼物（需先联系您的专属客服登记您的生日信息及联系方式）</p>
                                </div>
                            </div>

                            <div class="vip_privilege_list">
                                <em><img src="/static/images/home/fanli_04.png"></em>
                                <div class="vip_privilege_txt">
                                    <h2>节日礼物</h2>
                                    <p>达到VIP8及以上，重大节日期间，客服会为您准备一份精美的节日礼物（需先联系您的专属客服登记您的联系方式）</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="vip_privilege">
                            <h1>会员特权</h1>
                            <div class="vip_privilege_list">
                                <em><img src="/static/images/home/fanli_01.png"></em>
                                <div class="vip_privilege_txt">
                                    <h2>赠送8%积分</h2>
                                    <p>在游戏金榜内充值任意金额，即可获得充值金额<i class="power_red">8</i>%的等值积分（例如充值100元，可获得8000积分），积分可在商城内兑换商品</p>
                                </div>
                            </div>

                            <div class="vip_privilege_list">
                                <em><img src="/static/images/home/fanli_02.png"></em>
                                <div class="vip_privilege_txt">
                                    <h2>专属客服</h2>
                                    <p>达到VIP4及以上，即可享有VIP专属客服，随时为您一对一服务</p>
                                </div>
                            </div>

                            <div class="vip_privilege_list">
                                <em><img src="/static/images/home/fanli_03.png"></em>
                                <div class="vip_privilege_txt">
                                    <h2>生日礼物</h2>
                                    <p>达到VIP5及以上，客服会为您准备一份精美的生日礼物（需先联系您的专属客服登记您的生日信息及联系方式）</p>
                                </div>
                            </div>

                            <div class="vip_privilege_list">
                                <em><img src="/static/images/home/fanli_04.png"></em>
                                <div class="vip_privilege_txt">
                                    <h2>节日礼物</h2>
                                    <p>达到VIP8及以上，重大节日期间，客服会为您准备一份精美的节日礼物（需先联系您的专属客服登记您的联系方式）</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="vip_privilege">
                            <h1>会员特权</h1>
                            <div class="vip_privilege_list">
                                <em><img src="/static/images/home/fanli_01.png"></em>
                                <div class="vip_privilege_txt">
                                    <h2>赠送8%积分</h2>
                                    <p>在游戏金榜内充值任意金额，即可获得充值金额<i class="power_red">8</i>%的等值积分（例如充值100元，可获得8000积分），积分可在商城内兑换商品</p>
                                </div>
                            </div>

                            <div class="vip_privilege_list">
                                <em><img src="/static/images/home/fanli_02.png"></em>
                                <div class="vip_privilege_txt">
                                    <h2>专属客服</h2>
                                    <p>达到VIP4及以上，即可享有VIP专属客服，随时为您一对一服务</p>
                                </div>
                            </div>

                            <div class="vip_privilege_list">
                                <em><img src="/static/images/home/fanli_03.png"></em>
                                <div class="vip_privilege_txt">
                                    <h2>生日礼物</h2>
                                    <p>达到VIP5及以上，客服会为您准备一份精美的生日礼物（需先联系您的专属客服登记您的生日信息及联系方式）</p>
                                </div>
                            </div>

                            <div class="vip_privilege_list">
                                <em><img src="/static/images/home/fanli_04.png"></em>
                                <div class="vip_privilege_txt">
                                    <h2>节日礼物</h2>
                                    <p>达到VIP8及以上，重大节日期间，客服会为您准备一份精美的节日礼物（需先联系您的专属客服登记您的联系方式）</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--这段不能删除，用来做vuex状态更新了触发update-->
        <div class="div" style="display: none">{{$store.state.user_info}}</div>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    import children_vip_lv from './children_vip_lv';
    export default {
        name: "vip",
        data(){
            return {
                vip_list:[1,2,3,4,5,6,7,8,9,10]
            }
        },
        methods:{
            slideInit(){
                let {user_vip} = this.$store.state.user_info;
                let swiper1 =  new Swiper('.vip_top .swiper-container', {
                    slidesPerView:3,
                    initialSlide :user_vip-1,
                    centeredSlides : true,
                    observer:true,//修改swiper自己或子元素时，自动初始化swiper
                    observeParents:true//修改swiper的父元素时，自动初始化swiper
                });
                let swiper2 =  new Swiper('.vip_center .swiper-container', {
                    initialSlide :user_vip-1,
                    observer:true,//修改swiper自己或子元素时，自动初始化swiper
                    observeParents:true,//修改swiper的父元素时，自动初始化swiper
                    controller:{
                        control:swiper1
                    }
                });
                swiper1.controller.control = swiper2;
            }
        },
        components:{
            vip_lv:children_vip_lv
        },
        updated(){
            this.slideInit();
        },
        mounted(){
            this.slideInit();
        }
    }
</script>

<style scoped>
    .vip_top .swiper-container{
        background: #333;
        height: 5rem;
    }
    .vip_top .swiper-slide{
        width: 33.3%;
    }
    .xian{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height:2.6rem;
        border-bottom:2px solid #fcd134;
    }
    .vip_center{
        position: relative;
        z-index: 10;
    }
    .vip_center:before{
        content: '';
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid #fff;
        position: absolute;
        top: -8px;
        left: 50%;
        margin-left: -10px;
    }
    .vip_privilege{
        padding-left: .454rem;
        background: #fff;
    }
    .vip_privilege h1 {
        line-height: 1.59rem;
        font-size:.74rem;
        color: #333;
        font-weight: normal;
    }
    .vip_privilege_list {
        padding: .454rem .909rem .454rem 2.363rem;
        position: relative;
        border-bottom: 1px solid #e1e1e1;
    }
    .vip_privilege_list em {
        width: 1.909rem;
        height: 1.909rem;
        display: block;
        position: absolute;
        top: 50%;
        left: 0;
        margin-top: -21px;
    }
    .vip_privilege_txt h2 {
        line-height: .909rem;
        font-size:.74rem;
        color: #333;
    }
    .vip_privilege_txt p {
        line-height:1.2rem;
        font-size:.59rem;
        color: #666;
    }
</style>
