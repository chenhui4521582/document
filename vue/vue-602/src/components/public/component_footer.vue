<template>
    <div class="component_footer" v-show="show">
        <router-link to="/" :class="index == 0 ? 'router-link-exact-active':''">
            <div class="games_icon img"></div>
            <p>游戏</p>
        </router-link>
        <router-link to="/bbs" :class="index == 1 ? 'router-link-exact-active':''">
            <div class="bbs_icon img"></div>
            <p>游戏社区</p>
        </router-link>
        <router-link to="/cards" :class="index == 2 ? 'router-link-exact-active':''">
            <div class="cards_icon img"></div>
            <p>游戏礼包</p>
        </router-link>
        <router-link to="/store" :class="index == 3 ? 'router-link-exact-active':''">
            <div class="store_icon img"></div>
            <p>积分商城</p>
        </router-link>
        <router-link to="/home" :class="index == 4 ? 'router-link-exact-active':''">
            <div class="home_icon img"></div>
            <p>个人中心</p>
        </router-link>
    </div>
</template>
<script>
    export default{
        name: 'component_footer',
        data: function () {
            return {
                show:true
            }
        },
        computed:{
            index:function(){
                return this.$store.state.page_index;
            }
        },
        watch:{
            '$route':(to,from)=>{
                let show = to.meta.footer;
                (show == 'hide')&&(this.show = false)
            }
        },
        created:function(){
            let show = this.$route.meta.footer;
            (show == 'hide')&&(this.show = false)
        }
    }
</script>
