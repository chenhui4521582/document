<template>
    <div class="vip_lv" v-if="$store.state.user_info.user_vip == item">
        <img src="/static/images/avatar.png" alt="" v-if="$store.state.user_info.user_avatar == 1">
        <img src="/static/images/default_avatar.png" alt="" v-else>
        <em>VIP{{item}}</em>
    </div>
    <div class="vip_lv" v-else>
        VIP{{item}}
    </div>
</template>

<script>
    export default {
        props:['item'],
        name: "children_vip_lv"
    }
</script>

<style scoped>
    .vip_lv{
        position: relative;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background:#fcd134;
        margin: 1.5rem auto 0;
        text-align: center;
        line-height: 2rem;
        font-size: .63rem;
        color: #333;
    }
    .swiper-slide-active .vip_lv{
        margin: 1rem auto 0;
        padding: 1px;
        width: 3rem;
        height: 3rem;
        line-height: 3rem;
    }
    .vip_lv em{
        display: none;
    }
    .swiper-slide-active .vip_lv em{
        display: block;
        position: absolute;
        bottom: -.2rem;
        left: .2rem;
        width:2.6rem;
        height: .7rem;
        line-height: .9rem;
        text-align: center;
        font-size: .54rem;
        background: url("/static/images/home/vip_bg.png") no-repeat center center / 100% 100%;
    }

</style>
