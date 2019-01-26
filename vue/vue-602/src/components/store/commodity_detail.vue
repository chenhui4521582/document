<template>
    <div class="commodity_detail component_height component_scroll">
        <div class="commodity_bg">
            <img :src="commodity_detail.commodity_src" alt="">
        </div>
        <div class="commodity_detail_text">
            <p class="name">{{commodity_detail.commodity_name}}</p>
            <p class="suplus">剩余数量:<span>{{commodity_detail.commodity_number}}</span></p>
            <p class="need_point">兑换积分:<span>{{commodity_detail.commodity_need}}</span></p>
            <div class="my_point">我的积分:<span>{{$store.state.user_info.point}}</span></div>
        </div>
        <div class="commodity_explain">
            <div class="title">商品详情</div>
            <p class="h">有效期：<span>2018-07-31至2019-08-01</span></p>
            <p class="h">兑换规则：<span>达到指定积分即可兑换</span></p>
            <p>注意：</p>
            <p style="color: red;">1.兑换实物商品，兑换成功后，务必关注游戏金榜公众号或联系客服领取,客服QQ【461822621】</p>
            <p>2.联系客服后，7个工作日内会发货</p>
            <p>3.商品一经兑换，一律不退还积分</p>
            <p>4.通过非法途径获得积分进行正常交换，或者不按商品兑换规则进行兑换者，平台有权不提供服务</p>
            <p>5.凡是以不正当手段进行兑换，平台有权终止该次兑换</p>
        </div>
        <div class="btn">
            <router-link class="more_point_btn" :to="{'path':'/store/point_task'}">赚取更多积分</router-link>
            <a class="exchange_btn" href="javascript:void (0)" v-if="commodity_detail.commodity_number>0 && $store.state.user_info.point>=commodity_detail.commodity_need" @click="exchange">立即兑换</a>
            <a class="exchange_btn active" v-else href="javascript:void (0)">立即兑换</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "commodity_detail",
        data(){
            return{
                commodity_detail:''
            }
        },
        methods:{
            exchange(){
                let {commodity_id,commodity_number,commodity_need} = this.commodity_detail,
                    url = '/interface/exchange_prize';
                if(commodity_number<=0){
                    this.$toast.show('当前礼品兑换完毕')
                }else if(!commodity_id){
                    this.$toast.show('兑换失败')
                }else{
                    this.$toast.show();
                    this.$http(url,{params:{commodity_id}}).then(res=>{
                        this.$toast.hide();
                        let {error} = res.data;
                        if(error == 1000){
                            this.$toast.show({text:'兑换成功',type:'text',callback:()=>{
                                this.$store.commit('exchange_success',commodity_need)
                                this.commodity_detail.commodity_number = this.commodity_detail.commodity_number-1;
                            }});
                        }else if(error == 1001){
                            this.$toast.show({text:'您尚未登录',type:'text',callback:()=>{
                                    this.$router.push({path:'/home/login',query:{forworld:'/store'}})
                                }
                            })
                        }else if(error == 1002){
                            this.$toast.show('兑换失败')
                        }
                    }).catch(res=>{

                    })
                }

            }
        },
        mounted(){
            let params = this.$router.currentRoute.params.item,
                {commodity_id} = params;
            if(!commodity_id){
                this.$router.push({path:'/store'})
            }else{
                this.commodity_detail = params;
            }
        }
    }
</script>

<style scoped>

</style>
