<template>
    <div class="empty_div">
        <div class="item" v-for="(item,index) in list" :class="index%2==1 ? 'right' : 'left'">
            <router-link :to="{path:'/store/commodity_detail',name:'commodity_detail',params:{item,title:item.commodity_name}}">
                <div class="main">
                    <div class="vip"></div>
                    <div class="pic">
                        <img :src="item.commodity_src" alt="">
                    </div>
                    <div class="text">
                        <p class="name">{{item.commodity_name}}</p>
                        <p>
                            <span class="need_point">{{item.commodity_need}}积分</span>
                            <span class="surplus">剩余:{{item.commodity_number}}</span>
                        </p>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        props:['list'],
        data(){
            return{}
        }
    }
</script>
