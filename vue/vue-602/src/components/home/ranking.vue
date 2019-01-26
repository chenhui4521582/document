<template>
    <div class="ranking component_height component_scroll">
        <div class="top_banner">
            <img src="/static/images/home/rank_banner_v2.png" alt="">
        </div>
        <div class="main">
            <div class="ranking-main">
                <div class="time">09月03日-09月10日</div>
                <div class="nav">
                    <div class="item" v-for="(item,index) in ranking" v-if="index<3" :class=" index==0?'one':index==1?'two':'three' ">
                        <div class="pic">
                            <img src="/static/images/home/avatar.png" alt="" v-if="item.avatar == 1" class="avatar"/>
                            <img src="/static/images/home/default_avatar.png" alt="" v-else class="avatar"/>
                            <div class="hb">{{item.hb}}元红包</div>
                        </div>
                        <div class="text">
                            <p class="raning_name">{{item.username}}</p>
                            <p class="vip_lv">
                                <img :src="'/static/images/home/vip_icon'+item.vip+'.png'" alt="" />
                            </p>
                        </div>
                    </div>
                </div>
                <div class="con">
                    <div class="item" v-for="(item,index) in ranking" v-if="index>2">
                        <div class="num">
                            {{index}}
                        </div>
                        <div class="text">
                            <div class="ranking_name">{{item.username}}</div>
                            <div class="vip_lv"><img :src="'/static/images/home/vip_icon'+item.vip+'.png'" alt="" /></div>
                            <div class="prize">
                                <p class="hb">{{item.hb}}元红包</p>
                                <p class="point">{{item.point}}积分</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hd_detail">
                <div class="title">活动详情</div>
                <div class="text">
                    <p class="c">每期前三名可获得专属徽章展示一周 第一名更可得到专属加载图全员展示一周</p>
                    <p>活动时间:</p>
                    <p>2018.09.03-2018.09.10</p>
                    <p>活动规则:</p>
                    <p>1、您的增长值为本周在游戏内的充值数</p>
                    <p>2、活动期间，增长值排名前10 的用户，即可获得相应的红包及额外积分奖励！</p>
                    <p>3、中奖用户请关注公众号【金榜微游】找客服领取奖励！</p>
                    <p>4、活动最终解释权归游戏金榜所有</p>
                </div>
                <div class="ranking_table">
                    <table align="center" width="100%" border="1">
                        <thead>
                            <tr>
                                <td>金榜排名</td>
                                <td>奖励</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>第1名</td><td>500元红包+200000积分</td></tr>
                            <tr><td>第2名</td><td>300元红包+100000积分</td></tr>
                            <tr><td>第3名</td><td>200元红包+50000积分</td></tr>
                            <tr><td>第4名</td><td>100元红包+20000积分</td></tr>
                            <tr><td>第5名</td><td>90元红包+10000积分</td></tr>
                            <tr><td>第6名</td><td>80元红包+5000积分</td></tr>
                            <tr><td>第7名</td><td>70元红包+5000积分</td></tr>
                            <tr><td>第8名</td><td>60元红包+5000积分</td></tr>
                            <tr><td>第9名</td><td>50元红包+5000积分</td></tr>
                            <tr><td>第10名</td><td>40元红包+5000积分</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ranking from '../../data/ranking_config'
    export default {
        name: "ranking",
        data(){
            return{
                ranking:ranking.ranking
            }
        }
    }
</script>

<style scoped>

</style>
